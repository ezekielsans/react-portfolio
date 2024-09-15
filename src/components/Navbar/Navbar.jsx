import React,{useState,useEffect} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLightMode,MdNightlight } from "react-icons/md";
import { IoClose } from "react-icons/io5";


import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"




export const Navbar = () => {
const [menuOpen,setMenuOpen] = useState(false);
const [toggleOn,setToggle] = useState(false);



  return (
    <nav className={styles.container}>
        <div className={styles.navbar}>
        <a href="" className={styles.title}><img src={getImageUrl("sun.png")} height="70px" alt="" /></a>
       
            <div className={styles.menu}>
                <div className={styles.menuBtn} onClick={()=> setMenuOpen(!menuOpen)}>
                  
                {menuOpen ? <IoClose/>  : <RxHamburgerMenu/> }
                  </div>
          
            <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
           
        </ul>
        <div className={styles.toggleBtn} onClick={()=>setToggle(!toggleOn)}>
          {toggleOn? <MdNightlight/> : < MdLightMode/>}
        
        </div>
        </div>    
        </div>    
        
    </nav>
  )
}

