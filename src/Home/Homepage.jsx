import React from 'react'
import Software from '../assets/Softwaredev.jpg'

function Homepage() {
  return (
    <>
    <div id='home' className="row me-0 mb-2 align-items-center justify-content-between">
        <div className="py-5 col-md">
            <div className="container">
                <img className=' img-fluid' src={Software} alt="" />
            </div>
        </div>
        <div className="Textual px-md-0 px-4 col-md">
            <div className="">
                <h1 className='h-text-indigo'>WINTEK</h1>
                <h4>A complete software development</h4>
                <p className='me-lg-3'>
                Wintek is complete software development service headquartered at Bangalore.
                 We are expertise in providing a comprehensive and tailor-made solutions to meet customers delight.
                </p>
                <a href='#services' className='btn btn-dark rounded-5'>Learn More</a>
            </div>
            <div className="mt-5 mb-5 mb-md-0">
                <a className='me-4' href="https://www.google.com/maps/@12.955226,77.542659,18z?hl=en&entry=ttu">
                    <i className="bi p-2 text-light rounded-5 bg-dark bi-geo-alt-fill"></i>
                </a>
                <a className='me-4' href="mailto:info@wintekindia.com">
                    <i className="bi p-2 text-light rounded-5 bg-dark  bi-envelope-fill"></i>
                </a>
                <a className='me-4' href="tel:+918695353002">
                    <i className="bi p-2 text-light rounded-5 bg-dark bi-telephone-fill"></i>
                </a>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Homepage