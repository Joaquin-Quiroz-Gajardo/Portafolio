import React from 'react'

const VerMas = () => {
  return (
    <svg
  viewBox="0 0 100 100"
  width="26"
  className="flecha-contenido"
>
  <path
    className="barra-centro"
    d="
    M 50,25
    L 50,90 
    "
    fill="none"
    stroke="black"
    stroke-width="3"
  /> 
  <path
    className="cabeza-flecha"
    d="
    M 70,60
    L 50,90 30,60 
    "
    fill="none"
    stroke="black"
    stroke-width="3"
  /> 
  </svg>
  )
}

export default VerMas