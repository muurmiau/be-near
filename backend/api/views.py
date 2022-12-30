from django.shortcuts import redirect, render
from .models import *
from django.views import View
from .additional_functions import hash
from django.core.exceptions import ObjectDoesNotExist
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response

from django.utils import timezone



class UsersList(APIView):
    def get(self, request):
        users = Users.objects.all()
        serializer = UsersSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class UsersFriendsList(APIView):
    def get(self, request):
        users = Users.objects.all()
        serializer = UsersFriendsSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsersFriendsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class UsersMessagesList(APIView):
    def get(self, request):
        users = Users.objects.all()
        serializer = UsersMessagesSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsersMessagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class FriendsList(APIView):
    def get(self, request):
        users = Friends.objects.all()
        serializer = FriendsSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FriendsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class MeesagesList(APIView):
    def get(self, request):
        users = Messages.objects.all()
        serializer = MessagesSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MessagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class GetUserById(APIView):
    def get(self, request, id):
        try:
            users = Users.objects.get(id=id)
        except ObjectDoesNotExist:
            users = None
        serializer = UsersSerializer(users, many=True)
        return Response(serializer.data)


class GetUserByUsername(APIView):
    def get(self, request, username):
        try:
            users = Users.objects.get(username=username)
        except ObjectDoesNotExist:
            users = None
        serializer = MessagesSerializer(users, many=True)
        return Response(serializer.data)


class GetUserByEmail(APIView):
    def get(self, request, email):
        try:
            users = Users.objects.get(email=email)
        except ObjectDoesNotExist:
            users = None
        serializer = MessagesSerializer(users, many=True)
        return Response(serializer.data)



class SendRegisterData(APIView):
    def post(self, request):
        params = request.data
        hashed_password = hash(params['password'])
        params['password'] = hashed_password


        serializer = UsersSerializer(data=params)

        for key in params:
            if params[key] is None or params[key] == '':
                error = 'Incorrect input!'
                return Response({'error': error})

        try:
            if Users.objects.get(email=params['email']):
                error = 'Current email already exists!'
                return Response({'error': error})
        except ObjectDoesNotExist:
            pass
            
        try:
            if Users.objects.get(username=params['username']):
                error = 'Current username already exists!'
                return Response({'error': error})
        except ObjectDoesNotExist:
            pass
        
        if serializer.is_valid():
            serializer.save()
            return Response(request.data)
    
        return Response(serializer.errors)

        

class SendAuthorizeData(APIView):
    def post(self, request):
        params = request.data

        print(params)
        
        hashed_password = hash(params['password'])
        params['password'] = hashed_password


        for key in params:
            if params[key] is None or params[key] == '':
                error = 'Incorrect input!'
                return Response({'error': error})
            
        try:
            user = Users.objects.get(username=params['username'])
        except ObjectDoesNotExist:
            error = 'Incorrect data!'
            return Response({'error': error})
        
        if not hashed_password == user.password:
            error = 'Incorrect data!'
            return Response({'error': error})

        return Response(request.data)

























class Index(View):
    def get(self, request):
        return render(request, 'main/index.html')


class Profile(View):
    def get(self, request, username):
        return render(request, 'main/profile.html', {'username': username})


class Register(View):

    def get(self, request):
        serializer = {
            'name': '',
            'surname': '',
            'username': '',
            'email': '',
            'password': ''
        }
        error = ''

        return render(request, 'main/register.html', context={'post': serializer, 'error': error})
    
    def post(self, request):

        serializer = {
            'name': request.POST.get('name'),
            'surname': request.POST.get('surname'),
            'username': request.POST.get('username'),
            'email': request.POST.get('email'),
            'password': request.POST.get('password')
        }

        for key in serializer:
            if serializer[key] is None or serializer[key] == '':
                error = 'Incorrect input!'
                return render(request, 'main/register.html', context={'post': serializer, 'error': error})

        try:
            if Users.objects.get(email=serializer['email']):
                error = 'Current email already exists!'
            return render(request, 'main/register.html', context={'post': serializer, 'error': error})
        except ObjectDoesNotExist:
            pass
            
            
        try:
            hashed_password = hash(serializer['password'])
            if Users.objects.get(password=hashed_password):
                error = 'Password is used!'
                return render(request, 'main/register.html', context={'post': serializer, 'error': error})
        except ObjectDoesNotExist:  
            pass

        user = Users(name=serializer['name'],
                    surname=serializer['surname'],
                    username=serializer['username'],
                    email=serializer['email'],
                    password=hashed_password)
        user.save()

        return redirect('/' + serializer['username'])



class Authorize(View):
    
    def get(self, request):
        serializer = {
            'username': '',
            'password': ''
        }
        error = ''
        return render(request, 'main/authorize.html', context={'post': serializer, 'error': error})
        


    def post(self, request):
        serializer = {
            'username': request.POST.get('username'),
            'password': request.POST.get('password')
        }

        for key in serializer:
            if serializer[key] is None or serializer[key] == '':
                error = 'Incorrect input!'
                return render(request, 'main/authorize.html', context={'post': serializer, 'error': error})
        
        
        try:
            hashed_password = hash(serializer['password'])
            Users.objects.get(username=serializer['username'], password=hashed_password)
        except ObjectDoesNotExist:
            error = 'User does no exist!'
            return render(request, 'main/authorize.html', context={'post': serializer, 'error': error})

        return redirect('/' + serializer['username'])

