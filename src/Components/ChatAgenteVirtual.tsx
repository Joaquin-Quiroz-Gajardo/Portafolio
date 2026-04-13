import React, { ChangeEvent, useEffect, useState } from 'react'
import Salir from '../allSVG/Salir'

type HandleType = {
    handleDesplegarChat: React.MouseEventHandler<HTMLButtonElement>
}

type MensajesHumanoRobot = {
  mensaje: string
  autor: "humano"|"bot"
}

const [nuevoTextoHumano, setNuevoTextoHumano] = useState<string>("");

const [chatMessages, setChatMessages] = useState<MensajesHumanoRobot[]>([
  {
    mensaje: "hola, soy el asistente de este portafolio, cuentame que es lo que quieres saber",
    autor: "bot"
  },]);
// let chatMessages: MensajesHumanoRobot[]=[
//   {
//     mensaje: "hola, soy el asistente de este portafolio, cuentame que es lo que quieres saber",
//     autor: "bot"
//   },
//   {
//     mensaje: "soy humano",
//     autor: "humano"
//   },
// ] 

const handleChangeTextoHumano = (e: ChangeEvent<HTMLInputElement>) => {
    setNuevoTextoHumano(e.target.value);
  };

function handleChat():void{

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
            {chatMessages.map((dialogo: MensajesHumanoRobot) => (
        <p className={dialogo.autor == "bot"?"ia-message":"human-message"}>{dialogo.mensaje}</p>
      ))}
              <p className='ia-message'>Agente virtual</p>
              <p className='human-message'>Humano</p>

          </div>
          <div className="ingreso-texto">
            <input onChange={handleChangeTextoHumano} type="text" className="entrada-human-message" />
            <button onClick={handleChat}>
              <p>Enviar</p>
            </button>
          </div>
        </div>
      </div>
  )
}

export default ChatAgenteVirtual