from django.urls import path
from .views import (
    SubmitBiomarkersView,
    UserAgeHistoryView,
    LatestAgeResultView
)

urlpatterns = [
    path('submit/', SubmitBiomarkersView.as_view()),
    path('history/', UserAgeHistoryView.as_view()),
    path('latest/', LatestAgeResultView.as_view(), name='latest'),
    path('latest-suggestions/', LatestAgeResultView.as_view(), name='latest-suggestions'),
]
