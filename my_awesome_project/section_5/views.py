from django.shortcuts import render

from django.views.generic import TemplateView


class BasicTemplate(TemplateView):
    template_name= 'logic_control_flow/start.html'
