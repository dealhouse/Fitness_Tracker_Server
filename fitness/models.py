from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Plan(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    duration = models.DurationField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='plans', null=True)
    
    def __str__(self):
        return self.name

class Exercise(models.Model): 
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE, related_name='exercises')
    description = models.TextField()
    repetitions = models.IntegerField()
    sets = models.IntegerField()
    weight = models.IntegerField()

    def __str__(self):
        return self.name

class Tracking(models.Model):
    date = models.DateField(auto_now_add=True)
    weight = models.FloatField()
    arms = models.FloatField()
    waist = models.FloatField()
    hips = models.FloatField()
    thighs = models.FloatField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tracking', null=True)

