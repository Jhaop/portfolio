import "./style.css";

const header = document.createElement("header");
const footer = document.createElement("footer");
const main = document.createElement("main");

//HEADER

const headerImage = document.createElement("img");
const headerTitle = document.createElement("h1");
const headerText = document.createElement("p");
const headerIcons = document.createElement("div");

const githubIcon = document.createElement("a");
const linkedinIcon = document.createElement("a");
const twitterIcon = document.createElement("a");

headerIcons.classList.add("headerIcons");

githubIcon.classList.add("githubIcon");
githubIcon.setAttribute("href", "###");
githubIcon.setAttribute("alt", "Github");
linkedinIcon.classList.add("linkedinIcon");
linkedinIcon.setAttribute("href", "###");
linkedinIcon.setAttribute("alt", "Linkedin");
twitterIcon.classList.add("twitterIcon");
twitterIcon.setAttribute("href", "###");
twitterIcon.setAttribute("alt", "Twitter");

headerIcons.appendChild(githubIcon);
headerIcons.appendChild(linkedinIcon);
headerIcons.appendChild(twitterIcon);

headerImage.classList.add("headerImage");
headerImage.setAttribute("alt", "Leo, web developer");
headerTitle.classList.add("headerTitle");

headerTitle.innerHTML = "About me";
headerText.classList.add("headerText");
headerText.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium lacinia iaculis. Nunc vitae pellentesque ante, a tempor metus. Nulla fermentum lacus eu congue scelerisque. Nunc facilisis eros at tristique luctus. Mauris ipsum lacus, pretium at ipsum eu, pretium posuere elit. Suspendisse sit amet gravida nibh.";
header.appendChild(headerImage);
header.appendChild(headerTitle);
header.appendChild(headerText);
header.appendChild(headerIcons);
//END HEADER

//MAIN

const myWork = document.createElement("div");
const project1 = document.createElement("div");
const project2 = document.createElement("div");
const project3 = document.createElement("div");
const project4 = document.createElement("div");
const project5 = document.createElement("div");

myWork.classList.add("myWork");
const mainTitle = document.createElement("h2");
mainTitle.classList.add("mainTitle");
mainTitle.innerHTML = "My work";
const myWorkText = document.createElement("p");
myWorkText.classList.add("myWorkText");

project1.classList.add("project", "project1");
project2.classList.add("project", "project2");
project3.classList.add("project", "project3");
project4.classList.add("project", "project4");
project5.classList.add("project", "project5");

const project1Title = document.createElement("h3");
const project1Image = document.createElement("img");
const project1Text = document.createElement("p");
const project1IconsContainer = document.createElement("div");
project1IconsContainer.classList.add("projectIconContainer");
const project1link1 = document.createElement("a");
project1link1.classList.add("link1");
project1link1.setAttribute("href", "###");
project1link1.setAttribute("alt", "Github");
const project1link2 = document.createElement("a");
project1link2.classList.add("link2");
project1link2.setAttribute("href", "###");
project1link2.setAttribute("alt", "Visit page");
project1IconsContainer.appendChild(project1link1);
project1IconsContainer.appendChild(project1link2);
project1Title.innerHTML = "Game: Battleship";
project1Text.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non pretium diam, nec efficitur nulla. Curabitur tristique rhoncus massa, egestas sagittis diam varius eget. Ut congue fringilla sapien, vel eleifend elit vehicula in.";
project1.appendChild(project1Title);
project1.appendChild(project1Image);
project1.appendChild(project1Text);
project1.appendChild(project1IconsContainer);

