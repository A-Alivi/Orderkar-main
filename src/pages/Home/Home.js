import React from 'react'
import { Typography} from '@mui/material'

function Home(){

  return(
    <div className="bg-body-secondary">
      <div id="carouselExampleControls" class="carousel slide"  data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" >
      
          <img src={require('../../assets/images/home/Hero-image-min-min.webp')} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" >
            <img src={require('../../assets/images/home/photo1.avif')} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" >
            <img src={require('../../assets/images/home/photo2.avif')} class="d-block w-100" alt="..."/>
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
    <div className=" bg-transparent d-flex justify-content-center px-5 py-4  h1 fw-bold ">
    
    Ordering Made Easy,<br /> Get your Order at Your Doorstep.
   
    </div>
    </div>
    
  );
}

export default Home;