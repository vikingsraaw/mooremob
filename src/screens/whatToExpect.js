import React from "react";
import '../css/whatToExpect.css'

const WhatToExpect=()=>{

return(
 <>
 <div className="mainWhat">
     <div className="contWhat">
         <img className="img1" style={{height:'10%',width:"100%",objectFit:"cover"}} src={require('../img/arnel-hasanovic-4owsxdeas2g-unsplash@1x.png').default}/>
         <div className="bodyCont">
              <div className="contH1">What to Expect</div>
              <p className="contP1">
                   You must be wandering what is the meaning of Moorup? It simnply means “LIFE” in the Woi Wurrung language of
                   Australia’s First Nations people. A name we share with our sister company Moorup Australia.
                  <br/>
                  <br/>
                  We
                  are a Norway-based technology company, whose mission is to extend the lives of consumer electronics, and by
                  doing so, help to address the environmental challenges left behind from the production and the lack of
                  solutions that make reuse and recycling convenient. Our team of telecommunication experts utilizes their
                  networks to deliver tailored solutions to partners and channels across Europe.
          </p>
          <div className="cont2W">
              <img  style={{height:"1rem",width:"1rem",marginLeft:"8%"}}src={require('../img/path-10-3@1x.png').default}/>
              <div className="whereButton">Where to purchase?</div>
          </div> 
          <img  className="img2What" src={require('../img/group-89@1x.png').default}/>
          <div  className='contH1'>Frequently asked question</div>
          <div className="cont3W">
              <p>Why choose a Moorup Verified Pre-Owned <br/> product, instead of new one ?</p>
               <div className='addW'> + </div>
          </div>
          <div className="cont4W">
               <p>Environment:Today, an estimated 1.5 billion telephones are produced every single year, which has a <br/>significant environmental impact. It is as safe as buying new, but cheaper and immnesly beneficial for our planet </p>
             </div>
             <div className="cont5W">Is is safe to buy preowned products ?</div>
             <p className="para2W">
            YES! It is just as safe to buy a Moorup Verified Pre-Owned product as it is to buy a new one. All products
            have been through Moorup’s Quality Assurance Process, and are sold with a warranty. If the product has been
            refurbished, it has been done with original parts and by service partners authorized by the manufacturer.
          </p>
          <div className="cont5W">Where do products come from ?</div>
          <p className="para2W">
            All Moorup Verified Pre-Owned products are returns from returns from trade in and buy back programs, either
            from mobile operators or vendors directly.
          </p>
          <div className="cont5W">What does the warranty cover ?</div>
          <p className="para2W">
            Moorup Verified Pre-Owned warranty depends on the product category and from which partner it has been bought
            from. It has the same cover as issued by the manufacturer when the product was new. Though self-inflicted
            damages such as broken screen, etc. are naturally not covered.
          </p>
          <div className="cont5W">What about battery capacity ?</div>
          <p className="para2W">   
            Battery is a degrading&nbsp;&nbsp;product. When buying a used electronic product, it is normal for the
            battery capacity to be somewhat reduced from when it was new. However, Moorup guarantees that all products
            have a minimum of 85% remaining battery capacity.
          </p>
          <div className="cont5W">
            What is meant by the Quality Assurance 
            <br/>
            Process ?
            </div>
          <p className="para2W">
            First, the product is cosmetically checked for usage marks and any damage. Only the finest slip through and
            undergo a thorough testing process to eventually be classified as Moorup Verified Pre-Owned.
            <br/>
            <br/>
            For
            testing, the product is connected (if it is a phone or tablet) to Moorup’s diagnostic tool to verify that
            all functionalities such as camera, speaker, microphone, physical buttons, sensors and screen features are
            in good working order.
            <br/>
            <br/>
            The battery is checked and tested to confirm 85% remaining capacity.
            <br/>
            <br/>
            All
            content is deleted and the operating system is reinstalled with the latest version.
            <br/>
            <br/>
            Finally, the
            product is cleaned before packing it in the recyclable box.
            </p>
            <div className="cont5W">
                Still cant't find what you are looking for ?
            </div>
            <div className="cont5W">
                Contact us today :
            </div>
            <p className="para2W">
                Phone Number:+47 994 46 688
                <br/>
                <br/>
                Email: contact@moorup.com
            </p>
         </div>
     </div>
 </div>
 </>
)
}
export default WhatToExpect;