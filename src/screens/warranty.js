import React,{useState} from "react";
import '../css/warranty.css'

const Warrranty =()=>{
    const[click,setClick]=useState(false);
    const toggleHandler=()=>{
        setClick(!click)
    }
    const[selected,setSelected]=useState('Choose Country');
    const updateInputValue=(e) => {
        e.preventDefault()
        const value=e.target.value;
        console.log(value)
          
          setSelected(value)
          setClick(false)
          console.log(click)
    }
    return(
        <>
         <div className="mainWarranty">
             <div>
             <div className='contWar'>
             <img style={{marginTop:'8%',width:'.6rem',marginLeft:'6%'}} src={require('../img/backward-arrow-3@1x.png').default}/>
             <div className="cont1War">Warranty & Support</div>
             <img style={{position:'absolute',top:'0px',zIndex:'-1',width:'100%',height:'40%'}} src={require('../img/filiberto-santillan-vzo-g6y3xlw-unsplash@1x.png').default}/>
             </div>
             <div className="bodyContWar">
                 <p className="para1War">
                      We provide extended warranty to all Moorup Verified Pre-Owned product to ensure confidence in the quality in
                      the products we offer.
                      <br/>
                      <br/>
                      As the warranty condition varies dependent on which channel or country you
                       have bought the product, so if you face any issues,&nbsp;&nbsp;check with the channel you have bought the
                       product through on how we best can help you.
          
                 </p>
                 <div className="cont2War">Choose your channel :</div>
                 <div className="cont3War">
                     <img src={require('../img/tisemobile@1x.png').default}/>
                    <p>
                        If you have any problems with your product, please contact Tise Mobile on &nbsp;
                        <a style={{color:'#1782ff'}} href="#" >shop@tisemobile.com</a>&nbsp;
                        or phone number; 994 46 999
                    </p>
                 </div>
                 <div className="cont3War">
                     <img src={require('../img/nortel-logo-gronn-2x@1x.png').default}/>
                     <p>
                     If you have any problems with your product, please contact Tise Mobile on &nbsp;
                     <a style={{color:'#1782ff'}} href="#">shop@tisemobile.com</a> &nbsp;
                     or phone number; 994 46 999
                     </p>
                 </div>
                 <div className="cont3War">
                     <img src={require('../img/power2@1x.png').default}/>
                     <p>
                     If you have any problems with your product, please contact nearest Power store.
                     </p>
                 </div>
                 
                  <div className="body-2-1-textW">
                    <div className="dropdown" onClick={toggleHandler}>
                        Choose Country
                        <img src={require('../img/icons8-expand-arrow-90.png').default}/>
                    </div>
                    {click?
            <div className="dropdown2">
                  <div className="drop2item" value="Norway" onClick={updateInputValue}>
                      <img style={{marginRight:'1rem'}} src={require('../img/norway.png').default}/>
                       Norway</div>
                  <div className="drop2item" value="Sweden" onClick={updateInputValue}> 
                  <img style={{marginRight:'1rem'}} src={require('../img/sweden.png').default}/>
                  Sweden</div>
                  <div className="drop2item" value="Denmark" onClick={updateInputValue}> 
                  <img style={{marginRight:'1rem'}} src={require('../img/denmark.png').default}/>
                  Denmark</div>
                  <div className="drop2item" value="Iceland" onClick={updateInputValue}>
                  <img style={{marginRight:'1rem'}} src={require('../img/iceland.png').default}/>
                       Iceland</div>
                  <div className="drop2item" value="England" onClick={updateInputValue}>
                  <img style={{marginRight:'1rem'}} src={require('../img/united-kingdom.png').default}/>
                       England</div> 
            </div>:null}
                  </div>
           
            
             </div>
             </div>
         </div>
        </>
    )
}
export default Warrranty;