import React from 'react'
import Icon from './Icon';

const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        <div className='socialIcons d-flex justify-content-center'>
          <a href=''>
            {' '}
            <i className='fa-brands fa-facebook'></i>
          </a>
          <a href=''>
            {' '}
            <i className='fa-brands fa-instagram'></i>
          </a>
          <a href=''>
            {' '}
            <i className='fa-brands fa-twitter'></i>
          </a>
          <a href=''>
            {' '}
            <i className='fa-brands fa-google-plus'></i>
          </a>
          <a href=''>
            {' '}
            <i className='fa-brands fa-youtube'></i>
          </a>
        </div>
        <div className='footernav text-center'>
          <h4 className='white'>copyright @2023 | OrderKar</h4>
        </div>
      </div>
    </footer>
  )
}



function NewFooter()
{
  const year = new Date().getFullYear();
return(
          <>
          <div class="container">
            <footer class="py-5">
              <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label for="newsletter1" class="visually-hidden">Email address</label>
                      <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                      <button class="btn btn-primary" type="button">Subscribe</button>
                    </div>
                  </form>
                
                  <p>&copy; {year} Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                  <li></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><Icon name="Facebook" width={30} height={30} color="blue"/> </a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><Icon name="X" width={30} height={30} color="blue"/></a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><Icon name="Instagram" width={30} height={30} color="blue"/></a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><Icon name="WhatsApp" width={30} height={30} color="blue"/></a></li>
                </ul>
              </div>
            </footer>
          </div>
          </>
  );
}

export default NewFooter
