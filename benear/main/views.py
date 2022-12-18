from django.shortcuts import redirect, render
from .forms import UsersForm
from .models import Users

from django.utils import timezone


# Create your views here.

def index(request):
    return render(request, 'main/index.html')


def profile(request, username):
    return render(request, 'main/profile.html', {'username': username})


def register(request):
    error = ''
    if request.method == 'POST':

        form = UsersForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(profile, request.POST['username'])
        else:
            print(form.fields)
            error = 'Все сломалось'

    return render(request, 'main/register.html', {'form': UsersForm(), 'error': error})


def authorize(request):
    error = ''
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = Users.objects.get(username=username, password=password)
        print(user, '/', username, '/', password)
        if user is None:
            error = 'Wrong data'
        else:
            return redirect(profile, username)

    return render(request, 'main/authorization.html', {'form': UsersForm(), 'error': error})
