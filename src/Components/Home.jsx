import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

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

        <div className="row mt-5 pt-5">
            <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center">
                <h2 className='fw-2'>EQ Beats IQ</h2></div>
            </div>
            <div className="col-md-4">
                <div className="container">
                <p className='title mx-2'>People with high Emotional Intelligence(EQ) live more fullfilled lives. 
                    They tend to be happier and have healthier relationship.</p>
                </div>
                
            </div>
            <div className="col-md-4">
            <div className="container">
                <p className='title mx-3'>They are more Successful in theur pursuits and mke for inspiring leaders.
                Accoring to Science they earn $29k a year</p>
                </div>
            </div>
        </div>

        <div className="container mt-5 pt-5 mb-5">
        <h1 className='fw-bold mx-5'>Does this sound familiar...</h1>
        <Swiper className='mt-5  p-4 mx-2 '
         modules={[ Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
       
       
        autoplay={{ delay: 3000, disableOnInteraction: false }}
       
    >
      <SwiperSlide>
        <div className="card card-bg rounded-4" style={{width:'300px', border:'none'}}>
          
            <div className="card-body p-4"><div className='fs-3 mb-2'>😠</div>
            <h5 className="card-title">You argue with a colleague</h5>
            <p className="card-text title2">You get angry and defensive, instead of staying open and working towards open ground </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card card-bg rounded-4" style={{width:'310px' , border:'none'}}>
          
            <div className="card-body p-4"><div className='fs-3 mb-2'>😳</div>
            <h5 className="card-title">You get a promotion at work</h5>
            <p className="card-text title3">You question yourself and wonder when they will realize you're an unqualified imposter, instead of trusting yourself and your abilities</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card card-bg rounded-4" style={{width:'300px' , border:'none'}}>
          
            <div className="card-body p-4"><div className='fs-3 mb-2'>🤨</div>
            <h5 className="card-title">You Attend a class reunion</h5>
            <p className="card-text title3">You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card card-bg rounded-4" style={{width:'300px' , border:'none'}}>
          
            <div className="card-body p-4"><div className='fs-3 mb-2'>😒</div>
            <h5 className="card-title">You are at a lively dinner party</h5>
            <p className="card-text title3">You play on your phone, instead of confidentally approaching strangers and striking up a chat </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card card-bg rounded-4" style={{width:'300px' , border:'none'}}>
          
            <div className="card-body p-4"><div className='fs-3 mb-2'>😬</div>
            <h5 className="card-title">You hit dead end in a negotiation</h5>
            <p className="card-text title3">You get nervous, frazzled and frustrated instead of staying optimistic and solution oriented </p>
            </div>
        </div>
      </SwiperSlide>
      </Swiper>

        
        </div>

        
    </div>
  )
}

export default Home