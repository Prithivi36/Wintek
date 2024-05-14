import React from 'react'
import DirectContact from './DirectContact'
import CopyRight from './CopyRight'
import ContactCard from './ContactCard'
import contact from '../assets/contact.svg'

function Address() {
  return (
    <>

    <div  id='contact' className='mt-5 bg-light text-dark' >
      <div className=" py-5 align-items-center justify-content-center  row me-0">
        <div className="py-md-5  d-none d-sm-block col-md-6">
        <div className="container ">
                <img className=' img-fluid' src={contact} alt="" />
            </div>
        </div>
        
        <div className="col-md-5 p-5">
          <h1 className="fw-bolder h-text-indigo">CONTACT <span className='fw-lighter text-dark'>US</span></h1>
          <div className="d-inline-block mt-5">
            <h3 ><i className="bi  bi-geo-alt-fill"></i></h3>
            <p className='mt-2' >No.33, 1’st Cross,Sampangi Ram Nagar,Near Corporation Circle,Bengaluru-560027,Karnataka, South India.</p>
          </div>
          <div className="d-block mt-4">
            <h3 ><i className="bi  bi-telephone-fill"></i></h3>
            <p className='mt-2' >+91 86953 53002</p>
          </div>
          <div className="d-block mt-4">
            <h3 ><i className="bi  bi-envelope-fill"></i></h3>
            <p className='mt-2' >info@wintekindia.com</p>
          </div>
          <div className="d-block mt-4">
            <h3 ><i className="bi  bi-globe"></i></h3>
            <p className='mt-2' >www.wintekindia.com</p>
          </div>
        </div>
      </div>
    </div>
    <DirectContact />
    <CopyRight />
    
    </>
  )
}

export default Address
