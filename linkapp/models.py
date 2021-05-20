from django.db import models
import random
import string

# Create your models here.
def generateCode():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if not Room.objects.filter(code=code).exists():
            break

    return code

# Create your models here.
class Room(models.Model):
    code = models.CharField(primary_key = True, max_length=6, default=generateCode, unique=True)
    work_field = models.TextField(blank = True, default="")
    user_count = models.IntegerField(default="0")