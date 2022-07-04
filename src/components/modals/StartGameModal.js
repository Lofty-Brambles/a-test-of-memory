import React, {useEffect} from "react";
import Img from "./../../assets/loading.gif";
import Map from "../../logic/mapFactory";

export default function StartGameModal({ gameOptions }) {
	useEffect(() => {
		(async () => {
			const board = new Map( gameOptions[0], gameOptions[1] );
			const images = board.fetchImages();
			if ( images === "Error" ) return () => {};
		})();
	});

	return (
		<div>
			<img src={Img} alt="loading" />
		</div>
	);
}