from django.shortcuts import render

from django.views.generic import TemplateView

class MyTemplate(TemplateView):
    template_name = 'document_object_model/document_object_model.html'