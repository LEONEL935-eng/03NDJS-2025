const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez le premier nombre : ', (num1) => {
  rl.question('Entrez le second nombre : ', (num2) => {
    rl.question('Choisissez une opération (+, -, *, /) : ', (op) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let resultat;

      switch (op) {
        case '+':
          resultat = a + b;
          break;
        case '-':
          resultat = a - b;
          break;
        case '*':
          resultat = a * b;
          break;
