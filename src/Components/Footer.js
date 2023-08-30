import React from 'react'

const Footer    = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-centre">
          <div className="col-5">
            <div className='footer-top data d-flex gap-30 align-items-centre'>
              <img src='images/newsletter.png' alt='newsletter'/>
              <h2 className='mb-0 text-white'>SignUp For Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group-text ">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2 " id="basic-addon2">
                  Subscribe
                </span>
              </div>
          </div>

        </div>
      </div>
    </footer>
    <footer className='py-3'>
   
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">$Copy;{new Date().getFullYear()}; Powered By DEV</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer   ;