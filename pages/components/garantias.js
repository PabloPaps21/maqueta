import React, { Component } from "react";

function Garantias(){
  return(
    <>
      <div className="contenedor">
        <div className="card">
          <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541579/prueba/7_mokifm.png" />
          <p>Envíos y devoluciones</p>
          <h5>Entrega garantizada en máximo 48 horas</h5>
        </div>
        <div className="card">
          <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541567/prueba/8_ertzng.png" />
          <p>Garantía de devolución</p>
          <h5>Clientes 100% satisfechos</h5>
        </div>
        <div className="card">
          <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541567/prueba/9_mosysl.png" />
          <p>Clientes satisfechos</p>
          <h5>Ofrecemos la mejor variedad de productos</h5>
        </div>
      </div> 
      <style jsx>{`
      .contenedor {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        alig-content: center;
        width: 100%;
        background-color: rgb(254, 245, 244);
        padding: 20px 20px;
      }
      .card {
        width: 20%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      img {
        width:30%;
      }
      @media (max-width: 600px) {
        .contenedor {
          flex-direction: column;
        }
        .card {
          width: 50%;
        }
        .img {
          width:10%;
        }
      }
      `}</style>      
    </>
  )
}
export default Garantias