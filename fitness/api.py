from .models import Plan, Exercise, Tracking
from rest_framework import viewsets, permissions
from .serializers import PlanSerializer, ExerciseSerializer, TrackingSerializer

class PlanViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PlanSerializer

    def get_queryset(self):
        return self.request.user.plans.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExerciseSerializer

class TrackingViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = TrackingSerializer

    def get_queryset(self):
        return self.request.user.tracking.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

