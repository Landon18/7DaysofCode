let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");
let boasVindas = alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
let gostaEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

    if (gostaEstudar === '1') {
        alert(`Que legal, ${nome}! Continue estudando, pois a abre portas para o conhecimento!`);
}

    else if (gostaEstudar === '2') {
        alert(`Que pena, ${nome}! Mas não desista, pois a prática é o caminho para o sucesso!`);
}

    else {
        alert(`Resposta inválida, ${nome}! Por favor, responda apenas o número 1 para SIM ou 2 para NÃO.`);
}