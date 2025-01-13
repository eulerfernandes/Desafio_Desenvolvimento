const dados = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  // Inclua os demais dados fornecidos
];

const valores = dados.map((d) => d.valor).filter((v) => v > 0);

const menor = Math.min(...valores);
const maior = Math.max(...valores);

const soma = valores.reduce((acc, v) => acc + v, 0);
const media = soma / valores.length;

const diasAcimaMedia = valores.filter((v) => v > media).length;

console.log("Menor faturamento:", menor.toFixed(2));
console.log("Maior faturamento:", maior.toFixed(2));
console.log("Dias acima da média:", diasAcimaMedia);
