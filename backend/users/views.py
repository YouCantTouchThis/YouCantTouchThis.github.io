from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from .serializers import (
    UserSerializer,
    ProfileSerializer,
    DrugUsageSerializer,
    UserDrugSerializer,
    CheckupSerializer,
)
from .models import (
    Profile,
    UserDrug,
    DrugUsage,
    Checkup,
)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all().order_by('-rehab_start')
    serializer_class = ProfileSerializer
    premission_classes = [permissions.IsAuthenticated]

class DrugUsageViewSet(viewsets.ModelViewSet):
    queryset = DrugUsage.objects.all().order_by('-date_taken')
    serializer_class = DrugUsageSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserDrugViewSet(viewsets.ModelViewSet):
    queryset = UserDrug.objects.all().order_by('-startDate')
    serializer_class = UserDrugSerializer
    permission_classes = [permissions.IsAuthenticated]

class HighFromImage(APIView):
    permssion_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        return Response("WIP")

class CheckupViewSet(viewsets.ModelViewSet):
    queryset = Checkup.objects.all().order_by('-date')
    serializer_class = CheckupSerializer
    permission_classes = [permissions.IsAuthenticated]