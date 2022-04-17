const pegaCep = document.querySelector("#inputBuscaCep");
const buttonBuscaCep = document.querySelector("#buscaCep");

console.log(pegaCep);
console.log(buttonBuscaCep);


buttonBuscaCep.addEventListener("click", (event) =>{
    event.preventDefault();
    const cep = pegaCep.value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((response) => {
        console.log("local", response);
        document.querySelector("#endereco").innerHTML +=`
        <div>
            <h1>${response.localidade}</h1>
            <h1>${response.cep}</h1>
            <h1>${response.bairro}</h1>
            <h1>${response.logradouro}</h1>
            <h1>${response.complemento}</h1>
        </div>
        `;
    });
})