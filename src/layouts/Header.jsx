import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <NavLink to={"/home"}>
                <img src="images/logo.png" />
              </NavLink>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li>
                  <NavLink className="nav-link" to="/home">
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                {/* <li ><NavLink className="nav-link" to="/about"> About </NavLink></li> */}
                <li>
                  <NavLink className="nav-link" to="/portfolio">
                    {" "}
                    Portfolio{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/service">
                    {" "}
                    Service{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/blog">
                    {" "}
                    Blog{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/contact">
                    {" "}
                    Contact Us{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* banner section start */}
        <div className="banner_section layout_padding">
          <section className="slide-wrapper">
            <div className="container-fluid">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to={1} />
                  <li data-target="#myCarousel" data-slide-to={2} />
                  <li data-target="#myCarousel" data-slide-to={3} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="banner_taital_main">
                            <h3 className="banner_text">
                              Hello, I'm <br />
                              Raqeebul Hasan Fahim
                            </h3>
                            <h1 className="banner_taital">Web Developer</h1>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="social_icon">
                            <ul>
                              <li>
                                <a href="https://www.facebook.com/raqeebulfahim1"
                                target="_blank"
                                rel="noopener noreferrer">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.x.com/raqeebulfahim"
                                target="_blank"
                                rel="noopener noreferrer">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.linkedin.com/in/raqeebulfahim"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.instagram.com/raqeebul_fahim"
                                target="_blank"
                                rel="noopener noreferrer">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </a>
                              
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          {/* <div className="banner_taital_main">
                            <h3 className="banner_text">
                              Hello Am <br />
                              Joy Seno
                            </h3>
                            <h1 className="banner_taital">UI/UX Designer</h1>
                          </div> */}
                          <div className="banner_taital_main">
                            <h3 className="banner_text">
                              Hello, I'm <br />
                              Raqeebul Hasan Fahim
                            </h3>
                            <h1 className="banner_taital">
                              WordPress Developer
                            </h1>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="social_icon">
                          <ul>
                              <li>
                                <a href="https://www.facebook.com/raqeebulfahim1"
                                target="_blank"
                                rel="noopener noreferrer">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.x.com/raqeebulfahim"
                                target="_blank"
                                rel="noopener noreferrer">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.linkedin.com/in/raqeebulfahim"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.instagram.com/raqeebul_fahim"
                                target="_blank"
                                rel="noopener noreferrer">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </a>
                              
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          {/* <div className="banner_taital_main">
                            <h3 className="banner_text">
                              Hello Am <br />
                              Joy Seno
                            </h3>
                            <h1 className="banner_taital">UI/UX Designer</h1>
                          </div> */}
                          <div className="banner_taital_main">
                            <h3 className="banner_text">
                              Hello, I'm <br />
                              Raqeebul Hasan Fahim
                            </h3>
                            <h1 className="banner_taital">Laravel Developer</h1>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="social_icon">
                          <ul>
                              <li>
                                <a href="https://www.facebook.com/raqeebulfahim1"
                                target="_blank"
                                rel="noopener noreferrer">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.x.com/raqeebulfahim"
                                target="_blank"
                                rel="noopener noreferrer">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.linkedin.com/in/raqeebulfahim"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.instagram.com/raqeebul_fahim"
                                target="_blank"
                                rel="noopener noreferrer">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </a>
                              
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          {/* <div className="banner_taital_main">
                            <h3 className="banner_text">
                              Hello Am <br />
                              Joy Seno
                            </h3>
                            <h1 className="banner_taital">UI/UX Designer</h1>
                          </div> */}
                          <div className="banner_taital_main">
                            <h3 className="banner_text">
                              Hello, I'm <br />
                              Raqeebul Hasan Fahim
                            </h3>
                            <h1 className="banner_taital">
                              React Developer
                            </h1>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="social_icon">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="video_bt">
              <div className="play_icon">
                <img src="images/play-icon.png" />
              </div>
            </div>
          </div>
        </div>
        {/* banner section end */}
      </div>
    </>
  );
};

export default Header;
