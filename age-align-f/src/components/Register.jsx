import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from "../api"
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(Register, {username, password});
      navigate('/login');
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
    <div className="card shadow-lg p-4" style={{ maxWidth: "480px", width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4 fw-bold text-primary">Register</h2>
    
        {/* User Name */}
        <div className="mb-3">
          <label htmlFor="userName" className="form-label fw-semibold">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="fullName" className="form-control" placeholder="Enter your Username" required/>
        </div>
    
        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Create a password" required/>
        </div>
    
        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="confirmPassword" className="form-control" placeholder="Confirm your password" required/>
        </div>
    
        {/* Terms & Conditions */}
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="terms" />
          <label className="form-check-label" htmlFor="terms">
            I agree to the <Link to="/">Terms & Conditions</Link>
          </label>
        </div>
    
        {/* Register button */}
        <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
    
        {/* Already have account */}
        <div className="text-center">
          <p>Already a member? <Link to="/login" className="fw-semibold">Login</Link></p>
        </div>
    
        {/* Social sign up */}
        <div className="text-center mt-3">
          <p className="mb-2">Or sign up with:</p>
          <div className="d-flex justify-content-center gap-2">
            <button type="button" className="btn btn-outline-primary btn-sm rounded-circle">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm rounded-circle">
              <i className="fab fa-google"></i>
            </button>
            <button type="button" className="btn btn-outline-info btn-sm rounded-circle">
              <i className="fab fa-twitter"></i>
            </button>
            <button type="button" className="btn btn-outline-dark btn-sm rounded-circle">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register