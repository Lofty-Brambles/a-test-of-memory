const fetchImageCount = difficulty => {
	switch (difficulty) {
		case "Easy": return 5;
		case "Medium": return 10;
		case "Hard": return 15;
		case "Oh-no": return 30;
		default: return 0;
	}
};
const fetchLinks = ( type, count ) => {
	switch (type) {
		case "Kitties!": return `https://api.thecatapi.com/v1/images/search?limit=${ count }`;
		case "Doggos!": return `https://dog.ceo/api/breeds/image/random/${ count }`;
		case "Random!": return `https://zoo-animal-api.herokuapp.com/animals/rand/${ count }`;
		default: return "";
	}
};
const imgArr = async ( type, link ) => {
	try {
		const injson = await fetch( link );
		const obj = await injson.json();
		switch (type) {
			case "Kitties!": return obj.map( it => it.url );
			case "Doggos!": return obj.message;
			case "Random!": return obj.map( it => it.image_link );
			default: return "";
		}
	} catch {
		return "Error";
	}
};

export default class Map {
	constructor( ...options ) {
		this.type = options[0];
		this.difficulty = options[1];
		this.hitArray = new Array( fetchImageCount( options[1] ) ).fill(false);
		this.score = 0;
	}

	async fetchImages() {
		const imgCount = fetchImageCount(this.difficulty);
		const getapiLink = fetchLinks( this.type, imgCount );
		const images = await imgArr( this.type, getapiLink );
		if ( images === "Error" ) return "❌ | Could not fetch images :(";
		this.images = images;
	}

	hit( id ) {
		if ( this.hitArray[id] === false ) {
			this.hitArray[id] = true;
			this.score++;
		}
	}

	won() {
		if ( this.score === fetchImageCount( this.type ) ) return true;
		return false;
	}
}