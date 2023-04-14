import React, { useState } from "react";

const ChoiceMenu = ({ options }) => {
  const [selectedService, setSelectedService] = useState("Option 1");
  const onSelect = (option) => {
    setSelectedService(option);
  };
  return (
    <div className="choice-img-menu">
      {options.map((option, index) => (
        <div
          key={index}
          className={`choice-menu-option choice-img-menu-option ${
            selectedService === option ? "option-selected" : ""
          }`}
          onClick={() => onSelect(option)}
        >
          <img src={option.img} alt="" className="choice-img-menu-img" />
          <div className="choice-img-menu-text">{option.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChoiceMenu;
