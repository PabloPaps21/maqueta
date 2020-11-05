import { getFontDefinitionFromManifest } from "next/dist/next-server/server/font-utils";
import React, { Component } from "react";

function Slide(){
  return(
    <>
      <div className="slide">
        <div className="conoce">
          Conoce la nueva línea de placas
        </div>
        <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541585/prueba/aionik_gfke96.png"/>
      </div>
       
      <style jsx>{`
        .slide {
          display: flex;
          flex-direction: row;
          justify-content: space-content;
          align-items: center;
        }
        .conoce {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ee6f5e;
          width: 70%;
          height: 265px;
        }
        img {
          width: 100%;
        }
        @media (max-width: 600px) {
          .slide {
            display: flex;
            flex-direction: column;
            justify-content: space-content;
            align-items: center;
          }
        }
        
      `}</style>
    </>
  )
}   
export default Slide;