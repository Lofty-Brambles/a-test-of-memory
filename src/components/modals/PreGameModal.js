import React, { useState } from "react";

function MultiBox({ key, name, selectedItem, onChange }) {
  const checkedState = name === selectedItem;

  return (
    <div className="wrap">
      <input
        type="radio"
        name={name}
        id={key}
        value={name}
        checked={checkedState}
        onChange={onChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default function PreGameModal({ startGame }) {
  const categories = ["Kitties!", "Doggos!", "Birbs!", "Duccs!", "Fishies!"];
  const difficulties = ["Easy", "Medium", "Difficult", "Oh-no"];
  const [category, setCategory] = useState(categories);
  const [difficulty, setDifficulty] = useState();

  const starter = () => {
    startGame([category, difficulty]);
  };

  return (
    <div>
      <h3>Get a pet!</h3>
      <div>
        {categories.map((it) => (
          <MultiBox
            key={it}
            name={it}
            selectedItem={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        ))}
      </div>
      <h3>Select a difficulty!</h3>
      <div>
        {difficulties.map((it) => (
          <MultiBox
            key={it}
            name={it}
            selectedItem={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          />
        ))}
      </div>
      <button onClick={starter}></button>
    </div>
  );
}
