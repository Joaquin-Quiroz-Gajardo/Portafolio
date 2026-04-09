import React, { useState } from 'react'
import VerMas from '../allSVG/VerMas'
import FondoContent from '../allSVG/FondoContent'
import Time from '../allSVG/Time'

const Caso = () => {

  const [displayArticle, setDisplayArticle] = useState<boolean>(false)
  function handlerVerMas(e: React.MouseEvent<HTMLButtonElement>){
    setDisplayArticle(!displayArticle)
  }
  return (
    <article className="trabajo-clasificador-active-learning-creacion-base-etiquetada-contenedor">
      <h3 className="trabajo-clasificador-active-creacion-base-etiquetada-titulo">
        prospectivo-retrospectivo
      </h3>
      <div className="bajada-content">
        <div className="image-content">
          <FondoContent></FondoContent>
        <div className="centro-imagen">
          <Time></Time>
        </div>
      </div>
        <p className="trabajo-descripcion">
          Articulo academico. clasificacion de articulos, datos retrospectivos y prospectivos. accouracy alcanzado de 0.93.
        </p>
      </div>
      <div className={displayArticle?"mas-contenido":"mas-contenido no-display"}>
        <p>mas contenido que tenemos</p>
      </div>
      <button onClick={handlerVerMas} className={displayArticle?"ver-mas rotated":"ver-mas"}>
        <VerMas ></VerMas>
      </button>
    </article>
  )
}

export default Caso