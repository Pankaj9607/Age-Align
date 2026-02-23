import { useEffect, useState } from "react";
import api from "../api";

function History() {
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/history/")
      .then((res) => {
        if (res.data.length === 0) {
          setMessage("No history available");
        } else {
          setHistory(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
        setMessage("Failed to load history");
      });
  }, []);

  return (
    <div className="history">
      <h2>Age Calculation History</h2>

      {message && <p>{message}</p>}

      {history.length > 0 && (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>#</th>
              <th>Biological Age</th>
              <th>Age Difference</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.biological_age}</td>
                <td>{item.age_difference}</td>
                <td>{new Date(item.calculated_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;
