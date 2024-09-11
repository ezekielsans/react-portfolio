import React from 'react'

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export  const About = () => {
  return (

    <section className={styles.section}>
<div className={styles.container}>
  <div className={styles.col}>
<div className={styles.title}>About Me</div>
<div className={styles.paragraphs}>
      <p>Kumusta? I'm Ezekiel Santos. I'm a Filipino web developer based in the Philippines.
         I love to explore where my curiosity leads me.
      Or most of my time is spent configuring/debugging. I'm not Italian, but there are times when I produce <span className={styles.term}>spaghetti code</span> 
        I’m an avid motoring enthusiast and try to spend time driving in various cities. Tanay, Rizal is a favorite.
      One of my past-time hobbies is drawing random things around me. Also, I take videos of places I've been to.</p>
      </div>
      </div>
      <div className={styles.col}>
        <img src={getImageUrl("bnw_profile.png")} alt="bnw_profile"/>
      </div>
      </div>
    </section>
 
  )
}

