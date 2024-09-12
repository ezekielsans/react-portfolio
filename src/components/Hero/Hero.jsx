import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Type } from './Type'


import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';
export const Hero = () => {
  return (
    <section id="hero" className={styles.container}>

        <div className={styles.heroContainer}>

            <div className={styles.row}>
                <h1 className={styles.greeting}>Hello! I'm Ezekiel , My goal is to help you,</h1>
                </div>
            <div className={styles.row}>
                <h1 className={styles.type}><Type /></h1>
                </div>
        
                </div>
               
                </section>
  )
}
