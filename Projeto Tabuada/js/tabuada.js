function tabuada() {
    let nc = parseFloat(document.getElementById('numeroAcalcular').value);
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let resultado = document.getElementById('resultado');
        // let resultadocalc =''
        resultado.innerHTML = '';

    for (let i = n1; i <= n2; i++) {

        resultado.innerHTML += `${nc} x ${i} = ${nc * i}<br>`;
        
    }

}



document.getElementById('gerar').addEventListener('click', tabuada);
