import React, { useState } from 'react';
import '../styles/Navbar1.css';
import {Link, useNavigate} from "react-router-dom";

const Navbar1 = ({ isLoggedIn = false, userName = "Alex" }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const token = localStorage.getItem('access');

  const navLinks = ['Home', 'About', 'Contact'];

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to= "/" >Age-Align</Link><span>.</span>
      </div>

      <ul className="nav-links">
        <li className='nav-item active'><Link to="/">Home</Link></li>
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={`nav-item ${activeTab === link ? 'active' : ''}`}
              onClick={() => setActiveTab(link)}
            >
              {link}
            </a>
          </li>
        ))}
        {token && (
          <li>
            <a 
              href="#dashboard" 
              className={`nav-item ${activeTab === 'Dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('Dashboard')}
            >
              Dashboard
            </a>
          </li>
        )}
      </ul>

      <div className="nav-actions">
        {token ? (
          <div className="user-profile">
            <span className="username">Hi, {userName}</span>
            <div className="avatar">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="User" />
            </div>
          </div>
        ) : (
          <>
            <a href="/login" className="login-link">Login</a>
            <button className="btn-cta">Analyze Now</button>
          </>
        )}
      </div>
    </nav>
  );
};

// import React, { useState } from "react";
// //import "../styles/Navbar1.css";

// function Navbar1() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Link</a>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="#">Action</a></li>
//                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                 <li><hr className="dropdown-divider"></hr></li>
//                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }



export default Navbar1;