import math

def calculate_biological_age(BiomarkerRecord):
    """
    Z-score based Biological Age using 9 biomarkers
    Stable, interpretable, biomarker-sensitive
    """

    # Reference population means & SDs (approx NHANES)
    MEANS = {
        "albumin": 4.1,
        "creatinine": 1.0,
        "glucose": 98,
        "crp": 0.5,
        "lymphocytes": 30,
        "mcv": 90,
        "rdw": 13.5,
        "alp": 85,
        "wbc": 6.5,
    }

    SDS = {
        "albumin": 0.4,
        "creatinine": 0.2,
        "glucose": 16,
        "crp": 0.9,
        "lymphocytes": 6,
        "mcv": 4,
        "rdw": 1.2,
        "alp": 20,
        "wbc": 1.5,
    }

    # Z-scores
    z_albumin = (BiomarkerRecord.albumin - MEANS["albumin"]) / SDS["albumin"]
    z_creatinine = (BiomarkerRecord.creatinine - MEANS["creatinine"]) / SDS["creatinine"]
    z_glucose = (BiomarkerRecord.glucose - MEANS["glucose"]) / SDS["glucose"]
    z_crp = (BiomarkerRecord.crp - MEANS["crp"]) / SDS["crp"]
    z_lymph = (BiomarkerRecord.lymphocytes - MEANS["lymphocytes"]) / SDS["lymphocytes"]
    z_mcv = (BiomarkerRecord.mcv - MEANS["mcv"]) / SDS["mcv"]
    z_rdw = (BiomarkerRecord.rdw - MEANS["rdw"]) / SDS["rdw"]
    z_alp = (BiomarkerRecord.alp - MEANS["alp"]) / SDS["alp"]
    z_wbc = (BiomarkerRecord.wbc - MEANS["wbc"]) / SDS["wbc"]

    # Composite aging score (positive = faster aging)
    bio_score = (
        z_glucose +
        z_crp +
        z_rdw +
        z_creatinine +
        z_mcv +
        z_alp +
        z_wbc
        - z_albumin
        - z_lymph
    )

    # Convert score to biological age
    biological_age = BiomarkerRecord.age + (bio_score * 3.5)

    # Safety bounds (physiologically meaningful)
    min_age = 0.75 * BiomarkerRecord.age
    max_age = 1.30 * BiomarkerRecord.age
    biological_age = min(max(biological_age, min_age), max_age)

    age_difference = biological_age - BiomarkerRecord.age

    return round(biological_age, 2), round(age_difference, 2)




