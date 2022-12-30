from django.urls import path, include
from . import views
from .views import *

urlpatterns = [
    path('users', UsersList.as_view()),
    path('users&friends', UsersFriendsList.as_view()),
    path('users&messages', UsersMessagesList.as_view()),
    path('friends', FriendsList.as_view()),
    path('messages', MeesagesList.as_view()),
    path('get&user&by&id=<int>id', GetUserById.as_view()),
    path('get&user&by&id=<int>username', GetUserByUsername.as_view()),
    path('get&user&by&id=<int>email', GetUserByEmail.as_view()),
    path('send&register&data', SendRegisterData.as_view()),
    path('send&authorize&data', SendAuthorizeData.as_view()),
]