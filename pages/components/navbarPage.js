import React, { Component } from "react";
import { faSearch, faUser, faHeart, faLongArrowAltUp, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 function Navbar() {
  return(
  <>
    <div className="navbar">
      <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1604541574/prueba/logo_vilezd.png" />
      <div className="search-container">
        <input type="text" placeholder="Bucar producto..." className="search" />
        <button type="submit" className="btn-search"><FontAwesomeIcon icon={faSearch} style={{backgroundColor: 'none', color: '#5349db', fontSize: '20' }}/></button>
      </div>
      <div className="elements">
        <div className="eleHijo">
          <FontAwesomeIcon icon={faUser} style={{backgroundColor: 'none', color: '#5349db', fontSize: '20' }}/>
          <p>Mi cuenta</p>
        </div>
        <div className="eleHijo">
          <FontAwesomeIcon icon={faHeart} style={{backgroundColor: 'none', color: '#5349db', fontSize: '20' }}/>
          <p>Mis favoritos</p>
        </div>
        <div className="eleHijo">
          <FontAwesomeIcon icon={faLongArrowAltUp} style={{backgroundColor: 'none', color: '#5349db', fontSize: '20' }}/>
          <p>Cargar pedido masivo</p>
        </div>
        <div className="eleHijo">
          <FontAwesomeIcon icon={faShoppingCart} style={{backgroundColor: 'none', color: '#5349db', fontSize: '20' }}/>
          <p>Mi carrito</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .navbar {
        background-color: white;
        color: #5349db;
        height: 121px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 5 10px
      }
      .search-container {
        backgroun: black;
        color: red
      }
      .search {
        height: 40px;
        width: 330px;
        outline: none;
        border: 1px solid #FFF;
        border-bottom: 3px solid #5349db;
        font-size: 15px;
      }
      .btn-search {
        border: 1px solid #FFF;
        background-color: white;
        margin-top: 5px;
      }
      .elements {
        display: flex;
        flex-direction: row;
      }
      .elements > .eleHijo {
        margin 5px 15px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      } 
      .elements > .eleHijo > p{
        font-size: 11px;

      }
      @media (max-width: 600px) {
        .navbar {
          background-color: white;
          width: 100%
        }
        .search-container{
          display: none
        }
        .elements {
          display: none;
        }
      }
      @media (max-width: 768px) {
        .navbar {
          background-color: white;
          width: 100%;
          display: flex;
        justify-content: space-evenly;
        }
        .search {
        height: 30px;
        width: 200px;
        outline: none;
        border: 1px solid #FFF;
        border-bottom: 3px solid #5349db;
        font-size: 15px;
      }

      }
    `}</style>
  </>
  )
}
export default Navbar
