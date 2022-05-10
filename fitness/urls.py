from django.urls import path
from . import views
from rest_framework import routers
from .api import PlanViewSet, ExerciseViewSet, TrackingViewSet

router = routers.DefaultRouter()
router.register('api/plan', PlanViewSet, 'plans')
router.register('api/exercise', ExerciseViewSet, 'exercise')
router.register('api/tracking', TrackingViewSet, 'tracking')

urlpatterns = router.urls