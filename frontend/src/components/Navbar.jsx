import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('access');

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        navigate('/login');
    }

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">Age-Align</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {token ? (
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/calculate">Calculate</Link></li>
                        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;