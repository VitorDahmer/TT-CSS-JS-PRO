const button = document.querySelector("#button");
const numeroItens = document.querySelector("#number");


const escola = {
    alunos: [
      {
        nome: "João",
        idade: "20",
        sexo: "masculino",
        curso: "Informática",
        turma: "A",
        nota: "8.5",
        faltas: "10",
        foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      },
      {
        nome: "Paulo",
        idade: "20",
        sexo: "masculino",
        curso: "Informática",
        turma: "A",
        nota: "8.5",
        faltas: "10",
        foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      },
      {
        nome: "Carlos",
        idade: "20",
        sexo: "masculino",
        curso: "Informática",
        turma: "A",
        nota: "8.5",
        faltas: "10",
        foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      },
      {
        nome: "Maria",
        idade: "20",
        sexo: "Feminino",
        curso: "Informática",
        turma: "A",
        nota: "8.5",
        faltas: "10",
        foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      },
      {
        nome: "Joana",
        idade: "20",
        sexo: "Feminino",
        curso: "Informática",
        turma: "A",
        nota: "8.5",
        faltas: "10",
        foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      },
    ]
  };

const itemNumber = (value) =>{

    value.map((item) => {
      document.querySelector(".listItens").innerHTML += `
        <div class="itensList">
                <div class="div-principal">
                    <h1 class="text">Nome: ${item.nome}</h1>
                    <p class="text">Idade: ${item.idade}</p>
                </div>
                <div class="div-principal">
                    <p class="text">Curso: ${item.curso}</p>
                    <p class="text">Nota: ${item.nota}</p>
                </div>
                <div class="div-principal">
                <p class="text">Faltas: ${item.faltas}</p>
                <img src="${item.foto}" alt="">
                </div>
                </div>
        `;
    })

    // for (let i = 0; i <= value.length; i++) {
    //     console.log(i);
    //     document.querySelector(".listItens").innerHTML += `
    //     <div class="itensList">
    //             <div class="div-principal">
    //                 <h1 class="text">Nome: ${value[i].nome}</h1>
    //                 <p class="text">Idade: ${value[i].idade}</p>
    //             </div>
    //             <div class="div-principal">
    //                 <p class="text">Curso: ${value[i].curso}</p>
    //                 <p class="text">Nota: ${value[i].nota}</p>
    //             </div>
    //             <div class="div-principal">
    //             <p class="text">Faltas: ${value[i].faltas}</p>
    //             <img src="${value[i].foto}" alt="">
    //             </div>
    //             </div>
    //     `;
        
        
    // }

}

button.addEventListener("click", function (event){
    event.preventDefault();
    const quantidadeAdicionada = numeroItens.value;
    // console.log(quantidadeAdicionada);
    itemNumber(escola.alunos);
})

// const carros = ["Ford", "Fiat", "Renault", "Chevrolet"];

// const newcar = carros.map((carro) => {
//   return "Carro: " + carro;
// })
// console.log(newcar);

// const numero = [1,2,3,4,5,6,7,8,9,10]
// const numeroX3 = numero.map((n) => n*3);

// console.log(numeroX3);

// Reduce:

// const numeroReduce = [110, 22,48,4,96,7,8,8,30,10];

// const maiorValor = numeroReduce.reduce((anterior, atual) => {
//   return anterior > atual ? anterior : atual;
// )}

// console.log(maiorValor);

// Find

// const frutas = ["Banana","Maçã","Uva","Morango", "Abacaxi"];

// const buscaFrutas = frutas.findIndex((fruta) =>{
//   return fruta === "Abacaxiss";
// });

// console.log("buscafruta >>>>> ", buscaFrutas);

// buscaFrutas >= 0
// ? console.log("Fruta Encontrada")
// : console.log("Fruta Não Encontrada");

// const numerosFind = [1,2,3,4,5,6,7,8,9,10]
// const buscaMaiorDe6 = numerosFind.find((numero) => numero > 6);
// console.log("Maior que 6 >>> ", buscaMaiorDe6);

// Filter

const BuscaGenero = escola.alunos.filter((aluno) => aluno.sexo === "masculino");
console.log(BuscaGenero);