from rest_framework import serializers
from .models import Message

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
