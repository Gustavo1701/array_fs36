const numeros = [1,2,3,4,5,6,7,8,9,10]
//iterar array
//criando tabuada
for (let i = 0; i < numeros.length; i++) { 
    console.log('');
    for (let j = 0; j < numeros.length; j++){
        console.log(`${numeros[i]} x ${numeros[j]} = ${numeros[i] * numeros[j]}`);
    }
}

//usando foreach
numeros.forEach(function (v, i){
    const n=1;
    console.log(n + 'x' + v + '=' + (n*v));
})