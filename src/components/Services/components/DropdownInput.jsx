import React, { useState, useEffect } from "react";
import chevron from "../../../img/chevron-down.svg";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(selectedQuality);
  }, [options]);

  const handleOptionClick = (option) => {
    setSelectedQuality(option);
    console.log(selectedQuality);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className={
          isOpen ? "dropdown-toggle dropdown-toggle--open" : "dropdown-toggle"
        }
        onClick={toggleDropdown}
      >
        <div className="dropdown-text">
          <p className="dropdown-label"> {selectedQuality.value}</p>{" "}
          <p className="dropdown-price"> {selectedQuality.price}</p>
        </div>
        <img
          src={chevron}
          className={`chevron chevron--dropdown ${isOpen ? "open" : "closed"}`}
        />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <>
              <li
                key={index}
                onClick={() => handleOptionClick(option, index)}
                className={
                  selectedQuality.index === index ? "dropdown-active" : ""
                }
              >
                <p className="dropdown-label">{option.value}</p>
                <p className="dropdown-price">{option.price}</p>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
