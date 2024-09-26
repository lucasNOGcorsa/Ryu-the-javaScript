function calcularSOMA(){
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);

    const soma = n1 + n2;

    document.getElementById('resultado').innerText = 'A soma é' + soma ;
}

function calcularSUB(){
    const n1= Number(document.getElementById('n1').value);
    const n2= Number(document.getElementById('n2').value);

    const sub = n1 - n2;

    document.getElementById('resultado').innerText = 'A subtração é' + sub;
}

function calcularMULT(){
    const n1= Number(document.getElementById('n1').value);
    const n2= Number(document.getElementById('n2').value);

    const mult= n1 * n2;

    document.getElementById('resultado').innerText= 'A multiplicação é' + mult;

}

function calcularDIV(){
    const n1= Number(document.getElementById('n1').value);
    const n2= Number(document.getElementById('n2').value);

    const div= n1/n2;

    document.getElementById('resultado').innerText='A divisão é' + div;
}