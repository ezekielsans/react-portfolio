import React from 'react'

import styles from "./Services.module.css";
import { getImageUrl } from '../../utils';
export const Services = () => {
  return (
    <section className={styles.container} id='services'>
   
    <h1 className={styles.servicesTitle}>Services</h1>
<div className={styles.services}>
<div className={styles.servicesCard}>

    <h1 className={styles.serviceTitle}><img height="25px" src={getImageUrl("sun.png")} alt="sun" /> Web Development</h1>
    <h3 className={styles.serviceDescription}>Building responsive and scalable websites using the latest technologies. I specialize in creating dynamic web applications with a seamless user experience, covering both front-end and back-end development.</h3>
</div>
<div className={styles.servicesCard}>
    <h1 className={styles.serviceTitle}><img height="25px" src={getImageUrl("sun.png")} alt="sun" /> UI/UX Design</h1>
    <p className={styles.serviceDescription}>Creating user-centered designs that are both functional and visually appealing. I offer wireframing, prototyping, and full UI/UX design services to help bring your vision to life with a focus on enhancing usability.</p>
</div>
<div className={styles.servicesCard}>
    <h1 className={styles.serviceTitle}><img height="25px" src={getImageUrl("sun.png")} alt="sun" /> Graphic Design</h1>
    <p className={styles.serviceDescription}>Delivering high-quality graphic design solutions including branding, logos, social media graphics, and marketing materials. I help businesses establish a strong visual identity that resonates with their audience.</p>
</div>
</div>


    </section>
    
  )
}
