import React from "react"; 
const Common2=(props)=>{
  return(
      <>
        <div className="container-fluid d-flex align-items-center" style={{height:"90vh",zIndex:'11'}}>
          <div className="row">
            <div className="col-10 col-xs-12 mx-auto">  
               <div className="row d-flex justify-content-center align-items-center">
                  <div data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" 
                   className="col-lg-6 col-xs-12 text-right order-2   order-lg-2">
                      <div className="cont  ">
                        <h2> {props.name}
                          <strong className="brand-name"> Hashstar </strong>
                        </h2>
                        <p className="mt-3">{props.desc}</p>
                        <div className="mt-3">
                          <a href={props.visit} className="btn btn-outline-info rounded-pill px-4 px-lg-3 downBtn">{props.btnName}</a>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 p-2 order-1 order-lg-1">
                      <img src={props.imgs} className="animated img-fluid" style={{zIndex:"1"}} />
                  </div>
               </div>
            </div>
          </div>
        </div>           
      </>
  );
}
export default Common2;