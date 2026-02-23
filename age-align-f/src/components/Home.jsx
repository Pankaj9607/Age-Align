import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  const token = localStorage.getItem('access');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-3 fw-bold">Welcome to AgeAlign</h1>
          <p className="lead">
            Track your biological age and align your lifestyle with healthier living.
          </p>
          <Link to="/about" className="btn btn-light btn-lg mt-3">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container my-5">
        <div className="text-center mb-4">
          <h2 className="h2 text-secondary">Why Choose AgeAlign?</h2>
          <p className="text-muted">
            Discover the benefits of understanding your biological age.
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Accurate Estimation</h5>
                <p className="card-text">
                  Get reliable insights into your biological age using advanced health markers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Personalized Insights</h5>
                <p className="card-text">
                  Receive actionable recommendations tailored to your wellness journey.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Healthy Aging</h5>
                <p className="card-text">
                  Align your lifestyle choices with science to live longer and healthier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="h2 mb-3">Ready to Begin Your Journey?</h2>
          <p className="mb-4">
            Start tracking your biological age today and take control of your health.
          </p>
          {token ? (
            <Link to="/dashboard" className="btn btn-primary btn-lg me-3">
              Get Started
            </Link>
          ) : (
            <Link to="/register" className="btn btn-primary btn-lg me-3">
              Get Started
            </Link>
          )
          }
        </div>
      </section>
    </div>

    // <div className='container-fluid py-lg-5 py-sm-4 py-3 bg-light'>
    //     <div className='container rounded-3 pb-4'>
    //         <h1 className='display-4 mb-4 text-center text-primary mb-4'>Welcome to Age-Align</h1>
    //         <div className='row justify-content-between'>
    //             <div className='col-lg-6'>
    //                 <h1 className='display-4 fw-bold mb-4'>How Old Are You Really?</h1>
    //                 <p>AgeAlign is a web-based health analytics platform that estimates biological age using blood-based biomarkers. It helps users understand how their body is aging compared to their chronological age.</p>
    //                 <p>Our biological age algorithm analyzes your bloodwork and lifestyle markers to determine your true rate of aging.</p>
    //                 <div>
    //                     <button className='btn btn-primary btn-lg me-3'>Calculate My Age</button>
    //                     <button className='btn btn-outline-primary btn-lg'>Learn More</button>
    //                 </div>
    //             </div>
    //             <div className='col-lg-5 mt-4 mt-lg-0'>
    //                 <p className='lead mb-4'>Age-Align is your trusted partner in age verification solutions. We provide seamless and secure methods to ensure compliance with age-restricted services, protecting both businesses and consumers alike.</p>

    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Home