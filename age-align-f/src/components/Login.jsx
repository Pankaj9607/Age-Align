import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from "../api"
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post('/api/token/', {username, password});
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate('/');
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
          <h2 className="text-center mb-4 fw-bold text-primary">Login</h2>

          {/* Username input */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" className="form-control" placeholder="Enter username" required/>
          </div>

          {/* Password input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-control" placeholder="Enter password" required/>
          </div>

          {/* Remember me + Forgot password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/" className="text-decoration-none">Forgot password?</Link>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

          {/* Register + Social buttons */}
          <div className="text-center">
            <p className="mb-2">Not a member? <Link to="/register" className="fw-semibold">Register</Link></p>
            <p className="mb-3">Or sign in with:</p>
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

export default Login