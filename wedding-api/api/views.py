from rest_framework import viewsets


class BaseViewSet(viewsets.ModelViewSet):
    serializers = {
        "default": None
    }

    def get_serializer_class(self):
        return self.serializers.get(
            self.request.method,
            self.serializers["default"])
