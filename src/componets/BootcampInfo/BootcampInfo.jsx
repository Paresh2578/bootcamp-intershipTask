import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//imgs
import logo from "../../asset/bootcamp/logo192.png";

//utlis
import { primaryColor } from '../../utils/constant';

//icons
import { IoMdTime } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

export default function BootcampInfo() {
  const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const bootcampData = [
    {name : "Data Science Bootcamp" , time : "400+ Hours of Learning" , },
    {name : "Data Analyst Bootcamp" , time : "400+ Hours of Learning" , },
    {name : "Full Stack Development Bootcamp" , time : "400+ Hours of Learning" , },
    {name : "Digital Marketing Bootcamp" , time : "400+ Hours of Learning" , },
  ]
  return (
   <div  style={{backgroundColor : "white"}}>
     <div className='container p-5'>
      <strong className='fs-2'>Bootcamp</strong>
      <p>Give a kick-start to your career by developing in demand skills</p>

      <Carousel 
           responsive={responsive}
           swipeable={false}
           draggable={false}
           showDots={false}
           infinite={true}
           autoPlay={true}
           autoPlaySpeed={4000}
           keyBoardControl={true}
           // customTransition="all .5"
           transitionDuration={500}
           >
             {
              bootcampData.map((p, index)=>(
                <div className='d-flx justify-content-cente'>
                  <div key={index} className='ms-5 me-5 mb-5 mt-2 rounded-4  ' style={{backgroundColor :primaryColor }}>
                     <div className='d-flex p-3'>
                        <img src={logo} height={40} width={40} className='me-3' />
                         <p style={{marginTop:'auto' , marginBottom : "auto"}}>{p.name}</p>
                     </div>
                     <div className='bg-dark text-light p-3 rounded-top-5' >
                      <div className='d-flex'>
                        <div style={{height:'25px'  , width:"30px"}}>
                         <IoMdTime style={{height : "100%" , width : "100%"}} color={primaryColor}/>
                        </div>
                         <p className='ps-3' style={{marginTop:'auto' , marginBottom : "auto"}}>{p.time}</p>
                      </div>
                      <div className='d-flex mt-4 mb-3 ' >
                        <div style={{height:'20px'  , width:"30px"}}>
                         <FaComputer style={{height : "100%" , width : "100%"}} color={primaryColor}/>
                        </div>
                         <p className='ps-3' style={{marginTop:'auto' , marginBottom : "auto" }}>Industry Capstone Projects</p>
                      </div>
                     </div>
                      <div className='d-flex justify-content-between ps-3 pe-3  bg-dark rounded-bottom-4 text-light' style={{borderTop : `3px solid ${primaryColor}`}} >
                        <p  className='mt-3'>Read More</p>
                        <div className='p-3' style={{borderLeft : `3px solid ${primaryColor}`}}>
                        <div style={{height:'25px'  , width:"30px"}}>
                        <FiDownload style={{height : "100%" , width : "100%"}} color={primaryColor}/>
                        </div>
                        </div>
                      </div>
                </div>
                </div>
              ))
             }
         </Carousel>
    </div>
   </div>
  )
}
