import React from 'react';
import '../styles/Footer1.css';

const Footer1 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="logo">BIOAGE<span>.</span></div>
          <p>
            Advancing human longevity through AI-driven biomarker analysis and personalized health insights.
          </p>
          <div className="social-links">
            <a href="#twitter" aria-label="Twitter">𝕏</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#instagram" aria-label="Instagram">ig</a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#science">The Science</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="link-group">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#medical">Medical Disclaimer</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} BioAge Labs Inc. All rights reserved.</p>
        <div className="trust-badges">
          <span>HIPAA Compliant</span>
          <span className="separator">•</span>
          <span>SSL Secured</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;