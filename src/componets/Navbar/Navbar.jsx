import React , {useState} from 'react'

//imeges
import logo from "../../asset/home/lejhro_logo_white.png";

//custom hook
import {useCurrHeight, useWindowDimensions} from "../../hook/customHooks"


//icon
import { CiMenuFries } from "react-icons/ci";

//utils
import { primaryColor } from '../../utils/constant';

//componets
import SideBar from './SideBar';



export default function Navbar() {
    const [showMenu , setShowMenu] = useState(false);
    const { width } = useWindowDimensions();



  return (
   <div className='' style={{backgroundColor : primaryColor}} >
   <SideBar open={showMenu} setOpen={setShowMenu}/>
   <div className='container text-light pb-3 pt-4' >
     <div className=' d-flex justify-content-between'>
      <div className='d-flex'>
      {/* <div className='col-4'> */}
         {/* <div className='row'> */}
         {/* <div className='ro'> */}
         <div className='co me-4'><img src={logo} width={width > 450 ?  200 : 150}/></div>
        <div className='co'><button type="button" class="btn btn-outline-light fs-7">PROGRAMS</button></div>
         {/* </div> */}
      </div>
      <div className='co-6 d-flex '>
         {/* <div className='ro'> */}
            <div className={width >= 995 ?  'pe-5 fs-5' : 'd-none'}>Refer and Earn</div>
            <div className={width >= 995 ?  'pe-5 fs-5' : 'd-none'}>Free Masterclass</div>
            <div className={width >= 995 ?  'pe-5 fs-5' : 'd-none'}>Enterprise</div>
            <div className='co pe-3'><span className='bg-light rounded-2 p-2 pt-1' style={{height:'10px' , width : '10px'}} onClick={()=>setShowMenu(true)}><CiMenuFries color='black'/></span></div>
         {/* </div> */}
      </div>
    </div>
   </div>
   </div>
  )
}
