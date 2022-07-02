import React from 'react';
import marwa from "../../images/marwa.jpg"
import hamza from "../../images/hamza.jpg"
import './about.css'
  export default function About() {
   return (
   <>
      <div className="bg-light">    
         <div className="container">
            <div className="row text-center">
               <div className="col-sm-12 col-md-12 mb-4">
                     <h3 className="text-center mt-4 text-secondary">About Us</h3>
               </div>

               <div className="col-md-6">
                  <div className="mb-4">
                     <div className="image mx-auto">
                        <img src={marwa} className="rounded-circle z-depth-1 img-fluid"/>
                     </div>
                     <h4 className="font-weight-bold dark-grey-text mt-4">Marwa Khalid</h4>
                     <h6 className="font-weight-bold blue-text my-3">Developer</h6>
                     <p className="font-weight-normal dark-grey-text">
                        Good neeecee develooper</p>
                  </div>
               </div>

               <div className="col-md-6">
                  <div className="mb-4">
                     <div className="image mx-auto">
                        <img src={hamza} className="rounded-circle z-depth-1 img-fluid"/>
                     </div>
                     <h4 className="font-weight-bold dark-grey-text mt-4">Hamza Rana</h4>
                     <h6 className="font-weight-bold blue-text my-3">Developer</h6>
                     <p className="font-weight-normal dark-grey-text">
                        yes Grape 
                     future of Pakistan</p>
                  </div>
               </div>
            </div>
         </div> 
      </div> 
   </>
   );
}