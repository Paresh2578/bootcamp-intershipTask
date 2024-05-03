import React from "react";
import TextField from "@mui/material/TextField";

//utils
import { primaryColor } from "../../utils/constant";

//imgs
import bootcampLogo from "../../asset/home/group.png";

//icons
import { MdGroups } from "react-icons/md";

//custom hook
import {useWindowDimensions} from "../../hook/customHooks"


export default function Home() {
    const { width, height } = useWindowDimensions();
    const experience = [
        "Student", "Fresher" , "1-3 Years" , "3-7 Years" , "7+ Years"
    ]

    const comData =[
        {value : '72%' , lable : "Avg. CTC Hike"},
        {value : 'Top 1%' , lable : "Industary Instructors"},
        {value : "2,00,000+" , lable : "Career Transitions"},
    ]

  return (
    <div style={{ backgroundColor: primaryColor }}>
      <div className="container pt-5">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <p className="text-light fs-1">
            Industry's #1 Online <br /> Bootcamp
          </p>
          <div className="image-container" style={{ overflow: 'hidden', width: '100%', height: 'auto' }}>
        <img src={bootcampLogo} className="img-fluid" style={{ objectFit: 'cover', width: '100%' }} alt="Bootcamp Logo" />
      </div>
          {/* <img src={bootcampLogo} className="overflow-hidden" width={width}  style={{objectFit: "cover"}}/> */}
          <br />
          <button type="button" class="btn btn-outline-light fs-7 ps-5 pe-5 pt-2 pb-2 mt-3">Explore</button>
        </div>
        <div className="col">
          <div className={width > 1200 ? "bg-light p-3 rounded-2 col-lg-9 col-md-12 ms-5 shadow position-relative" : "bg-light p-3 rounded-2 col-12  shadow position-relative"} style={{ top: '100px' }}>
            <p className="text-center fs-4">
              Book a <strong>FREE</strong> Live Class!
            </p>
            <div>
              <form>
                <div className="row">
                  <div className="col">
                    <TextField
                      id="standard-basic"
                      label="FIRST NAME"
                      variant="standard"
                      required
                    />
                  </div>
                  <div className="col">
                    <TextField
                      id="standard-basic"
                      label="LAST NAME"
                      variant="standard"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-5 mb-5">
                  <div className="col">
                    <TextField
                      id="standard-basic"
                      type="Number"
                      label="PHONE NUMBER"
                      variant="standard"
                      required
                    />
                  </div>
                  <div className="col">
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="col-6">
                  <TextField
                    fullWidth
                    id="standard-select-currency-native"
                    select
                    label="YEARS OF EXPERIENCE"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {experience.map((option , index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                  </div>
                </div>
                <div className="mt-5 mb-4 text-center">
                    <button type="button" className="btn btn-warning">Continue Booking Live Class</button>
                    <div className="mt-3 text-danger"><MdGroups/> <span >Limited seats left</span></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row container">
         
           <div className="col-lg-6 col=md-12 bg-light rounded-3 shadow pt-3 position-relative" style={{ top: width > 990 ?  '50px' : '150px' }}>
             <div className="row text-center">
             {
                comData.map((data , index)=>(
                    <div className="col" key={index}>
                      <strong className="text-center">{data.value}</strong>
                        <p className="text-center">{data.lable}</p>
                    </div>
                ))
            }
             </div>
           </div>
         
      </div>
      </div>
    </div>
  );
}
