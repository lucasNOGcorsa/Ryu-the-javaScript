function ler(){
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    const n3 = Number(document.getElementById('n3').value);

    if(n1 > n2 && n3){
        document.getElementById('resultado').innerText = `o maior valor é${n1}`;
    }

    if (n2 > n1 && n3 ){
        document.getElementById('resultado').innerText = `o maior valor é${n2}` ;
    }
    
    if (n3 > n1 && n2){
        document.getElementById('resultado').innerText = `o maior valor é${n3}` ;
    }
}
