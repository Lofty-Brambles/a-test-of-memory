import React from "react";
import Image from "./Image";

export default function Cardgrid({ images, handleClicks }) {
  return (
    <div className="card-grid">
      {images.map(({ id, it }) => (
        <Image key={id} identity={id} url={it} handleClicks={handleClicks} />
      ))}
    </div>
  );
}
