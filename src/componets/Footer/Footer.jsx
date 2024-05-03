import React from 'react'

//css
import './Footer.css'

//utils
import { companyName } from '../../utils/constant'

//icons
import { FaLink, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SlClose } from "react-icons/sl";

export default function Footer() {
    const  transformData = [
  {title : "Ushering The Era of Upskilling" , description :"Back in 2013, Lejhro's founders noticed that the professional world, due to the fast-paced era today, demanded industry professionals to upskill continuously by keeping themselves up to date with current technology - not just for their company’s growth but also for their personal career goals as well. With cut-throat competition for jobs and increasing unemployment coupled with outdated education of workers, upskilling oneself is the only way to ensure one’s growth and stability. Formerly, learning would come to a halt after attaining one’s degree. It was Lejhro’s innovative approach towards imparting learning through Bootcamps curated especially for working professionals and programs that brought about a change in the industry practices and pushed people to upskill themselves. We, at Lejhro, have always strived to impart quality and world-class education to the workforce through pioneering courses to make them job-ready." },
  {title :"A Flexible and Futuristic Approach" , description : "From the inception, teaching, and upskilling of a huge set of professionals and students alike Lejhro has come a long way. All thanks to its approach of staying future-ready and being ahead of its competitors by divulging an era of quality courses to upskill oneself. This approach has not only helped us to expand our horizons but has also helped us form a family of people with an ever-learning approach. Our aim to cater to various segments of working professionals according to their requirements has brought positive and impactful results and helped Lejhro carve its own place in the ed-tech industry. Only onwards and upwards from here!"},
  {title :"Growth - The Only Constant", description :"We can proudly say that if it’s something that has been the same in all these years is our growth as well as the growth of those who are associated with us. We as an organization have always strived to go above and beyond our current capabilities and bring out-of-the-box innovations to the table in order to make the lives of working professionals and students all the easier by upskilling them to make them job-ready. Join us in this revolution of ours and together we can transform more and more lives!" },
    ]
  return (
    <div style={{backgroundColor:"white"}}>
        <div className='container p-5 pb-2' >

{/* first part */}
<div className='row '>
<div className='col-lg-4 col-md-6 col-sm-12'>
    <p  className="fs-4"><strong>Company</strong></p>
    <p><a  className=' text-decoration-none '>About</a></p>
    <p><a  className=' text-decoration-none '>Blogs</a></p>
    <p><a  className=' text-decoration-none '>Enterprise</a></p>
    <p><a  className=' text-decoration-none '>{companyName} Recruiter</a></p>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
    <p className="fs-4"><strong>Support</strong></p>
    <p ><a className='text-decoration-none  '>Contact</a></p>
    <p><a  className=' text-decoration-none '>Terms of Use</a></p>
    <p><a  className=' text-decoration-none '>Privacy Statement</a></p>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
        <p className="fs-4"><strong>Contact with us</strong></p>
    <div className='d-flex'>
        <div   className='icon'><FaSquareXTwitter className='in-icon'/></div>
        <div  className='icon'><FaFacebookSquare className='in-icon'/></div>
        <div  className='icon'><FaLinkedin className='in-icon'/></div>
        <div  className='icon'><FaYoutube className='in-icon'/></div>
    </div>
    <button type="button" class="btn btn-outline-dark mt-3 rounded-0">Rafer and Earn</button>
</div>

<div className='col'></div>
<div className='col'></div>
</div>

<hr/>

{/* secoud part */}
<div>
<p  className="fs-4"><strong>Bootcamp</strong></p>
    <p><a  className=' text-decoration-none '>Data Science Bootcamp</a></p>
    <p><a  className=' text-decoration-none '>Data Analyst Bootcamp</a></p>
    <p><a  className=' text-decoration-none '>Full Stack Development Bootcamp</a></p>
    <p><a  className=' text-decoration-none '>Digital Marketing Bootcamp</a></p>
</div>

<hr/>

{/* third part */}
<div>
 <p  className="fs-4"><strong>Transform Yourself with {companyName}</strong></p>
 {
    transformData.map((d ,index)=>(
        <div key={index}>
         <h5>{d.title}</h5>
         <p>{d.description}</p>
        </div>
    ))
 }
</div>

<hr/>

{/* last part */}
<p className='text-center'> &copy; 2024 {companyName}. ALL Rights Reserved</p>


</div>
    </div>
  )
}
