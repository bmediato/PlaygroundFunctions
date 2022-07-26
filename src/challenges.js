// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else if (param1 === false && param2 === false) {
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  const myArray = string.split(' '); // divide as palavras
  return myArray;
}

// Desafio 4
function concatName(array) {
  let primeiraPalavra = array[array.length - 1]; // acessar ultimo elemento
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
    if (numeros[index] > maiorNumero) {
      maiorNumero = numeros[index];
    }
  }
  for (let index2 = 0; index2 < numeros.length; index2 += 1) {
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
  } else if (distanciaDois < distanciaUm) {
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
    } else if (numb % 3 === 0) {
      resultado.push('fizz');
    } else if (numb % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  // let separa = 
  // let modif = string.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4).replace('u', 5);
  // console.log(modif);

  // encode('How are you today?');
  // encode('hello');
  // encode('This is an encoding test');
  // encode('go Trybe!');
}
console.log(encode())
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array, string) {
  array.sort();
  let novoArray = [];
  for (let index of array) {
    if (array.length === 0) {
      novoArray.push({tech:'Vazio!', name: string});
      return novoArray
    }
    novoArray.push({
      tech: index,
      name: string
    })

  }
  return novoArray;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
