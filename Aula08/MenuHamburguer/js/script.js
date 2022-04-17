const btnMobile = document.querySelector("#btn-mobile");


function togglMenu(){
    const nav = document.querySelector("#nav");
    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", togglMenu);