import React from "react";
import Common from "./Common";
const About=()=>{
  return(
      <>
       <div className="page-heading mt-5 d-flex justify-content-center">
               <h1 className="text-center border-bottom ">&nbsp; About Us &nbsp; </h1>
           </div>
        <Common
           name = "Welcome to About Page"
           visit ="/contact"
           btnName = "Contact us"
           desc = "We are here to Take your shop online"
           imgs ="../img/shop.png"
        />
      </>
  );
}

export default About;