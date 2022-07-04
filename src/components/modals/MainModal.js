import React, { useEffect, useState } from "react";
import Map from "../../logic/mapFactory";
import Scorecard from "../utils/Scorecard";
import Cardgrid from "./../utils/Cardgrids";

export default function StartGameModal({ gameOptions, setter }) {
	const [ currentScore, setCurrentScore ] = useState(0);
	const [ highScore, setHighScore ] = useState(0);
	const [ images, setImages ] = useState([]);

	useEffect(() => {
		(async () => {
			const board = new Map(gameOptions[0], gameOptions[1]);
			await board.fetchImages();
			setImages( board.images );
		})();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	function handleClicks(e) {
		const image = e.target.id;
		if (board.hitArray[e.target.id] === true) {
            reset(gameOptions, board.score);
        }
	}

	return ( <>
		<Scorecard currentScore={currentScore} highScore={highScore} />
		<Cardgrid images={images} handleClicks={handleClicks} />
	</> )
}