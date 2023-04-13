from django.urls import path, include
from my_awesome_project.section_8 import views
app_name = 'section_8'
urlpatterns = [
    path("", views.MyTemplate.as_view(), name="event"),
]
