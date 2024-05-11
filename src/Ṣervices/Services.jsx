import React from 'react'
import data from './servdet.js'

function Services() {
  return (
    <>
    <div  id='services' className="bg-dark py-5 mt-4 text-light">
        <h1 className='m-4 p-3  highlight'>Our Services</h1>
        <div className="px-md-5">

        <div  id="myCar" className="carousel bg-dark text-light slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            

            {data.map((d,i)=>{
                return(
                    <div key={i} className={`carousel-item ${i===0?"active":'no'}`}>
                    <div className="bg-indigo host rounded-5 row px-lg-5 mb-5 mx-3 mx-md-5">
                <div className="container py-4 col-md">
                    <img className='img-fluid' src={d.image} alt="" />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center col-md'>
                    <h1 className='py-4'>{d.heading}</h1>
                    <div className="thing">
                    <p>
                        {d.description}
                    </p>
                    </div>
                </div>
                <div className="d-md-flex align-items-center justify-content-center col col-md-1">
                    <p className='text-center'>
                    <i class="bi bi-arrow-right"></i>
                    </p>
                </div>
                </div>
            </div>
                )
            })}
        </div>
        <a className="carousel-control-prev" href="#myCar" role="button" data-bs-slide="prev">
  </a>
  <a className="carousel-control-next" href="#myCar" role="button" data-bs-slide="next">
  </a>
        </div>












            
            
        </div>
    </div>
    </>
  )
}

export default Services