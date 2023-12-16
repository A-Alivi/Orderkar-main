import React from 'react'
import ab1 from 'D:/OrderKar/Orderkar-main/Orderkar-main/src/assets/images/ab 1 (1).svg'
import { Typography } from '@mui/material';


const About = () => {

  const aboutImaage = "D:/OrderKar/Orderkar-main/Orderkar-main/src/assets/images/ab 1 (1).svg"
  return (
      <div className='row bg-body-secondary'>
        <div className="col col-12 col-md-12 col-lg-6 col-xl-6">
          <Typography variant='h3' marginLeft={4} marginTop={3} >About Us</Typography>
          <p className=' ms-5 mt-auto p-3 fs-5 '>
              Welcome to OrderKar where convenience meets culinary excellence.
              At our online ordering platform, we've redefined the dining
              experience with a commitment to efficiency and flavor. No more
              waiting in line; simply browse our diverse menu, customize your
              preferences, and place your order effortlessly. For those on the
              go, utilize our QR code feature at the location, scan, explore,
              and order without a moment's delay. We take pride in using the
              finest, freshest ingredients to craft each meal with care.
          </p>
          </div>
          
        <div className="col-12 col col-12 col-md-12 col-lg-6 p-5 col-xl-6 d-flex justify-content-center">
            <div className='card border-0 bg-transparent'>
              <img src={ab1} alt='About Us' className='img-fluid' />
            </div>
         
        </div>
      </div>
  );
}

export default About