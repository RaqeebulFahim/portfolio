import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer section start */}
      <div className="footer_section">
        <div className="container">
          <div className="location_text">
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps?q=Dhaka,+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-map-marker" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="tel:+8801701005439">
                  <i className="fa fa-phone" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="mailto:raqeebulfahim@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer section end */}

      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
          © 2025 All Rights Reserved 
            <a href="https://raqeebulfahim.com"> | Raqeebul Hasan Fahim</a>
          </p>
        </div>
      </div>
      {/* copyright section end */}
    </>
  );
};

export default Footer;
