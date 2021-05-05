alert ("Bem Vindo ao Questionário de boas práticas na pandemia. \nPreparado?")
prompt("Qual é o seu nome?")
let iniciarQuestionario = prompt ("Você quer iniciar o questionário agora?")
if (iniciarQuestionario == "sim")  {
    let questaoUm = prompt ("Questão 1 \n Quais são os itens essenciais na proteção contra o corona vírus quando se está na rua? \n 1.Máscara, fone de ouvido e cloroquina. \n 2.Máscara, álcool gel e distanciamento. \n 3.Boné, álcool gel e fone de ouvido.")
}
else {
    alert ("Obrigado por acessar o nosso site.")
}
if (questaoUm == "2") {
    "Resposta certa"
} else {
    "Resposta errada"
}



