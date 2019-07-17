from django.urls import include, path
from rest_framework.routers import SimpleRouter

from .views import GameViewSet
from . import views

router = SimpleRouter()
router.register('games', GameViewSet, base_name='games')

urlpatterns = [
  # path('<int:pk>/', DetailGame.as_view()),
  # path('', ListGame.as_view()),
  path('', include(router.urls)),
  path('games/search/<query>', views.search_view),
  path('games/artwork/<game_id>', views.artwork_view),
]