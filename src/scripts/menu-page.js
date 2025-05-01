// imports
import sandwichImgImport from "../assets/images/sandwich.jpg";
import teaImgImport from "../assets/images/tea.jpg";
import biscuitImgImport from "../assets/images/biscuits.jpg";

const menuBlock = document.createElement("div");
menuBlock.id = "menu-block";

const menuHeading = document.createElement("h2");
menuHeading.textContent = "Menu";

menuBlock.append(menuHeading);

const choiceBlock = document.createElement("div");
choiceBlock.id = "choice-block";

const sandwichBlock = document.createElement("div");
sandwichBlock.classList.add("choices");
const sandwichText = document.createElement("p");
sandwichText.textContent = `Our classic and delicious sandwich`;
const sandwichImg = document.createElement("img");
sandwichImg.src = sandwichImgImport;
sandwichImg.alt = "sandwich";
sandwichBlock.append(sandwichImg);
sandwichBlock.append(sandwichText);

const teaBlock = document.createElement("div");
teaBlock.classList.add("choices");
const teaText = document.createElement("p");
teaText.textContent = "Our classic and delicious sandwich";
const teaImg = document.createElement("img");
teaImg.src = teaImgImport;
teaImg.alt = "tea";
teaBlock.append(teaImg);
teaBlock.append(teaText);



const biscuitBlock = document.createElement("div");
biscuitBlock.classList.add("choices");
const biscuitText = document.createElement("p");
biscuitText.textContent = "Our amazing and tasty biscuit";
const biscuitImg = document.createElement("img");
biscuitImg.src = biscuitImgImport;
biscuitImg.alt = "biscuits";
biscuitBlock.append(biscuitImg);
biscuitBlock.append(biscuitText);

choiceBlock.append(sandwichBlock);
choiceBlock.append(teaBlock);
choiceBlock.append(biscuitBlock);

menuBlock.append(choiceBlock);

export { menuBlock };