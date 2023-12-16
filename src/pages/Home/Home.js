import React from 'react'
import imageDisplay  from './MUIImage'
import { Typography} from '@mui/material'
import { faBold } from '@fortawesome/free-solid-svg-icons'

function Home(){

  return(
    <div className="bg-body-secondary">
    <div className="col-12 h-50 bg-transparent px-4" > 
      <div id="carouselExampleControls" class="carousel slide" style={{height:'30rem'}} data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" style={{height:'30rem'}}>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwc29sdXRpb25zfGVufDB8fDB8fHww" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" style={{height:'30rem'}}>
            <img src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" style={{height:'30rem'}}>
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>  
    </div>
    <div className="col-12 bg-transparent d-flex justify-content-center  ">
    <Typography sx={{color:'black'}} variant='h3'>Ordering Made Easy</Typography>  
    </div>
    </div>
    
  );
}

export default Home;