import React from 'react'
import Confetti from 'react-confetti';
import MyBizz from '../assets/Company/MyBizz.png'
import imageList from './imageList';

function Experience() {
    const [cheer,setCheer]=React.useState(false)
  return (
    <div id='exp' style={{position:'relative'}} className="d-flex bg-dark text-light mt-4 p-5 justify-content-center align-items-center">
        {cheer&&<Confetti numberOfPieces={500} />}
        <div className="mt-5">
            <div className="">
            <h1 className='h-text-indigo text-center'>25 Years
            <span style={{fontSize:'80%'}} className='text-light'> of Experience</span></h1>
            <p className='text-center'>in software application development service</p>
            <p className='text-center'>
                <button onClick={()=>{
                    setCheer(true)
                    setTimeout(()=>setCheer(false),15000)
                }} className="btn bg-indigo text-light rounded-5">
                    <i className="bi bi-hand-thumbs-up-fill"></i>
                </button>
            </p>
            </div>
            <div className="d-flex flex-column p-5 align-items-center">
                <div className="testimonials d-flex justify-content-center align-items-center">
                    <h1 className='m-4 p-3 text-center highlight'>Our Testimonials</h1>
                </div>
                <div className="bg-white  px-md-0 px-5  g-5 mt-5 rounded-5 p-3 align-items-center row container">

                    {
                        imageList.map((i,d)=>{
                            return(
                                <div key={d} className="container mt-3  col-12  col-sm-5 col-md-4 col-lg-3 col-xl-2">
                                    <img className=' img-fluid ' src={i} alt="" />
                                </div>
                            )
                        })
                    }
                    
                    
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Experience