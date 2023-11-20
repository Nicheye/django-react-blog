from django.shortcuts import render
from rest_framework.views import APIView
from .models import Article
from .serializers import ArticleSerializer
from rest_framework.response import Response
# Create your views here.
class ArticleApiView(APIView):
	def get(self,request):
		a = Article.objects.order_by("-time_create").all()
		return Response({'articles':ArticleSerializer(a,many=True).data})
	
	def post(self,request):
		serializer = ArticleSerializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return Response({'article':serializer.data})