import React from "react"; 
const Common=(props)=>{
  return(
      <>
        <div className="container-fluid nav_bg d-flex align-items-center" style={{height:"70vh",zIndex:"11"}}>
          <div className="row">
            <div className="col-10 col-xs-12 mx-auto">  
               <div className="row d-flex justify-content-center align-items-center">
                  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  className="col-lg-6 col-xs-12 order-2 order-lg-1">
                      <div className="cont w-75">
                        <h2> {props.name}
                          <strong className="brand-name"> Hashstar </strong>
                        </h2>
                        <p className="mt-3">{props.desc}</p>
                        <div className="mt-3">
                          <a href={props.visit} className="btn btn-outline-info rounded-pill px-4 px-lg-3 downBtn">{props.btnName}</a>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-6 p-2 order-1 order-lg-2">
                      <img data-aos="fade-left"
                             src={props.imgs} className="animated img-fluid"  style={{zIndex:"1"}} />
                  </div>
               </div>
            </div>
          </div>
        </div>           
      </>
  );
}
export default Common;