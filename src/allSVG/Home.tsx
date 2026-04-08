import React from 'react'

const Home = () => {
  return (
    <svg
  viewBox="0 0 100 80"
  width="26"
  className="home"
>
  <path
    className="home-base"
    d="
    M 50,2
    L 90,34 75,34 75,78 60,78 60,48 40,48 40,78 25,78 25,34 10,34 50,2 90,34
    "
    fill="none"
    stroke="white"
    stroke-width="3"
  />
  <path
    className="chimenea"
    d="
    M 70,19
    L 70,19 70,19 70,19 
    "
    fill="none"
    stroke="white"
    stroke-width="3"
  />
  <path
    className="ventana"
    d="
    M 40,18
    L 40,18 40,18 40,18 40,18 40,18

    M 58,24
    L 58,24 58,24 58,24 58,24 58,24
    "
    fill="none"
    stroke="white"
    stroke-width="3"
  />
  
  </svg>
  )
}

export default Home