import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
<div>
<nav className="navbar navbar-expand-lg navbar-light shadow">
  <div className="container">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="#">Abhishek Singh</NavLink>
        {props?
        <> <NavLink to="/login" className="btn btn-primary ms-auto rounded-pill px-4 py-2"> <i className='fa fa-sign-in ms-2'></i> LogIn</NavLink>
        <NavLink to="/register" className="btn btn-outline-primary ms-4 rounded-pill px-4 py-2"><i className='fa fa-user-plus me-1'></i>Register</NavLink>
      
      </>  
      :
      <>
         <NavLink to="/logout" className="btn btn-primary ms-auto rounded-pill px-4 py-2"> <i className='fa fa-sign-out ms-2'></i> LogOut</NavLink>    
             
              </>}
             
             
             
    </div>
  </div>
</nav>
</div>
    );
}

export default Navbar;