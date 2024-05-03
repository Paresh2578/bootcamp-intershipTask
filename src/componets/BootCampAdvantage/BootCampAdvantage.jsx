import React from 'react'

//icons
import { TfiBag } from "react-icons/tfi";
import { BsBarChartLine } from "react-icons/bs";
import { MdViewSidebar } from "react-icons/md";

export default function BootCampAdvantage() {
    const data = [
        {icon :<TfiBag style={{height : "100%" , width : "100%"}}/> , title : "Skills for real career growth" , description : "Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills" },
        {icon :<BsBarChartLine style={{height : "100%" , width : "100%"}}/> , title : "Learn from experts" , description : "Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule" },
        {icon :<MdViewSidebar style={{height : "100%" , width : "100%"}}/> , title : "Work on real world problems" , description : "Capstone projects involving real world data sets with virtual labs for hands-on learning" },
    ]
  return (
   <div className='bg-dark text-light p-5'>
     <div className='container'>
      <h2>Lejhro Bootcamp Advantage</h2>
      <p className='pb-4'>Dedicated mentorship with staunch assistance to help you become an expert in the field</p>
      <div className='row'>
      {
        data.map((d,index)=>(
            <div key={index} className='col-lg-4 col-md-4 col-sm-12'>
                <div style={{height:'30px'  , width:"30px"}}><span >{d.icon}</span></div>
                <h5 className='mt-2'>{d.title}</h5>
                <p>{d.description}</p>
            </div>
        ))
      }
      </div>
    </div>
   </div>
  )
}
