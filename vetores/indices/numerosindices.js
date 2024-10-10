let numeros = []

for (let i = 0; i < 10; i++) {
    
    numeros[i] = Number(prompt("Digita 10 numeros faz favor: "))

    if (numeros[i] < 0) {
        console.log(`${numeros[i]}`)
    }
}