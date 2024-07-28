from django.contrib import admin
from .models import Profile, Category, Post, Comment
from django.contrib import admin
from django.utils.html import format_html
from .models import Post

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'bio', 'profile_picture']
    list_filter = ['user']

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']

from django.contrib import admin
from .models import Post

from django.contrib import admin
from django.utils.html import format_html
from .models import Post
from html import unescape
import re

def strip_html_tags(text):
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['plain_title', 'author', 'category', 'created_at', 'updated_at']

    def plain_title(self, obj):
        # Strip HTML tags and unescape any HTML entities
        plain_text = strip_html_tags(obj.title)
        return format_html('<strong>{}</strong>', unescape(plain_text))
    
    plain_title.short_description = 'Title'


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['post', 'user', 'content', 'created_at']
    list_filter = ['post', 'user']


