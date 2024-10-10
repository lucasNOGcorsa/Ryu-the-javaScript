let nome = []
let nota = []
let media, soma = 0

for (let i = 0; i < 5; i++) {
    nota[i] = Number(prompt("Digite sua nota: "))
    nome[i] = Number(prompt("Digite sua nota: "))
    soma = soma + nota[i]
}
media = soma / 5
for (let n = 0; n < 5; n++) {
    if (nota[n] < media) {
        console.log(nota[n])
    }
}
