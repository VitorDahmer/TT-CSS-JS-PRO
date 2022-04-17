const catalogoAdd = document.querySelector(".catalogo");
const addCarousel = document.querySelector(".principalCarousel");
const urlBase = "http://www.omdbapi.com/?apikey=5dc1a0c3&";
const colection = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
// let searchColection = "superman";

const addTake = async (movie = "superman") => {


 

    const response = await fetch(`${urlBase}s=${movie}`);
    const data = await response.json();

    console.log(data);


    addCarousel.innerHTML += `
        <div class="carouselAdd">
        <img src="${data.Search[0].Poster}" alt="">
        <img src="${data.Search[1].Poster}" alt="">
        <img src="${data.Search[2].Poster}" alt=""> 
        <div>
            <h1>Coleção ${movie}</h1>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid eaque impedit corporis reiciendis laudantium neque molestiae velit facere quisquam itaque deserunt exercitationem, architecto repellendus error dignissimos saepe id doloremque!</p>
            <a href="#">Assista Agora</a>
        </div>
     </div>
        `


    data.Search.map((item) => {
        catalogoAdd.innerHTML += `
        <div class="addBox">
            <div class="addImg">
                <img src="${item.Poster}" alt="${item.Title}">
            </div>
        <div>
            <h1>${item.Title}</h1>
            <a href="#">Saiba Mais</a>
        </div>
    </div>
        `

    });

};

addTake();


const clearHTML = () => {
    addCarousel.innerHTML = "";
    console.log("limpou carrosel");
    catalogoAdd.innerHTML = "";
    console.log("Limpou catalogo");
};




searchButton.addEventListener("click", (event1) => {
    event1.preventDefault();
    console.log("ButtonPrevent");

    const searchColection = colection.value;

    clearHTML();

    addTake(searchColection);
    console.log("ButtonTake");
});



