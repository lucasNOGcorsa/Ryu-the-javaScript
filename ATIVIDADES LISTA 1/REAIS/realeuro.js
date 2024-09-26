function calcularVALOR(){
    const n1 = Number(document.getElementById('real').value);

   const x = 5.46;
   const y = 6.07;

    const dolar = n1 / x;
    const euro = n1 / y;

    document.getElementById('resultado').innerText = 'Dólar :' + dolar.toFixed(2) + 'Euro' + euro.toFixed(2) ;
}