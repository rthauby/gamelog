# Generated by Django 2.2.3 on 2019-07-17 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0006_game_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='description',
            field=models.TextField(),
        ),
    ]
