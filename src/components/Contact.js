import React from 'react'

const Contact = () => {
  return (
    <section className='contact sect'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <h2 className='text-center'>Contact Us</h2>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput' className='form-label'>
                Full Name
              </label>
              <input
                type='text'
                className='form-control'
                id='formGroupExampleInput'
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput2' className='form-label'>
                Email
              </label>
              <input
                type='text'
                className='form-control'
                id='formGroupExampleInput2'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput3' className='form-label'>
                Restaurant Name
              </label>
              <input
                type='text'
                className='form-control'
                id='formGroupExampleInput3'
                placeholder='Enter your Restaurant Name'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='exampleFormControlTextarea1'
                className='form-label'
              >
                Message
              </label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
              ></textarea>
            </div>
            <div className='d-flex justify-content-center'>
              <button className='Cbutton'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