const project2Title = document.createElement("h3");
const project2Image = document.createElement("img");
const project2Text = document.createElement("p");
const project2IconsContainer = document.createElement("div");
project2IconsContainer.classList.add("projectIconContainer");
const project2link1 = document.createElement("a");
project2link1.classList.add("link1");
project2link1.setAttribute("href", "###");
project2link1.setAttribute("alt", "Github");
const project2link2 = document.createElement("a");
project2link2.classList.add("link2");
project2link2.setAttribute("href", "###");
project2link2.setAttribute("alt", "Visit page");
project2IconsContainer.appendChild(project2link1);
project2IconsContainer.appendChild(project2link2);
project2Title.innerHTML = "Restaurant website";
project2Text.innerHTML =
  "Ut congue nunc eros, et viverra magna vulputate vel. Aliquam sagittis urna et ante bibendum scelerisque. Suspendisse ac orci non tortor pellentesque aliquet. Integer varius nulla a quam sollicitudin maximus a facilisis erat. Nam dapibus interdum finibus.";
project2.appendChild(project2Title);
project2.appendChild(project2Image);
project2.appendChild(project2Text);
project2.appendChild(project2IconsContainer);

const project3Title = document.createElement("h3");
const project3Image = document.createElement("img");
const project3Text = document.createElement("p");
const project3IconsContainer = document.createElement("div");
project3IconsContainer.classList.add("projectIconContainer");
const project3link1 = document.createElement("a");
project3link1.classList.add("link1");
project3link1.setAttribute("href", "###");
project3link1.setAttribute("alt", "Github");
const project3link2 = document.createElement("a");
project3link2.classList.add("link2");
project3link2.setAttribute("href", "###");
project3link2.setAttribute("alt", "Visit page");
project3IconsContainer.appendChild(project3link1);
project3IconsContainer.appendChild(project3link2);
project3Title.innerHTML = "Weather website";
project3Text.innerHTML =
  "Nulla pulvinar fermentum neque, quis varius ligula convallis ut. Nulla sit amet consectetur leo, vitae dictum ipsum. Sed consequat erat ex, id molestie dui lacinia a. Interdum et malesuada fames ac ante ipsum primis in faucibus.";
project3.appendChild(project3Title);
project3.appendChild(project3Image);
project3.appendChild(project3Text);
project3.appendChild(project3IconsContainer);

const project4Title = document.createElement("h3");
const project4Image = document.createElement("img");
const project4Text = document.createElement("p");
const project4IconsContainer = document.createElement("div");
project4IconsContainer.classList.add("projectIconContainer");
const project4link1 = document.createElement("a");
project4link1.classList.add("link1");
project4link1.setAttribute("href", "###");
project4link1.setAttribute("alt", "Github");
const project4link2 = document.createElement("a");
project4link2.classList.add("link2");
project4link2.setAttribute("href", "###");
project4link2.setAttribute("alt", "Visit page");
project4IconsContainer.appendChild(project4link1);
project4IconsContainer.appendChild(project4link2);
project4Title.innerHTML = "Game: TicTacToe";
project4Text.innerHTML =
  "Duis lobortis imperdiet nisl at bibendum. Vivamus dictum lorem ligula, congue maximus ante viverra nec. Pellentesque varius ut sapien ac elementum. In hac habitasse platea dictumst.";
project4.appendChild(project4Title);
project4.appendChild(project4Image);
project4.appendChild(project4Text);
project4.appendChild(project4IconsContainer);

const project5Title = document.createElement("h3");
const project5Image = document.createElement("img");
const project5Text = document.createElement("p");
const project5IconsContainer = document.createElement("div");
project5IconsContainer.classList.add("projectIconContainer");
const project5link1 = document.createElement("a");
project5link1.classList.add("link1");
project5link1.setAttribute("href", "###");
project5link1.setAttribute("alt", "Github");
const project5link2 = document.createElement("a");
project5link2.classList.add("link2");
project5link2.setAttribute("href", "###");
project5link2.setAttribute("alt", "Visit page");
project5IconsContainer.appendChild(project5link1);
project5IconsContainer.appendChild(project5link2);
project5Title.innerHTML = "Personal Library";
project5Text.innerHTML =
  "Fusce finibus dui sed arcu pharetra euismod. Phasellus blandit risus et gravida rutrum. Morbi convallis lacinia accumsan. Ut nisl ex, sodales ut eros sed, aliquet sollicitudin metus.";
