import React from "react";
import '../css/home.css'

const HomePage=()=>{
    return(
        <>
         <div className="mainHome">
             <div className="cont">
                 <img className="img1" src={require('../img/herophone@1x.png').default} style={{width:"375px"}}/>
                 <h1 className="h11">Moorup Verified
                     <br/>
                     Pre-Owned
                 </h1>
                 <p className="p1">
                       In Moorup we believe the way to a more sustainable future is for all of us to keep the products we love
                       longer, and choose a preowned one once we want or need to replace it. A Moorup Verified Pre-Owned product is a
                        qualitative and trustworthy alternative to new in addition being more affordable.&nbsp;&nbsp;
              </p>
              <div>
              <div className="customHdiv">Customer Reviews</div>
              {/* <img className="img2" src={require('../img/group-14@1x.png').default}/>
              <img className="img3" src={require('../img/group-15@1x.png').default}/>
              <img className="img4" src={require('../img/group-14@1x.png').default}/>
              <img className="img5" src={require('../img/group-15@1x.png').default}/>  
              <img className="aimg1" src={require('../img/ellipse-24@1x.png').default}/>
              <img className="aimg2" src={require('../img/ellipse-26@1x.png').default}/>
              <img className="aimg3" src={require('../img/ellipse-27@1x.png').default}/>
              <img className="aimg4" src={require('../img/ellipse-25@1x.png').default}/> */}
              </div>
              <div className="whereCont">
                  Where to buy
                  <br/>
                  Verified Pre-Owned product?
              </div>
              <div className="dropCont">
                  Choose Country 
                  <img src={require('../img/icons8-expand-arrow-90.png').default}/>
              </div>
              <div className="whoHCont">Who are we</div>
              <p className="p2">  We are a Norwegian based circular economy company with a mission to extend the life of consumer
              electronics. By doing so, we want to contribute to resolve the environmental challenges 
              <br/>
              created by
              the production billions of electronic products manufactured every year.&nbsp;&nbsp;The way we do this is
              by delivering products and services which enable a true circular economy business model for the partners
              we work with.&nbsp;&nbsp;
              </p>
              <div className="LButton">
                  <a href="#">Learn More</a>
              </div>

              

             </div>
         </div>
        </>
    )
}
export default HomePage;