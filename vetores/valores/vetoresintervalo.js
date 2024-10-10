let valorado = []
let valor
let intervalado
let intervalo2
for (let i = 0; i < 10; i++) {
    valor = Number(prompt("clica 10 numero no seu tecladin: "))
    valorado.push(valor)
}

intervalado = Number(prompt("Digita ai pra mim  o primeiro valor do intervalo"))

intervalo2 = Number(prompt("agr o segundo valor do intervalo"))

for (let i = 0; i < 10; i++) {

    if (valorado[i] >= intervalado && valorado[i] < intervalo2)

        console.log(`Indice: ${i} Valor: ${valorado[i]}`)
}
