from django.urls import path

from my_awesome_project.section_5 import views

app_name = "section_5"
urlpatterns = [
     path("", views.BasicTemplate.as_view() , name="section5"),
]
