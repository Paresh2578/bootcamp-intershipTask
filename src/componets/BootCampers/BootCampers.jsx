import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//utils
import { primaryColor } from '../../utils/constant'

export default function BootCampers() {
    const data = [
       {img :  "https://www.bootcamp.lejhro.com/homepage/youtube_thumbnails/sharmisha.png" , name : "sharmisha" }, {img :  "	https://www.bootcamp.lejhro.com/homepage/youtube_thumbnails/vamsi.png" , name : "vamsi"} ,{img :  "https://www.bootcamp.lejhro.com/homepage/youtube_thumbnails/sujit.png" , name : "sujit"}
    ]

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
          breakpoint: { max: 1024, min: 780 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 780, min: 0 },
          items: 1
        }
      }
  return (
    <div className='p-5'>
      <div className='container' >
        <h2>Hear out from our Boot Campers!</h2>
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
              data.map((d, index)=>(
                <div className="rounded image-container p-5" style={{width: '100%', height: 'auto' }}>
                  <img src={d.img} className="img-fluid rounded" style={{ objectFit: 'cover', width: '100%' }} alt={d.name} />
                </div>
              ))
             }
           </Carousel>
      </div>
    </div>
  )
}
