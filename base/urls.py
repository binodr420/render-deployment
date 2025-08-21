from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('experience/', views.experience, name='experience'),
    path('projects/', views.projects, name='projects'),
    path('skills/', views.skills, name='skills'),
    path('contact/', views.contact, name='contact'),
    path('blogs/', views.blogs, name='blogs'),
    path('blogs/post-1/', views.blog_post_1, name='blog_post_1'),
    path('blogs/post-2/', views.blog_post_2, name='blog_post_2'),
]
