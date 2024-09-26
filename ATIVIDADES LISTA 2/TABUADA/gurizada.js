function calcular(){

    const n = Number (document.getElementById('numero').value);
    let i = 1, resultado = '';
    
    
    while (i <= 10) {
        resultado += n + ' x ' + i + ' = ' + (n * i) + '///';
        i++;
    }
    document.getElementById('resultado').innerText = resultado;
    }