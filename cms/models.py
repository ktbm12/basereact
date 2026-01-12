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


class Service(BaseModel):
    title = models.CharField(max_length=150)
    description = models.TextField()
    icon = models.CharField(max_length=100)
    price = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.title


class BlogPost(BaseModel):
    title = models.CharField(max_length=200)
    slug = AutoSlugField(populate_from="title", unique=True)
    excerpt = models.TextField()
    content = models.TextField()
    cover = models.ImageField(upload_to="blog/")
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class SiteConfiguration(BaseModel):
    site_name = models.CharField(max_length=120)
    slogan = models.CharField(max_length=200, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    address = models.CharField(max_length=255, blank=True)

    # Social networks
    facebook = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    whatsapp = models.CharField(max_length=50, blank=True)
    twitter = models.URLField(blank=True)

    # SEO
    meta_title = models.CharField(max_length=200)
    meta_description = models.TextField()

    def __str__(self):
        return "Site Global Settings"
