import React from 'react'
import Application from '../assets/Application.svg'

function Services() {
  return (
    <>
    <div  id='services' className="bg-dark py-5 mt-4 text-light">
        <h1 className='m-4 p-3  highlight'>Our Services</h1>
        <div className="px-md-5">
            <div className="bg-indigo rounded-5 row mb-5 mx-3 mx-md-5">
                <div className="container py-4 col-md">
                    <img className='img-fluid' src={Application} alt="" />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center col-md'>
                    <h1 className='py-4'>Software Application development</h1>
                    <div className="thing">
                    <p>Application software (applications or apps) to help users
                         perform tasks. Office productivity suites, data management software, media players and security.</p>
                         <p>
                         Building dynamic and interactive web-based applications that can run on various devices and browsers. This could
                          include e-commerce platforms, content management systems (CMS), customer relationship management (CRM) systems, and more.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services