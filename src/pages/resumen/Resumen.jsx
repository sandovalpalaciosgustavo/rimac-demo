import { Header } from "../../shared/header/Header";
import { useNavigate } from "react-router-dom";
import "./Resumen.scss";
import { Card } from "../../shared/components/card/Card";

export const Resumen = () => {
  const navigate = useNavigate();
  const getBack = () => {
    navigate("/plans");
  };
  return (
    <div className="Resumen__main-container">
      <Header></Header>
      <div className="Resumen__container">
        <div>
          <a href="" onClick={getBack}>
            {/* <icon></icon> */} Volver
          </a>
          <h1>Resumen del Seguro</h1>
          <Card>
            <div>
              <span>PRECIO CLACULADOS PARA</span>
              <hr />
              <h3>Responsable de pago</h3>
              <p>DNI: 444888888</p>
              <p>Celular: 5130216147</p>

              <h3>Plan elegido</h3>
              <p>Plan en Casa y Clínica</p>
              <p>Costo del Plan: $99 al mes</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
