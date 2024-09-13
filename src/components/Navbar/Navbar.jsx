import React,{useState} from 'react'

import { FaToggleOn,FaToggleOff  } from "react-icons/fa";


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
                <img className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                    alt="menu-button" 
                    onClick={()=> setMenuOpen(!menuOpen)}/>
          
            <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact"><FaToggleOn/></a></li>
        </ul>
        </div>    
        </div>    
        
    </nav>
  )
}

