import React from 'react'
import Dummy from './Temp.png'

function Address() {
  return (
    <>

    <div className='mt-5' >
      <p className='text-center'>
        <h1 className='m-4 p-3 mt-5 highlight'>Contact</h1>
      </p>
      <div className="container p-5 ">
        <div className="row">  
          <div className="card col-sm me-lg-1 p-3">
            <h3 className='fw-bold'>Address</h3>
            <p>
            No.33, 1’st Cross,Sampangi Ram Nagar,Near Corporation Circle,Bengaluru-560027,KARNATAKA, SOUTH INDIA.
            </p>
          </div>
          <div className="card col-sm p-3 mx-sm-1 mt-sm-0 mt-4 ">
            <h3 className='fw-bold'>Contact Number</h3>
            <p>
              +91 86953 53002
            </p>
          </div>
          <div className="card col-lg p-3 mx-lg-1 mt-lg-0 mt-4">
            <h3 className='fw-bold'>Email Address</h3>
            <p>
              info@wintekindia.com
            </p>
          </div>
          <div className="card col-lg ms-lg-1 p-3 mt-lg-0 mt-4">
            <h3 className='fw-bold'>Website</h3>
            <p>
              www.winteindia.com
            </p>
          </div>
        </div>
      </div>
      <div  className="maps p-5">
        <div style={{border:'solid gray'}} className="rounded-5 row bg-light m-5">
          <div className="container col d-flex p-4">
            <img style={{borderRadius: '2rem  2rem '}} className='img-fluid ' src={Dummy} alt="" />
          </div>
          <div className="card row g-2 px-4 col py-4 m-5">
            <input type="text" className='form-control' placeholder='Your Name' />
            <input type="text" className='form-control' placeholder='Your Email' />
            <input type="text" className='form-control' placeholder='Your Subject' />
            <textarea className='form-control' name="" placeholder='description' id=""></textarea>
          <button className='btn bg-indigo text-light rounded-5'>Send Message</button>
          </div>
        </div>
      </div>
    </div>
    <div style={{height:'180px'}} className="bg-dark d-flex align-items-center justify-content-center">
      <p className='text-secondary text-center'>Copyright ©2024 All rights reserved</p>
    </div>
    </>
  )
}

export default Address