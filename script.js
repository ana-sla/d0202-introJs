//DECLARANDO VARIAVEIS

var variavel1;
let variavel2 = "estação hack";
const variavel3 = 12;

//Atribuição

var variavel4;
let variavel5 = "estação hack";
const variavel6 = true;

//Tipos de dados

let exemplo;
exemplo = "Ana"; //pode ser nome (string)
exemplo = 23; //numero
exemplo = 1.66; 
exemplo = true; //buleano (verdadeiro ou falso)
exemplo = false;


let saboresDepizza;//lista

saboresDePizza = ["brocolis", "baiana", "portuguesa", "mussarela", "strogonoff"];

let fagner = ["mauricio", 18, true, "Santana", ["bolo", "mouse", "pudim"]];
let fayra = {
    sobrenome: 'Miranda',
    idade: 25,
    viva: true,
    cidade: 'Osasco',
    hobbies: ['dança', 'desenho', 'leitura']
    };


let barbara = {
    sobrenome: 'moreira',
    idade: 19,
    viva: true,
    cidade: 'freguesia',
    hobbies: ['otaku', 'dorameira', 'capoeira'],
    amiga: fayra

};


//estruturas

// if(condicao){
//     codigo executado quando a condicao é verdadeira
// } else{
//     codigo a ser executado quando a condicao for falsa
    
// }

//entradas do navegador
    //prompt
//saida
    //alert
    //console.log


    
    let email = 'estação';
    let senha1 = 123;
    
    let login = prompt('digite o email'); 
    let senha = prompt('digite a senha'); 

    let saldo =  1000;
    let valor;

    if(login==email && senha1==senha){
        alert("entrou");
       valor = Number (prompt('digite o valor do saque'));
            if(valor > saldo)
                alert ("vc nao pode sacar");
                
            else{ 
                 alert("vc pode sacar");
                 saldo = saldo - valor;
                 alert(`O seu novo saldo é ${saldo}`);}
    }else{
        alert('email ou senha incorreto');
        
    }
