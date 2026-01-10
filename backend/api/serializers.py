from django.contrib.auth.models import User
from rest_framework import serializers 
from .models import BiomarkerRecord, BiologicalAgeResult

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class BiomarkerRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = BiomarkerRecord
        fields = [
            'id', 'user', 'age', 'albumin', 'creatinine', 'glucose', 
            'crp', 'lymphocytes', 'mcv', 'rdw', 'alp', 'wbc', 'created_at'
        ]
        extra_kwargs = {'user': {'read_only': True}, 'created_at': {'read_only': True}} 

class BiologicalAgeResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = BiologicalAgeResult
        fields = [
            'id', 'user', 'biomarker_record', 'biological_age', 
            'age_difference', 'calculated_at'
        ]
        extra_kwargs = {
            'user': {'read_only': True}, 
            'biomarker_record': {'read_only': True}, 
            'biological_age': {'read_only': True}, 
            'age_difference': {'read_only': True},
            'calculated_at': {'read_only': True}
        }
