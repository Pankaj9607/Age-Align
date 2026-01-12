import React, { useState } from "react";
import api from "../api";
import "../styles/Calculate.css";
import Result from "../components/Result";

const Calculate = () => {
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
    } catch (error) {
        alert("Error calculating biological age. Please try again.");
    } finally {
        setLoading(false);
    }   
  };

  return (
    <div className="calculate-container">
      <h2>Biological Age Calculation</h2>
      <form className="calculate-form" onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label>{key.toUpperCase()}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button type="submit">Calculate</button>
      </form>


      <Result result= {result}/>
    </div>
  );
};

export default Calculate;
