import React from 'react'

const Blog = () => {
  return (
   <>
    {/* blog section start */}
<div className="blog_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1 className="blog_taital">My <span className="blog_taital_1">Blog</span></h1>
        <p className="blog_text">Mastering Full-Stack Web Development: From PHP & Laravel to React & Vue"</p>
      </div>
    </div>
  </div>
  <div className="blog_section_2">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="blog_box">
            <div className="blog_img">
              <h4 className="date_text">Jun 05</h4>
              <h4 className="prep_text">PHP Developer </h4>
            </div>
            <p className="lorem_text">As a PHP developer, I build dynamic, secure web applications using PHP, Laravel, and MySQL. I follow best practices, write clean code, and integrate APIs, payment gateways, and authentication systems, delivering scalable solutions with strong front-end and back-end integration.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog_box">
            <div className="blog_img_2">
              <h4 className="date_text">Jun 05</h4>
              <h4 className="prep_text">Laravel Developer</h4>
            </div>
            <p className="lorem_text">As a Laravel developer, I build secure, scalable web applications using MVC architecture, Eloquent ORM, and RESTful APIs. I focus on clean code, efficient routing, authentication, and seamless database integration.


            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog_box">
            <div className="blog_box_3">
              <div className="blog_img_3">
                <h4 className="date_text">Jun 05</h4>
                <h4 className="prep_text">React developer</h4>
              </div>
              <p className="lorem_text">As a React developer, I build responsive, component-based interfaces using hooks and state management. I focus on clean code, API integration, and delivering fast, user-friendly web applications across devices.

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="readmore_bt_1"><a href="#">Read More</a></div>
    </div>
  </div>
</div>
{/* blog section end */}

   </>
  )
}

export default Blog
