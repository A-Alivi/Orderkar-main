import React from 'react'
import imageDisplay  from './MUIImage'
import { Typography} from '@mui/material'
import { faBold } from '@fortawesome/free-solid-svg-icons'

function Header(){

  return(
    <div className="container-fluid " style={{height:500, overflow:'auto' }} >
      
    <div className='row h-100' >
        <div className="col-lg-6 col-md-12 col-sm-12 h-100">
          <div className='row h-50 bg-body-secondary d-flex justify-content-center'>
            <Typography  variant='h2' fontWeight={faBold} paddingLeft={10} paddingTop={15}  fontSize={40} >Ordering Made Easy, Flavours Delivered to Your Doorstep</Typography>
          </div>  
          <div className='row h-50 bg-body-secondary'>
            <Typography variant='h5'paddingLeft={10} fontWeight={faBold} >Explore Our Diverse Menu, customize your preferences, and await a
            delightful dining experience</Typography>
          </div>        
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 ps-5 pt-3 h-100 bg-body-secondary">
        {
          imageDisplay()
        } 
      </div>
    </div>
    </div>
  );
}

export default Header;