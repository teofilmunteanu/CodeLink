from django.shortcuts import render

def index(request):
    return render(request, 'linkapp/index.html')

def room(request, room_name):
    return render(request, 'linkapp/room.html', {
        'room_name': room_name
    })