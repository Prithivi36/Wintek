import React from 'react'
import Wintek from '../assets/WintekLogo.svg'

function Navbar() {
  return (
    <>
    <nav className="navbar mx-0 parasite px-4 navbar-expand-lg navbar-light bg-white">
        <a className="my-0 py-0" href="#">
            <img src={Wintek} style={{width:'150px' ,height:'50px'}} className='my-0 py-0'  />
        </a>
        <button  className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className='nav-item'>
                    <a className='nav-link me-5 fw-bold' href="#home">Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link me-5 fw-bold' href="#about">About</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link me-5 fw-bold' href="#services">Our Services</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link me-5 fw-bold' href="#exp">Testimonials</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link me-5 fw-bold' href="#">Contact</a>
                </li>
                
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar