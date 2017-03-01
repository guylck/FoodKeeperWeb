from django.shortcuts import render
from FoodKeeperServer.models import UserData
from django.http import HttpResponse, JsonResponse
import json
from datetime import datetime

# Create your views here.
def users(request):

	reqBody = json.loads(request.body.decode('utf-8'))

	# Checking ewquest type to navigate to the correct function
	if (request.method == 'GET'):
		c = 0
		response = UserData.objects.all()
		return JsonResponse(response)
	if (request.method == 'POST'):

		user = reqBody["user"]
		
		# Inserting new users
		userData = UserData(user_id=user["id"],
							first_name=user["firstName"],
							last_name=user["lastName"],
							email=user["email"],
							photo_URL=user["photoURL"] if "photoURL" in user else "",
							provider_id=user["providerId"],
							creation_date=datetime.now())

		userData.save();

		# Returning created status
		return HttpResponse(status=201)
