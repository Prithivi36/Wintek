import React from 'react'
import Ahimaz from '../assets/Ahimaz.png'

function About() {
  return (
    <div id='about'>
      <h1 className='m-4 p-3 mt-5 highlight'>About us</h1>
      <div  className=" p-5 pt-3">
          <div className="row mx-md-5 bg-dark rounded-5">
            <div className="container col-md-3 col-lg-2">
              <img src={Ahimaz} className='img-fluid p-md-3 p-5 rounded-circle' alt="" />
            </div>
            <div className="col  rounded-comb bg-light">
              <h2 className='mt-3 ms-3'>Ahimaz J</h2>
              <h4 className='mt-3 ms-3 text-indigo'>CMD</h4>
              <p>
              AhimaaZ - CMD He is prominent personality in the industry for more than two decade Professionally qualified into the field of Information Technology. He provided innovative ideas towards growth of company in IT infrastructure development and its elevation at par with industry. Developing new clients by comparative study of market variable such as cost & time mechanism etc. and ensuring service as per their expectation.
              </p>
            </div>
          </div>
      </div>
      <div className="mx-md-5 px-3 px-md-5">
        <div className="card rounded-5 p-4 p-md-5">
          <h1 className='mb-5 mt-5 mt-md-0'>Wintek</h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Wintek is complete software development service headquartered at Bangalore. We are expertise in providing a comprehensive and tailor-made solutions to meet customers delight. The company is registered as an MSME and also registered.</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;Wintek more than two decade Professionally qualified the field of Information Technology in software development. Wintek provided innovative ideas towards growth of company in IT infrastructure development and its elevation at par with industry. Developing new clients by comparative study of market variable such as cost & time mechanism etc. and ensuring service as per their expectation.</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;we develop innovative and creative products and services that provide total communication and information solutions.</p>
        </div>
      </div>
    </div>
  )
}

export default About