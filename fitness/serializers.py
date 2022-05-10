from rest_framework import serializers
from .models import Plan, Exercise, Tracking


class PlanSerializer(serializers.ModelSerializer):
    # plans = serializers.HyperlinkedRelatedField(

    # )
    class Meta:
        model = Plan
        fields = '__all__'
class ExerciseSerializer(serializers.ModelSerializer):
    # exercise = serializers.HyperlinkedRelatedField(

    # )
    class Meta:
        model = Exercise
        fields = '__all__'
class TrackingSerializer(serializers.ModelSerializer):
    # tracking = serializers.HyperlinkedRelatedField(

    # )
    class Meta:
        model = Tracking
        fields = '__all__'
