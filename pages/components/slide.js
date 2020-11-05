import { getFontDefinitionFromManifest } from "next/dist/next-server/server/font-utils";
import React, { Component } from "react";

function Slide(){
  return(
    <>
      <div className="container">
        <div className="conoce">
          <p><span>Conoce la</span> nueva línea de placas</p>
        </div>
        <div className="imgContainer">
          <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541585/prueba/aionik_gfke96.png"></img>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          background-color: #ee6f5e;
          display:flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          margin-top: 1px;
        }
        .conoce {
          width: 30%;
          text-align: right;
          color: #f2f2f2;
          float: left;
          margin-left: 200px;
          font-size: 50px;
        }
        .imgContainer{
          width: 60%;
          display: flex;
            justify-content: center;
        }
        span {
          color: #FFF;
          font-weight: ighter;
        }
        @media (max-width: 600px) {
          .imgContainer {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .container {
            background-color: black;
          }
          .conoce {
            display: none;
          }
        }
      `}</style>  
    </>
  )
}   
export default Slide;