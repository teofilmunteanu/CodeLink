from .models import Room
from .serializers import RoomSerializer
from rest_framework import generics, views

# Create your views here.

class RoomView(generics.ListAPIView):
    serializer_class = RoomSerializer

    def get_queryset(self):
        return Room.objects.all()