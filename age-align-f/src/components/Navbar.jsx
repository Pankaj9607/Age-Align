import {Link, useNavigate} from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('access');

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        navigate('/login');
    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary ">
      <div className="container py-3 bg-primary-subtle rounded-3">
        <Link className="navbar-brand" to="/">Age-Align</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2" >
            <li className="nav-item mx-auto">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-auto">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item mx-auto">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {token ? (
                <>
                    <li className="nav-item mx-auto">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item mx-auto">
                        <button className="btn nav-link" onClick={handleLogout}>Logout</button>
                    </li>
                </>
            ) : (
                <>
                    <li className="nav-item mx-auto">
                        <Link className="btn btn-primary" role="button" to="/login">Login</Link>
                    </li>   
                    <li className="nav-item mx-auto">
                        <Link className="btn btn-primary" role="button" to="/register">Register</Link>
                    </li>
                </>
            )}
          </ul> 
        </div>
      </div>
    </nav>
  )
}

export default Navbar
