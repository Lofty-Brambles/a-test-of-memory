import React from "react";

export default function MultiBox({ cl, name, selectedItem, onChange }) {
  const checkedState = name === selectedItem;

  return (
    <div className="wrap">
      <span id="input">
        <input
          type="radio"
          className={cl}
          name={name}
          value={name}
          checked={checkedState}
          onChange={onChange}
        />
        <span></span>
      </span>
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
