import React from 'react'
import Salir from '../allSVG/Salir'

type HandleType = {
    handleDesplegarChat: React.MouseEventHandler<HTMLButtonElement>
}

const ChatAgenteVirtual = (props:HandleType) => {
  return (
    <div className="reAct-agent">
        <div className="chat">
          <div className="barra-salir-chat">
            <p>Agente virtual</p>
            <button onClick={props.handleDesplegarChat}><Salir></Salir></button>
          </div>
          <div className="conversacion">
            <p className="human-message">hola</p>
            <p className="ia-message">que pasa humano</p>
            <p className="ia-message">que pasa humano Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eveniet provident. Harum voluptate aliquam aperiam architecto, dolor id, consequatur corrupti dolorum animi maiores, culpa est! Facere perspiciatis quo minima quod, numquam distinctio nisi amet explicabo officiis harum corrupti et pariatur similique eveniet animi aut cumque cum vel repellendus porro officia!</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos rerum praesentium fugit rem, ratione molestiae labore suscipit ipsam voluptatem pariatur, minus, atque optio amet ullam repellat officia id delectus vitae saepe itaque et aut excepturi error! Non officiis, quia dolorem animi perspiciatis tempore. Facere cumque temporibus ipsa fuga mollitia.</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola</p>
            <p className="human-message">hola</p>

          </div>
          <div className="ingreso-texto">
            <input type="text" className="entrada-human-message" />
            <button>
              <p>Enviar</p>
            </button>
          </div>
        </div>
      </div>
  )
}

export default ChatAgenteVirtual