from django.db import models

# Create your models here.
class UserData(models.Model):
	user_id = models.CharField(max_length=200)
	first_name = models.CharField(max_length=200)
	last_name = models.CharField(max_length=200)
	email = models.EmailField()
	password = models.CharField(max_length=50)
	photo_URL = models.ImageField()
	creation_date = models.DateField()