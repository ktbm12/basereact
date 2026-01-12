from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, SkillViewSet, ServiceViewSet, BlogViewSet, TestimonialViewSet, SiteSettingsViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'sitesettings', SiteSettingsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
