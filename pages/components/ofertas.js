import React, { Component } from "react";
import { faAngleDown, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Ofertas() {
  return(
    <>
      <div className="banner">
        <div className="dptos">
          <p>DEPARTAMENTOS <FontAwesomeIcon icon={faAngleDown} style={{backgroundColor: 'none', color: '#FFF', fontSize: '20' }}/></p>
          <p>MARCAS <FontAwesomeIcon icon={faAngleDown} style={{backgroundColor: 'none', color: '#FFF', fontSize: '20' }}/></p>
        </div>
        <div className="ofertas">
          <p>Ofertas  <FontAwesomeIcon icon={faTag} style={{backgroundColor: 'none', color: '#FFF', fontSize: '20' }}/></p>
        </div>
      </div>
      <style jsx>{`
      .banner{
        color: white;
        background-color: #5349db;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
      .dptos {
        display: flex;
        flex-direction: row;
      } 
      .dptos > p{
        padding: 0 20px;
      }
      .ofertas {
        background-color: #ee6f5e;
        height: 50px;
        display: flex;
        justify-content: center;
        width: 260px
      }
      `}</style>
    </>
  )
}
export default Ofertas;