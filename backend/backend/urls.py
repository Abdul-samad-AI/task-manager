from django.contrib import admin
from django.urls import path, include
from core.views import root

urlpatterns = [
    path('', root),
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
]
