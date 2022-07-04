import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import fetchImages from "../../logic/mapFactory";
import Scorecard from "../utils/Scorecard";
import Cardgrid from "./../utils/Cardgrids";

export default function StartGameModal({ gameOptions, setter }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [images, setImages] = useState([]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    (async () => {
      const arr = await fetchImages(gameOptions[0], gameOptions[1]);
      const revArr = arr.map((it, id) => {
        return { it, id };
      });
      setImages(revArr);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClicks(e) {
    const imageId = Number(e.target.id);
    const idArr = clicked.map((ele) => (ele ?? "").id);
    if (idArr.includes(imageId)) {
      resetRound();
    } else {
      fwdRound(imageId);
    }
    shuffleImages();
  }

  function resetRound() {
    setHighScore(currentScore);
    setCurrentScore(0);
    setClicked([]);
  }

  function fwdRound(id) {
    const newScore = currentScore + 1;
    if (highScore > newScore) setHighScore(newScore);
    setCurrentScore(newScore);

    if (clicked.length === images.length) {
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
      const idArr = images.map((ele) => ele.id);
      const ele = idArr.indexOf(Number(id));
      setClicked((prev) => [...prev, images[ele]]);
    }
  }

  function shuffleImages() {
    const newArr = images.sort(() => Math.random - 0.5);
    setImages(newArr);
  }

  return (
    <>
      <Scorecard currentScore={currentScore} highScore={highScore} />
      <Cardgrid images={images} handleClicks={handleClicks} />
    </>
  );
}
