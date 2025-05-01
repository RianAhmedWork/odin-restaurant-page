// imports
import homePicture from "../assets/images/home-cafe.jpg";

const homeBlock = document.createElement("div");
homeBlock.id = "home-block";

const homeParagraph = document.createElement("p");
homeParagraph.textContent = `Seaside Cafe is a beautiful cafe located right by sea for some of the most breath taking views in the area.
                Our cafe is open all the way from morning to right with a variety of delicious meals to serve. Although
                all of our food is tasty and delicious we are particularly known for our amazing breakfast sandwich and
                breakfast wrap, be sure to give those a try if its your first time visiting us.`;

const img = document.createElement("img");
img.id = "home-picture"
img.src = homePicture;
img.alt = "picture of a cafe";

homeBlock.append(homeParagraph);
homeBlock.append(img);

export { homeBlock };