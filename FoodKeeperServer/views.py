from django.shortcuts import render
from FoodKeeperServer.models import UserData
from django.http import HttpResponse, JsonResponse

# Create your views here.
def users(request):

	# Checking ewquest type to navigate to the correct function
	if (request.method == 'GET'):
		c = 0
		# response  = UserData.objects.all()
		# return JsonResponse(response)
	if (request.method == 'POST'):
		user = request.POST.get("user")
		
		return JsonResponse("")
