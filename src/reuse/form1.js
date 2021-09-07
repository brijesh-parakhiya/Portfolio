import React from "react";
import "./form.css"



function form1(props) {
    return (
        <div>
        
        
           <form className="reuse">
               <label>{props.name}</label>
               
               <br />
               <label>{props.email}</label>
               
               <br />
               <label>{props.contact}</label>
               
           </form>
        </div>
    )
}

export default form1
