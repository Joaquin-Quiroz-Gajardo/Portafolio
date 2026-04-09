import React from 'react'

const VerMas = () => {
  return (
    <svg
  viewBox="0 0 130 130"
  width="20"
  className="flecha-contenido"
  // transform="rotate(180, 0, 0)"
>
  <circle cx="65" cy="65" r="64" stroke="#03045e" stroke-width="2" fill="#00b4d833" />
  <path
    className="barra-centro"
    d="
    M 65,40
    L 65,105 
    "
    fill="none"
    stroke="black"
    stroke-width="3"
  /> 
  <path
    className="cabeza-flecha"
    d="
    M 85,75
    L 65,105 45,75 
    "
    fill="none"
    stroke="black"
    stroke-width="3"
  /> 
  </svg>
  )
}

export default VerMas