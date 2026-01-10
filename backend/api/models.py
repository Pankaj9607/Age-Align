from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class BiomarkerRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    age = models.PositiveIntegerField(help_text="Age in years")
    
    albumin = models.FloatField(help_text="Albumin level in g/dL")
    creatinine = models.FloatField(help_text="Creatinine level in mg/dL")
    glucose = models.FloatField(help_text="Glucose level in mg/dL")
    crp = models.FloatField(help_text="C-reactive protein level in mg/L")
    lymphocytes = models.FloatField(help_text="Lymphocytes percentage")
    mcv = models.FloatField(help_text="Mean corpuscular volume in fL")
    rdw = models.FloatField(help_text="Red cell distribution width percentage")
    alp = models.FloatField(help_text="Alkaline phosphatase level in U/L")
    wbc = models.FloatField(help_text="White blood cell count in 10^9/L")

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} - Biomarker Record at {self.created_at}"
    

class BiologicalAgeResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    biomarker_record = models.OneToOneField(BiomarkerRecord, on_delete=models.CASCADE)
    biological_age = models.FloatField(help_text="Calculated biological age in years")
    age_difference = models.FloatField(help_text="Difference between biological age and chronological age")
    calculated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} - Biological Age: {self.biological_age} at {self.calculated_at}"