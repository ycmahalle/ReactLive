import React from "react";
import Common from "./Common";
import Common2 from "./Common2";
const Services=()=>{
  return(
      <>
           <div className="page-heading mt-5 d-flex justify-content-center">
               <h1 className="text-center border-bottom "> &nbsp; Services &nbsp; </h1>
           </div>

           <div id="services" className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <Common 
                            name="HashKart"
                            visit="https://www.hashstar.in/"
                            btnName = "Shop Now"
                            desc = "We deliver your products to your customers whereever they need it."
                            imgs = "../img/cart.png"
                        />
                         <Common2 
                            name="Cataloging of your products by"
                            visit="https://play.google.com/store/apps/details?id=com.hashstar.india"
                            btnName = "Download Hashstar Seller App"
                            desc = "Your product catalogs are specially designed & drafted by Hashstar's expert photography & designing team ."
                            imgs = "../img/cat1.png"
                        />
                          <Common 
                            name="Packaging by"
                            visit="https://play.google.com/store/apps/details?id=com.hashstar.main"
                            btnName = "Order From Hashstar "
                            desc = "Packaging has always been an element of brand building. We have kept it untouched.. Your products.. Your brands.."
                            imgs = "../img/pac.png"
                        />
                    </div>
                </div>
           </div>
      </>
  );
}

export default Services;