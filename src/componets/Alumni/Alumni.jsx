import React from "react";

//css
import "./Alumni.css"

//images
import p1 from "../../asset/Alumni/p1.png";
import p2 from "../../asset/Alumni/p2.png";
import p3 from "../../asset/Alumni/p3.png";
import p4 from "../../asset/Alumni/p4.png";
import p5 from "../../asset/Alumni/p5.png";
import p6 from "../../asset/Alumni/p6.png";
import p7 from "../../asset/Alumni/p7.png";
import p8 from "../../asset/Alumni/p8.png";
import p9 from "../../asset/Alumni/p9.png";

//hooks
import { useWindowDimensions } from "../../hook/customHooks";

export default function Alumni() {
    const { width, height } = useWindowDimensions();
  const data = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

  return (
    <div className="p-5 " style={{backgroundColor : "white"}}>
      <div className="container">
        <h2 className="text-center pb-5">Where Our Alumni Work</h2>
        <div style={{ width:width > 950 ?  "60vw" : "80vw", margin:'auto' }} >
        <div className="row " style={{paddingLeft:'auto' , paddingRight:'auto'}}>
          {data.map((d, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 p-4 ">
              <div className="compny-logo" style={{height : "auto" ,width:"100px"}}>
              <img src={d} className="img-fluid" style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }} />
              </div>
            </div>
          ))}
         
        </div>
        <p className="text-center">
            and <strong>500+</strong> companies
          </p>
        </div>
      </div>
    </div>
  );
}
