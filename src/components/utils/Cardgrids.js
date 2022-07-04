import React from "react";
import Image from "./Image";

export default function Cardgrid({ images, handleClicks }) {
  return (
    <>
      {images.map((img) => (
        <Image id={img} url={img} handleClicks={handleClicks} />
      ))}
    </>
  );
}
