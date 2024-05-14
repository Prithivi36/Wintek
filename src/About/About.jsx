import React from 'react'
import Ahimaz from '../assets/Ahimaz.png'
import Wintek from '../assets/Wintek Whole logo.svg'

function About() {
  return (
    <div id='about' className='mt-5 pt-5'>
      <div className='text-center'>
        <h1 className='m-4 p-3 mt-5 highlight'>About us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md d-flex p-5 align-items-center justify-content-center">
            <img src={Ahimaz} className='img-fluid p-md-5' alt="" />
          </div>
          <div className="col-md d-flex align-items-center justify-content-center">
            <div className="p-md-5 p-3">
              <h1 className="fw-bolder text-light">Ahimazz</h1>
              <h3 className="fw-bolder text-indigo">CMD</h3>
              <p className=" text-light">
              AhimaaZ - CMD He is prominent personality in the industry for more than two decade Professionally qualified into the field of Information Technology. He provided innovative ideas towards growth of company in IT infrastructure development and its elevation at par with industry. Developing new clients by comparative study of market variable such as cost & time mechanism etc. and ensuring service as per their expectation.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md d-flex align-items-center justify-content-center">
            <div className="">
              <div className="ms-5 d-flex mt-5 mb-2 mt-md-0 align-items-center justify-contents-center">
                <div className="bg-warning  " style={{width:'136px',height:'4px'}}></div>
                <h1 className='text-indigo'>Wintek</h1>
                <div className="bg-warning" style={{width:'136px',height:'4px'}}></div>
              </div>
              <div className="p-5">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Wintek is complete software development service headquartered at Bangalore. We are expertise in providing a comprehensive and tailor-made solutions to meet customers delight. The company is registered as an MSME and also registered.</p>

              <p>&nbsp;&nbsp;&nbsp;&nbsp;Wintek more than two decade Professionally qualified the field of Information Technology in software development. Wintek provided innovative ideas towards growth of company in IT infrastructure development and its elevation at par with industry. Developing new clients by comparative study of market variable such as cost & time mechanism etc. and ensuring service as per their expectation.</p>

              <p>&nbsp;&nbsp;&nbsp;&nbsp;we develop innovative and creative products and services that provide total communication and information solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md d-flex align-items-center justify-content-center">
            <div className="container">
              <img className='img-fluid rounded-5' src={Wintek} alt="" />
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default About