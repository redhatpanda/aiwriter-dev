import React, { useState } from "react";
import "./index.css";

const Register = () =>{
    const [name, setName] = useState();

    const inputEvent =(event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    }
    return(
        <>

<div className="wrapper">
  <div className="container">
    <div className="col-left">
      <div className="login-text">
        <h2>HELLO</h2>
        <p>
          {name} 
        </p>
        <h3>HAPPY TO SEE YOU</h3>
       
        <a className="btn1" href="./login">SIGN IN</a>
        
      </div>
    </div>
    <div className="col-right">
      <div className="login-form">
        <h2>Sign In</h2>
        <form>
          <p>
            <input type="text" placeholder="Yourname" required onChange={inputEvent}  />
          </p>
          <p>
            <input type="email" placeholder="email" required onChange={inputEvent}  />
          </p>
          <p>
            <input type="password" placeholder="Password" required />
          </p>
          <p>
            <input type="password" placeholder="Confirm Password" required />
          </p>
          <p>
            <input className="btn1" type="submit" value="Sing In" />
          </p>
          <p>
            <a href="">Forget password?</a>
           
          </p>
        </form>
      </div>
    </div>
  </div>
  
</div>
        {/* <div className="logdiv">
       <h1 className="logh1">Hello { name}</h1>
       <input className="loginput" type="text" placeholder="enter your name" onChange={inputEvent} />
       <input className="loginput" type="email" placeholder="enter your email" />
       <input className="loginput" type="password" placeholder="enter your password" />
       <input className="loginput" type="password" placeholder="confirm your password" />
       <button className="logbtn">Submit</button>
       <h5 className="logh3"><a href="./login">LogIn here</a></h5>
       </div> */}
        </>

    );

}

export default Register;