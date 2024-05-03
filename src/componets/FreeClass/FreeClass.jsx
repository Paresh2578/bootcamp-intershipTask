import React from "react";

//hook
import { useWindowDimensions } from "../../hook/customHooks";

//utils
import { primaryColor } from "../../utils/constant";

//icons
import { FaLongArrowAltRight } from "react-icons/fa";

//imgs
import Mc2 from "../../asset/FreeClass/mc2.png";
import classDemo from "../../asset/FreeClass/class.png"
// import { ReactComponent as Mc2 } from '../../asset/FreeClass/mc2.svg';


export default function FreeClass() {
  const { width } = useWindowDimensions();
  return (
    <div
      className="container"
      style={{ paddingTop: width > 990 ? "150px" : "200px" }}
    >

     {/* first part    */}
      <p className="text-center fs-2">We Have Something For You!</p>
      <div className="row ">
        <div className="col-lg-5 col-md-3 col-sm-12 justify-content-center align-items-center d-flex">
          <div className="d-flex justify-content-end">
            <div className="d-flex align-items-center me-2">
              <img src={Mc2} height={30} />
            </div>
            <div className="fs-5">
              <strong className="fs-2" style={{ color: primaryColor }}>
                FREE
              </strong>
              <br /> MASTER CLASS
            </div>
          </div>
        </div>
        <div className="col text-start justify-content-center align-items-center d-flex" style={{borderLeft : `5px solid yellow`}}>
          <p className="fs-4">
            Discover to quickly get on the fast-track <br/> path to success that leave
            you
          </p>
        </div>
      </div>


      {/* secound part */}
      <div style={{ width:width > 750 ?  "60vw" : "80vw", margin:'auto' }} >
      <div className="row border border-2 border-dark mt-5 justify-content-center align-items-center">
        <div className="col-lg-6 text-center fs-4">
          <p>Explore <strong>Free Masterclass</strong> from <br /> <strong>Industry Experts</strong></p>
          <button type="button" className="btn btn-outline-danger mb-4">Book Free Masterclass <FaLongArrowAltRight /></button>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '45vh' }}>
            <img src={classDemo} className="img-fluid" style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }} alt="Class Demo" />
          </div>
        </div>
      </div>
    </div>
     {/* <div style={{width:"50vw"}} className="d-flex justify-content-center align-items-center">
     <div className="row border border-2 mt-5 justify-content-center align-items-center">
        <div className="col text-center fs-4">
            <p>Explore <strong>Free Masterclass</strong> from <br/> <stron>Industry Experts</stron></p>
            <button type="button" class="btn btn-outline-danger">Book Free Masterclass <FaLongArrowAltRight/></button>
        </div>
        <div className="col">
           
            <div >
               
                <img src={classDemo} className="img-fluid"   style={{ objectFit: 'cover', height:'45vh'}}/>
            </div>
        </div>
      </div>
     </div> */}
    </div>
  );
}
