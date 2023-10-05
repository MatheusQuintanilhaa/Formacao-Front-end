// // 1 - métodos
// const animal = {
//   nome: "bob",
//   latir: function () {
//     console.log("au au");
//   }
// }

// console.log(animal.nome);

// animal.latir()

// //  2 - aprofundando em metodos
// const pessoa = {
//   nome: "Matheus",

//   getNome: function () {
//     return this.nome;
//   },

//   setNome: function (novoNome) {
//     this.nome = novoNome;
//   }
// }

// console.log(pessoa.nome);
// console.log(pessoa.getNome());

// pessoa.setNome("Alirio")

// console.log(pessoa.getNome());





// const navegador = {
//   modelos: "Mozilla",

//   getModelos: function () {
//     return this.modelos
//   },

//   setModelos: function (novoModelo) {
//     this.modelos = novoModelo
//   }
// }

// navegador.setModelos("Google Chrome");

// console.log(navegador.getModelos());


// // 3 - prototype
// const text = "ola"

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.length);

// console.log(Object.getPrototypeOf(arr));

// //  4 - mais sobre prototype
// const myObject = {
//   a: "b"
// }

// console.log(Object.getPrototypeOf(myObject));

// const mySecondObject = Object.create(myObject)

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes basicas
const cachorro = {
  raca: null,
  patas: 4,
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemao"

console.log(pastorAlemao);

const bullDogFrances = Object.create(cachorro)

bullDogFrances.raca = "Bulldog Frances"

console.log(bullDogFrances);
console.log(bullDogFrances.patas);

// 6 - funcao como classe - funcao construtora
function criarCachorro(nome, raca) {

  const cachorro = Object.create({})

  cachorro.nome = nome
  cachorro.raca = raca

  return cachorro
}

const bob = criarCachorro("Bob", "vira-lata")

console.log(bob);

const jack = criarCachorro("Jack", "Golden Retriver")

console.log(jack);

// 7 - funcoes como classe
function Cachorro(nome, raca) {
  this.nome = nome
  this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")

console.log(husky);

function carros(rodas, bancos) {
  this.rodas = rodas
  this.bancos = bancos
}

const uno = new carros(4, 2)
console.log(uno);

//  8 - metodos na funcao construtora
Cachorro.prototype.uivar = function () {
  console.log("auuuu");
}

console.log(cachorro);

husky.uivar()