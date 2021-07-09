import React from "react"; 

const Contact=()=>{
  return(
      <>
          
        <div className="container-fluid  ">
          <div className="row">
          <div className="page-heading mt-5 d-flex justify-content-center">
               <h1 className="text-center border-bottom "> &nbsp; Contact us &nbsp; </h1>
           </div>
            <div className="col-10 col-xs-12 mx-auto">  

            <div className="row d-flex justify-content-center align-items-center">
                  <div data-aos="fade-right" className="col-lg-6 row col-xs-12 order-2 order-lg-1">
                     
                    <div className="col-2"></div>
                      <form action=""  className="col-8">
                        <div class="mb-3">
                          <label for="Name" class="form-label">Name </label>
                          <input type="email" class="form-control" id="Name" placeholder="Your Good Name please" />
                        </div>
                        <div class="mb-3">
                          <label for="email" class="form-label">Email address</label>
                          <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                          <label for="query" class="form-label"> Query :</label>
                          <textarea class="form-control" id="query" name="query" rows="3" placeholder="message..."></textarea>
                        </div>
                        <div className="mb-3">
                          <input type="submit" className="btn btn-outline-info w-50" />
                        </div>
                      </form>
                     
                     </div>
                  <div className="col-lg-6 p-2 order-1 order-lg-2">
                      <img  data-aos="fade-left"
                            src="../img/cont1.png" 
                            className="animated rounded-pill img-fluid"/>
                  </div>
               </div>
             
            </div>
          </div>
        </div>    
      </>
  );
}

export default Contact;
