import React, { ChangeEvent, useEffect, useState } from 'react'
import Salir from '../allSVG/Salir'
import e from 'express'

type HandleType = {
    handleDesplegarChat: React.MouseEventHandler<HTMLButtonElement>
}

type MensajesHumanoRobot = {
  mensaje: string
  autor: "humano"|"bot"
}


const ChatAgenteVirtual = (props:HandleType) => {


  const [nuevoTextoHumano, setNuevoTextoHumano] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<MensajesHumanoRobot[]>([
    {
      mensaje: "hola, soy el asistente de este portafolio, cuentame que es lo que quieres saber",
      autor: "bot"
    },]);
  

  const handleChangeTextoHumano = (e: ChangeEvent<HTMLInputElement>):void => {
      setNuevoTextoHumano(e.target.value);
      // console.log(e.target.value)
    }; 
  async function handleChatClick(): Promise<void>{
    if (nuevoTextoHumano != ""){
      setChatMessages(prevItems => [...prevItems, {
        mensaje:nuevoTextoHumano,
        autor:"humano"
      }]);
      setNuevoTextoHumano("");
      (document.getElementById('input-usuario') as HTMLInputElement).value = '';


      fetch('http://localhost:3003/agente')
        .then(response => response.json()) 
        .then(data => {
          console.log(data)
        setChatMessages(prevItems => [...prevItems, data]);
      })    
        .catch(error => console.error('Error:', error));
  
      
    }
  }

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
            <input onChange={handleChangeTextoHumano} id='input-usuario' type="text" className="entrada-human-message" />
            <button onClick={handleChatClick}>
              <p>Enviar</p>
            </button>
          </div>
        </div>
      </div>
  )
}

export default ChatAgenteVirtual