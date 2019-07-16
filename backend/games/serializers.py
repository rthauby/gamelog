from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
  class Meta:
    model = Game
    fields = ('id', 'title', 'url', 'external_id', 'image_url', 'first_release_date')
