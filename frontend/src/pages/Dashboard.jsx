import { useEffect, useState } from "react";
import api from "../api";

function Dashboard() {
  const [latest, setLatest] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("api/latest/")
      .then((res) => {
        setLatest(res.data);
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
    <div className="dashboard">
      <h2>Dashboard</h2>

      {message && <p>{message}</p>}

      {latest && (
        <>
          <p><strong>Biological Age:</strong> {latest.biological_age}</p>
          <p><strong>Age Difference:</strong> {latest.age_difference}</p>
          <p>
            <strong>Calculated At:</strong>{" "}
            {new Date(latest.calculated_at).toLocaleString()}
          </p>
        </>
      )}
    </div>
  );
}

export default Dashboard;
