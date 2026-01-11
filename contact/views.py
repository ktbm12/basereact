from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Message
from .serializers import ContactMessageSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = ContactMessageSerializer
