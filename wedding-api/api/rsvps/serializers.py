from rest_framework import serializers

from api.rsvps.models import RSVP


class RSVPSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RSVP
        fields = ["id", "url", "name", "attendance", "email", "rehearsal", "song", "guests", "hotel", "shuttle", "shuttleToVenue", "shuttleToHotel", "numberSeats"]
