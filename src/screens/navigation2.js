import React from "react";
import '../css/navigation2.css'
import { NavLink } from "react-router-dom";

const Nav2=()=>{
 return(
     <>
     <div className='nav2'>
         <img className="navImg1" src={require('../img/moorup-dark-green--2--1@1x.png').default}/>
         <ul style={{display:'flex',textDecoration:'none'}}>
             <li style={{textDecoration:'none'}}>
                Partners
             </li>
             <li style={{textDecoration:'none'}}>
                Warranty
             </li>
         </ul>
         <div className='nav2Body'>
             <img className="navImg2" src={require('../img/line-1-1@1x.png').default}/>
             <img className="navImg2" src={require('../img/line-2-1@1x.png').default}/>
             <img className="navImg2" src={require('../img/line-3-1@1x.png').default}/>


         </div>

     </div>
     </>

 )
}

export default Nav2;