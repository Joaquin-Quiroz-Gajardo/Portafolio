import React from 'react'

const Flecha = () => {
  return (
    <svg
  viewBox="0 0 100 100"
  width="26"
  className="flecha-hero"
  pathLength="100"
>

  <path
    className="cuerpo"
    d="
    M 75,0
    L 100,35 
    L 80,25 
    Q 75,80 15,100 
    L 0,85 
    Q 60,65 60,16 
    L 40,8 75,0
    "
    fill="none"
    stroke="white"
    stroke-width="2"
  />
  </svg>
  )
}

export default Flecha