project5.appendChild(project5Title);
project5.appendChild(project5Image);
project5.appendChild(project5Text);
project5.appendChild(project5IconsContainer);

myWork.appendChild(mainTitle);
myWork.appendChild(myWorkText);
main.appendChild(myWork);
main.appendChild(project1);
main.appendChild(project2);
main.appendChild(project3);
main.appendChild(project4);
main.appendChild(project5);

// END MAIN

// FOOTER
const credits = document.createElement("div");
credits.classList.add("credits");
const image1credit = document.createElement("a");
const image2credit = document.createElement("a");
const image3credit = document.createElement("a");
const image4credit = document.createElement("a");
const image5credit = document.createElement("a");
const image6credit = document.createElement("a");
const image7credit = document.createElement("a");
const image8credit = document.createElement("a");
const image9credit = document.createElement("a");
const image10credit = document.createElement("a");
image1credit.innerHTML = "Portrait picture by Drazen Zigic on Freepik";
image1credit.setAttribute(
  "href",
  "https://www.freepik.com/free-photo/male-entrepreneur-working-computer-home_26922441.htm",
);
image2credit.innerHTML = "Github icons created by riajulislam - Flaticon";
image2credit.setAttribute("href", "https://www.flaticon.com/free-icons/github");
image3credit.innerHTML = "Linkedin icons created by riajulislam - Flaticon";
image3credit.setAttribute(
  "href",
  "https://www.flaticon.com/free-icons/linkedin",
);
image4credit.innerHTML = "Twitter icons created by Dave Gandy - Flaticon";
image4credit.setAttribute(
  "href",
  "https://www.flaticon.com/free-icons/twitter",
);
image5credit.innerHTML = "Restaurant image by evening_tao on Freepik";
image5credit.setAttribute(
  "href",
  "https://www.freepik.com/free-photo/restaurant-interior_1243339.htm#fromView=search&page=1&position=13&uuid=b803ce4b-1831-4c14-9345-3f14232ed818",
);
image6credit.innerHTML = "Battleship image by macrovector on Freepik";
image6credit.setAttribute(
  "href",
  "https://www.freepik.com/free-vector/warship-set-flat-style-boat-transport-speedboat-hovercraft-transportation-vessel_10703946.htm#fromView=search&page=1&position=42&uuid=660b9e26-f691-41b0-962d-501e43c4b018",
);
image7credit.innerHTML = "Lightning image from Freepik";
image7credit.setAttribute(
  "href",
  "https://www.freepik.com/free-photo/weather-effects-composition_33609888.htm#fromView=search&page=1&position=52&uuid=65be910d-6b0a-497e-8c71-d0601c51374f",
);
image8credit.innerHTML = "Tic Tac Toe image by pch.vector on Freepik";
image8credit.setAttribute(
  "href",
  "https://www.freepik.com/free-vector/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_27572532.htm#fromView=search&page=1&position=0&uuid=761c16e8-d88b-4b40-84cc-424f84bf9200",
);
image9credit.innerHTML = "Library image by vectorpouch on Freepik";
image9credit.setAttribute(
  "href",
  "https://www.freepik.com/free-vector/library-interior-empty-room-reading-with-books-wooden-shelves_5467428.htm#fromView=search&page=1&position=8&uuid=9f18afed-f5e6-4679-a407-7e0ed2c5e481",
);
image10credit.innerHTML = "Link icons created by Md Tanvirul Haque - Flaticon";
image10credit.setAttribute("href", "https://www.flaticon.com/free-icons/link");

credits.appendChild(image1credit);
credits.appendChild(image2credit);
credits.appendChild(image3credit);
credits.appendChild(image4credit);
credits.appendChild(image5credit);
credits.appendChild(image6credit);
credits.appendChild(image7credit);
credits.appendChild(image8credit);
credits.appendChild(image9credit);
credits.appendChild(image10credit);

footer.appendChild(credits);
// END FOOTER

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
