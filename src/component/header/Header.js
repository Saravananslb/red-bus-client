import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';
const PROFILE = require('../../assets/user-regular.svg');

export const Header = ({setOpen}) => {

  const navigate = useNavigate();
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light header-container" style={{height: '60px'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <img
                src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
                className="nav-link active"
                aria-current="page"
              ></img>
            </li>
            <li className="nav-item active " style={{ marginTop: '15px', cursor: 'pointer', marginLeft: '20px'}}>
            <span>BUS TICKETS</span>
            </li>
          </ul>
          <form className="d-flex" style={{marginRight: '50px'}}>
              <div style={{cursor: 'pointer'}}>
              <span onClick={() => navigate(`/manage-tickets`)}>Manage Booking</span>
              </div>
            
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={PROFILE.default} width={33} height={33} alt="" style={{ border: '1px solid #ffffff', borderRadius: '50%'}} />
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><a class="dropdown-item" onClick={() => setOpen(true)}>Signin/Signup</a></li>
                </ul>
            </li>
          </form>
        </div>
      </div>
    </nav>
  );
};
