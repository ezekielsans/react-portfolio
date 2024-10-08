import React from 'react'

export const Techstack = () => {
  return (
    <div className={styles.techStackRow}>
    <h1 className={styles.techStack}>Tech stack</h1>
    <div className={styles.techContainer}>
        <ul className={styles.techMenu}>
            <li><img src={getImageUrl("skills/html.png")} height="50px" alt="html" /> <h3>HTML</h3></li>
            <li><img src={getImageUrl("skills/css.png")}  height="50px" alt="css" /><h3>CSS</h3></li>
            <li><img src={getImageUrl("skills/js.png")} height="50px" alt="js" /><h3>JAVASCRIPT</h3></li>
            <li><img src={getImageUrl("skills/postgres.png")} height="50px" alt="postgres" /><h3>POSTGRESQL</h3></li>
            <li><img src={getImageUrl("skills/php.png")} height="50px" alt="php" /><h3>PHP</h3></li>
            <li><img src={getImageUrl("skills/react.png")} height="50px" alt="react" /><h3>REACT</h3></li>
            <li><img src={getImageUrl("skills/docker.png")} height="50px" alt="docker" /><h3>DOCKER</h3></li>
        </ul>
    </div>
 
    </div>
  )
}
