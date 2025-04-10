import React from 'react'

const Portfolio = () => {
  return (
    <>
    {/* portfolio section start */}
<div className="portfolio_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1 className="portfolio_taital">My <span className="portfolio_taital_1">Portfolio</span></h1>
      </div>
    </div>
    <div className="portfolio_section">
      <div className="portfolio_section_2">
        <div className="row">
          <div className="col-md-8">
            <div className="container_main">
              <img src="images/img-1.png" alt className="image" />
              <div className="overlay">
                <div className="text">
                  <div className="btn_main">
                    <div className="buy_bt"><a href="#">See More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container_main">
              <img src="images/img-2.png" alt className="image" />
              <div className="overlay">
                <div className="text">
                  <div className="btn_main">
                    <div className="buy_bt"><a href="#">See More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_section_2">
        <div className="row">
          <div className="col-md-4">
            <div className="container_main">
              <img src="images/img-3.png" alt className="image" />
              <div className="overlay">
                <div className="text">
                  <div className="btn_main">
                    <div className="buy_bt"><a href="#">See More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container_main">
              <img src="images/img-4.png" alt className="image" />
              <div className="overlay">
                <div className="text">
                  <div className="btn_main">
                    <div className="buy_bt"><a href="#">See More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container_main">
              <img src="images/img-5.png" alt className="image" />
              <div className="overlay">
                <div className="text">
                  <div className="btn_main">
                    <div className="buy_bt"><a href="#">See More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="seemore_bt"><a href="#">See More</a></div>
  </div>
</div>
{/* portfolio section end */}

    
    </>
  )
}

export default Portfolio
