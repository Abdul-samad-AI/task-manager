from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Backend working successfully"})

def root(request):
    return JsonResponse({"status": "Django backend is running"})
