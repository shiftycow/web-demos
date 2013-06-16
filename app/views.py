# Create your views here.
#System Imports
from django.template import loader
from django.template.context import RequestContext
from django.http import HttpResponse

def home(request):
    t = loader.get_template('appHome.html')

    c = RequestContext(request,{}); 
    return HttpResponse(t.render(c))

