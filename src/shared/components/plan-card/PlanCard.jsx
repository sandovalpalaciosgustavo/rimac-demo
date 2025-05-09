import { Card } from "../card/Card";
import "./PlanCard.scss";

export const PlanCard = ({ src, title, description }) => {
  return (
    <Card>
      <div className="plan-card__container">
        <input type="radio" name="gender" value="male" checked />
        <img height={"48px"} src={src} alt="" />
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </Card>
  );
};
