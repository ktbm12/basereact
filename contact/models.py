from django.db import models

# Create your models here.
from django.db import models
from common.models import BaseModel

class Message(BaseModel):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()

    def __str__(self):
        return self.email
