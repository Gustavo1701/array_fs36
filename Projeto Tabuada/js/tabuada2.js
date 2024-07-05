function tabuada() {
    let nc = parseFloat(document.getElementById('numeroAcalcular').value);
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let resultado = document.getElementById('resultado');
        
    let tabuada = '';

    Array.from({length: n1}, function(v, k){
        const multiplicador = k+1;
        const ncMultiplicador = nc * multiplicador;
        const linhaTabuada = nc + '+' + multiplicador + '=' + ncMultiplicador + '\n';

        console.log(linhaTabuada);
        tabuada = tabuada + linhaTabuada;
    })

   
}



document.getElementById('gerar').addEventListener('click', tabuada);
