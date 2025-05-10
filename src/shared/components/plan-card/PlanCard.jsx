import { Card } from "../card/Card";
import "./PlanCard.scss";

export const PlanCard = ({
  id = "",
  src = "",
  title = "",
  description = "",
  checked = false,
  typeOfCustomer = "",
}) => {
  return (
    <Card>
      <div className="plan-card__container">
        <div className="">
          <div
            className={` plan-card__check-circle ${
              typeOfCustomer === id && id !== "" ? "checked" : ""
            }`}
          ></div>
        </div>
        <img src={src} alt="" />
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </Card>
  );
};
