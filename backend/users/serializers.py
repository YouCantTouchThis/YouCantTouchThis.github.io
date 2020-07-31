from django.contrib.auth.models import User
from .models import Profile, UserDrug, DrugUsage
from rest_framework import serializers

# Commented code, this must be impossible????
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        fields = ['user', 'age', 'weight', 'address', 'rehab_start', 'finished'] 

class DrugUsageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DrugUsage
        model = ['user', 'drug', 'amount', 'date_take', 'advised']

class UserDrugSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        model = ['user', 'drug', 'startDate']
        













