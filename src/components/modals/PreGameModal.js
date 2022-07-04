import React, { useState } from "react";

import MultiBox from "./../utils/Multibox";

export default function PreGameModal({ startGame }) {
  const categories = ["Kitties!", "Doggos!", "Random!"];
  const difficulties = ["Easy", "Medium", "Hard", "Oh-no"];
  const [category, setCategory] = useState(categories);
  const [difficulty, setDifficulty] = useState();

  const starter = () => {
    const set1 = [...document.querySelectorAll(".Category")].map(
      (e) => e.checked
    );
    const set2 = [...document.querySelectorAll(".Difficulty")].map(
      (e) => e.checked
    );
    if (
      set1.reduce((prev, next) => prev || next) &&
      set2.reduce((prev, next) => prev || next)
    ) {
      startGame([category, difficulty]);
    }
  };

  return (
    <div id="pre-game-modal">
      <div>
        <h3>Get a pet!</h3>
        <div>
          {categories.map((it, index) => (
            <MultiBox
              cl={"Category"}
              key={index}
              name={it}
              selectedItem={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          ))}
        </div>
      </div>
      <div>
        <h3>Select a difficulty!</h3>
        <div>
          {difficulties.map((it, index) => (
            <MultiBox
              cl={"Difficulty"}
              key={index}
              name={it}
              selectedItem={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            />
          ))}
        </div>
      </div>
      <button onClick={starter}>Click to start!</button>
    </div>
  );
}
