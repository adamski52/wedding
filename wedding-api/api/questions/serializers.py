from rest_framework import serializers

from api.questions.models import Question


class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ["id", "url", "name", "email", "message"]
