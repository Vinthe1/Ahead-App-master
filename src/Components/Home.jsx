import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import side from '../images/doodle.jpg'
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import mobile from '../images/mobile.jpeg'

const Home = () => {
  return (
    <div className='container '>
        <div className="card rounded-4 bg-card1 ">
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
            <div className="col-md-6">
              <div className="d-flex justify-content-center mt-4">
              <img className='rounded-5' src={mobile} height={400} width={250} alt="" />
              </div>
             
            </div>
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
      <div className="container  mt-5  pt-5">
      <div className="card rounded-4 bg-card2">
          <div className="card-body">
           <div className="row">
            <div className="col-md-6">
                <p className=' container m-5 p-5 mb-0 pb-0 title' >Build out of frustration</p>
                <h1 className=' container m-5 p-5 mt-1 pt-1 mb-0 pb-0'>Meet the ahead app</h1>
              <div className='d-flex container m-5 p-5 mt-2 pt-2'>
                
                <img className='rounded-circle' src={side} height={150} width={150} alt="" />
                </div>

              </div>
              <div className="col-md-6  p-5 mt-5 ">
              <p className='title mt-5 p-4 pb-0'> A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</p>
              <p className='title p-4 pt-0'> Think of it as a pocket cheerleader towards a better, more fulfilling</p>
            </div>
            </div>
           
           </div>
          </div>
        </div>

        
        <div className="row mt-5 pt-5">
            <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center">
                <h2 className='fw-2 px-5'>Be the best you with EQ</h2></div>
            </div>
            <div className="col-md-4">
                <div className="container">
                <p className='title mx-2'>Not having your own emotions under control might be holding you back.</p>
                </div>
                
            </div>
            <div className="col-md-4">
            <div className="container">
                <p className='title mx-3'>Additionally not understanding those of others stops you from being parent,friend you can be.</p>
                </div>
            </div>
        </div>

        <div className="container  mt-5  pt-5">
      <div className="card rounded-4 bg-card3" style={{border:'none'}}>
          <div className="card-body ">
            
          <p className='title text-center p-5 pb-0 '>Let your friends, family and co-workers(anonymously) rate your social skills</p>
           <h1 className='text-center'>Ever Wondered what others think of you?</h1>
           <div className='p-5 pb-0 mx-5 mb-0'>
            <div className="d-flex mx-4 px-2">
              <img className='rounded-circle ' src={one} width={50} height={50} alt="" />
              <p className='text-black fw-bolder mt-2'>- - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
              <img className='rounded-circle ' src={two} width={50} height={50} alt="" />
              <p className='text-black fw-bolder mt-2'>- - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
              <img className='rounded-circle ' src={three} width={50} height={50} alt="" />

            </div>
            

           </div>
           <div className="row container px-4 mx-3  ">
            <div className="col-md-4"> <p className='title4'>Answer Questions on your social skills</p></div>
            <div className="col-md-4"> <p className='title4'>Let others anonymously answer the same questions about you</p></div>
            <div className="col-md-4"> <p className='title4'>Find out where you and others see things the same way - and where not</p></div>
           </div>
<div className="container d-flex justify-content-center mt-5 mb-4">
<div className="card rounded-4 w-75 bg-white p-4 mb-3" style={{border:'none'}}>
            <div className="d-flex">
              <button className="btn btn-primary" style={{marginLeft:'-30px'}}>You</button>
              <button className="btn btn-warning text-white" style={{marginLeft:'350px'}}>Anonymonos 2</button>
            </div>
            <div className="d-flex mt-2">
            <i class="fa-solid fa-circle"  style={{color:'blue'}}></i>
            <p className='text-info' style={{marginTop:'-10px'}}>_________________________</p>
            <i class="fa-solid fa-circle" style={{color:'skyblue'}}></i>
            <p className='text-info' style={{marginTop:'-10px'}}>___________________________</p>
            <i class="fa-solid fa-circle" style={{color:'yellow'}}></i>
            <p className='text-info' style={{marginTop:'-10px'}}>_________________________________________</p>
            <i class="fa-solid fa-circle" style={{color:'lightgreen'}}></i>
            </div>
            <div className="d-flex ">
              <button className="btn btn-info text-white" style={{marginLeft:'170px'}}>Anonymonos 1</button>
              <button className="btn btn-success text-white" style={{marginLeft:'250px'}}>Anonymonos 4</button>
            </div>
           </div>
</div>
           

           </div>
          </div>
        </div>


      <div className="container mt-5 pt-5">
  <div className="d-flex justify-content-center ">
    <div className='' style={{textAlign:'center'}}>
      <p className='title'>We take privacy seriously</p>
      <h1>Before you get started</h1>
      <div className='mx-5 px-5 '>
      <p className='title px-5 mx-5'>"We won't share your answers with anyone (and wont't ever tell you which friends said what about you)"</p>
      </div>
      <p className='title'>With love, team ahead</p>
      <button className='btn btn-dark rounded-5 px-3'>Start a Test </button>
      <p>Take only 5 minutes</p>
    </div>
  </div>
      </div>

      <div className="container  mt-5  pt-5">
      <div className="card rounded-4 bg-card3" style={{border:'none'}}>
          <div className="card-body ">
            <div className="row">
              <div className="col-md-7">
                <h2 className='m-5 mb-4 mt-5 pb-1 fw-bold'>Work with us</h2>
               <div>
                <div className="card m-5 p-4 pt-3  mt-0 mb-5 " style={{border:'none'}}>
                  
                  <div className="card-body ">
                    <h4>About</h4>
                    At ahead our goal is to make self-improvement fun and lasting. We know there's a way to make it work and that's what aHead is all about!
                  </div>
                
                  <div className="card " style={{border:'none', backgroundColor:'peachpuff'}}>
                  
                  <div className="card-body ">
                    <h4>Product</h4>
                   Sure you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager- like we did...
                  </div>
              
                  </div>
                  
                </div>
                
               </div>
              </div>
              <div className="col-md-5 ">
                <div className='d-flex '>
              <h2 className='p-5 pb-1 fw-bold text-primary mb-1 ms-auto'>ahead</h2></div>
              <div className='ahead px-5'>
              <div className="card ms-auto mt-3 rounded-4" style={{width:'270px' , border:'none'}}>
          
         <div className="card-body p-4">
          <h6 className="card-title">Power through, even when the going gets tough</h6>
          <p className="card-text title3">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc</p>
          </div>
      </div>
              <div className="card ms-auto  mt-3 rounded-4" style={{width:'270px' , border:'none'}}>
          
         <div className="card-body p-4">
          <h6 className="card-title">Learn more about who you are and where you want to go</h6>
          <p className="card-text title3">We ask the right questions to help you better understand why you do things the way you do. </p>
          </div>
      </div>
              <div className="card ms-auto  mt-3 rounded-4" style={{width:'270px' , border:'none'}}>
          
         <div className="card-body p-4">
          <h6 className="card-title">Play and grow together with others on the same journey</h6>
          <p className="card-text title3">Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!</p>
          </div>
      </div>
              <div className="card ms-auto  mt-3 rounded-4" style={{width:'270px' , border:'none'}}>
          
         <div className="card-body p-4">
          <h6 className="card-title">Master how to make it happen in real life</h6>
          <p className="card-text title3">We support you towards ninja-level skills with sleek tools such as dry-rins, quizzes, and flashcards</p>
          </div>
      </div>
              <div className="card ms-auto  mt-3 rounded-4" style={{width:'270px' , border:'none'}}>
          
         <div className="card-body p-4">
          <h6 className="card-title">Learn about Practical skills that you can actually use in real life</h6>
          <p className="card-text title3">We teach you smart psychological techniques and habit forming strategies that are easy to apply.</p>
          </div>
      </div>
              <div className="card ms-auto  mt-3 rounded-4" style={{width:'270px' , border:'none'}}>
          
         <div className="card-body p-4">
          <h6 className="card-title">Get support that's made for your needs</h6>
          <p className="card-text title3">We build your personal roadmap of lessons and actions towards your goals.</p>
          </div>
      </div>
      </div>
              </div>
             
            </div>
            </div>
            </div>
            </div>

            <div className="container mt-5 pt-5 mb-5">
        <h1 className='fw-bold mx-5'>Open Vacancies</h1>
</div>

      </div>

     
      

        </div>

        
   
  )
}

export default Home