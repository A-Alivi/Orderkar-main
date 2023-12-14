import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        <div className='socialIcons'>
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

export default Footer
