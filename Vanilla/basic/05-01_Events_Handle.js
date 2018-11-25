const title = document.querySelector("#title");

function HandleClick() {
    title.style.color = "red";    
}

title.addEventListener("click", HandleClick);