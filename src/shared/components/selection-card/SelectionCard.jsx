import { useNavigate } from "react-router-dom";
import { Card } from "../card/Card";
import "./SelectionCard.scss";
import PlanCasaImg from "../../../assets/plan__casa.png";
import PlanClinicaImg from "../../../assets/plan__clinica.png";

export const SelectionCard = ({
  name = "",
  price = "",
  description = [],
  age = "",
}) => {
  const navigate = useNavigate();

  const isClinic = () => {
    return name.toLowerCase().includes("clínica");
  };

  const getNext = () => {
    navigate("/resumen");
  };

  return (
    <div>
      <Card>
        <div className="selection-card__container">
          <div className="plan__suggest">
            {isClinic() && <span>Plan recomendado</span>}
          </div>
          <div className="selection-card__header">
            <div className="selection-card__header-text">
              <h3>{name}</h3>
              <span>COSTO PLAN</span>
              <span>
                <strong>${price} al mes</strong>
              </span>
            </div>
            <div>
              <img
                className="selection-card__logo"
                src={isClinic() ? PlanClinicaImg : PlanCasaImg}
                alt="logo"
              />
            </div>
          </div>
          <hr />
          <ul className="selection-card__description">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button className="selection-card__button" onClick={getNext}>
            Seleccionar Plan
          </button>
        </div>
      </Card>
    </div>
  );
};
