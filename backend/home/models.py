from django.conf import settings
from django.db import models
class Vbcb(models.Model):
    'Generated Model'
    cncb = models.BigIntegerField()
    shdhd = models.BigIntegerField()
    def cncb(self):
        import requests
        response = requests.get("https://hello.com")
        data = response.json()
        print(data)
        return data
