import React from "react";
import '../css/contact.css'

const Contact=()=>{
    return(
        <>
            <div className='mainC'>
                <div style={{width:'100%'}}>
                    <div className='contC'>
                        <img className='img1C' src={require('../img/backward-arrow-1@1x.png').default}/>
                        <div className='contC1'>Contact Us</div>
                        <img className='img2C' src={require('../img/szabo-viktor-ve1as8yojrs-unsplash-1@1x.png').default}/>

                    </div>
                    <div className='bodyC'>
                        <div className='bodyC1 '>Get in Touch:</div>
                        <div className='bodyC2'>
                            Leave us a message, and we will get in touch with you as soon as possible
                        </div>
                        <form>
                            <div style={{marginTop:'3%'}} className='inputEle'>
                                <input name='name' type='text' placeholder='Your Name'></input>
                            </div>
                            <div className='inputEle'>
                                <input name='name' type='text' placeholder='Your Email Address'></input>
                            </div>
                            <div  className="inputEle">
                    
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Type Your Message'></textarea>
                </div> 
                <button className='buttonC'>
                    <img src={require('../img/path-238-1@1x.png').default}/>
                    Send
                </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;