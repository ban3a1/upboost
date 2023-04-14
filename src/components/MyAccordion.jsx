import { useState } from "react";
import chevron from "../img/chevron-down.svg";

function MyAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img
          src={chevron}
          className={`chevron ${isOpen ? "open" : "closed"}`}
        />
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default MyAccordion;
