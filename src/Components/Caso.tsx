import React, { ReactNode, SVGProps, useState } from 'react'
import VerMas from '../allSVG/VerMas'
import FondoContent from '../allSVG/FondoContent'
import Time from '../allSVG/Time'

type CasoTypes = {
  bajada: string
  titulo: string
  imagen: React.JSX.Element 
  children: ReactNode
}

const Caso = (props: CasoTypes) => {

  const [displayArticle, setDisplayArticle] = useState<boolean>(false)
  function handlerVerMas(e: React.MouseEvent<HTMLButtonElement>){
    setDisplayArticle(!displayArticle)
  }
  return (
    <article className="trabajo-clasificador-active-learning-creacion-base-etiquetada-contenedor">
      <h3 className="trabajo-clasificador-active-creacion-base-etiquetada-titulo">
        {props.titulo}
      </h3>
      <div className="bajada-content">
        <div className="image-content">
          <FondoContent></FondoContent>
        <div className="centro-imagen">
          {props.imagen}
        </div>
      </div>
        <p className="trabajo-descripcion">
          {props.bajada}
        </p>
      </div>
      <div className={displayArticle?"mas-contenido":"mas-contenido no-display"}>        
        {props.children}
      </div>
      <button onClick={handlerVerMas} className={displayArticle?"ver-mas rotated":"ver-mas"}>
        <VerMas ></VerMas>
      </button>
    </article>
  )
}

export default Caso