import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.colText}>
          <div className={styles.title}><h3>About Me</h3></div>
          <div className={styles.paragraphs}>
            <p>
              Kumusta? I'm Ezekiel Santos. I'm a Filipino web developer based in the Philippines.
              <br /><br />
              I love to explore where my curiosity leads me. Or most of my time is spent configuring/debugging.
              <br /><br />
              I'm not Italian, but there are times when I produce <span className={styles.term}>spaghetti code</span>.
              <br /><br />
              I’m an avid motoring enthusiast and try to spend time driving in various cities. Tanay, Rizal is a favorite.
              <br /><br />
              One of my past-time hobbies is drawing random things around me. Also, I take videos of places I've been to.
            </p>
          </div>
        </div>
        <div className={styles.colImage}>
          <img src={getImageUrl("bnw_profile.png")} alt="bnw_profile" className={styles.profileImage} />
        </div>
      </div>
    </section>
  );
};
