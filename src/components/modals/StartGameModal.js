import React, { useEffect, useState } from "react";
import Img from "./../../assets/loading.gif";
import Map from "../../logic/mapFactory";
import Swal from "sweetalert2";

export default function StartGameModal({ gameOptions, setter }) {
  const [images, setImages] = useState(<img src={Img} alt="loading" />);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function stateSetter(state) {
    setImages(state);
  }
  function setterLocal(opt, score) {
    setter(opt);
    setHighScore(score);
  }

  useEffect(() => {
    (async () => {
      const board = new Map(gameOptions[0], gameOptions[1]);
      const imgArr = await board.fetchImages();

      if (imgArr === "Error")
        return () => {
          Swal.fire({
            icon: "error",
            title: "Oops..",
            text: "Something went wrong!",
            footer: `<a href="https://github.com/Lofty-Brambles/a-test-of-memory/issues">Where do I report this issue?</a>`,
          });
        };

      imgArr.forEach((ele) => {
        ele.addEventListener("click", (e) => {
          if (board.hitArray[e.target.id] === true) {
            setterLocal(gameOptions, board.score);
          } else {
            board.hit(e.target.id);

            if (board.won()) {
              Swal.fire({
                allowOutsideClick: false,
                icon: "success",
                title: "You won!",
                text: "You achieved the highest possible score! Confirm below, if you want to play again!",
                confirmButtonText: "Yes, I do!",
              }).then(() => {
                window.location.reload();
              });
            } else {
            }
          }
        });
      });

      stateSetter(imgArr);
    })();
  }, [gameOptions]);

  useEffect(() => {
    document.querySelector(".current-score").textContent = currentScore;
    document.querySelector(".high-score").textContent = highScore;
  }, [currentScore, highScore]);

  return (
    <div>
      <div className="score-tab">
        <p className="block">
          Current Score: <span className="current-score">{currentScore}</span>
        </p>
        <span className="block divider"></span>
        <p className="block">
          High Score: <span className="high-score">{highScore}</span>
        </p>
      </div>
      <div>{images}</div>
    </div>
  );
}
