import React from "react";

export default function Image({ identity, url, handleClicks }) {
  return (
    <img
      className="images"
	  id={identity}
      src={url}
      alt={url}
      onClick={handleClicks}
    />
  );
}
