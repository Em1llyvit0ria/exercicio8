va pessoas = [];

for (va i = 0; i < 10; i++) {
    va nome = prompt("digite o nome da pessoa " + (i + 1) + ":");
    var idade = parseInt(prompt("digite a idade de " + nome + ":"), 10);

    pessoas[i] = { nome: nome, idade: idade };
}


va maisnova = pessoas[0].nome;
var menoridade = pessoas[0].idade;


for (va j = 1; j < pessoas.length; j++) {
    if (pessoas[j].idade < menoridade) {
        menoridade = pessoas[j].idade;
        maisnova = pessoas[j].nome;
    }
}

alert("A pessoa mais nova é: " +