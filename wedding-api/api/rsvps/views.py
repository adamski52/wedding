from rest_framework import permissions

from api.rsvps.models import RSVP
from api.rsvps.serializers import RSVPSerializer
from api.views import BaseViewSet


class RSVPViewSet(BaseViewSet):
    permission_classes = [
        permissions.AllowAny  #todo: should only be allowed to POST if not auth'd
    ]

    serializers = {
        "default": RSVPSerializer
    }

    def get_queryset(self):
        return RSVP.objects.all()
