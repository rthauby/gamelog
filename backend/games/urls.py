from django.urls import path

from .views import ListGame, DetailGame

urlpatterns = [
  path('<int:pk>/', DetailGame.as_view()),
  path('', ListGame.as_view())
]