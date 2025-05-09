import React from "react";
import { useNavigate } from 'react-router-dom';
import imagen_portada from "../../assets/imagen_portada.png";

import "./Home.scss";
import { Header } from "../../shared/header/Header";
import { Footer } from "../../shared/footer/Footer";

export const Home = () => {

  const navigate = useNavigate();

  const goto = ()=>{
    navigate("/plans");
  }
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className="picture">
          <div className="container">
            {/* <img src={imagen_portada} alt="Familia" className="family-image" /> */}
          </div>
        </div>
        <div className="title">
          <div className="container">
            <span>Seguro Salud Flexible</span>
            <h1 className="title">Creado para ti y tu familia</h1>
          </div>
        </div>
        <div className="form">
          <div className="container">
            <p>
              <strong>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </strong>
            </p>
            <div className="input-container-form">
              <select>
                <option>DNI</option>
                <option>RUC</option>
              </select>
              <input type="text" placeholder="Nro. de documento" />
            </div>
            <input className="input-form" type="text" placeholder="Celular" />
            {/* <p className="">El usuario ingresado no existe</p> */}

            <div className="policies">
              <label>
                <input className="checkbox" type="checkbox" /> Acepto la
                Política de Privacidad
              </label>
              <label>
                <input className="checkbox" type="checkbox" /> Acepto la
                Política Comunicaciones Comerciales
              </label>
              <a href="#" className="">
                Aplican Términos y Condiciones.
              </a>
            </div>
            <button type="button" className="submit-btn" onClick={goto}>Cotiza aquí</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>

    </div>
  );
};
