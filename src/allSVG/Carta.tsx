import React from 'react'

const Carta = () => {
  return (
    <svg
  viewBox="0 0 100 80"
  width="26"
  className="navbar-svg"
>
  <path
    className="base-carta"
    d="
    M 2,78
    L 98,78
    L 98,25
    L 2,25
    L 2,78
    L 98,78
    "
    fill="none"
    stroke="white"
    stroke-width="3"
  />
  <path
    className="cierre-carta"
    d="
    M 6,25
    L 50,50
    L 94,25
    L 94,25
    "
    fill="none"
    stroke="white"
    stroke-width="3"
  />
  <path
    className="linea-primera-carta"
    d="
    M 10,8
    L 10,8
    "
    fill="none"
    stroke="white"
    stroke-width="3"
  />
  <path
    className="linea-segunda-carta"
    d="
    M 10,16
    L 10,16
    "
    fill="none"
    stroke="white"
    stroke-width="3"
  />
  <path
    className="linea-tercera-carta"
    d="
    M 10,35
    L 10,35
    "
    fill="none"
    stroke="white"
    stroke-width="3"
  />
  </svg>
  )
}

export default Carta