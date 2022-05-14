from django.contrib import admin
from .models import Plan, Exercise, Tracking
# Register your models here.
admin.site.register(Plan)
admin.site.register(Exercise)
admin.site.register(Tracking)