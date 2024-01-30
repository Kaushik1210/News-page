import React, { useRef, useState } from 'react'
import './navbar.css'
import image from '../../image'
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { CircleFlag } from 'react-circle-flags'

const Navbar = ({setCategory,setCountry}) => {

  const [toggleMenu,setToggleMenu] = useState(false)
const [countryMenu,setCountryMenu] =useState(false)

const countryRef=useRef();
const countryDropDownRef=useRef();

window.addEventListener("click",(e)=>{
  if( e.target !== countryRef.current &&e.target !== countryDropDownRef.current){
    setCountryMenu(false)
  }
}) 

  return (
    <div className='navbar_container'>
        <div   >
          <img className="" ref={countryRef} onClick={()=>setCountryMenu(!countryMenu)} src={image.newslogo} />

          {countryMenu &&(
            <div className='dim_con'>
      <div ref={countryDropDownRef} className="country_dropdown_menu">
        <li><div onClick={()=>setCountry("in")}><CircleFlag countryCode="in" height="35" /> INDIA </div></li>                  
        <li><div onClick={()=>setCountry("us")}><CircleFlag countryCode="us" height="35" /> UNITED STATES OF AMERICA</div> </li>
        <li><div onClick={()=>setCountry("au")}><CircleFlag countryCode="au" height="35" /> AUSTRALIA</div> </li>
        <li><div onClick={()=>setCountry("gb")}><CircleFlag countryCode="gb" height="35" /> UNITED KINGDOM	</div> </li>
        <li><div onClick={()=>setCountry("pk")}><CircleFlag countryCode="pk" height="35" /> PAKISTAN</div> </li>
        <li><div onClick={()=>setCountry("cn")}><CircleFlag countryCode="cn" height="35" /> CHINA</div> </li>
      </div>
      </div>
      )}
        </div>       
        <div  className="menu">
            <li><div onClick={()=>setCategory("general")}>General</div></li>
            <li><div onClick={()=>setCategory("health")}>Health</div></li>
            <li><div onClick={()=>setCategory("science")}>Science</div></li>
            <li><div onClick={()=>setCategory("technology")}>Technology</div></li>
            <li><div onClick={()=>setCategory("business")}>Business</div></li>
            <li><div onClick={()=>setCategory("entertainment")}>Entertainment</div></li>
            <li><div onClick={()=>setCategory("sports")}>Sports</div></li>           
        </div>    

        <div className="hamburger"  onClick={()=>setToggleMenu(!toggleMenu)} >
               {toggleMenu?<IoCloseSharp  className='close_menu' />:<RiMenu4Fill  className='menu_bar'  />}

               {toggleMenu && (
          <div className="dim_cat">
          <div className="hamburger_menu">
             <li><div onClick={()=>setCategory("health")}>Health</div></li>
            <li><div onClick={()=>setCategory("science")}>Science</div></li>
            <li><div onClick={()=>setCategory("technology")}>Technology</div></li>
            <li><div onClick={()=>setCategory("business")}>Business</div></li>
            <li><div onClick={()=>setCategory("entertainment")}>Entertainment</div></li>
            <li><div onClick={()=>setCategory("sports")}>Sports</div></li> 
          </div>
          </div>  
        )}
        </div>     
    </div>
  )
}

export default Navbar
