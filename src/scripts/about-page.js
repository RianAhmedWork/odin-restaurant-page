const aboutBlock = document.createElement("div");
aboutBlock.id = "about-block";

const aboutParagraph = document.createElement("p");
aboutParagraph.textContent = `This cafe was started in the 1960s by the Doe family. and to this very day with the help of our customers and local community this cafe
                has been going strong.`;

aboutBlock.append(aboutParagraph);

export { aboutBlock };