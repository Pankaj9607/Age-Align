import React from 'react';
import '../styles/About1.css';

const About1 = () => {
  return (
    <div className="about-page">
      {/* Vision Header */}
      <section className="about-hero">
        <span className="subtitle">Our Mission</span>
        <h1>Bridging the gap between <br /><span className="text-highlight">Chronology and Vitality.</span></h1>
        <p>
          Founded in 2024, BioAge was built by a team of longevity scientists and AI engineers 
          dedicated to making personalized health data accessible to everyone.
        </p>
      </section>

      {/* The Science Section */}
      <section className="science-section">
        <div className="content-grid">
          <div className="text-box">
            <h2>The Science of BioAge</h2>
            <p>
              Traditional age is measured by the Earth's orbit around the sun. 
              <strong> Biological age</strong> is measured by the cellular health of your organs, 
              the length of your telomeres, and the methylation of your DNA.
            </p>
            <ul className="science-list">
              <li>✓ AI-driven Phenotypic Analysis</li>
              <li>✓ Clinical-grade Biomarker Tracking</li>
              <li>✓ Evidence-based Recommendations</li>
            </ul>
          </div>
          <div className="visual-box">
             {/* Placeholder for an illustrative science graphic */}
             <div className="science-card">
                <div className="dna-icon">🧬</div>
                <h4>Epigenetic Metrics</h4>
                <p>We use the NHANES validated algorithms to ensure 98.4% accuracy.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Team/Values Section */}
      <section className="values-grid">
        <div className="value-item">
          <div className="icon">🛡️</div>
          <h3>Privacy First</h3>
          <p>Your biological data is encrypted and anonymized. We never sell health records.</p>
        </div>
        <div className="value-item">
          <div className="icon">🔬</div>
          <h3>Clinically Validated</h3>
          <p>Every recommendation is backed by peer-reviewed longevity research.</p>
        </div>
        <div className="value-item">
          <div className="icon">🌱</div>
          <h3>Holistic Growth</h3>
          <p>We believe in sustainable lifestyle changes over "quick-fix" supplements.</p>
        </div>
      </section>
    </div>
  );
};

export default About1;