import React from 'react'


import { IconContext } from 'react-icons/lib';
import {
  SiGithub,
  SiLinkedin ,
SiFacebook
  } from 'react-icons/si';


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
     <IconContext.Provider value={{color:"blue"}}>
      <a href="">
       {SiGithub}</a>
       <a href="">
        {SiFacebook}
        </a>
        <a href=""> hello
       {SiLinkedin}
       </a>
       </IconContext.Provider>
     </div>
     </div>
      </footer>
  )
}
