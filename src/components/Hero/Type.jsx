import React from 'react'
import Typewriter from 'typewriter-effect';


export const Type = () => {
  return (
    <Typewriter
    options={{
      strings: ['Design', 
                'Develop',
                'Deploy',
                'Continuously Improve'],
      autoStart: true,
      loop: true,
      delay:75,
      deleteSpeed:50,
    }}
  />
  
  )
}
