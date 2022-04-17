// var name = "josé";
// var age = 30;
// var possuiFaculdade = true;
// var comida;
// var time = null;
// var novoObjeto = {};

// console.log(comida);
// console.log(novoObjeto);

// console.log(name);






// var nome = "Vitor";
// var sobreNome = "Dahmer";

// var nomeCompleto = nome + " " + sobreNome;

// console.log(">>>", nomeCompleto);

// var jogos = 30;

// var totalDeJogos = "eu joguei mais de " + jogos + " jogos";

// console.log(totalDeJogos);

// const template = `Eu joguei mais de ${jogos} jogos`;

// console.log(">>>>", template);



var possuiGraduacao = true

if(possuiGraduacao != true){
    console.log("Verdadeiro")
} else {
    console.log("falso")
}

var tipo = "alto";

switch (tipo) {
    case "baixo":
        console.log("baixo");
        break;
    case "medio":
        console.log("medio");
        break;
    case "alto":
        console.log("alto");
        break;
    default:
        console.log("Nenhum");
        break;
}


// console.log(10 == 10);
// console.log(10 == "10");
// console.log(10 === "10");
// console.log(10 !== "10");
// console.log(10 != "10");






// function calculaValor(lado){
//     return lado * lado;

// }

// function facebook(type){
//     console.log("facebook")
// }

// function google(type){
//     console.log("google")
// }

// console.log(">>>", calculaValor(10));

// function typeValue(type) {
//     switch (type) {
//         case "google":
//             google();
//             break;
//             case "facebook":
//                 facebook();
//             break;
    
//         default:
//             console.log("Não tem login!")
//             break;
//     }
    
// }

// typeValue("facebook");




// var aluno = {
//     nome: "Vitor",
//     sobreNome: "Dahmer",
//     idade: 44,
//     faculdade: false,
//     comida: "xis",
//     time: "none",
//     nomeCompleto: function () {
//         return this.nome + " " + this.sobreNome;
//     }
// };

// var data = {
//     alunos: [
//         {
//             nome: "Vitor",
//             sobreNome: "Dahmer",
//              idade: 44,
//             faculdade: false,
//             comida: "xis",
//             time: "none" 
//         },
//         {
//             nome: "Abner",
//             sobreNome: "Fonceca",
//              idade: 27,
//             faculdade: true,
//             comida: "pizza",
//             time: "Gremio" 
//         },
//         {
//             nome: "Fernando",
//             sobreNome: "Martins",
//              idade: 56,
//             faculdade: true,
//             comida: "pizza",
//             time: "São Paulo"
//         }
        
//     ]
// };

// console.log(aluno.nome);
// console.log(aluno.nomeCompleto());
// console.log(data.alunos[2].nome);

// var fruta = ["maçã", "banana", "pera"];
// console.log(fruta[2]);
// console.log(fruta[0]);
// console.log(fruta.pop());
// console.log(fruta);
// fruta.push("uva");
// fruta.push("laranja");
// console.log(fruta);
// console.log(fruta.length);

// var i = 0

// // while (i < fruta.length) {
// //     console.log(fruta[i]);
// //     i++;
// // }

// // do {
// //     console.log("entrou no do");
// // } while (1 !== 10);

// fruta.forEach(function(item){
//     console.log(item);
// });

// data.alunos.forEach(function(item){
//     console.log(item);
// });

// data.alunos.forEach(function(item){
//     console.log(item.nome);
//     console.log(item.sobreNome);
// });

// data.alunos.forEach(function (item, index) {
//     console.log(`Meu nome é ${item.nome} e tenho ${item.idade} anos`);
//   });

//   console.log(window);

//   alert("Oi");

//   const titulo = document.getElementById("title");
//   const subtitulo = document.getElementsByClassName("subtitle");
//   const tag = document.getElementsByTagName("h2")
//   const varios = document.getElementsByClassName("subtitle botao");

  

//   var titulo = document.querySelector("#title");
//   titulo.innerHTML = "teste Primeiro";

//   var subtitulo = document.querySelectorAll(".subtitle");
//   var classH2 = document.querySelector("button")

//   subtitulo[1].innerHTML = "blablabla";

//   console.log(titulo);
//   console.log(subtitulo); 
//   console.log(tag);

//   var titulo = document.querySelector("#title");

//   titulo.classList.add("ativo");

//   console.log(titulo.classList);




// var titulo = document.querySelector("#title");
// var botao = document.querySelector("button");

// function callback(){
//     alert("chamou");
//     titulo.innerHTML = "Clicou no Titulo!!!!";
//     botao.classList.add("botaoAtivo");
// }

// titulo.addEventListener("click" , callback);

// botao.addEventListener("click" , function (){
//     botao.innerHTML = "Clicou no Botão"
//     botao.classList.toggle("botaoAtivoClick");
// })

var main = document.querySelector(".main");
var botao = document.createElement("button");

botao.innerHTML = "Adicionar";
botao.classList.add("botaoAtivoClick");
main.appendChild(botao);


