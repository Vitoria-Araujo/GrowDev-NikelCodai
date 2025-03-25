// const nome = "Vitória Araujo";
// let nome2= "";
let pessoaDefaul = {
    nome: "Vitória Araujo",
    idade: "5",
    trabalho: "Programadora"
}

let nomes = ["Vitória", "Maria", "João", "Pedro", "Ana", "Lucas", "Mariana", "Carlos", "Julia", "Rafael"];

let pessoas = [
        { 
            nome: "Maria Silva",
            idade: "25",
            trabalho: "UX/UI Designer"
        },
        {
             nome: "João Pereira",
             idade: "30",
             trabalho: "Lenhador"
            }
];

function alterarNome(){
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEAlteraNome(novoNome){
    nome2= novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}




function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}


function imprimirPessoas(){

    console.log("------------IMPRIMIR PESSOAS------------"); 

    pessoas.forEach((item => {
        console.log("nome");

        console.log("Idade: ");
        console.log(item.idade);
        
        console.log("Trabalho: ");
        console.log(item.trabalho);
        
    }));
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

console.log(pessoas);

// function imprimirPessoa(pessoa){
//     console.log(pessoa); 

//     console.log("Nome: ");
//     console.log(pessoa.nome);
    
  
    
// }

// imprimirPessoa(pessoaDefaul);

// imprimirPessoa( {
//     nome: "Maria Silva",
//     idade: "25",
//     trabalho: "UX/UI Designer"
// });


// recebeEAlteraNome("Joao Silva Pereira");

// // alterarNome(); // Chama a função para alterar o valor

// console.log("Depois de chamar a função: ", nome2); // Agora imprime o novo valor de nome2
