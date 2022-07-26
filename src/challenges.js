// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  else if (param1 === false && param2 === false) {
    return false;
  }
  return false;

}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  const myArray = string.split(" "); //divide as palavras
  return myArray;
}

// Desafio 4
function concatName(array) {
  let primeiraPalavra = array[array.length - 1]; //acessar ultimo elemento
  let segundaPalavra = array[0];
  let result = primeiraPalavra.concat(", ", segundaPalavra);
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;

}

// Desafio 6
function highestCount(numeros) {
  let cont = 0;
  let maiorNumero = numeros[0];
  for (let index = 1; index < numeros.length; index += 1) {
    if (numeros[index] < maiorNumero) {
      maiorNumero = numeros[index];
    }
  }
  for (let index2 of numeros) {
    if (maiorNumero === numeros[index2]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaUm = Math.abs(mouse - cat1);
  let distanciaDois = Math.abs(mouse - cat2);
  if (distanciaUm < distanciaDois) {
    return 'cat1';
  }
  else if (distanciaDois < distanciaUm) {
  return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
