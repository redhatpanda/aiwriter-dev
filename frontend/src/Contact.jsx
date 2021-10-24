import React, { useState } from "react";
// import "./index1.scss"


const Contact = () => {
  // const [data, setData] = useState({
  //   fullname: "",
  //   phone: "",
  //   email: "",
  //   msg: "",
  // });

  // const inputEvent = (event) => {
  //   const { name, value } = event.target;

  //   setData((preVal) => {
  //     return {
  //       ...preVal,
  //       [name]: value,
  //     };
  //   });
  // };

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   alert(
  //     `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`
  //   );
  // };

  return (
    <>
    <body>
  <section class="contact">
    <div class="content">
      <h2>Contact Us </h2>
      <p>Let us know how can we help.</p>
    </div>
    <div class="container">
      <div class="contactform">
        <form action="javascript:sendmail()" method="post">
          <h2>Send Message </h2>
          <div class="inputBox">
            <input id="Name" type="text" name="" required="required"/>
            <span>Name</span>
          </div>
          <div class="inputBox">
            <input id="Email" type="text" name="" required="required"/>
            <span>Email</span>
          </div>
          <div class="inputBox">

            <textarea id="Message" required="required"></textarea>
            <span>Message</span>
          </div>
          <div class="inputBox">
            <input type="submit" name="" value="Send"/>
          </div>
        </form>
      </div>
    </div>
  </section>
</body>
{/* <form action="">
  <h1>GET IN TOUCH</h1>
  <div className="inputbox">
    <input type="text" name="nimi" id="contact-name"/>
    <label for="contact-name" className="">NAME</label>
  </div>
  <div className="inputbox">
    <input type="text" name="email" id="contact-email"/>
    <label for="contact-email">EMAIL</label>
  </div>
  <div className="inputbox">
    <input type="text" name="question" id="contact-question"/>
    <label for="contact-question">ADDRESS</label>
  </div>
  <div className="inputbox textarea">
    <textarea name="question" id="contact-question2" cols="30" rows="3"></textarea>
    <label for="contact-question2">YOUR MESSAGE</label>
  </div>
  <button className="btncon">submit</button>
</form> */}
{/* 
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="mobile number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>

              <div className="col-12 mt-5">
                <button className="btn btn-outline-primary " type="submit">
                  Submit 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
