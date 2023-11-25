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