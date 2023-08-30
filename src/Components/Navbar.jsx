import React from 'react'
import pic from '../images/nav.png'

const Navbar = () => {
  return (
    <div className='container'>
       
       <div className="container">  
               
                <div className="row">
                    <div className="col-md-1">
                    <img src={pic} width={80} height={80} alt="logo" className='' />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-7">
                        <div className="d-flex mt-4">
                        <p className='title mx-5'>Emotions</p>
                <p className='title '>Manifesto</p>
                <p className='title mx-5'>Self-awareness Test</p>
                <p className='title '>Work With Us</p>
                        </div>
                   
                    </div>
                    <div className="col-md-2 mt-3">
                        <div className="d-flex justify-content-end">
                        <button className='btn btn-dark rounded-5 '>Download App</button>
                        </div>
                        
                </div>
           
           
             </div>  
             </div>         
                  
        </div>

    
  )
}

export default Navbar