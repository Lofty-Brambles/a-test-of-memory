import React from "react";

export default function Scorecard({ currentScore, highScore }) {
  return (
    <>
      <div className="score-tab">
        <p className="block">
          Current Score: <span className="current-score">{currentScore}</span>
        </p>
        <span className="block divider"></span>
        <p className="block">
          High Score: <span className="high-score">{highScore}</span>
        </p>
      </div>
    </>
  );
}
