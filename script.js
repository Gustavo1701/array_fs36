// Como criar arrey
const nomes = [];

const nomePessoas = ['Alberto', 'Gustavo']

// Como adicionar elemento no array
nomePessoas.push('João'); // João

// Como acessar um valor de um array
//console.log(nomePessoas[0]); // Alberto
//console.log(nomePessoas[1]); // Gustavo

//como adicionar elemento no inicio
nomePessoas.unshift('Bea'); // João, Alberto, Gustavo

//como adicionar elemento em uma posição qualquer
nomePessoas.splice(1, 0, 'Eduardo');

//console.log(nomePessoas);
numeros.forEach(function(value, i){
    console.log(value, i);
})