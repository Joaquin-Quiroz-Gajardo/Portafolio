// Filename - App.js

import logo from "./logo.svg";
import perfil from "./imagen-perfil-comprimida.png"
import "./App.css";
import { useState } from "react";

function App() {
  const [displayNavLinks, setDisplayNavLinks] = useState<boolean>(false)
  const handleDesplegarMenu = () => {
    setDisplayNavLinks(!displayNavLinks)
  };
  const textStyle = {
    fontFamily: "roboto",
    fontSize: '8px',
    fill: 'black'}
  
  return (
    <div className="App">

      {/* navbar */}
      <header>
        <nav className="navbar">
            <div className="navbar-collapse">
              <a className="navbar-brand" href="#">Joaquin Quiroz</a>
              <ul className={displayNavLinks?"navbar-ul display-nav-links":"navbar-ul"}>
                <li className="nav-item">
                  <a className="nav-link" href="#about-me-title">Acerca de mi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
        viewBox="0 0 100 80"
        width="20"
        className="navbar-svg"
      >
        <path
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
          stroke-width="9"
        />
        <path
          d="
          M 35,20
          Q 50,-10 65,20
          "
          fill="none"
          stroke="white"
          stroke-width="9"
        />
        <path
          d="
          M 10,20
          L 15,50
          Q 50,55 85,50
          L 90,20
          "
          fill="none"
          stroke="white"
          stroke-width="9"
        />
        <path
          d="
          M 44,52
          L 45,45
          Q 50,44 55,45
          L 56,52
          "
          fill="none"
          stroke="white"
          stroke-width="9"
        />
</svg> <p>Trabajos</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Proyectos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contacto</a>
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
          <svg className="flecha-hero" viewBox="0 0 100 400">
            <polygon
              points="
                50,0
                0,80
                40,40
                40,400
                50, 400
                60,40
                100, 80
              "/>
          </svg>
          {/* <svg viewBox="0 0 200 200">
      <text x="100" y="100" style={textStyle}>
        Hello React!
      </text>
    </svg> */}
        </div>
      </section>


      {/* acerca de mi */}
      <section>
        <div className="about-me">
          <div className="about-me-content">
            <div className="contenedor-cubo">
              <div className="cubo scene">
                <div className="cubo object">
                  <div className="face front">frente</div>
                  <div className="face right">derecha</div>
                  <div className="face back">atras</div>
                  <div className="face left">izquierda</div>
                  <div className="face top">arriba</div>
                  <div className="face bottom">abajo</div>
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
      <section>
        <div className="trabajos">
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
              <button>ver mas</button>
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
      <section>
        <div className="proyectos">
          <h2 className="proyectos-titulo">Proyectos</h2>
          <div className="proyectos-contenido">
            <article className="proyecto-active-learinig">
              <h2>active learinig</h2>
            </article>
            <article className="proyecto-pila">
              <h2>detector de pilas en vertederos</h2>
            </article>
          </div>
        </div>
      </section>


      {/* habilidades */}
      <section>
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
              <li>React</li> 
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
        <div className="contacto">
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