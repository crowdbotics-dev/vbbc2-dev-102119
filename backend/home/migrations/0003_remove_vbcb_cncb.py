# Generated by Django 2.2.28 on 2023-07-17 11:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_vbcb'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vbcb',
            name='cncb',
        ),
    ]
