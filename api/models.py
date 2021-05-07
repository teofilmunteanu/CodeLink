from django.db import models
import random, string
# Create your models here.

codeLength = 6

def codeGenerator():
    while True:
        code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=codeLength))
        if not Room.objects.filter(code=code).exists():
            break
    return code

class Room(models.Model):
    code = models.CharField(max_length=codeLength, default=codeGenerator, unique=True)
    text = models.TextField(blank=True, default="")