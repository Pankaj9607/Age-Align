import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>AgeAlign</h1>
        <p className="tagline">
          Biological Age Estimation Using Clinical Biomarkers
        </p>

        <p className="description">
          AgeAlign is a web-based health analytics platform that estimates
          biological age using blood-based biomarkers. It helps users
          understand how their body is aging compared to their chronological age.
        </p>

        <div className="home-buttons">
          <a href="/login" className="btn primary">Login</a>
          <a href="/register" className="btn secondary">Register</a>
        </div>
      </div>
    </div>
  );
}

export default Home;