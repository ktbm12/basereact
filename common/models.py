from django.db import models

# Create your models here.
import uuid
from django.db import models
from django_extensions.db.models import TimeStampedModel, ActivatorModel

class BaseModel(TimeStampedModel, ActivatorModel):
    """
    BaseModel for all SaaS models
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        abstract = True
