import React from 'react'
import Software from '../assets/Softwaredev.png'

function Homepage() {
  return (
    <>
    <div id='home' className="row bg-img me-0 mb-2 align-items-center justify-content-between">
        <div className="py-5 col-md">
            <div className="container">
                <img className=' img-fluid' src={Software} alt="" />
            </div>
        </div>
        <div className="Textual px-md-0 px-4 col-md">
            <div className="">
                <h1 className='head-text-indigo mb-0 btn-shine linear-wipe'>WINTEK</h1>
                <h4 className='mt-0 fw-bolder'>A complete software development</h4>
                <p className='me-lg-3 fw-bolder mt-5'>
                Wintek is complete software development service headquartered at Bangalore.
                 We are expertise in providing a comprehensive and tailor-made solutions to meet customers delight.
                </p>
                <a href='#services' className='btn  bg-indigo rounded-5'>Learn More</a>
            </div>
            <div className="mt-5 mb-5 mb-md-0">
                <a className='me-4' href="https://www.google.com/maps/@12.955226,77.542659,18z?hl=en&entry=ttu">
                    <i className="bi p-2 text-light rounded-5 bg-indigo bi-geo-alt-fill"></i>
                </a>
                <a className='me-4' href="mailto:info@wintekindia.com">
                    <i className="bi p-2 text-light rounded-5 bg-indigo  bi-envelope-fill"></i>
                </a>
                <a className='me-4' href="tel:+918695353002">
                    <i className="bi p-2 text-light rounded-5 bg-indigo bi-telephone-fill"></i>
                </a>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Homepage