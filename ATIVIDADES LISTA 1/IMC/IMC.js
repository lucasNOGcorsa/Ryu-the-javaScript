function calcularIMC(){
    const n1 = Number(document.getElementById('altura').value);
    const p1 = Number(document.getElementById('peso').value);

    
    const IMC = p1 / (n1 * n1);

    document.getElementById('resultado').innerText = 'IMC:' + IMC;
}
