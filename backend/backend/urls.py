from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from users import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profile', views.ProfileViewSet)
router.register(r'userdrug', views.UserDrugViewSet)
router.register(r'drugusage', views.DrugUsageViewSet)

urlpatterns = [
    path('', include(router.url)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

