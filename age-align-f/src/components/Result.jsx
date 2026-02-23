import { useState } from "react";


function Result({ result }) {
  if (!result) {
    return null;
  }

  return (
    <div>
      <h3 className="display-6 py-3 text-center text-primary fw-bold">Current Result</h3>
      <div className="card bg-primary-subtle mb-3">
        <div className="card-header lead text-center">Current Result</div>
        <div className="card-body">
        {result && (
          <>
            <p><strong>Biological Age:</strong> {result.biological_age}</p>
            <p><strong>Age Difference:</strong> {result.age_difference}</p>

            <h3>Health Suggestions</h3>

            {Array.isArray(result.suggestions) ? (
              <ul>
                {result.suggestions.map((s, i) => (
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
    </div>
  );
}

export default Result;
