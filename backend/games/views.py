from rest_framework import generics
from django.http import HttpResponse
import requests

from .models import Game
from .serializers import GameSerializer

class ListGame(generics.ListAPIView):
  queryset = Game.objects.all()
  serializer_class = GameSerializer

class DetailGame(generics.RetrieveAPIView):
  queryset = Game.objects.all()
  serializer_class = GameSerializer

def search_view(request, query):
  url = 'https://api-v3.igdb.com/games/'
  headers = {'user-key': '42d55ddbe4c90877ad7f4e41a13daf30'}
  data = 'fields *; search "{}"; limit 50;'.format(query)
  response = requests.get(url, headers=headers, data=data)
  return HttpResponse(response)