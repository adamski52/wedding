from rest_framework import permissions

from api.questions.models import Question
from api.questions.serializers import QuestionSerializer
from api.views import BaseViewSet


class QuestionViewSet(BaseViewSet):
    permission_classes = [
        permissions.AllowAny #todo: should only be allowed to POST if not auth'd
    ]

    serializers = {
        "default": QuestionSerializer
    }

    def get_queryset(self):
        return Question.objects.all()
