# from django.urls import path, include
# from .views import GenAIPostViewSet, CryptoPostViewSet, CategoryViewSet, CommentViewSet

# urlpatterns = [
#     path('api/categories/', CategoryViewSet.as_view({'get': 'list', 'post': 'create'}), name='category-list'),
#     path('api/categories/<int:pk>/', CategoryViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='category-detail'),

#     path('api/genai/', GenAIPostViewSet.as_view({'get': 'list', 'post': 'create'}), name='genai-post-list'),
#     path('api/genai/<int:pk>/', GenAIPostViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='genai-post-detail'),

#     path('api/crypto/', CryptoPostViewSet.as_view({'get': 'list', 'post': 'create'}), name='crypto-post-list'),
#     path('api/crypto/<int:pk>/', CryptoPostViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='crypto-post-detail'),

#     path('api/comments/', CommentViewSet.as_view({'get': 'list', 'post': 'create'}), name='comment-list'),
#     path('api/comments/<int:pk>/', CommentViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='comment-detail'),
# ]





from django.urls import path
from .views import (
    ProfileViewSet,
    CategoryViewSet,
    GenAIPostViewSet,
    CryptoPostViewSet,
    CommentViewSet
)

urlpatterns = [
    # API endpoints for profiles, categories, posts, comments
    path('api/profiles/', ProfileViewSet.as_view({'get': 'list', 'post': 'create'}), name='profile-list'),
    path('api/profiles/<int:pk>/', ProfileViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='profile-detail'),

    path('api/categories/', CategoryViewSet.as_view({'get': 'list', 'post': 'create'}), name='category-list'),
    path('api/categories/<int:pk>/', CategoryViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='category-detail'),

    path('api/genai/', GenAIPostViewSet.as_view({'get': 'list', 'post': 'create'}), name='genai-post-list'),
    path('api/genai/<int:pk>/', GenAIPostViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='genai-post-detail'),

    path('api/crypto/', CryptoPostViewSet.as_view({'get': 'list', 'post': 'create'}), name='crypto-post-list'),
    path('api/crypto/<int:pk>/', CryptoPostViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='crypto-post-detail'),

    path('api/comments/', CommentViewSet.as_view({'get': 'list', 'post': 'create'}), name='comment-list'),
    path('api/comments/<int:pk>/', CommentViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='comment-detail'),
]
