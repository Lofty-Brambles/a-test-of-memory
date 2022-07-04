import React from "react";

export default function Image({ id, url, handleClicks }) {
  return (
    <img
      className="images"
      id={id}
      src={url}
      alt={url}
      onClick={handleClicks}
    />
  );
}
