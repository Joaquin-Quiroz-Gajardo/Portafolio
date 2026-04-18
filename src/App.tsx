// Filename - App.js

import React from "react";

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
import Caso from "./Components/Caso";
import Time from "./allSVG/Time";
import Goods from "./allSVG/Goods";
import FondoContent from "./allSVG/FondoContent";
import Diario from "./allSVG/Diario";
import Science from "./allSVG/Science";
import FondoContentAlternativo from "./allSVG/FondoContentAlternativo";
import Network from "./allSVG/Network";
import Pilas from "./allSVG/Pilas";
import Bot from "./allSVG/Bot";
import Enviar from "./allSVG/Enviar";
import Salir from "./allSVG/Salir";
import Menu from "./allSVG/Menu";
import ChatAgenteVirtual from "./Components/ChatAgenteVirtual";
import Contacto from "./Components/Contacto";

function App() {

  fetch('https://node-crear-api.onrender.com/hola')
  .then(response => response.json()) // Parses JSON response
  .then(data => console.log(data))   // Accesses the data
  .catch(error => console.error('Error:', error)); // Handles network errors



  const [displayNavLinks, setDisplayNavLinks] = useState<boolean>(false)
  const handleDesplegarMenu = () => {
    setDisplayNavLinks(!displayNavLinks)
  };

  const [displayChatBot, SetDisplayChatBot] = useState<boolean>(false)
  const handleDesplegarChat = () => {
    SetDisplayChatBot(!displayChatBot)
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
                  <a onClick={()=>{setDisplayNavLinks(false)}} className="nav-link" href="#about-me-title"><Persona></Persona> <p>Acerca de mi</p></a>
                </li>
                <li className="nav-item">
                  <a onClick={()=>{setDisplayNavLinks(false)}} className="nav-link" href="#trabajos"><Maletin></Maletin> <p>Trabajos</p></a>
                </li>
                <li className="nav-item">
                  <a onClick={()=>{setDisplayNavLinks(false)}} className="nav-link" href="#proyectos"><Ampolleta></Ampolleta> <p>Proyectos</p></a>
                </li>
                <li className="nav-item">
                  <a onClick={()=>{setDisplayNavLinks(false)}} className="nav-link" href="#contacto"><Carta></Carta><p>Contacto</p></a>
                </li>
                <li className="nav-item">
                  <button onClick={()=>{
                    setDisplayNavLinks(false)
                    handleDesplegarChat()
                    }} className="nav-button-asistente">Asistente virtual</button>
                </li>
              </ul>
              <button onClick={handleDesplegarMenu} className={displayNavLinks?"menu display-nav-links":"menu"}><Menu></Menu></button>
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
            <div className="espacio-centro-hero"></div>
            <h1 className="descripcion">Joaquín Quiroz</h1>
            <h2 className="subtitulo">Analista de datos</h2>
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
              <div className="about-me-texto">Creo que la obtención de valor de los datos es un proceso largo, con muchos pasos que deben ser cumplidos. Los datos se deben extraer, analizar, clasificar, almacenar, disponer y por último presentar, si uno de estos pasos falla el resto de procesos perderá valor. Debido a esto me he involucrado en cada uno de estos procesos en mi trayectoria profesional. Busco seguir creando valor a partir de los datos, aportando en cada uno de los procesos de esta labor.</div>
              <h3 id="about-me-title">Educación</h3>
              <div className="about-me-texto">
                Master en Artificial intelligence - Universidad de Buenos Aires (en curso) <br />
                Sociología - Universidad de Chile <br />
                Machine Learning Bootcamp - SaturdayAI
              </div>
            </div>

            
          
          </div>
        </div>

      </section>


      {/* trabajos */}
      <section className="contenido">
        <div id="trabajos" className="trabajos">
          <h2 className="trabajos-titulo">Trabajos</h2>
          <div className="trabajos-titulo-contenido">
            <Caso 
              titulo="Clasificador de consumo por finalidades" 
              bajada="Clasificación de datos longitudinales de consumo." 
              imagen={<Goods></Goods>}
              fondo={<FondoContent></FondoContent>}
              >
              <p>La encuesta de consumo por finalidades permite saber cómo son los gastos de una sociedad, diferenciándolos por diferentes tipos, gastos en vivienda y gastos en comida por ejemplo forman parte de diferentes grupos, en total había más de 90 categorías. Se contaba en esta ocasión con una muestra de datos clasificados, eran millones de datos no clasificados, y lo peor era que los datos no estaban equilibrados, había categorías sobrerrepresentadas, lo cual era lógico, la gente va a comprar pan más veces que las que compra una propiedad.
              <br /> <br />
              Cuando se crean clasificadores se asume una presencia equilibrada de las diferentes categorías, hecho que no se cumplió en este caso. Se hicieron varios intentos para solventar el desequilibrio en los datos, se ajustó los pesos para tomar más en consideración los ejemplos de las categorías menos comunes, se reemplazó tokens y se crearon casos con generación de texto, todo para mejorar el desempeño del modelo.
              <br /> <br />
              Se paso de un accuracy del 0,87 al 0,937. Esta fue una mejora notable, pero en retrospectiva era un desafío irresoluble, había muchas categorías sin casos, otros con uno o dos ejemplos, pero se logró mejorar lo que se tenía.
              </p>
            </Caso>
            <Caso 
              titulo="Clasificación prospectivo y retrospectivo" 
              bajada="Evaluar si artículos académicos planifican el futuro o observan el pasado." 
              imagen={<Time></Time>}
              fondo={<FondoContent></FondoContent>}
              >
              <p>Existe una gran cantidad de estudios académicos que tratan los relaves mineros, que son piscinas llenas de residuos químicos usados en el proceso de extracción de minerales como el cobre. La hipótesis de esta investigación era que existía un exceso de estudios de carácter prospectivo (planificación hacia el futuro) en comparación a las investigaciones retrospectivas (análisis de las implementaciones actuales de relaves), pero no contábamos con datos que nos permitan separar estos tipos de artículos.
              <br /> <br />
              No teníamos los datos, pero teníamos la plataforma Sciencedirect para ayudarnos. Buscamos diferentes variaciones de relave minero o mining tailing, descubrimos artículos de diferentes rubros, los cuales pudimos almacenar con la ayuda de web scraping. Después comenzamos a crear una muestra de datos, artículos académicos eran separados en las categorías de prospectivo y retrospectivo, el resultado permitió etiquetar el resto de la base de datos con un clasificador de texto.
              <br /> <br />
              Hay muchos más artículos prospectivos, notamos que esto se puede deber a que las investigaciones que evalúan el impacto de proyectos ya existentes pueden ser más difíciles de llevar a cabo, y que hay muchos avances en el manejo de relaves minero que no son implementados, quizá por este mismo desafío de mirar de manera integrar a los relaves y su implementación.
</p>
            </Caso>
            <Caso 
              titulo="Extracción de noticias de google news" 
              bajada="Que manifestaciones ocurren en Chile y ver si muchas noticias investigan el mismo hecho." 
              imagen={<Diario></Diario>}
              fondo={<FondoContent></FondoContent>}
              >
              <p>Pese a que vivimos en la era de la información pareciera que hay muchas manifestaciones que pese a ocurrir no son registradas. Si bien siempre han habido catastros de las manifestaciones y conflictos existentes siempre existe un gran número de hechos que pasan desapercibidos para estas mediciones, para mejorar en este problema se realizó una extracción de datos de conflictos de google, pero no solo obtener noticias, sino comparándolas para ver si varias noticias pertenecen al mismo hecho.
              <br /><br />
              Se busco las noticias de manifestaciones a lo largo de todas las comunas de chile, esto generó una serie de problemas, noticias no relacionadas, confusiones de lugares por los nombres ambiguos de las comunas, por lo que se necesito de repasar cada una de las dos mil noticias recopiladas para lograr determinar el conjunto de noticias apropiadas.
              </p>
            </Caso>

          </div>
        </div>
      </section>


      {/* proyectos */}
      <section className="contenido">
        <div id="proyectos" className="proyectos">
          <h2 className="proyectos-titulo">Proyectos</h2>
          <div className="proyectos-contenido">
            <Caso 
              titulo="Active learning sobre datos de texto" 
              bajada="Cual es la forma más efectiva para que los humanos etiqueten datos." 
              imagen={<Network></Network>}
              fondo={<FondoContentAlternativo></FondoContentAlternativo>}
              >
              <p>No es molesto cuando tienes una base de datos no balanceada, y tienes que mandar a crear una muestra de datos clasificados sabiendo que el resultado no servirá, pues hay más casos de unas categorías y pocas de las otras. Para este problema está el active learning, que buscaba encontrar la forma más eficiente de etiquetar datos por humanos, de tal manera que se maximice las posibilidades de obtener ejemplos de los grupos menos comunes. Este proyecto implementa este principio en datos de tipo texto.
              <br /><br />
              Hay muchas estrategias que buscan determinar cuál es la categoría más apropiada para ser etiquetada por un humano. clasificar los datos no etiquetados y tomar aquellos casos que son menos comunes, hacer validación cruzada, elegir aquellos casos en que el modelo tiene menos certeza, más. todas estas alternativas fueron evaluadas en bases de datos de diferentes características, diferente número de categorías, diferente nivel de desbalance entre las categorías.
              <br /><br />
              Finalmente se determinó que esta estrategia empieza a ver resultados en bases de datos más desbalanceadas y con muchas categorías, allí la estrategia de validación cruzada mostró mejoras significativas.
              </p>
            </Caso>

            <Caso 
              titulo="Detector de pilas" 
              bajada="Encontrar las pilas que hay en los vertederos." 
              imagen={<Pilas></Pilas>}
              fondo={<FondoContentAlternativo></FondoContentAlternativo>}
              >
              <p>Las pilas en los vertederos son un peligro constante, puesto que además de contaminar pueden provocar incendios, por lo que desarrollamos un detector de pilas en vertederos, pero con un modelo de detección de objetos en tiempo real, dado que la gracia es detectarlas en el momento, no.
              <br /><br />
              El gran desafío de este proyecto no fue el entrenamiento del modelo de YOLO, sino que fue crear la base de datos. fueron recopilados datos desde google y pinterest, luego creamos la base de datos de entrenamiento mostrando el cuadrante en donde estaban las pilas, colocamos las coordenadas en que aparecían estas pilas en la imagen, lo que permitió crear la base de entrenamiento para este clasificador.
              </p>
            </Caso>

            <Caso 
              titulo="Agente virtual" 
              bajada="Un asistente virtual que tiene como objetivo explicar el perfil de un postulante." 
              imagen={<Bot></Bot>}
              fondo={<FondoContentAlternativo></FondoContentAlternativo>}
              >
              <p>Yo me encontraba creando este portafolio cuando pensé que sería entretenido incluir un agente virtual que entregue mis antecedentes con solo preguntarle, aca explico el proceso de desarrollo de esta herramienta.
              <br /><br />
              El agente se creó utilizando langraph. le pase al modelo un resumen con mis antecedentes, después monte todo el backend con node subido en GCE. El agente utiliza la api de openAi, y con el modelo de gpt-3.5-turbo, dado que mostró buen desempeño a la vez que no consumía muchos créditos.
              </p>
            </Caso>
          </div>
        </div>
      </section>


      {/* habilidades */}
      <section className="contenido">
          <h2 className="habilidades-titulo">Habilidades</h2>
        <div className="habilidades">
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
              <li>Node y Express</li>
              <li>React</li> 
              <li>Pandas</li>
              <li>Langgraph</li>
            </ul>
          </div>
          <div className="habilidades-cloud-contenedor">
            <h3 className="habilidades-cloud-titulo">Cloud</h3>
            <ul>
              <li>EC2</li>
              <li>RDS</li>
              <li>GCE</li>
            </ul>
          </div>
          <div className="habilidades-cloud-contenedor">
            <h3 className="habilidades-cloud-titulo">Bases de datos</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
            </ul>
          </div>
          <div className="habilidades-cloud-contenedor">
            <h3 className="habilidades-cloud-titulo">Machine Learning</h3>
            <ul>
              <li>Scikit-learn</li>
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>Huggingface</li>
              <li>langGraph</li>
            </ul>
          </div>
          <div className="habilidades-cloud-contenedor">
            <h3 className="habilidades-cloud-titulo">Control de versiones</h3>
            <ul>
              <li>Git</li>
              <li>Github</li>
            </ul>
          </div>
          <div className="habilidades-cloud-contenedor">
            <h3 className="habilidades-cloud-titulo">Web Scraping</h3>
            <ul>
              <li>Beautifulsoup</li>
              <li>Scrapy</li>
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
        <Contacto></Contacto>
      </footer>

      {/* reAct agent */}

      {displayChatBot?<ChatAgenteVirtual handleDesplegarChat={handleDesplegarChat}></ChatAgenteVirtual>:<></>}

    </div>
  );
}

export default App;