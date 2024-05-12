import React from 'react'

function ContactCard() {
  return (
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
  )
}

export default ContactCard