function calcularMedia(){
    const n1 = Number(document.getElementById('nota1').value);
    const p1 = Number(document.getElementById('peso1').value);
    const n2 = Number(document.getElementById('nota2').value);
    const p2 = Number(document.getElementById('peso2').value);
    const n3 = Number(document.getElementById('nota3').value);
    const p3 = Number(document.getElementById('peso3').value);
    
    const media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

    document.getElementById('resultado').innerText = 'Média Ponderada:' + media;
}
