import React from 'react'
import imageDisplay  from './MUIImage'
import { Typography} from '@mui/material'
import { faBold } from '@fortawesome/free-solid-svg-icons'

function Home(){

  return(
    <div className=" bg-body-secondary ">
    
    <div className="col">
        {imageDisplay()}
    </div>
    <div className="col">  {imageDisplay()}</div>
    
        
    
    </div>
    
  );
}

export default Home;