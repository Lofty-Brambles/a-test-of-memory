const fetchImageCount = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return 5;
    case "Medium":
      return 10;
    case "Hard":
      return 15;
    case "Oh-no":
      return 30;
    default:
      return 0;
  }
};
const fetchLinks = (type, count) => {
  switch (type) {
    case "Kitties!":
      return `https://api.thecatapi.com/v1/images/search?limit=${count}`;
    case "Doggos!":
      return `https://dog.ceo/api/breeds/image/random/${count}`;
    case "Random!":
      return `https://zoo-animal-api.herokuapp.com/animals/rand/${count}`;
    default:
      return "";
  }
};
const imgArr = async (type, link) => {
  try {
    const injson = await fetch(link);
    const obj = await injson.json();
    switch (type) {
      case "Kitties!":
        return obj.map((it) => it.url);
      case "Doggos!":
        return obj.message;
      case "Random!":
        return obj.map((it) => it.image_link);
      default:
        return "";
    }
  } catch {
    return "Error";
  }
};

export default async function fetchImages(type, difficulty) {
  const imgCount = fetchImageCount(difficulty);
  const getapiLink = fetchLinks(type, imgCount);
  const images = await imgArr(type, getapiLink);
  if (images === "Error") return "❌ | Could not fetch images :(";
  return images;
}
