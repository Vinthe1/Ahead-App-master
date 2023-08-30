import React from 'react'

const Home = () => {
  return (
    <div className='container '>
        <div className="card rounded-4 bg-info ">
          <div className="card-body">
           <div className="row">
            <div className="col-md-6">
                <p className=' container m-5 p-5 mb-0 pb-0 title' >Ahead App</p>
                <h1 className='head container m-5 p-5 mt-1 pt-1 mb-0 pb-0'>Master your Life by Mastering  Emotions</h1>
              <div className='d-flex container m-5 p-5 mt-2 pt-2'>
                 <button className='btn btn-dark py-0' style={{fontSize:'10px'}}>
                    <div className="d-flex">
                    <i class="fa-brands fa-apple fa-3x"> </i>
                    <div className='mx-1'>
                Download on the
                <div className='fs-6 fw-1' style={{marginTop:'-8px'}}>  App Store </div></div>
                   
                    </div>
                    
                  </button>
                <div className='mx-4'>
                    <div className="d-flex">
                    <i class="fa-solid fa-star" style={{color:'yellow'}} ></i>
                    <i class="fa-solid fa-star mx-2" style={{color:'yellow'}} ></i>
                    <i class="fa-solid fa-star" style={{color:'yellow'}} ></i>
                    <i class="fa-solid fa-star mx-2" style={{color:'yellow'}} ></i>
                    <i class="fa-solid fa-star" style={{color:'yellow'}} ></i>
                    </div>
                    <p className='mb-0' style={{fontSize:'13px'}}> 100+ AppStore reviews</p>
                </div>

              </div>
            </div>
            <div className="col-md-6"></div>
           </div>
          </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center">
                <h1>EQ Beats IQ</h1></div>
            </div>
            <div className="col-md-4">
                <p>People with high Emotional Intelligence(EQ) live more fullfilled lives. They tend to be happier and have healthier relationship</p>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
  )
}

export default Home