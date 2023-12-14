import React from 'react'
import ab1 from '../assets/images/ab 1 (1).svg'

const About = () => {
  return (
    <section id='about'>
      <div className='about-section wrapper'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-12 text-sec'>
              <h1 className='ab'>About us</h1>
              <p>
                Welcome to OrderKar where convenience meets culinary excellence.
                At our online ordering platform, we've redefined the dining
                experience with a commitment to efficiency and flavor. No more
                waiting in line; simply browse our diverse menu, customize your
                preferences, and place your order effortlessly. For those on the
                go, utilize our QR code feature at the location, scan, explore,
                and order without a moment's delay. We take pride in using the
                finest, freshest ingredients to craft each meal with care.
              </p>
              <button className='Cbutton'>Read More</button>
            </div>
            <div className='col-lg-7 col-md-12 mb-lg-0 mb-5'>
              <div className='card border-0'>
                <img src={ab1} alt='About Us' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
