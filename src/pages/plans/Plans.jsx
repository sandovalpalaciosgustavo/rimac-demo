import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../shared/header/Header";
import { PlanCard } from "../../shared/components/plan-card/PlanCard";
import { SelectionCard } from "../../shared/components/selection-card/SelectionCard";
import { useGetPlansQuery } from "../../features/api/apiSlice";
import PlanParaMi from "../../assets/plan__para-mi.png";
import PlanParaAlguienMas from "../../assets/plan__para-alguien-mas.png";
import "./Plans.scss";

const customer = [
  {
    id: 1,
    title: "Para mí",
    description:
      "Cotiza tu seguro de salud y agrega familiares si así lo deseas",
    src: PlanParaMi,
  },
  {
    id: 2,
    title: "Para mi familia",
    description:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    src: PlanParaAlguienMas,
  },
];
export const Plans = () => {
  const { data: plans, isLoading, error } = useGetPlansQuery();
  const [showPlans, setShowPlans] = useState(false);

  useEffect(() => {
    console.log(plans);
  }, [showPlans]);

  const navigate = useNavigate();

  const getBack = () => {
    navigate("/");
  };

  return (
    <div className="plans__main-container">
      <Header></Header>
      {/* <div>planes y coberturas</div> */}
      <div>
        <a href="" onClick={getBack}>
          <icon></icon> Volver
        </a>
      </div>
      <h2 className="text-center">Rocío ¿Para quién deseas cotizar?</h2>
      <span className="text-center">Selecciona la opcion que se ajusta a tus necesdades</span>

      <div className="plans__customer">
        {customer.map((plan, index) => (
          <div key={index} onClick={() => setShowPlans(true)}>
            <PlanCard
              key={plan?.id}
              title={plan?.title}
              description={plan?.description}
              src={plan?.src}
            />
          </div>
        ))}
      </div>
      {showPlans && (
        <div className="plans__plans">
          {plans &&
            plans.list?.map((plan) => (
              <SelectionCard
                name={plan?.name}
                price={plan?.price}
                description={plan?.description}
                age={plan?.age}
              />
            ))}
        </div>
      )}
    </div>
  );
};
