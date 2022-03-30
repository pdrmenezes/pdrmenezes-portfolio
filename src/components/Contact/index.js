import React, { useState } from 'react';
import "./style.css"
// import up_arrow from "../../assets/up-arrow.png"

export default function Contact() {

  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async copyText => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopySuccess('email copiado');
      setTimeout(() => { setCopySuccess('') }, 1000)
    } catch (err) {
      setCopySuccess('Falha ao copiar email');
    }

  }


  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1 className="contact-title-text">CONTATO</h1>
      </div>
      <div className="contact-grid">
        <div className="contact-grid row-1">
          <div className="email">
            <p>EMAIL</p>
            <p onClick={() => copyToClipboard('pdrmenezes1@gmail.com')}>PDRMENEZES1@GMAIL.COM</p>
            <p>{copySuccess}</p>
          </div>

          <div className="instagram">
            <p>INSTAGRAM</p>
            <a href='https://instagram.com/pdrmenezes'><p>@PDRMENEZES</p></a>
          </div>
        </div>
        <div className="contact-grid row-2">
          <div className="github">
            <p>GITHUB</p>
            <a href='https://github.com/pdrmenezes'><p>/PDRMENEZES</p></a>
          </div>

          <div className="your-turn">
            <p>SUA VEZ (:</p>
          </div>
        </div>
      </div >
    </div >
  )
}