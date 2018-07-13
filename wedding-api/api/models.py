import uuid
from datetime import datetime
from django.db import models


class ActiveManager(models.Manager):
    def get_queryset(self):
        return super(ActiveManager, self).get_queryset().filter(
            date_deleted=''
        )


class BaseModel(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4
    )

    objects = ActiveManager()

    date_created = models.DateTimeField(
        auto_now_add=True
    )

    date_modified = models.DateTimeField(
        auto_now=True,
        null=True
    )

    # cheating so we can use null checks for a unique key.  wont work with date fields but will with strings
    # since nulls will be blank.
    date_deleted = models.CharField(
        max_length=20,
        null=True,
        default=''
    )

    def delete(self, *args, **kwargs):
        self.date_deleted = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.save()
        return self

    class Meta:
        abstract=True
