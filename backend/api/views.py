from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, BiomarkerRecordSerializer, BiologicalAgeResultSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import BiomarkerRecord, BiologicalAgeResult
from .services import calculate_biological_age
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    
class SubmitBiomarkersView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = BiomarkerRecordSerializer(data=request.data)

        if serializer.is_valid():
            # Save biomarker record for logged-in user
            biomarker_record = serializer.save(user=request.user)

            # Calculate biological age
            biological_age, age_difference = calculate_biological_age(biomarker_record)

            # Store result
            result = BiologicalAgeResult.objects.create(
                user=request.user,
                biomarker_record=biomarker_record,
                biological_age=biological_age,
                age_difference=age_difference
            )

            result_serializer = BiologicalAgeResultSerializer(result)

            return Response(
                result_serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class UserAgeHistoryView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        results = BiologicalAgeResult.objects.filter(user=request.user).order_by('-calculated_at')
        serializer = BiologicalAgeResultSerializer(results, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

class LatestAgeResultView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        result = BiologicalAgeResult.objects.filter(user=request.user).order_by('-calculated_at').first()

        if not result:
            return Response(
                {"message": "No age calculation found"},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = BiologicalAgeResultSerializer(result)
        return Response(serializer.data, status=status.HTTP_200_OK)

