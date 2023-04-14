import React, { useState } from "react";
import minus from "../../../img/minus.svg";
import plus from "../../../img/plus.svg";

const InputWithButtons = () => {
  const [value, setValue] = useState(0);

  const handleMinusClick = () => {
    setValue(Math.max(0, value - 1));
  };

  const handlePlusClick = () => {
    setValue(Math.min(50000, value + 1));
  };

  const handleChange = (event) => {
    setValue(Math.min(50000, Math.max(0, event.target.value)));
  };

  return (
    <div className="input-with-buttons">
      <img onClick={handleMinusClick} src={minus} className="click-button" />

      <input
        type="number"
        value={value}
        onChange={handleChange}
        className="click-input"
      />
      <img onClick={handlePlusClick} src={plus} className="click-button" />
    </div>
  );
};

export default InputWithButtons;
