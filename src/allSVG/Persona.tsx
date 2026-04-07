import React from 'react'

const Persona = () => {
  return (
    <svg
  viewBox="0 0 100 80"
  width="26"
  className="navbar-svg"
>
  <ellipse
    className="cabeza"
    cx="50" 
    cy="17" 
    rx="10" 
    ry="12" 
    fill="none" 
    stroke="white" 
    stroke-width="3" 
    />
  <path
    className="cuerpo"
    d="
    M 50,35
    Q 30,35 15,70
    L 85,70
    Q 70,35 50,35
    "
    fill="none"
    stroke="white"
    stroke-width="3"
  />
  <ellipse
    className="punto"
    cx="50" 
    cy="15" 
    rx="0" 
    ry="0" 
    fill="none" 
    stroke="white" 
    stroke-width="3" 
    />
  </svg>
  )
}

export default Persona