from django.contrib import admin

# Register your models here.
from .models import Project, Testimonial

admin.site.register(Project)
admin.site.register(Testimonial)


from .models import Skill, Service, BlogPost

admin.site.register(Skill)
admin.site.register(Service)
admin.site.register(BlogPost)
