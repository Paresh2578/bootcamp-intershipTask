import React  from 'react'

//componets
import Navbar from './componets/Navbar/Navbar'
import Home from './componets/Home/Home';
import FreeClass from "./componets/FreeClass/FreeClass"
import People from './componets/People/People';
import Bootcamp from './componets/BootcampInfo/BootcampInfo';
import BootCampAdvantage from './componets/BootCampAdvantage/BootCampAdvantage';
import Alumni from './componets/Alumni/Alumni';
import BootCampers from './componets/BootCampers/BootCampers';
import BootcampEnterprise from './componets/BootcampEnterprise/BootcampEnterprise';
import Footer from './componets/Footer/Footer';
import TopScoller from './TopScoller';

//utils
import {primaryColor} from "./utils/constant";


export default function App(){
   return(
    <div style={{backgroundColor:"#F4f4f4"}}>
     <Navbar/>
     <Home/>
     <FreeClass/>
     <People/>
     <Bootcamp/>
     <BootCampAdvantage/>
     <Alumni/>
     <BootCampers/>
     <BootcampEnterprise/>
     <Footer/>
     <TopScoller/>
    </div>
   )
}