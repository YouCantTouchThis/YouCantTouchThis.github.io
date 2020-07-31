from django.contrib import admin
from .models import Profile, UserDrug, DrugUsage

admin.site.register(Profile)
admin.site.register(UserDrug)
admin.site.register(DrugUsage)