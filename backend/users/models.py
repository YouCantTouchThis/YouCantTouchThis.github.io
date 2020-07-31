from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User


class Profile(models.Model):
    # age, weight...
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField(validators=[MaxValueValidator(100), MinValueValidator(12)])
    weight = models.IntegerField(validators=[MaxValueValidator(500), MinValueValidator(70)])
    address = models.CharField(max_length=100)
    rehab_start = models.DateTimeField(auto_now=True)
    finished = models.DateTimeField(blank=True, default='')
    

class UserDrug(models.Model):
    # Weed, Cocaine, heroin, fentanyl, ecstacy(mdma), lsd(acid), alcohol
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    drug = models.CharField(max_length=3, choices=[
        ('MJ', 'Marijuana'),
        ('CO', 'Cocaine'),
        ('HE', 'Heroin'),
        ('FE', 'Fentanyl'),
        ('EC', 'Ecstacy'),
        ('LS', 'LSD'),
        ('AL', 'Alcohol'),
    ])
    startDate = models.DateField(auto_now = True)
        

class DrugUsage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    drug = models.ForeignKey(UserDrug, on_delete=models.CASCADE)
    amount = models.FloatField(validators=[
        MaxValueValidator(100), MinValueValidator(0)
    ])
    date_taken = models.DateTimeField(auto_now=True)
    advised = models.BooleanField()
    
    












