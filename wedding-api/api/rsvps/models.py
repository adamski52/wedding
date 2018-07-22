from django.db import models
from ..models import BaseModel

class RSVP(BaseModel):
    name = models.CharField(
        max_length=100
    )

    attendance = models.CharField(
        max_length=100
    )

    email = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        default=""
    )

    rehearsal = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        default=""
    )

    song = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        default=""
    )

    guests = models.CharField(
        max_length=200,
        null=True,
        blank=True,
        default=""
    )

    hotel = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        default=""
    )

    shuttle = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        default=""
    )

    shuttleToVenue = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        default=""
    )

    shuttleToHotel = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        default=""
    )

    numberSeats = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        default=""
    )
