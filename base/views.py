from django.shortcuts import render
from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

def home(request): return render(request, 'base/home.html')
def about(request): return render(request, 'base/about.html')
def experience(request): return render(request, 'base/experience.html')
def projects(request): return render(request, 'base/projects.html')
def skills(request): return render(request, 'base/skills.html')


def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # Send email
        send_mail(
            subject=f"New Contact Form Message from {name}",
            message=f"Sender Name: {name}\nSender Email: {email}\n\nMessage:\n{message}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=['jbinod032@gmail.com'],
            fail_silently=False,
        )

        return render(request, 'base/contact.html', {'success': True})

    return render(request, 'base/contact.html')

def blogs(request): return render(request, 'base/blogs.html')
def blog_post_1(request): return render(request, 'base/blog_post_1.html')
def blog_post_2(request): return render(request, 'base/blog_post_2.html')
