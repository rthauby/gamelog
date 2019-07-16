from django.db import models

class Game(models.Model):
  title = models.CharField(max_length=255)
  url = models.CharField(max_length=255)
  external_id = models.IntegerField()
  image_url = models.CharField(max_length=255)
  first_release_date = models.DateTimeField()
  description = models.CharField(max_length=255)

  def __str__(self):
    return self.title