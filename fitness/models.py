from django.db import models

# Create your models here.
class Exercise(models.Model): 
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    description = models.TextField()
    repetitions = models.IntegerField()
    sets = models.IntegerField()
    weight = models.IntegerField()

    def __str__(self):
        return self.name