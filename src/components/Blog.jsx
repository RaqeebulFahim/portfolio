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
        <p className="blog_text">upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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
              <h4 className="prep_text">Veniam, quis nostrud </h4>
            </div>
            <p className="lorem_text">elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog_box">
            <div className="blog_img_2">
              <h4 className="date_text">Jun 05</h4>
              <h4 className="prep_text">Veniam, quis nostrud </h4>
            </div>
            <p className="lorem_text">elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog_box">
            <div className="blog_box_3">
              <div className="blog_img_3">
                <h4 className="date_text">Jun 05</h4>
                <h4 className="prep_text">Veniam, quis nostrud </h4>
              </div>
              <p className="lorem_text">elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
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
