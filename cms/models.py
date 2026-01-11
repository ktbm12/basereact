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
