import React from 'react'

import { FaFacebookF,
         FaGithub,
         FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css"
export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className={styles.container}>

      <div className={styles.footerContainer}>
      <h1>Copyright © {year}</h1>
      <h1>
     Designed and Developed by Ezekiel Santos
     </h1>

     <div className={styles.socials}>
        <a href=""> 
        <FaFacebookF className={styles.icons} />
       </a>
       <a href=""> 
       <FaGithub className={styles.icons}/>
       </a> <a href=""> 
       <FaLinkedin className={styles.icons}/>
       </a>
    
     </div>
     </div>
      </footer>
      
  )
}
