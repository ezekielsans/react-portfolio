import React from 'react';
import styles from "./Services.module.css";
import { getImageUrl } from '../../utils';

export const Services = () => {
  return (
    <section className={styles.container} id='services'>
      <h2 className={styles.servicesTitle}>Services</h2>
      <div className={styles.services}>
        <ServiceCard 
          title="Web Development" 
          description="Building responsive and scalable websites using the latest technologies. I specialize in creating dynamic web applications with a seamless user experience, covering both front-end and back-end development." 
        />
        <ServiceCard 
          title="UI/UX Design" 
          description="Creating user-centered designs that are both functional and visually appealing. I offer wireframing, prototyping, and full UI/UX design services to help bring your vision to life with a focus on enhancing usability." 
        />
        <ServiceCard 
          title="Graphic Design" 
          description="Delivering high-quality graphic design solutions including branding, logos, social media graphics, and marketing materials. I help businesses establish a strong visual identity that resonates with their audience." 
        />
      </div>
    </section>
  );
};

// Extracted component for each service card
const ServiceCard = ({ title, description }) => (
  <div className={styles.servicesCard}>
    <h3 className={styles.serviceTitle}>
      <img height="25px" src={getImageUrl("sun.png")} alt="sun" /> {title}
    </h3>
    <p className={styles.serviceDescription}>{description}</p>
  </div>
);
