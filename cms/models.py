from django.db import models

# Create your models here.
from django.db import models
from autoslug import AutoSlugField
from common.models import BaseModel

class Project(BaseModel):
    title = models.CharField(max_length=200)
    slug = AutoSlugField(populate_from='title', unique=True)
    description = models.TextField()
    image = models.ImageField(upload_to="projects/")
    tech_stack = models.CharField(max_length=250)
    live_url = models.URLField(blank=True)

    def __str__(self):
        return self.title


class Testimonial(BaseModel):
    name = models.CharField(max_length=120)
    company = models.CharField(max_length=120)
    message = models.TextField()
    rating = models.IntegerField(default=5)
    photo = models.ImageField(upload_to="testimonials/", blank=True)

    def __str__(self):
        return self.name


class Skill(BaseModel):
    name = models.CharField(max_length=100)
    level = models.IntegerField(default=80)   # %
    icon = models.CharField(max_length=100)   # ex: "django", "react"

    def __str__(self):
        return self.name
