from django.db import models
from django.utils import timezone


# Create your models here.

class Users(models.Model):
    name = models.CharField('Name', max_length=50, default='')
    surname = models.CharField('Surname', max_length=50, default='')
    username = models.CharField('Username', max_length=50, default='')
    email = models.CharField('Email', max_length=50, default='')
    password = models.CharField('Password', max_length=16, default='')

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'