from django.conf.urls import url, include
from rest_framework import routers

from api.questions.views import QuestionViewSet
from api.rsvps.views import RSVPViewSet

router = routers.DefaultRouter()
router.register(r'questions', QuestionViewSet, 'question')
router.register(r'rsvps', RSVPViewSet, 'rsvp')

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api/api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
