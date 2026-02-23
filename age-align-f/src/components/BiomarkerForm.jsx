import React, { useState } from "react";
import api from "../api";
import Result from "../components/Result";

const BiomarkerForm = ({onResult}) => {
  const [formData, setFormData] = useState({
    age: "",
    albumin: "",
    creatinine: "",
    glucose: "",
    crp: "",
    lymphocytes: "",
    mcv: "",
    rdw: "",
    alp: "",
    wbc: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    const payload = Object.fromEntries(
        Object.entries(formData).map(([k, v]) => [k, Number(v)])
    );

    try {
        const res = await api.post("/api/submit/", payload);
        setResult(res.data);
        onResult(res.data);
    } catch (error) {
        alert("Error calculating biological age. Please try again.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="card shadow-lg p-4" style={{ maxWidth: "480px", width: "100%" }}>
            <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4 fw-bold text-primary">Biological Age Calculation</h2>
                {Object.keys(formData).map((key) => (
                <div className="mb-3" key={key}>
                    <label className="form-label fw-semibold">{key.toUpperCase()}</label>
                    <input
                        type="number"
                        className="form-control"
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        required
                    />
                </div>
              ))}
              <button className="btn btn-primary w-100 mb-3" type="submit">Calculate</button>
            </form>
        </div>
    </div>
  );
};

export default BiomarkerForm;