def generate_health_suggestions(BiomarkerRecord):
    suggestions = []

    if BiomarkerRecord.glucose > 100:
        suggestions.append(
            "Reduce refined sugar intake and increase physical activity to improve blood glucose control."
        )

    if BiomarkerRecord.crp > 3:
        suggestions.append(
            "Elevated inflammation detected. Consider anti-inflammatory foods, stress management, and regular exercise."
        )

    if BiomarkerRecord.albumin < 3.5:
        suggestions.append(
            "Low albumin levels suggest poor protein status. Increase intake of high-quality protein."
        )

    if BiomarkerRecord.creatinine > 1.2:
        suggestions.append(
            "High creatinine may indicate kidney stress. Stay hydrated and limit excess protein or salt intake."
        )

    if BiomarkerRecord.lymphocytes < 25:
        suggestions.append(
            "Low lymphocyte count may affect immunity. Adequate sleep and micronutrient-rich foods are recommended."
        )

    if BiomarkerRecord.rdw > 14.5:
        suggestions.append(
            "High RDW may indicate nutritional deficiency. Ensure adequate iron, vitamin B12, and folate intake."
        )

    if BiomarkerRecord.mcv > 100 or BiomarkerRecord.mcv < 80:
        suggestions.append(
            "Abnormal MCV detected. Consider evaluating vitamin B12 and folate levels."
        )

    if BiomarkerRecord.alp > 120:
        suggestions.append(
            "Elevated ALP may relate to liver or bone health. Maintain a balanced diet and limit alcohol intake."
        )

    if BiomarkerRecord.wbc > 11:
        suggestions.append(
            "High WBC count suggests immune stress. Adequate rest and medical follow-up are advised."
        )

    if not suggestions:
        suggestions.append(
            "All biomarkers are within healthy ranges. Maintain a balanced diet, regular exercise, and healthy sleep habits."
        )

    return suggestions


    # MEANS = {
    #     "albumin": 4.1,
    #     "creatinine": 1.0,
    #     "glucose": 98,
    #     "crp": 0.5,
    #     "lymphocytes": 30,
    #     "mcv": 90,
    #     "rdw": 13.5,
    #     "alp": 85,
    #     "wbc": 6.5,
    # }

    # SDS = {
    #     "albumin": 0.4,
    #     "creatinine": 0.2,
    #     "glucose": 16,
    #     "crp": 0.9,
    #     "lymphocytes": 6,
    #     "mcv": 4,
    #     "rdw": 1.2,
    #     "alp": 20,
    #     "wbc": 1.5,
    # }

    # z_albumin = (BiomarkerBiomarkerRecord.albumin - MEANS["albumin"]) / SDS["albumin"]
    # z_creatinine = (BiomarkerBiomarkerRecord.creatinine - MEANS["creatinine"]) / SDS["creatinine"]
    # z_glucose = (BiomarkerBiomarkerRecord.glucose - MEANS["glucose"]) / SDS["glucose"]

    # crp = max(BiomarkerBiomarkerRecord.crp, 0.1)  # prevent log(0)
    # z_crp = (crp - MEANS["crp"]) / SDS["crp"]

    # z_lymph = (BiomarkerBiomarkerRecord.lymphocytes - MEANS["lymphocytes"]) / SDS["lymphocytes"]
    # z_mcv = (BiomarkerBiomarkerRecord.mcv - MEANS["mcv"]) / SDS["mcv"]
    # z_rdw = (BiomarkerBiomarkerRecord.rdw - MEANS["rdw"]) / SDS["rdw"]
    # z_alp = (BiomarkerBiomarkerRecord.alp - MEANS["alp"]) / SDS["alp"]
    # z_wbc = (BiomarkerBiomarkerRecord.wbc - MEANS["wbc"]) / SDS["wbc"]
    # age = BiomarkerBiomarkerRecord.age

    # mortality_score = (
    #     -19.907
    #     + 0.0336 * z_albumin
    #     + 0.0095 * z_creatinine
    #     + 0.1953 * z_glucose
    #     + 0.0954 * math.log(abs(z_crp) + 1)
    #     - 0.0120 * z_lymph
    #     + 0.0268 * z_mcv
    #     + 0.3306 * z_rdw
    #     + 0.00188 * z_alp
    #     + 0.0554 * z_wbc
    #     + 0.0804 * age
    # )

    # mortality_score = min(mortality_score, 10)  # prevent overflow
    # mortality_risk = 1 - math.exp(-1.51714 * math.exp(mortality_score))
    # mortality_risk = min(max(mortality_risk, 1e-6), 0.999999)

    # raw_biological_age = (
    #     141.50
    #     + (math.log(-0.00553 * math.log(1 - mortality_risk)) / 0.09165)
    # )

    # min_age = 0.7 * age
    # max_age = 1.3 * age
    # biological_age = max(min(raw_biological_age, max_age), max_age)

    # age_difference = biological_age - age

    # albumin = BiomarkerBiomarkerRecord.albumin
    # creatinine = BiomarkerBiomarkerRecord.creatinine
    # glucose = BiomarkerBiomarkerRecord.glucose
    # crp = max(BiomarkerBiomarkerRecord.crp, 0.1)  # Avoid log(0)
    # lymphocytes = BiomarkerBiomarkerRecord.lymphocytes
    # mcv = BiomarkerBiomarkerRecord.mcv
    # rdw = BiomarkerBiomarkerRecord.rdw
    # alp = BiomarkerBiomarkerRecord.alp
    # wbc = BiomarkerBiomarkerRecord.wbc
    # age = BiomarkerBiomarkerRecord.age 
    
    # mortality_score = -19.907 + (0.0336 * albumin) + (0.0095 * creatinine) + (0.1953 * glucose) + (0.0954 * math.log(crp)) - (0.0120 * lymphocytes) + (0.0268 * mcv) + (0.3306 * rdw) + (0.00188 * alp) + (0.0554 * wbc) + (0.0804 * age)
    
    # mortality_risk = 1 - math.exp( -1.51714 * math.exp(min(mortality_score, 10) ))

    # mortality_risk = min(max(mortality_risk, 1e-6), 0.999999)

    # biological_age = 141.50 + ( math.log( -0.00553 * math.log(1 - mortality_risk) ) / 0.09165 )

    # age_difference = biological_age - age

    #return round(biological_age, 2), round(age_difference, 2)
