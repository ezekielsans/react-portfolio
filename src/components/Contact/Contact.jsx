import React from 'react'


import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <section className={styles.contactSection} id='contact'>
    <div className={styles.contactText}>
      <h1>Got a project in mind? A question?</h1>
      <h1>Let's turn that idea into something!</h1>
      <h1>I'd love to hear from you.</h1>
      <br />
      <br />
      <h1 className={styles.wordConnect}>Let's Connect!</h1>
    </div>
    <div className={styles.contactForm}>
      <form action='post'>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Input name.." />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Input email.." />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message..."></textarea>

        <button  type="submit">Send Message</button>
      </form>
    </div>
  </section>
  )
}
