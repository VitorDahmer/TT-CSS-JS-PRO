const promessa = new Promise((resolve, reject) => {
    let condicao = false;

    if(condicao){
        resolve("Resolvido!!");
    } else {
        reject("Rejeitado!");
    }
})

// console.log(promessa);

.then((response) => {
    console.log(response);
})

promessa.catch((error) => {
    console.log(error);
});

