from rest_framework import serializers
from .models import *


class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends
        fields = '__all__'


class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

    
class UsersFriendsSerializer(serializers.ModelSerializer):
    friends = FriendsSerializer(many=True, read_only=True)
    class Meta:
        model = Users
        fields = ['id', 'username', 'friends']


class UsersMessagesSerializer(serializers.ModelSerializer):
    messages = MessagesSerializer(many=True, read_only=True)
    class Meta:
        model = Users
        fields = ['id', 'username', 'messages']
