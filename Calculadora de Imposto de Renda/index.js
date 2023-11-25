// Elabora um algoritmo para calcular o salário líquido de 5 pessoas
// Solicite ao usuário que digite seu nome e o valor de seu salário bruto
// Peça também, para o usuário digitar a quantidade de dependentes
// Para cada um dos dependentes deve ser solicitado o ganho mensal. Este valor deverá ser adicionado ao salário bruto.
// Calcule a renda familiar per capta
// Caso a renda para cada membro da familia seja menor que R$ 500,00 a pessoa ficará isenta de imposto de renda, ou seja, não será calculado dentre as faixas salariasi e seu valor será zero
// Caso a renda para cada membro da familia seja maior ou igual a R$ 500,00 o imposto de renda a ser descontado do salário bruto deve considerar as seguintes regras:
// * salário bruto de 0,00 até 1.903,98 = 5%
// * salário bruto de 1.903,99 até 2.826,66 = 7,5
// * salário bruto a partir de 2.826,66 = 15%
// Ao final, mostre na tela o valor do salário líquido

// Armazene os salários liquidos em um coleçãoindexada (array)
// Depois, cálcule a média de todos os salários liquidos. posteriosmente, mostre quantas pessoas estão abaixo desse valor médio.

// Refatore seu código. Para isso, crie 2 funções, a saber:
// *funçao para calcular o IR: esta função deve receber como parâmetro o salário bruto e a renda per capta, e, retornar ao final o valor IR;
// *função para calcular a quantidade de salários liquidos menores que a média: esta funçao deve receber como parametros o array de salários líquidos e a média dos salarios liquidos, e, retornar a quantidade de salários líquidos menores que a média;

const prompt = require('prompt-sync')();


var salarios = [];
var soma = 0;
var media;
var qtd_pessoas;

for (var i = 1; i <= 5; i++) {

  console.log(i, "° Pessoa");
  nome = prompt("Digite seu nome: ");
  salario_bruto = parseFloat(prompt("Digite seu salário: "));
  dependentes = parseInt(prompt("Digite a quantidade de dependentes: "));

  for (var j = i; j <= dependentes; j++) {
    ganho = parseFloat(prompt("Digite seu ganho mensal: "));
    salario_bruto = salario_bruto + ganho;
  }

  renda_per_capita = salario_bruto / (dependentes + 1);


  var imposto_renda = calcular_imposto_renda(salario_bruto, renda_per_capita);
  var salario_liquido = salario_bruto - imposto_renda;

  console.log("______________________\n");
  console.log("Nome:", nome);
  console.log("Salário Bruto:", salario_bruto);
  console.log("Imposto de Renda:", imposto_renda);
  console.log("______________________");
  console.log("\nSalário Liquido:", salario_liquido);
  console.log("______________________");

  salarios.push(salario_liquido);
  soma = soma + salario_liquido;

}

media = soma / 5;

qtd_pessoas = calcular_qtd_menores(salarios, media);



console.log("A média dos salários liquidos é:", media);
console.log("O numéro de pessoas com salário liquido menor que a média é:", qtd_pessoas);






function calcular_imposto_renda(salario_bruto, renda_per_capita) {
  if (renda_per_capita >= 500) {

    if (salario_bruto > 0 && salario_bruto < 1903.98) {
      var imposto_renda = salario_bruto * 5 / 100; // ou 0.05
    } else if (salario_bruto > 1903.98 && salario_bruto < 2826.66) {
      var imposto_renda = salario_bruto * 7.5 / 100; // ou 0.075
    } else {
      var imposto_renda = salario_bruto * 15 / 100; // ou 0.15
    }
  } else {
    imposto_renda = 0;
    console.log("Olá ", nome, "você esta isento(a) de pagar imposto de renda");
  }
  return imposto_renda;
}




function calcular_qtd_menores(salarios, media) {
  var qtd_pessoas = 0;
  for (var i = 0; i <= 4; i++) {
    if (salarios[i] < media) {
      qtd_pessoas = qtd_pessoas + 1;
    }
  }
  return qtd_pessoas;
}