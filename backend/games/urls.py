from django.urls import path

from .views import ListGame, DetailGame
from . import views

urlpatterns = [
  path('<int:pk>/', DetailGame.as_view()),
  path('', ListGame.as_view()),
  path('search/<query>', views.search_view),
  path('artwork/<game_id>/<artwork_id>', views.artwork_view),
]