import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function People() {
    const responsive = {

        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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


      const peopleData = [
        {name : "Madhav Narayan" , img :"https://www.bootcamp.lejhro.com/homepage/linkedin_profiles/madhav_narayan.png" , destination : "Java Full Stack Bootcamp" , description : "I heard about Lejhro from a friend and enrolled in its Full stack Development Bootcamp, what followed was an immersive learning experience that helped me transform my career." },
        {name : "Rajeev Sharma" , img :"https://www.bootcamp.lejhro.com/homepage/linkedin_profiles/rajeev_sharma.png" , destination : "Data Science & Analytics Bootcamp" , description : "Enrolling in Lejhro’s Data Science Bootcamp not only helped me acquire in-depth knowledge from leading industry trainers but also helped me become job ready." },
        {name : "Meeraja Mohandas" , img :"https://www.bootcamp.lejhro.com/homepage/linkedin_profiles/meeraja_m.png" , destination : "Data Analyst Bootcamp" , description : "My journey with Lejhro was nothing short of transforming me into an accomplished Data Analyst with a cutting-edge teaching curriculum and experience overall." },
        {name : "Vivency Grover" , img :"https://www.bootcamp.lejhro.com/homepage/linkedin_profiles/vivency_grover.png" , destination : "Digital Marketing Bootcamp" , description : "I appreciate the learning experience provided by Lejhro wherein they helped me upskill in Digital Marketing through practical sessions and not just rote learning." },
        {name : "Ravi K" , img :"https://www.bootcamp.lejhro.com/homepage/linkedin_profiles/ravi_k.png" , destination : "Data Science & Analytics Bootcamp" , description : "The simplified learning method, program structure, and interactive classes helped me grasp each concept easily. It helped me gain immense knowledge along with market-relevant skills." },
        // {name : "Madhav Narayan" , img :"https://www.bootcamp.lejhro.com/homepage/linkedin_profiles/madhav_narayan.png" , destination : "Java Full Stack Bootcamp" , description : "I heard about Lejhro from a friend and enrolled in its Full stack Development Bootcamp, what followed was an immersive learning experience that helped me transform my career." },
      ]
  return (
    <div className='container pt-5'>
       <h3 className='m-5 mb-0'>Meet the people who made it to the top companies</h3>
       
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
              peopleData.map((p, index)=>(
                <div key={index} className='p-3 bg-dark text-light m-5 rounded shadow'>
                     <div className='d-flex'>
                        <img src={p.img} className='rounded-circle me-3' width={60} height={60}/>
                        <div className='justify-content-center align-items-center' style={{marginTop:'auto' , marginBottom : "auto"}}>
                        <p className='text-center '>{p.name}</p>
                        </div>
                     </div>
                     <br/>
                     <p>{p.destination}</p>
                     <p>{p.description}</p>
                </div>
              ))
             }
         </Carousel>

    </div>
  )
}
