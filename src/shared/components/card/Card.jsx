import "./Card.scss";

export const Card = ({ children, selected=false }) => {
  return (
    <div
      className={`card ${selected ? "card--selected" : ""}`}
    >
        {children}
    </div>
  );
};
