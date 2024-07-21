# from rest_framework import viewsets
# from .models import Category, Post, Comment
# from .serializers import CategorySerializer, PostSerializer, CommentSerializer

# class GenAIPostViewSet(viewsets.ModelViewSet):
#     queryset = Post.objects.filter(category__name='gen ai')
#     serializer_class = PostSerializer

# class CryptoPostViewSet(viewsets.ModelViewSet):
#     queryset = Post.objects.filter(category__name='crypto')
#     serializer_class = PostSerializer

# class CategoryViewSet(viewsets.ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer

# class CommentViewSet(viewsets.ModelViewSet):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer



from rest_framework import viewsets
from .models import Profile, Category, Post, Comment
from .serializers import ProfileSerializer, CategorySerializer, PostSerializer, CommentSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class GenAIPostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(category__name='gen ai')
    serializer_class = PostSerializer

class CryptoPostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(category__name='crypto')
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
