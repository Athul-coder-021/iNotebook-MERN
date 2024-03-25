import React ,{useEffect}from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom';



const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    // Google Analytics
    // ga('send', 'pageview');
    console.log(location.pathname)
  }, [location]);
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">iNotebook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <RouterLink to="/" className={`nav-link ${location.pathname==="/"? "active" :""}`}aria-current="page">
              Home
          </RouterLink>
        </li>
        <li className="nav-item">
          <RouterLink to="about" className={`nav-link ${location.pathname==="/about"? "active" :""}`}>
              About
          </RouterLink>          
        </li>
      </ul>
      <form className="d-flex" role="search">
      <RouterLink to="/login" className='btn btn-success mx-2'>Login</RouterLink> 
      <RouterLink to="/signup" className='btn btn-success mx-2'>SignUp</RouterLink> 
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
