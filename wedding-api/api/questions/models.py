from django.db import models
from ..models import BaseModel


class Question(BaseModel):
    name = models.CharField(
        max_length=100
    )

    email = models.CharField(
        max_length=100
    )

    message = models.CharField(
        max_length=8000
    )
