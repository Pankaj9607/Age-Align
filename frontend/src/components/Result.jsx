import { useState } from "react";


function Result({ result }) {
  if (!result) {
    return null;
  }

  return (
    <div>
      {result && (
        <>
          <p>Biological Age: {result.biological_age}</p>
          <p>Age Difference: {result.age_difference}</p>

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
  );
}

export default Result;
