import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
        <div className="container my-5 bg-light">
          <div className="text-center mb-4">
            <h1 className="display-4 text-primary">Contact Us</h1>
            <p className="lead">
              We’d love to hear from you! Reach out with questions, feedback, or
              collaboration ideas.
            </p>
          </div>

          <div className="row">
            {/* Contact Form */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="h4 mb-3">Send a Message</h2>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="h4 mb-3">Get in Touch</h2>
                  <p>
                    <strong>Email:</strong> support@agealign.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 98765 43210
                  </p>
                  <p>
                    <strong>Address:</strong> AgeAlign HQ, Pune, Maharashtra, India
                  </p>
                  <hr />
                  <h5>Follow Us</h5>
                  <div>
                    <Link to="/" className="btn btn-outline-primary btn-sm me-2">
                      LinkedIn
                    </Link>
                    <Link to="/" className="btn btn-outline-info btn-sm me-2">
                      Twitter
                    </Link>
                    <Link to="/" className="btn btn-outline-danger btn-sm">
                      YouTube
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
