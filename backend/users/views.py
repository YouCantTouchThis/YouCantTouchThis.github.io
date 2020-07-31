from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import (
    UserSerializer,
    ProfileSerializer,
    DrugUsageSerializer,
    UserDrugSerializer,
)
from .models import (
    Profile,
    UserDrug,
    DrugUsage,
)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatoin]

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all().order_by('-rehab_start')
    serializer_class = ProfileSerializer
    premission_classes = [permissions.IsAuthenticated]

class DrugUsageViewset(viewsets.ModelViewSet):
    queryset = DrugUsage.objects.all().order_by('-date_taken')
    serializer_class = DrugUsageSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserDrugViewSet(viewsets.ModelViewSet):
    queryset = UserDrug.objects.all().order_by('-startDate')
    serializer_class = UserDrugSerializer
    permission_classes = [permissions.IsAuthenticated]