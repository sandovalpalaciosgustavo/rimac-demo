import { useState, useEffect } from "react";
import { Header } from "../../shared/header/Header";
import { PlanCard } from "../../shared/components/plan-card/PlanCard";
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
  const {
    data:  plans,
    isLoading,
    error,
  } = useGetPlansQuery();
  const [showPlans, setShowPlans] = useState(false);

/*   useEffect(() => {
    if (!isLoading && plans) {
      console.log("Planes cargados (tipo):", typeof plans);
      console.log("Planes cargados (contenido):", JSON.stringify(plans, null, 2));
    }
    if (error) {
      console.error("Error al cargar los planes:", error);
    }
  }, [isLoading, plans, error]);; */

  return (
    <div className="plans__main-container">
      <Header></Header>
      <div>planes y coberturas</div>
      <div>Volver</div>
      <div>
        <h2>Rocío ¿Para quién deseas cotizar?</h2>
      </div>
      <div>
        {customer.map((plan) => (
          <div onClick={() => setShowPlans(true)}>
            <PlanCard
              key={plan.id}
              title={plan.title}
              description={plan.description}
              src={plan.src}
            />
          </div>
        ))}
      </div>
       {showPlans && (
        <div>
          {plans && plans.list?.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              description={plan.description}
              src={plan.src}
            />
          ))}
        </div>
      )} 
      <h2>holaaaa</h2>
    </div>
  );
};
