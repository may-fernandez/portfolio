import "./Contacto.css";
import { React, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iq23are",
        "template_ws9ik1q",
        form.current,
        "3ONfHQKcaq1FkI2zf"
      )
      .then((result) => {
        console.log(result.text);
        setMensajeEnviado(true);
        form.current.reset();
      }),
      (error) => {
        console.log(error.text);
      };
  };
  return (
    <div className="contacto">
      <div className="titulo">
        <h1>Contacto</h1>
      </div>
      <section className="contacto-section" id="contacto">
        <form ref={form} onSubmit={enviarEmail} className="form-contacto">
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <input type="text" name="subject" placeholder="Asunto" required />
          <textarea name="message" placeholder="Mensaje" required rows={10} />
          <button type="submit">Enviar</button>

          {mensajeEnviado && (
            <p className="mensaje-enviado">Mensaje enviado con éxito</p>
          )}
        </form>
      </section>
    </div>
  );
}

export default Contacto;
