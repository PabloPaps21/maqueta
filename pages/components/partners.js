import React, { Component } from "react";

function Partners() {
  return(
    <>
      <div className="contenedor">
        <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541571/prueba/16_kngz3j.png" />
        <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541570/prueba/17_jk0yrk.png" />
        <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541572/prueba/18_nmxmty.png" />
        <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541573/prueba/19_wwhsjb.png" />
        <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541574/prueba/20_h34qaj.png" />
      </div>
      <style jsx>{`
        .contenedor {
          width: 100%;
          background-color: #f6f7f7;
          display: flex;
          justify-content: space-around;
          height: 160px;
        }
        img {
          width: 13%;
          padding: 5px 10px;
        }
        @media (max-width: 600px) {
          .contenedor {
            displa: flex;
            flex-direction: column;
            align-items: center;
            height: auto;
          }
          img {
          width: 40%;
          padding: 10px 10px;
        }
        }
      `}</style>
    </> 
  ) 
}
export default Partners;