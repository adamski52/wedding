from rest_framework import permissions

from api.questions.models import Question
from api.questions.serializers import QuestionSerializer
from api.views import BaseViewSet


class QuestionViewSet(BaseViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializers = {
        "default": QuestionSerializer
    }

    def get_queryset(self):
        return Question.objects.all()
