/*
Tabela para Empregado, Empregado Doméstico e Trabalhador Avulso 2023
Salário de Contribuição (R$)	                Alíquota
Até R$ 1.320,00	                                 7,5%
De R$ 1.320,01 até R$ 2.571,29                   9%
De R$ 2.571,30 até R$ 3.856,94	                 12%
De R$ 3.856,94 até R$ 7.507,49	                 14%

Na nova tabela de cálculo da contribuição, deve-se multiplicar pela alíquota de cada faixa apenas a parcela do salário que
nela se encaixar. 

Por exemplo, veja como fica o cálculo para um salário de R$ 3.000,00, a partit do mês de maio de 2023:

1ª faixa salarial: 1.320,00 x 0,075 = 99.00
2ª faixa salarial: [2571.29 – 1320.00] x 0,09 = 112.62
Faixa que atinge o salário: [3.000,00 – 2571.29 ] x 0,12 = 51.45
Total a recolher: 99.00 + 112.62  + 51.45 = 263.06


Se o salário for de R$ 8.000,00 o cálculo será da seguinte maneira:
1ª faixa salarial: 1320.00 x 0,075 = 99.00
2ª faixa salarial: [2571.29 – 1320.00] x 0,09 = 112.62
3ª faixa salarial: [3856.94 - 2571.29] x 0.12 = 154.28
4ª faixa salarial: [7507.49 - 3856.94] x 0.14 = 511.08
Total a recolher: 90.90 + 112.62 + 154.28 + 511.08 = 876.97

O teto máximo de contribuição é de 876.97! Portanto, se o salário ultrapassar o valor de R$ 7507.49 a contribuição ao INSS
será o valor do teto.


*/

function calculaInss(salario) {
  let total_a_recolher = 0
  let faixa_anterior, faixa_atual, aliquota_faixa_atual;

  faixa_anterior = 0
  faixa_atual = 1320
  aliquota_faixa_atual = 0.075

  if (salario >= faixa_anterior) {
    total_a_recolher += (Math.min(salario,faixa_atual)-faixa_anterior) * aliquota_faixa_atual;
  } 

  faixa_anterior = 1320
  faixa_atual = 2571.29
  aliquota_faixa_atual = 0.09

  if (salario >= faixa_anterior) {
    total_a_recolher += (Math.min(salario,faixa_atual)-faixa_anterior) * aliquota_faixa_atual;
  } 
  
  faixa_anterior = 2571.29
  faixa_atual = 3856.94
  aliquota_faixa_atual = 0.12

  if (salario >= faixa_anterior) {
    total_a_recolher += (Math.min(salario,faixa_atual)-faixa_anterior) * aliquota_faixa_atual;
  }

  faixa_anterior = 3856.94
  faixa_atual = 7507.49
  aliquota_faixa_atual = 0.14

  if (salario >= faixa_anterior) {
    total_a_recolher += (Math.min(salario,faixa_atual)-faixa_anterior) * aliquota_faixa_atual;
  }

  return total_a_recolher.toFixed(2);
}

  
  