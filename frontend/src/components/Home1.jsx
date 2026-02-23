import React from 'react';
import '../styles/Home1.css';

const Home1 = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="status-badge">🧬 AI-Biomarker Analysis Live</div>
          <h1>How old are you <br /><span className="text-gradient">really?</span></h1>
          <p>
            Our biological age algorithm analyzes your bloodwork and lifestyle 
            markers to determine your true rate of aging.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Calculate My Age</button>
            <button className="btn-secondary">Explore the Science</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card age-card">
            <span className="label">Current Vitality</span>
            <div className="age-value">28.5</div>
            <p className="subtext">Biological Age</p>
          </div>
          <div className="floating-card bio-card">
            <div className="pulse"></div>
            <span>Optimizing DNA Methylation</span>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="features">
        <div className="feature-card">
          <h3>Blood Analysis</h3>
          <p>Deep dive into 15+ metabolic markers including CRP and Albumin.</p>
        </div>
        <div className="feature-card highlighted">
          <h3>Epigenetic Clock</h3>
          <p>The gold standard in longevity measurement, now in your pocket.</p>
        </div>
        <div className="feature-card">
          <h3>Daily Insights</h3>
          <p>Real-time suggestions to lower your bio-age through lifestyle.</p>
        </div>
      </section>
    </div>
  );
};

export default Home1;