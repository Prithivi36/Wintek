import React from 'react'
import Dummy from './Temp.png'


function DirectContact() {
  return (
    <div  className="maps text-light bg-dark py-5 px-3 p-md-5">
        <div className="container">
            <h1 className='mb-5'>Get in Touch Today !</h1>
            <div className="bg-light rounded-4  py-4 px-3">
                <div className="row">
                    <div className="col-md mb-md-0 mb-3">
                        <label htmlFor="FirstName" className='fw-bolder text-dark mb-1'>First Name</label>
                        <div className="input-group">
                            <button className='btn btn-dark disabled'>@</button>
                            <input id='FirstName' className='form-control' placeholder='Your Name here' type="text" />
                        </div>
                    </div>
                    <div className="col-md">
                        <label htmlFor="Email" className='fw-bolder text-dark mb-1'>Email</label>
                        <div className="input-group">
                            <button className='btn btn-dark disabled'>M</button>
                            <input id='Email' className='form-control' placeholder='Your mail here' type="text" />
                        </div>
                    </div>
                </div>
                <div className="row mt-md-4">
                    <div className="col-md mb-md-0 mb-3">
                        <label htmlFor="Phone" className='fw-bolder text-dark mb-1'>Phone</label>
                        <div className="input-group">
                            <button className='btn btn-dark disabled'>
                            <i className="bi bi-telephone-fill"></i> 
                            </button>
                            <input id='Phone' className='form-control' placeholder='Your Phone here' type="text" />
                        </div>
                    </div>
                    <div className="col-md">
                        <label htmlFor="Location" className='fw-bolder text-dark mb-1'>Location</label>
                        <div className="input-group">
                            <button className='btn btn-dark disabled'>
                                <i className="bi bi-geo-fill"></i>
                            </button>
                            <input id='Location' className='form-control' placeholder='Your Location mail here' type="text" />
                        </div>
                    </div>
                </div>
                <div className="row mt-md-4">
                    <div className="col-md mb-md-0 mt-5 mb-3">
                        <label htmlFor="Message" className='fw-bolder text-dark mb-1'>
                            <h5>Your Message Here !</h5>
                        </label>
                        <div className="input-group">
                            
                            <textarea style={{height:'200px'}} id='Message' className='form-control' placeholder='Drop Your Message' type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center mt-5'>
                <button className="btn bg-indigo rounded-5 text-light">Send Message</button>
            </p>
        </div>
    </div>
  )
}

export default DirectContact