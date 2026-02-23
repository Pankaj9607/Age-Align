import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Dashboard from './components/Dashboard.jsx'
import BiomarkerForm from './components/BiomarkerForm.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/biomarker-form' element={<BiomarkerForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>  
  )
}

export default App
