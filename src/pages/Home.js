import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="contaner-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid custom-img rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Super charged For Pro</h4>
                  <h5>ipad S13+ Pro</h5>
                  <p> From $999.0 to $41.62/Month</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-centre">
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Super charged For Pro</h4>
                    <h5>ipad S13+ Pro</h5>
                    <p> From $999.0 to $41.62/Month</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>ipad S13+ Pro</h5>
                    <p> From $999.0 to $41.62/Month</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p> From $999.0 to $41.62/Month</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Super charged For Pro</h4>
                    <h5>ipad S13+ Pro</h5>
                    <p> From $999.0 to $41.62/Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5" >
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-centre justify-content-between">
                <div className='d-flex align-items-centre gap-10'>
                  <img src="images/service.png" alt="services"/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>On all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-centre gap-10'>
                  <img src="images/service-02.png" alt="services"/>
                  <div>
                    <h6>Daily Surprise Offer</h6>
                    <p className='mb-0'>Save Up To 25% Off</p>
                  </div>
                </div>
                <div className='d-flex align-items-centre gap-10'>
                  <img src="images/service-03.png" alt="services"/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-centre gap-10'>
                  <img src="images/service-04.png" alt="services"/>
                  <div>
                    <h6>Affordable prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-centre gap-10'>
                  <img src="images/service-05.png" alt="services"/>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-centre">
                 <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                 </div>
                 <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera"/>
                 </div>
                 <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>SmartTV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"/>
                 </div>
                 <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music And Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Home;
