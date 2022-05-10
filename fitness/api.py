from .models import Plan, Exercise, Tracking
from rest_framework import viewsets, permissions
from .serializers import PlanSerializer, ExerciseSerializer, TrackingSerializer

class PlanViewSet(viewsets.ModelViewSet):
    queryset = Plan.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PlanSerializer
class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExerciseSerializer
class TrackingViewSet(viewsets.ModelViewSet):
    queryset = Tracking.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackingSerializer
