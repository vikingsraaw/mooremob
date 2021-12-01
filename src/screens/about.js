import React from "react";
import '../css/about.css'
 const About =()=>{

     return(
       <>
       <div className='mainAbout'>
           <div style={{width:'100%'}}>
               <div className="cont1Ab">
                   <img className="img1Ab" src={require('../img/backward-arrow-3@1x.png').default}/>
                   <div  className="cont-1Ab">About us</div>
                   <div  className="cont-2Ab">
                       <img src={require('../img/path-56@1x.png').default}/>
                   </div>
               </div>
               <div className="bodyAb">
                   <div className="bodyAb1">Who are we ?</div>
                   <p className="paraAb1">
                       We are a Norwegian based circular economy company with a mission to extend the life of consumer electronics.
                       By doing so, we want to contribute to resolve the environmental challenges created by the production of
                       billions of electronic products produced every year.&nbsp;&nbsp;The way we do this is to deliver products and
                       services that enables a true circular economy business model for the partners we work with.
                  </p>
                  <div className="bodyAb1">Our Mission</div>
                  <p className="paraAb1">                
                      Our mission of ‘Saving the planet one smartphone at a time’ might sound trivial, but we actually believe that
                      our efforts, big or small, have a positive contribution to the world around us.
                  </p>
                  <div className="bodyAb1">The Team</div>
                  <p className="paraAb1">
                      We are a highly experienced global team from the telecom and consulting sector, giving the assurance we are a
                       trusted partner to rely on.
                  </p>
                  <div className="bodyAb1">The Moorup Team</div>
                  <div className="bodyAb2">
                      <img src={require('../img/andersbw@1x.png').default}/>
                      <div className="bodyAb-2">
                          <span className="spanAb1"> Anders Landergren
                              <br/>
                          </span>
                          <span className="spanAb2">
                          Co-Founder & CEO
                          </span>
                          <p className="paraAb2">
                             25 years commercial experience from Telecom, recently as Global Head of Devices in Telenor Group. Anders has
                             worked&nbsp;&nbsp;across Europe and Asia for Telenor and Brightstar and held multiple commercial management
                              positions.
                         </p>
                      </div>
                  </div>
                  <div className="bodyAb2">
                      <img src={require('../img/sameerbw@1x.png').default}/>
                      <div className="bodyAb-2">
                          <span className="spanAb1"> 
                          Sameer Sikander
                              <br/>
                          </span>
                          <span className="spanAb2">
                              COO
                          </span>
                          <p className="paraAb2">
                                      
                      Sameer has a long global track record from the Telecom industry within commercial and supply chain
                      management. Last 10 years in Brightstar where he recently has managed Brightstars buy back business out of
                        Hong Kong.
          
                         </p>
                      </div>
                  </div>
                  <div className="bodyAb2">
                      <img src={require('../img/sundarabw@1x.png').default}/>
                      <div className="bodyAb-2">
                          <span className="spanAb1"> 
                          Sundara Rajan
                              <br/>
                          </span>
                          <span className="spanAb2">
                              CTO
                          </span>
                          <p className="paraAb2">
                             
                        Sundara’s background spans accross multiple companies and sectors as CTO and as a consultant. Before joining
                      Moorup he was CTO in Admincontrol AS – part of Visma
          
                         </p>
                      </div>
                  </div>
                  <div className='bodyAb1'>The Board</div>
                  <div className="bodyAb3">
                      <div className='bodyAb3-1'>
                      <img src={require('../img/anderslierbw@1x.png').default}/>
                       <p className='pAb3'>Anders Lier</p>
                       <p className='pAb4'> Chairman of The Board</p>
                      </div>
                      <div className='bodyAb3-1'>
                      <img src={require('../img/rolv-erikbw@1x.png').default}/>
                       <p className='pAb3'>Rolv-Erik Spilling</p>
                       <p className='pAb4'>Director</p>
                      </div>
                      <div className='bodyAb3-1'>
                      <img src={require('../img/nicolaibw@1x.png').default}/>
                       <p className='pAb3'>Nicolai Halbo</p>
                       <p className='pAb4'>Director</p>
                      </div>
                      <div className='bodyAb3-1'>
                      <img src={require('../img/raj-j-bw@1x.png').default}/>
                       <p className='pAb3'>Raj Kapoor</p>
                       <p className='pAb4'>Director</p>
                      </div>
                      <div className='bodyAb3-1'>
                      <img src={require('../img/john-chambersbw@1x.png').default}/>
                       <p className='pAb3'>John Chambers</p>
                       <p className='pAb4'>Director</p>
                      </div>
                  </div>
                  <div className="bodyAb1">Advisors</div>
                  <div className="bodyAb6">
                        <div className='bodyAb6-1'>
                         <img src={require('../img/abrahambw@1x.png').default}/>
                         <p className='pAb5'>Abraham Foss</p>
                         <p className='pAb6'>Advisor</p>
                         </div>
                         <div className='bodyAb6-1'>
                         <img src={require('../img/david-012-edited@1x.png').default}/>
                         <p className='pAb5'>David
                                             <br/>
                                            Nanayakkara
                         </p>
                         <p className='pAb6'>Advisor</p>
                         </div>
                  </div>
                  
               </div>
           </div>
       </div>
       </>
     )
 }

 export default About;