import React from "react";
import '../css/navigation2.css'
import { NavLink } from "react-router-dom";

const Nav1=()=>{
 return(
     <>
     <div className='nav1'>
         <img className="nav1Img1" src={require('../img/moorup-dark-green--2--1@1x.png').default}/>
         <div className='nav1div1'>
             <a href='#' className='navLi1'>
                Partners
             </a >
             <a href='#' className='navLi1'>
                Warranty
             </a>
         </div>
         <div className='nav1Body'>
             <img className="nav1Img2" src={require('../img/line-1-1@1x.png').default}/>
             <img className="nav1Img21" src={require('../img/line-2-1@1x.png').default}/>
             <img className="nav1Img22" src={require('../img/line-3-1@1x.png').default}/>


         </div>

     </div>
     </>

 )
}

export default Nav1;