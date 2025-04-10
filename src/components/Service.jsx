import React from 'react'

const Service = () => {
  return (
    <>
      {/* services section start */}
<div className="services_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1 className="services_taital">My <span className="portfolio_taital_1">Services</span></h1>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="services_section_2">
      <div className="row">
      <div className="col-lg-3 col-sm-6">
          <div className="box_main ">
            <div className="app_icon"><img src="images/icon-2.png" /></div>
            <div className="app_icon_1"><img src="images/icon-6.png" /></div>
            <h4 className="services_text">Website Design</h4>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="box_main ">
            <div className="app_icon"><img src="images/icon-1.png" /></div>
            <div className="app_icon_1"><img src="images/icon-1.png" /></div>
            <h4 className="services_text active">App Design</h4>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="box_main ">
            <div className="app_icon"><img src="images/icon-3.png" /></div>
            <div className="app_icon_1"><img src="images/icon-7.png" /></div>
            <h4 className="services_text">Html And Css</h4>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="box_main ">
            <div className="app_icon"><img src="images/icon-4.png" /></div>
            <div className="app_icon_1"><img src="images/icon-8.png" /></div>
            <h4 className="services_text">Logo Design</h4>
          </div>
        </div>
      </div>
      <div className="readmore_bt"><a href="#">Read More</a></div>
    </div>
  </div>
</div>
{/* services section end */}

    </>
  )
}

export default Service
