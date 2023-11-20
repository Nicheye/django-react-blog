from rest_framework import serializers
from .models import Article
class ArticleSerializer(serializers.Serializer):
	title = serializers.CharField(max_length=255)
	
	content = serializers.CharField()
	time_create = serializers.DateTimeField(read_only=True)

	author = serializers.CharField(max_length=50)
	cat_id = serializers.IntegerField()
	def create(self,validated_data):
		return Article.objects.create(**validated_data)