import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Calculate from './pages/Calculate';
import { Navigate } from 'react-router-dom';


function Logout() {
  // Clear tokens from localStorage
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  return <Navigate to="/login"/>;
}

function RegisterAndLogout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegisterAndLogout/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
        <Route path="/calculate" element={
          <ProtectedRoute>
            <Calculate />
          </ProtectedRoute>
        }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/history" element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }/>
      </Routes>
      <Footer />
    </BrowserRouter> 
  )
}

export default App
