import React from 'react'
import Dummy from './Temp.png'
import axios from 'axios'
import Loading from '../assets/Loading.gif'


function DirectContact() {

    const [from,setForm]=React.useState({
        name:'',
        email:'',
        phone:'',
        location:'',
        message:''
    })

    const [loading,setLoading]=React.useState((false))
    function validation() {
        if (from.name !== '' && from.email !== '' && from.message !== '') {
            if(from.email.includes('@')&&from.email.includes('.')){
                return true;
            }else{
                return false
            }
        } else {
            return false;
        }
    }
    
    function handleError(){
        setLoading(false)
            alert('Check The details You Have Entered')
        
    }

    function handleChange(){
        const {name,value} = event.target
        setForm((prev)=>{
            return(
                {...prev,[name]:value}
            )
        })
    }
    function sendMessage(){
        setLoading(true)
        {validation()?axios.post("http://65.0.107.35:8083/submitForm",from).then(
            res=>{alert(res.data)
                setForm(
                    {
                        name:'',
                        email:'',
                        phone:'',
                        location:'',
                        message:''
                    }
                    
                )
                setLoading(false)
            }
        ):handleError()
    }
        
    }

  return (
    <div  className="d-contact text-light bg-dark py-5 px-3 p-md-5">
        <div className="container">
            <h1 className='mb-5'>Get in Touch Today !</h1>
            <div className="bg-light rounded-4  py-4 px-3">
                <div className="row">
                    <div className="col-md mb-md-0 mb-3">
                        <label htmlFor="FirstName" className='fw-bolder text-dark mb-1'>Name <span className='ms-1 text-danger'>*</span></label>
                        <div className="input-group">
                            <button className='btn btn-dark disabled'>@</button>
                            <input value={from.name}  name="name" onChange={()=>handleChange()} id='FirstName' className='form-control' placeholder='Your Name here' type="text" />
                        </div>
                    </div>
                    <div className="col-md">
                        <label htmlFor="Email" className='fw-bolder text-dark mb-1'>Email <span className='ms-1 text-danger'>*</span></label>
                        <div className="input-group">
                            <button className='btn btn-dark disabled'>M</button>
                            <input  value={from.email}  name="email" onChange={()=>handleChange()} id='Email' className='form-control' placeholder='Your mail here' type="text" />
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
                            <input value={from.phone} name="phone" onChange={()=>handleChange()} id='Phone' className='form-control' placeholder='Your Phone here' type="text" />
                        </div>
                    </div>
                    <div className="col-md">
                        <label htmlFor="Location" className='fw-bolder text-dark mb-1'>Location</label>
                        <div className="input-group">
                            <button className='btn btn-dark disabled'>
                                <i className="bi bi-geo-fill"></i>
                            </button>
                            <input value={from.location}  name="location" onChange={()=>handleChange()} id='Location' className='form-control' placeholder='Your Location mail here' type="text" />
                        </div>
                    </div>
                </div>
                <div className="row mt-md-4">
                    <div className="col-md mb-md-0 mt-5 mb-3">
                        <label htmlFor="Message" className='fw-bolder text-dark mb-1'>
                            <h5>Your Message Here ! <span className='ms-1 text-danger'>*</span></h5>
                        </label>
                        <div className="input-group">
                            <textarea value={from.message}  name="message" onChange={()=>handleChange()} style={{height:'200px'}} id='Message' className='form-control' placeholder='Drop Your Message' type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center mt-5'>
                <button onClick={sendMessage} className="btn fw-bolder bg-indigo rounded-5 text-light">
                    {loading?
                    <>
                    <img className='img-fluid w-50 m-0' src={Loading} alt="" />
                    </>
                    :'Send Message'}
                </button>
            </p>
        </div>
    </div>
  )
}

export default DirectContact