import React from 'react'

const Maletin = () => {
  return (
    <svg
        viewBox="0 0 100 80"
        width="26"
        className="navbar-svg"
    >
        <path
          className="caja"
          d="
          M 5,20
          Q 50,19 95,20
          Q 96,40 95,80
          Q 50,81 5,80
          Q 4,40 5,20
          Q 50,19 95,20
          "
          fill="none"
          stroke="white"
          stroke-width="3"
        />
        <path
          className="mango"
          d="
          M 35,20
          Q 50,-10 65,20
          Q 65,20 65,20
          Q 65,20 65,20
          "
          fill="none"
          stroke="white"
          stroke-width="3"
        />
        <path
          className="solapa"
          d="
          M 10,20
          Q 15,50 15,50
          Q 50,55 85,50
          Q 90,20 90,20
          "
          fill="none"
          stroke="white"
          stroke-width="3"
        />
        <path
          className="cierre"
          d="
          M 44,52
          L 45,45
          Q 50,44 55,45
          L 56,52
          "
          fill="none"
          stroke="white"
          stroke-width="3"
        />
</svg>
  )
}

export default Maletin