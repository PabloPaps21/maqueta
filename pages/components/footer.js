import React from 'react'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return(
    <>
      <div className="containerContacto">
        <div  className="cardContacto">
          <h3>CONTÁCTANOS</h3>
          <p><FontAwesomeIcon icon={ faPhone } style={{backgroundColor: 'none', color: '#FFF', fontSize: '20' }}/> (555) 530 9858</p>
        </div>
        <div className="cardContacto">
          <div className="conoce">
            <h3>CONÓCENOS</h3>
            <p>Acerca de nosotros</p>
            <p>Nuestro equipo</p>
            <p>Nuestros servicios</p>
            <p>Responsabilidad social</p>
            <p>Atención a proveedores</p>
          </div>
        </div>
        <div className="cardContacto" >
          <h3>COMPRA SEGURA</h3>
          <p>Aceptamos targetas de cŕedito, débito, prepago, y pagos con efectivo</p>
          <div className="imgContainer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/3072px-Former_Visa_%28company%29_logo.svg.png" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="rights">
          <p>© All Rights Reserved</p>
        </div>
        <div className="terminos">
          <p>Terminos & Condiciones</p>
          <p> Aviso de privacidad</p>
        </div>
      </div>
      <style jsx>{`
      .containerContacto {
        height: 260px;
        background-color: #5349db;
        color: #FFF;
        width: 100%;
        display: flex;
        justify-content:space-evenly;
        flex-wrap: wrap;
      }
      .cardContacto {
        width: 25%
      }
    
      .footer {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #ee6f5e;
        color: #FFF;
        font-size: 14px;
      }
      .imgContainer > img {
        width: 68px;
        height: 53px;
        margin: 10px
        
      }
      .rights {
        display: flex;
        justify-content: center;
        width: 50%;
        align-text: center;
      }
      .terminos {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      }

      @media (max-width: 600px) {
        .containerContacto {
          flex-direction: row;
          height: auto;
        }
        .cardContacto {
          width: 80%
        }
        .footer {
          display: flex;
          flex-direction: column;
          height: auto;
        }
        .terminos {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
      }
      `}</style>
    </>
  )
}
export default Footer;