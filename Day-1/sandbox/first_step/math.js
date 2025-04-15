// math.js

function sum(a, b) {
    return a + b;
  }
  
  function diff(a, b) {
    return a - b;
  }
  
  function prod(a, b) {
    return a * b;
  }
  
  function quot(a, b) {
    return b !== 0 ? a / b : 'Erreur : division par zéro';
  }
  
  module.exports = {
    sum,
    diff,
    prod,
    quot
  };
  