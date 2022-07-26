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
  for (let index = 0; index < numeros.length; index += 1) {
    for (let index2 = 1; index2 < numeros.length; index2 += 1) {
      if (numeros[index] > numeros[index2]) {
        maiorNumero = numeros[index];
      }
      else {
        maiorNumero = numeros[index2];
      }
      
      if (maiorNumero === numeros[index]) {
        cont += 1;
      }
    }
  }
  return cont;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
function fizzBuzz(inteiros) {
  let resultado = [];
  for (let numb of inteiros) {
    if (numb % 3 === 0 && numb % 5 === 0) {
      resultado.push('fizzBuzz');
    }
    else if (numb % 3 === 0) {
      resultado.push('fizz');
    }
    else if (numb % 5 === 0) {
      resultado.push('buzz');
    }
    else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
console.log(fizzBuzz([7, 9]));

// Desafio 9
function encode(string) {

}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array, string) {
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
