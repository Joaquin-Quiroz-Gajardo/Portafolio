import React, { useState } from 'react'

const Contacto = () => {

  type MensajeReclutador ={
    name:string
    email:string
    mensajeTexto:string
  }
  const [nameReclutador, SetNameReclutador] = useState<string>("")
  const [emailReclutador, SetEmailReclutador] = useState<string>("")
  const [mensajeReclutador, SetMensajeReclutador] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, set:React.Dispatch<React.SetStateAction<string>>) => {
    set(e.target.value);
    // console.log(e.target.value);
  };

  const handleMensaje= async (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    fetch('https://node-crear-api.onrender.com/mensaje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          name: nameReclutador,
          email: emailReclutador,
          mensaje: mensajeReclutador
         })
      })
        .then(response => response.json()) 
        .then(data => {
          console.log(data)
        
      })    
        .catch(error => console.error('Error:', error));

      SetNameReclutador("");
      (document.getElementById('input-nombre') as HTMLInputElement).value = '';
      SetEmailReclutador("");
      (document.getElementById('input-email') as HTMLInputElement).value = '';
      SetMensajeReclutador("");
      (document.getElementById('input-mensaje') as HTMLInputElement).value = '';


      setTimeout(() => {
  document.getElementById('confirmacion-envio')?.style.setProperty('display', 'block');
}, 1);

      setTimeout(() => {
  document.getElementById('confirmacion-envio')?.style.setProperty('display', 'none');
}, 5000);


      
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  return (
    <div id="contacto" className="contacto">
          <h2 className="contacto-titulo">Contacto</h2>
          <form action="POST" className="contacto-form">
            <p className={nameReclutador==""?"verificar-campo":"verificar-campo no-mostrar"}>* Por favor llenar este campo correctamente.</p>
            <label htmlFor="input-nombre">Nombre: </label>
            <input onChange={(e)=>handleChange(e, SetNameReclutador)} required type="text" id="input-nombre" />

            <p className={emailRegex.test(emailReclutador)?"verificar-campo no-mostrar":"verificar-campo"}>* Por favor llenar este campo correctamente.</p>
            <label htmlFor="input-email">Email: </label>
            <input onChange={(e)=>handleChange(e, SetEmailReclutador)} required type="email" id="input-email" />
            
            <p className={mensajeReclutador==""?"verificar-campo":"verificar-campo no-mostrar"}>* Por favor llenar este campo correctamente.</p>
            <label htmlFor="input-mensaje">Mensaje: </label>
            <input onChange={(e)=>handleChange(e, SetMensajeReclutador)} required type="text" id="input-mensaje"/>
            <button 
            onClick={handleMensaje}
            disabled={emailRegex.test(emailReclutador) && mensajeReclutador!="" && nameReclutador!=""?false:true}
            >Enviar</button>
          </form>
          <div className="confirmacion-envio" id='confirmacion-envio'>
            <p>El mensaje ha<br />sido enviado.</p>
          </div>
        </div>
  )
}

export default Contacto