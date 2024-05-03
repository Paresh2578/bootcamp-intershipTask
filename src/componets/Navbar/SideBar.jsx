import * as React from 'react';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//icons
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SlClose } from "react-icons/sl";

//utils
import {companyName} from "../../utils/constant";

//imgs
import logo from "../../asset/home/lejhro_logo_red.png"

export default function SideBar({open , setOpen}) {

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={()=>setOpen(false)}>
      <div className="d-flex justify-content-between p-4">
        <div className="">
            <img src={logo} width={200} className=''/>
        </div>
        <div className="" style={{height:'30px'  , width:"30px"}} onClick={()=>setOpen(false)}>
             <SlClose style={{height : "100%" , width : "100%"}} />
        </div>
      </div>
      <Divider/>
      <List>
        {['Refer and earn', 'Free Masterclass', 'Enterprice', 'Lejhro Recruiter' , 'Blogs' , 'Resources'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text}  className="font-weight-bold"/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className='row p-3'>
        <div className='col'><FaSquareXTwitter /></div>
        <div className='col'><FaFacebookSquare/></div>
        <div className='col'><FaLinkedin/></div>
        <div className='col'><FaYoutube/></div>
      </div>
      <div className='row p-3 text-center'>
        <div className='col'>
        &copy; 2024 {companyName}. ALL Rights Reserved
        </div>
      </div>
    </Box>
  );

  return (
    <div >
      {/* <Drawer open={open} onClose={setOpen(false)}> */}
      <Drawer anchor='right' open={open}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
