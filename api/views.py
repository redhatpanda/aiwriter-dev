from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import multiprocessing

# Create your views here.

@api_view(['GET'])
def getData(request):
    data=[
        {
            'Name': 'Surya',
            'Age':20
        },
        {
            'Name': 'Ishika',
            'Age':19
        }
    ]
    return Response(data)

@api_view(['POST'])
def postData(request):
    postdata = request.data
    print(postdata)
    return Response(postdata)

@api_view(['POST'])
def handleContactData(request):
    contactData = request.data
    name = contactData.get('name')
    email = contactData.get('email')
    message = contactData.get('message')
    return Response("Contact Data Recieved")

@api_view(['POST'])
def handleAIData(request):
    inputAIData = request.data
    title = inputAIData.get('title')
    subtitle = inputAIData.get('subtitle')
    category = inputAIData.get('category')
    subcategory = inputAIData.get('subcategory')
    keywords = inputAIData.get('keywords')
    abstract = inputAIData.get('abstract')
    email = inputAIData.get('email')

    print(str(title)+" "+str(subtitle)+" "+str(category)+" "+str(subcategory)+" "+str(abstract)+" "+str(keywords)+" "+str(email))

    # process = multiprocessing.Process(target=processes, args=(title, category, subcategory, keywords, abstract, email))
    # process.start()

    return Response("AI Input Recieved")

# def processes(title, category, subcategory, keywords, abstract, email):
#     modelCall.aicall(str(title), str(category), str(subcategory), str(keywords), str(abstract))
#     htmlattachsmtp.sendmail(email)



