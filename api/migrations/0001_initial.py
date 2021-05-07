# Generated by Django 3.2 on 2021-05-07 11:57

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default=api.models.codeGenerator, max_length=6, unique=True)),
                ('text', models.TextField(blank=True, default='')),
            ],
        ),
    ]
