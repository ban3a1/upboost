import React, { useState } from "react";

const ChoiceMenu = ({ options }) => {
  const [selectedService, setSelectedService] = useState("Option 1");
  const onSelect = (option) => {
    setSelectedService(option);
  };
  return (
    <div className="choice-menu">
      {options.map((option, index) => (
        <div
          key={index}
          className={`choice-menu-option ${
            selectedService === option ? "option-selected" : ""
          }`}
          onClick={() => onSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default ChoiceMenu;
