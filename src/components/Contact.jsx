import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const resetForm = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    // setFormData(()=>({}))
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
     axios.post("https://pharmacy.raqeebulfahim.com/api/contact/save",formData)
    // axios
    //   .post(
    //     "http://localhost/Project_pharmacy/admin_fahim/api/contact/save",
    //     formData
    //   )
      .then((res) => {
        console.log(res);
        resetForm.current.reset();

        toast.success("Message send", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      {/* contact section start */}
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="contact_taital">
                My <span className="contact_taital_1">Contact</span>
              </h1>
            </div>
          </div>
          {/* form start  */}
          <form ref={resetForm} onSubmit={handleSubmit}>
            <div className="contact_section_2">
              <div className="row">
                <div className="col-md-12">
                  <div className="mail_section_1">
                    <input
                      onChange={handelChange}
                      type="text"
                      className="mail_text"
                      placeholder="Your Name"
                      name="name"
                    />
                    <input
                      onChange={handelChange}
                      type="text"
                      className="mail_text"
                      placeholder="Your Email"
                      name="email"
                    />
                    <input
                      onChange={handelChange}
                      type="text"
                      className="mail_text"
                      placeholder="Your Phone"
                      name="phone"
                    />
                    <textarea
                      onChange={handelChange}
                      className="massage-bt"
                      placeholder="Your Massage"
                      rows={5}
                      id="comment"
                      name="message"
                    />
                    <div className="send_bt">
                      {" "}
                      <button
                        className="btn btn-warning"
                        type="submit"
                        href="#"
                      >
                        Send Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* form end  */}
        </div>
      </div>
      {/* contact section end */}

      {/* project box section start */}
      <div className="project_box">
        <div className="container">
          <div className="project_main">
            <h1 className="hire_text">Hire me for your projects</h1>
            <div className="callnow_bt">
              <a href="tel:+8801701005439">
                <i className="fa fa-phone" aria-hidden="true" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* project box section end */}
    </>
  );
};

export default Contact;
