# Generated by Django 4.0.4 on 2022-05-08 01:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fitness', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=100)),
                ('duration', models.DurationField()),
            ],
        ),
        migrations.DeleteModel(
            name='Exercise',
        ),
    ]
