import { useEffect, useState } from "react";
import api from "../api";
import BiomarkerForm from "./BiomarkerForm";
import Result from "./Result";

function Dashboard() {
  const [latest, setLatest] = useState(null);
  const [message, setMessage] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    api.get("api/latest/")
      .then((res) => {
        setLatest(res.data);
        setSuggestions(res.data.suggestions || []);
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          setMessage("No age calculation found");
        } else {
          setMessage("Failed to load dashboard");
        }
      });
  }, []);

  return (
    <div className="container-fluid py-5 bg-light min-vh-100 px-5">
        <div className="row rounded-3 pb-4">
            <div className="col-sm-6 mb-4">
              <h3 className="display-6 py-3 text-center text-primary fw-bold">Latest Result</h3>
              <div className="card bg-primary-subtle mb-3">
                <div className="card-header lead text-center">View your latest biological age and personalized suggestions.</div>
                <div className="card-body">
                {message && <p>{message}</p>}
                {latest && (
                  <>
                    <p><strong>Biological Age:</strong> {latest.biological_age}</p>
                    <p><strong>Age Difference:</strong> {latest.age_difference}</p>
                    <p>
                      <strong>Calculated At:</strong>{" "}
                      {new Date(latest.calculated_at).toLocaleString()}
                    </p>
                    <h3>Health Suggestions</h3>
                    {suggestions.length > 0 ? (
                      <ul>
                        {suggestions.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No suggestions available</p>
                    )}
                  </>
                )}
                </div>
              </div>
              <div className="d-none d-sm-block mt-4">
                <Result result={ result } />
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <BiomarkerForm onResult={ setResult } />
            </div>
            <div className="d-block d-md-none mt-4">
                <Result result={ result } />
              </div>
        </div>
    </div>
  );
}

export default Dashboard;
