import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from asgiref.sync import sync_to_async
from .models import Room

class LinkConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'room_%s' % self.room_name
        
        await self.channel_layer.group_add (
            self.room_group_name,
            self.channel_name
        )
        
        await self.accept()
        
        source_code = await self.update_room()
        
        await self.send(text_data=json.dumps({
            'source_code': source_code
        }))
        
        
    async def disconnect(self, close_code):
        await self.channel_layer.group_discard (
            self.room_group_name,
            self.channel_name
        )
        
        await self.leave_room()


    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        source_code = text_data_json['source_code']

        await self.save_code(source_code)
        
        await self.channel_layer.group_send(
            self.room_group_name,{
                'type': 'send_code',
                'source_code': source_code
            }
        )
        
        
    async def send_code(self, event):
        source_code = event['source_code']

        await self.send(text_data=json.dumps({
            'source_code': source_code
        }))
           
                         
    @database_sync_to_async
    def update_room(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        roomquery = Room.objects.filter(code = self.room_name)
        
        print('update_room')
        
        if not roomquery.exists():
            room = Room(code = self.room_name)
            room.user_count = 1
            room.save()
        else:
            room = roomquery[0]
            room.user_count = room.user_count + 1
            room.save(update_fields=['user_count'])
        
        return room.work_field
      
    @database_sync_to_async            
    def save_code(self, source_code):
        
        print('save_code')
        
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        roomquery = Room.objects.filter(code = self.room_name)
        room = roomquery[0]
        room.work_field = source_code
        room.save(update_fields=['work_field'])
     
    
    @database_sync_to_async      
    def leave_room(self):
        
        print('leave')
        
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        roomquery = Room.objects.filter(code = self.room_name)
        room = roomquery[0]
        room.user_count = room.user_count - 1 
        room.save(update_fields=['user_count'])
        
        if room.user_count == 0:
            room.delete()
            
        