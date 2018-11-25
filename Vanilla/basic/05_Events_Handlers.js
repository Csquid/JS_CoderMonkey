const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "red";
}

title.addEventListener("click", handleClick);

// function handleResize(event) {
//     console.log("I have been resized");
//     console.log(event);
// }

// window.addEventListener("resize", handleResize);