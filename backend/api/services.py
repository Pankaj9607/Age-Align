import math

def calculate_biological_age(BiomarkerRecord):

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

    z_albumin = (BiomarkerRecord.albumin - MEANS["albumin"]) / SDS["albumin"]
    z_creatinine = (BiomarkerRecord.creatinine - MEANS["creatinine"]) / SDS["creatinine"]
    z_glucose = (BiomarkerRecord.glucose - MEANS["glucose"]) / SDS["glucose"]

    crp = max(BiomarkerRecord.crp, 0.1)  # prevent log(0)
    z_crp = (crp - MEANS["crp"]) / SDS["crp"]

    z_lymph = (BiomarkerRecord.lymphocytes - MEANS["lymphocytes"]) / SDS["lymphocytes"]
    z_mcv = (BiomarkerRecord.mcv - MEANS["mcv"]) / SDS["mcv"]
    z_rdw = (BiomarkerRecord.rdw - MEANS["rdw"]) / SDS["rdw"]
    z_alp = (BiomarkerRecord.alp - MEANS["alp"]) / SDS["alp"]
    z_wbc = (BiomarkerRecord.wbc - MEANS["wbc"]) / SDS["wbc"]
    age = BiomarkerRecord.age

    mortality_score = (
        -19.907
        + 0.0336 * z_albumin
        + 0.0095 * z_creatinine
        + 0.1953 * z_glucose
        + 0.0954 * math.log(abs(z_crp) + 1)
        - 0.0120 * z_lymph
        + 0.0268 * z_mcv
        + 0.3306 * z_rdw
        + 0.00188 * z_alp
        + 0.0554 * z_wbc
        + 0.0804 * age
    )

    mortality_score = min(mortality_score, 10)  # prevent overflow
    mortality_risk = 1 - math.exp(-1.51714 * math.exp(mortality_score))
    mortality_risk = min(max(mortality_risk, 1e-6), 0.999999)

    raw_biological_age = (
        141.50
        + (math.log(-0.00553 * math.log(1 - mortality_risk)) / 0.09165)
    )

    min_age = 0.7 * age
    max_age = 1.3 * age
    biological_age = max(min(raw_biological_age, max_age), max_age)

    age_difference = biological_age - age

    albumin = BiomarkerRecord.albumin
    creatinine = BiomarkerRecord.creatinine
    glucose = BiomarkerRecord.glucose
    crp = max(BiomarkerRecord.crp, 0.1)  # Avoid log(0)
    lymphocytes = BiomarkerRecord.lymphocytes
    mcv = BiomarkerRecord.mcv
    rdw = BiomarkerRecord.rdw
    alp = BiomarkerRecord.alp
    wbc = BiomarkerRecord.wbc
    age = BiomarkerRecord.age 
    
    # mortality_score = -19.907 + (0.0336 * albumin) + (0.0095 * creatinine) + (0.1953 * glucose) + (0.0954 * math.log(crp)) - (0.0120 * lymphocytes) + (0.0268 * mcv) + (0.3306 * rdw) + (0.00188 * alp) + (0.0554 * wbc) + (0.0804 * age)
    
    # mortality_risk = 1 - math.exp( -1.51714 * math.exp(min(mortality_score, 10) ))

    # mortality_risk = min(max(mortality_risk, 1e-6), 0.999999)

    # biological_age = 141.50 + ( math.log( -0.00553 * math.log(1 - mortality_risk) ) / 0.09165 )

    # age_difference = biological_age - age

    return round(biological_age, 2), round(age_difference, 2)
