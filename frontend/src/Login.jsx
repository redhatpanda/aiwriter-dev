import React, { useState } from "react";
import "./index.css";

const Login = () =>{
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
        <h2>WELCOME</h2>
        <p>
          {name} <br/> We are happy to have you as a user
        </p>
        <a className="btn1" href="./register">SIGN UP</a>
      </div>
    </div>
    <div className="col-right">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <p>
            <input type="text" placeholder="Username" required onChange={inputEvent}  />
          </p>
          <p>
            <input type="password" placeholder="Password" required />
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
       <h1 className="logh1">Welcome { name}</h1>
       <input className="loginput" type="text" placeholder="enter your name" onChange={inputEvent} />
       <input className="loginput" type="password" placeholder="enter your password" />
       <button className="logbtn">click me</button>
       <h5 className="logh3"><a href="./register">register here</a></h5>
       </div> */}
        </>

    );

}

export default Login;