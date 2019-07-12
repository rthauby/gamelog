from rest_framework import generics

from .models import Game
from .serializers import GameSerializer

class ListGame(generics.ListAPIView):
  queryset = Game.objects.all()
  serializer_class = GameSerializer

class DetailGame(generics.RetrieveAPIView):
  queryset = Game.objects.all()
  serializer_class = GameSerializer