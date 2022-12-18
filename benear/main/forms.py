from .models import Users
from django.forms import ModelForm, TextInput, PasswordInput, DateTimeInput


class UsersForm(ModelForm):
    class Meta:
        model = Users
        fields = ['name', 'surname', 'username', 'email', 'password']

        widgets = {
            'name': TextInput(attrs={
                'placeholder': 'Name'
            }),
            'surname': TextInput(attrs={
                'placeholder': 'Surname'
            }),
            'username': TextInput(attrs={
                'placeholder': 'username'
            }),
            'email': TextInput(attrs={
                'placeholder': 'Email'
            }),
            'password': PasswordInput(attrs={
                'placeholder': 'Password'
            })
        }

