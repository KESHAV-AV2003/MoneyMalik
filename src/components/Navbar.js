import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Navbar = (props) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  let location = useLocation();
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">Money Malik</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" href="/home">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} href="/about">About</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/entertainment">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science">Science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">Technology</a>
              </li>
              {/* <li className="nav-item d-block">
                <a className="nav-link" href="/pattern">Patterns</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/charts">Charts
                <span className="material-symbols-outlined mx-1 my-1.5" style={{fontSize: "15px"}}>
                  query_stats
                </span></a>
              </li>
            </ul>
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <a className="btn btn-primary mx-2" href="/" role="button">Login</a>
              <a className="btn btn-primary mx-2" href="/signup" role="button">Signup</a>
            </form> : <button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar
