from django.db import models


class Users(models.Model):
    name = models.CharField('Name', max_length=50, default='')
    surname = models.CharField('Surname', max_length=50, default='')
    username = models.CharField('Username', max_length=50, default='')
    email = models.CharField('Email', max_length=50, default='')
    password = models.TextField('Password', default='')

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class Friends(models.Model):
    id_from = models.ForeignKey(Users, related_name='friends', on_delete=models.CASCADE)
    id_to = models.IntegerField('Id to')

    def __str__(self):
        return '{} -> {}'.format(Users.objects.get(id=self.id_from).username, Users.objects.get(id=self.id_to).username)

    class Meta:
        verbose_name = 'Friend'
        verbose_name_plural = 'Friends'

class Messages(models.Model):
    id_from = models.ForeignKey(Users, related_name='messages', on_delete=models.CASCADE)
    id_to = models.IntegerField('Id to')
    text = models.TextField('Message')
    time = models.DateTimeField('Time', default=0)

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = 'Message'
        verbose_name_plural = 'Messages'