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
        max_length=100
    )

    rehearsal = models.CharField(
        max_length=100,
        null=True
    )

    song = models.CharField(
        max_length=100,
        null=True
    )

    guests = models.CharField(
        max_length=200,
        null=True
    )

    hotel = models.CharField(
        max_length=100,
        null=True
    )

    shuttle = models.CharField(
        max_length=100,
        null=True
    )

    shuttleToVenue = models.CharField(
        max_length=100,
        null=True
    )

    shuttleToHotel = models.CharField(
        max_length=100,
        null=True
    )

    numberSeats = models.CharField(
        max_length=100,
        null=True
    )
