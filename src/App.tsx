// Filename - App.js

import logo from "./logo.svg";
import perfil from "./imagen-perfil-comprimida.png"
import "./App.css";
import { useState } from "react";
import Maletin from "./allSVG/Maletin";
import Ampolleta from "./allSVG/Ampolleta";
import Carta from "./allSVG/Carta";
import Persona from "./allSVG/Persona";
import SimbolNode from "./allSVG/SimbolNode";
import SimbolPython from "./allSVG/SimbolPython";
import SimbolReact from "./allSVG/SimbolReact";
import SimbolTensorFlow from "./allSVG/SimbolTensorFlow";
import Home from "./allSVG/Home";
import VerMas from "./allSVG/VerMas";

function App() {
  const [displayNavLinks, setDisplayNavLinks] = useState<boolean>(false)
  const handleDesplegarMenu = () => {
    setDisplayNavLinks(!displayNavLinks)
  };
  const textStyle = {
    fontFamily: "roboto",
    fontSize: '14px',
    fill: 'yellow'
  }
  
  return (
    <div className="App">

      {/* navbar */}
      <header>
        <nav id="navbar" className="navbar">
            <div className="navbar-collapse">
              <a className="navbar-brand" href="#"><Home></Home> <p>Inicio</p></a>
              <ul className={displayNavLinks?"navbar-ul display-nav-links":"navbar-ul"}>
                <li className="nav-item">
                  <a className="nav-link" href="#about-me-title"><Persona></Persona> <p>Acerca de mi</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#trabajos"><Maletin></Maletin> <p>Trabajos</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#proyectos"><Ampolleta></Ampolleta> <p>Proyectos</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto"><Carta></Carta><p>Contacto</p></a>
                </li>
                <li className="nav-item">
                  <button className="nav-button-asistente">Asistente virtual</button>
                </li>
              </ul>
              <button onClick={handleDesplegarMenu} className={displayNavLinks?"menu display-nav-links":"menu"}>icono</button>
            </div>
        </nav>
      </header>

      {/* hero */}
      <section>
        <div className="hero">
          <div className="fondo-perfil">
            <img src={perfil} alt="imagen perfil" className="perfil"/>
          </div>
          <div className="bajada">
            <h1 className="descripcion">Especialista en inteligencia artificial</h1>
            <h2 className="subtitulo">Universidad de Buenos Aires</h2>
          </div>
          <svg
  viewBox="0 0 100 100"
  width="26"
  className="flecha-hero"
  pathLength="100"
>

  <path
    className="flecha-cuerpo"
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
          <svg 
          viewBox="35 13 60 60"
          className="flecha-hero-texto"
          >
      <text x="0" y="50" style={textStyle}>
      <tspan x="30" y="25">¡Pruébalo</tspan>
      <tspan x="40" y="40">ahora!</tspan>
      </text>
    </svg>
        </div>
      </section>


      {/* acerca de mi */}
      <section>
        <div className="about-me">
          <div className="about-me-content">
            <div className="contenedor-cubo">
              <div className="cubo scene">
                <div className="cubo object">
                  <div className="face front"><SimbolPython></SimbolPython></div>
                  <div className="face right"><SimbolReact></SimbolReact></div>
                  <div className="face back"><SimbolNode></SimbolNode></div>
                  <div className="face left"><SimbolTensorFlow></SimbolTensorFlow></div>
                  <div className="face top"></div>
                  <div className="face bottom"></div>
                </div>
              </div>
            </div>
            <div className="about-me-title-content">
              <h2 id="about-me-title">Acerca de mí</h2>
              <div className="about-me-texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque similique quisquam debitis fugiat consequuntur, porro, laudantium expedita at natus ea est iure laboriosam ipsam reprehenderit exercitationem veniam aliquam tenetur suscipit labore fuga eius fugit voluptatem quas. Distinctio, commodi corrupti? Nesciunt commodi repellendus voluptatibus quas! Fugiat aliquam sequi officia quaerat est.</div>
            </div>

            
          
          </div>
        </div>

      </section>


      {/* trabajos */}
      <section className="contenido">
        <div id="trabajos" className="trabajos">
          <h2 className="trabajos-titulo">Trabajos</h2>
          <div className="trabajos-titulo-contenido">
            <article className="trabajo-clasificador-consumo-finalidades-contenedor">
              <h3 className="trabajo-clasificador-consumo-finalidades-titulo">clasificador finalidades</h3>


              <p className="trabajo-descripcion">
                Clasificador de texto, consumo por finalidades, datos de texto que tienen que entrar en mas de 90 categorias. accouracy mejoro de 0.86 a 0.93.
              </p>
              <button>ver mas</button>
              <p className="ver-mas">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eaque modi amet earum natus assumenda rem ullam recusandae ipsa delectus.</p>
            </article>
            <article className="trabajo-clasificador-active-learning-creacion-base-etiquetada-contenedor">
              <h3 className="trabajo-clasificador-active-creacion-base-etiquetada-titulo">prospectivo-retrospectivo</h3>
              <p className="trabajo-descripcion">
                Articulo academico. clasificacion de articulos, datos retrospectivos y prospectivos. accouracy alcanzado de 0.93.
              </p>
              <button><VerMas></VerMas></button>
            </article>
            <article className="trabajo-google-news-contenedor">
              <h3 className="trabajo-google-news-titulo">google news</h3>
              <p className="trabajo-descripcion">
                extraccion de datos de google news, noticias de conflictos ambientales.
              </p>
              <button>ver mas</button>
            </article>
            <article className="trabajo-science-direct-contenedor">
              <h3 className="trabajo-science-direct-titulo">science direct</h3>
              <p className="trabajos-descripcion">
                extraccion de articulos academicos de relaves mineros. mas articulos prospectivos que retrospectivos.
              </p>
              <button>ver mas</button>
            </article>
          </div>
        </div>
      </section>


      {/* proyectos */}
      <section className="contenido">
        <div id="proyectos" className="proyectos">
          <h2 className="proyectos-titulo">Proyectos</h2>
          <div className="proyectos-contenido">
            <article className="proyecto-active-learinig">
              <h3>active learinig</h3>
            </article>
            <article className="proyecto-pila">
              <h3>detector de pilas en vertederos</h3>
            </article>
          </div>
        </div>
      </section>


      {/* habilidades */}
      <section className="contenido">
        <div className="habilidades">
          <h2 className="habilidades-titulo">Habilidades</h2>
          <div className="habilidades-lenguajes-contenedor">
            <h3 className="habilidades-lenguaje-titulo">Lenguales</h3>
            <ul>
              <li>Python</li>
              <li>Typedscript</li>
              <li>CSS</li>
              <li>HTML</li> 
            </ul>
          </div>
          <div className="habilidades-tecnologias-contenedor">
            <h3 className="habilidades-tecnologias-titulo">Tecnologias y librerias</h3>
            <ul>
              <li>Pandas</li>
              <li>Langgraph</li>
              <li>Node</li>
              <li>React</li> 
            </ul>
          </div>
          <div className="habilidades-cloud-contenedor">
            <h3 className="habilidades-cloud-titulo">AWS</h3>
            <ul>
              <li>EC2</li>
              <li>Lambda</li>
              <li>RDS</li>
            </ul>
          </div>
          <div className="habilidades-lenguajes-contenedor">
            <h3 className="habilidades-idiomas-titulo">Idiomas</h3>
            <ul>
              <li>Ingles</li>
              <li>Español</li>
            </ul>
          </div>
        </div>
      </section>


      {/* contacto */}
      <footer>
        <div id="contacto" className="contacto">
          <h2 className="contacto-titulo">Contacto</h2>
          <form action="POST" className="contacto-form">
            <label htmlFor="input-nombre">Nombre: </label>
            <input type="text" id="input-nombre" />

            <label htmlFor="input-email">Email: </label>
            <input type="text" id="input-email" />
            
            <label htmlFor="input-mensaje">Mensaje: </label>
            <input type="text" id="input-mensaje" />
          </form>
        </div>
      </footer>

      {/* reAct agent */}

      <div className="reAct-agent">
        <h2 className="reAct-agent-titulo">Chat</h2>
        <div className="reAct-agent-mensajes-contenedor">
          <div className="reAct-agent-mensaje-ia">hola humano</div>
          <div className="reAct-agent-mensaje-usuario">hola robot</div>
        </div>
      </div>

    </div>
  );
}

export default App;