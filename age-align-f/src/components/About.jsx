import React from "react";

function About() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
        <div className="container p-5 bg-light rounded-3 shadow-sm">
          <div className="text-center mb-4">
            <h1 className="display-4 text-primary">About AgeAlign</h1>
            <p className="lead">
              Advancing human health through cutting-edge technology.
            </p>
          </div>

          <section className="mb-5">
            <h2 className="h3 text-secondary">Our Mission</h2>
            <p>
              To make biological age assessment accessible, accurate, and
              actionable—helping people live longer, healthier, and more fulfilling
              lives.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h3 text-secondary">What We Offer</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Biological Age Estimation</h5>
                    <p className="card-text">
                      A reliable system that evaluates health markers to estimate
                      biological age.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Personalized Insights</h5>
                    <p className="card-text">
                      Actionable recommendations to improve wellness and slow down
                      biological aging.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Continuous Innovation</h5>
                    <p className="card-text">
                      A commitment to refining our technology with the latest
                      scientific research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="h3 text-secondary">Why AgeAlign?</h2>
            <p>
              We believe that understanding your biological age is the first step
              toward proactive health management. AgeAlign bridges the gap between
              science and everyday life, giving you the tools to align your lifestyle
              with your body’s true needs.
            </p>
          </section>
        </div>
    </div>
  );
};

export default About;
