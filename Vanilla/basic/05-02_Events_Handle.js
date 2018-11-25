const title = document.querySelector("#title");
const dull = document.querySelector("#dull");

const BLACK_COLOR = "rgb(34, 47, 62)";
const BASE_COLOR = "rgb(52, 73, 94)";
const RED_COLOR = "#ee5253";
const OTHER_COLOR = "#8395a7";
const MINT_COLOR = "rgb(0, 210, 211)";

function handleTitleClick() {
    const currentColor = title.style.color;

    if(currentColor == MINT_COLOR) {
        title.style.color = RED_COLOR;
    } else {
        title.style.color = MINT_COLOR;
    }
}

function handleDullClick() {
    const currentColor = dull.style.color;

    if(currentColor == BLACK_COLOR) {
        dull.style.color = RED_COLOR;
    } else {
        dull.style.color = BLACK_COLOR;
    }
}
function init() {
    title.style.color = MINT_COLOR;
    dull.style.color = BLACK_COLOR;
    title.addEventListener("click", handleTitleClick);
    dull.addEventListener("click", handleDullClick);
}

init();