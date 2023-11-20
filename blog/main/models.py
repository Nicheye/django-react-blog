from django.db import models

# Create your models here.
class Article(models.Model):
	title =models.CharField(max_length=255)
	content = models.CharField(max_length=10000,blank=True)
	time_create = models.DateTimeField(auto_now_add=True)

	author = models.CharField(max_length=50)
	cat = models.ForeignKey('Category',on_delete=models.PROTECT,null=True)

class Category(models.Model):
	name = models.CharField(max_length=100,db_index=True)
