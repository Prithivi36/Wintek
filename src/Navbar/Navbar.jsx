import React from 'react'
import Wintek from '../assets/WintekLogo.svg'

function Navbar() {
    const [navBackground,setNavBackground]=React.useState('bg-none')

    function handleColour(){
        const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        if (rect.top <= 0) {
          setNavBackground('bg-dark');
        } else {
          setNavBackground('bg-none');
        }
      }
    }
    window.addEventListener('scroll', handleColour);

  return (
    <>
    <nav className={`navbar parasite mx-0  px-4 navbar-expand-lg ${navBackground}  navbar-dark `}>
        <a className="my-0 py-0 align-items-center justify-content-center d-flex nav-link" href="#">
            <img src={Wintek} style={{width:'50px' ,height:'50px'}} className='my-0 mx-3 px-0 py-0'  />
            <h3 className='d-inline my-0 ms-0'>WINTEK</h3>
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
                    <a className='nav-link me-5 fw-bold' href="#contact">Contact</a>
                </li>
                
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar