import React from "react";
import form from "../src/Image/form.svg"


const Ai =()=>{
    return(
        <>
  

<div className="divcls">
<div className="img">
        <img src={form} alt="" />
    </div>
    <form className="formcls">
        
        <h1>AI PAGE</h1>
        <div id="input"> 
            <input class="input-elements" type="text" name="username" placeholder="Title"/><br/>
            <input class="input-elements" type="text" name="username" placeholder="Sub-Title"/><br/>
            <input class="input-elements" type="text" name="username" placeholder="catagory"/><br/>
            <input class="input-elements" type="text" name="username" placeholder="Sub-catagory"/><br/>
            <input class="input-elements" type="email" name="email" placeholder="Email"/><br/>
            <input class="input-elements" type="text" name="username" placeholder="keyword"/><br/>
            <input class="input-elements" type="text" name="username" placeholder="Abstract"/><br/>
            
           
            <input id="button" type="submit" value="submit"/>
        </div>
      
    </form>
    
    </div>

    
        </>
    )

}

export default Ai;