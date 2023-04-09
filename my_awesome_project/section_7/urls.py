from django.urls import path 
from my_awesome_project.section_7 import views

app_name = 'section_7'
urlpatterns = [
    path('', views.MyTemplate.as_view(), name="DOM")
]
