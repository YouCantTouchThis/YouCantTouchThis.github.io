from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
import cv2
import numpy as np
import math
import time
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
    permission_classes = [permissions.AllowAny]

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all().order_by('-rehab_start')
    serializer_class = ProfileSerializer
    premission_classes = [permissions.AllowAny]

class DrugUsageViewSet(viewsets.ModelViewSet):
    queryset = DrugUsage.objects.all().order_by('-date_taken')
    serializer_class = DrugUsageSerializer
    permission_classes = [permissions.AllowAny]

class UserDrugViewSet(viewsets.ModelViewSet):
    queryset = UserDrug.objects.all().order_by('-startDate')
    serializer_class = UserDrugSerializer
    permission_classes = [permissions.AllowAny]


class CheckupViewSet(viewsets.ModelViewSet):
    queryset = Checkup.objects.all().order_by('-date')
    serializer_class = CheckupSerializer
    permission_classes = [permissions.AllowAny]

class HighFromImage(APIView):
    permssion_classes = [permissions.AllowAny]


    def get(self, request, format=None):
        res = False
        img_str = request.query_params['img']
        nparr = np.frombuffer(img_str, np.uint8)

        image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        scale = 1
        i = 0
        area_threshold = 0.01
        croppedPixels = 150
        image = cv2.GaussianBlur(image, (5, 5), 0)
        hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
        mask0 = cv2.inRange(hsv,(0, 10, 10), (25, 255, 255) )
        mask2 = cv2.inRange(hsv,(0, 0, 255), (10, 10, 255) )
        mask = mask0 + mask2 
        ret, thresh = cv2.threshold(mask, 127, 255,0)
        kernel = np.ones((3,3),np.uint8)
        eroded = cv2.erode(thresh, kernel, iterations=0)	
        dilated = cv2.dilate(eroded, kernel, iterations=3) 
        dst = cv2.equalizeHist(dilated)
            
        # cv2.imshow("equilized", dst)

        cnts,hierarchy = cv2.findContours(dilated,cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        cnts = sorted(cnts, key = cv2.contourArea, reverse = True)[:60]

        boundingBoxes = np.empty((0, 4), float)
        if len(cnts) > 0:

            M = cv2.moments(cnts[0])
            for c in cnts:
                rect = cv2.minAreaRect(c)
                box = cv2.boxPoints(rect)
                box = np.int0(box)
                cv2.drawContours(image, [box], 0, (0, 0, 255), 2)
                # cv2.imshow("bounding rectangle",image)

                box0 = (box[0])

                box1 = (box[1])

                box2 = (box[2])

                box3 = (box[3])

                boxSizeThreshold = 3

                if (box1[1]-box0[1])*(box3[0]-box0[0] > boxSizeThreshold ):
                    boxX = ((box1[0]+box2[0])/2)
                    boxY = ((box2[1]+box3[1])/2)
                    res = False
                    # print("not high")
        
                else:
                    boxX = -1
                    boxY = -1
                    res = True
                    # print("high")
            time.sleep(.01)
        return Response(res)
