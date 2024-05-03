import React ,  {useState , useEffect} from 'react'

//icon
import Fab from '@mui/material/Fab';
import { FaChevronUp } from "react-icons/fa";

export default function TopScoller(){
    const [visible , NotVisible] = useState(false);
  
    const listenTScroll = ()=>{
      const winScrol = document.body.scrollTop || document.documentElement.scrollTop;
  
  
      if(winScrol >=100 ){
          NotVisible(true);
      }else{
          NotVisible(false);
      }
    }
  
    useEffect(()=>{
       window.addEventListener('scroll' , listenTScroll);
       return  ()=> window.addEventListener('scroll' , listenTScroll)
    }, [])
  
      const top_scorl_function = () => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (
          <div className='position-fixed' style={{ bottom : "10px" , right:"10px" }}>
              {visible &&
               (
                  <Fab size='small'color='error'  style={{background:'',  color:'#fff'}} aria-label="add" onClick={top_scorl_function}>
                    <FaChevronUp />
                  </Fab>
               )
  
              }
      </div>
      )
  }
