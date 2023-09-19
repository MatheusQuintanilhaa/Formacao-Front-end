// // 1 - arrays
// const lista = [1, 2, 3, 4, 5];

// console.log(lista);

// console.log(typeof lista);

// const itens = ["Matheus", true, 2, 4.12];

// console.log(itens);

// // 2 - mais sobre arrays
// const arr = ["a", "b", "c", "d"];

// console.log(arr[0]);

// console.log(arr[2]);

// console.log(arr[10]);

// // 3 - propriedades
// const numbers = [5, 12, 4, 22];

// console.log(numbers.length);
// console.log(numbers["length"]);

// const myName = "Matheus";

// console.log(myName.length);

// // 4 - métodos
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));

// // 5 - Objetos
// const person = {
//   name: "Matheus",
//   age: 31,
//   job: "Programador",
// };

// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person);

// // 6 - criando e deletando propriedades
// const car = {
//   engine: 2.0,
//   brand: "VW",
//   model: "Tiguan",
//   km: 20000,
// };

// console.log(car);

// car.doors = 4;

// console.log(car);

// delete car.km;

// console.log(car);

// // 7 - mais sobre objetos
// const obj = {
//   a: "teste",
//   b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj);

// console.log(obj2);

// // 8 - conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(person));

// console.log(Object.entries(obj));

// // 9 - Mutação
// const a = {
//   name: "Matheus",
// };

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 31;

// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// // 10 - loop em array
// const users = ["Matheus", "João", "Pedro", "Miguel"];

// for (let i = 0; i < users.length; i++) {
//   console.log(`Listando usuário: ${users[i]}`);
// }

// // 11 - push e pop
// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);
// console.log(array.length);

// array.pop();
// const itemRemovido = array.pop();

// console.log(itemRemovido);
// console.log(array);
// console.log(array.length);

// array.push("Dá", "Para", "Inserir", "Vários");

// console.log(array);

// // 12 - shift e unshift

// const letters = ["a", "b", "c"];

// const letter = letters.shift();

// console.log(letter);
// console.log(letters);

// letters.unshift("z", "x", "y");

// letters.unshift("p");

// console.log(letters);

// // 13 - indexof e lastindexof

// const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

// console.log(myElements.indexOf("Maçã"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate"));

// console.log(myElements.lastIndexOf("Maçã"));

// console.log(myElements.indexOf("Mamão"));
// console.log(myElements.lastIndexOf("Mamão"));

// // 14 - slice
// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2, 4);
// console.log(subArray);

// const subArray2 = testeSlice.slice(2, 4 + 1);
// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20);
// console.log(subArray3);

// // 2 em diante
// const subArray4 = testeSlice.slice(2);
// console.log(subArray4);

// // 15 - foreach
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((n) => {
//   console.log(`O número atual é: ${n}`);
// });

// const posts = [
//   { title: "Primeiro post", category: "PHP" },
//   { title: "Segundo post", category: "JavaScript" },
//   { title: "Terceiro post", category: "Python" },
// ];

// posts.forEach((post) => {
//   console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
// });

// // 16 - includes
// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("Fiat"));

// console.log(brands.includes("Kia"));

// if (brands.includes("BMW")) {
//   console.log("Há carros da marca BMW!");
// }

// // 17 - reverse
// const reverseTest = [1, 2, 3, 4, 5];

// reverseTest.reverse();

// console.log(reverseTest);

// // 18 - trim
// const trimTest = "  testando \n   ";

// console.log(trimTest.trim());

// console.log(trimTest);

// console.log(trimTest.trim().length);

// console.log(trimTest.length);

// // 19 - padstart

// const testePadStart = "1";

// const newNumber = testePadStart.padStart(4, "0");

// console.log(testePadStart);

// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0");

// console.log(testePadEnd);

// 20 - split;
// const frase = "O rato roeu a roupa do rei de roma";

// const arrayDaFrase = frase.split(" ");

// console.log(arrayDaFrase);

// // 21 - join
// const fraseDeNovo = arrayDaFrase.join(" ");

// console.log(fraseDeNovo);

// const itensParaComprar = ["Mouse", "Teclado", "Monitor", "Gabinete"];

// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

// console.log(fraseDeCompra);

// // 22 - repeat
// const repeatTest = "teste ";

// console.log(repeatTest.repeat(5));

// // 23 - Rest Operator

// const somandoTudo = (...args) => {
//   let total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total;
// };

// console.log(somandoTudo(3, 3));

// // 24 - for of

// const somaInfinita = (...args) => {
//   let total = 0;

//   for (num of args) {
//     total += num;
//   }

//   return total;
// };

// console.log(somaInfinita(5, 5));

// 25 - destructuring em objetos
// const userDetails = {
//   firstName: "Matheus",
//   lastName: "Quintanilha",
//   job: "programador",
//   age: 28,
// };

// const { firstName, lastName, job, age } = userDetails;

// console.log(firstName, lastName, job, age);

// // renomear variaveis
// const { firstName: primeiroNome } = userDetails;

// const { age: idade } = userDetails;

// console.log(idade);

// const user = {
//   name: "Patricia",
//   city: "Rio de Janeiro",
//   job: "Police",
//   age: 32,
//   maritalStatus: "single",
//   cpf: 220011334455994433,
//   cel: 776655449900,
// };

// const { maritalStatus: estadoCivil } = user;
// const { cel: telefone } = user;

// console.log(telefone);

// 26 - destructuring com arrays
// const myList = ["Avião", "Submarino", "Carro"];

// const [veiculoA, veiculoB, veiculoC] = myList;

// console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJson =
  '{"name": "Matheus", "age": 28, "skills": ["React", "JavaScript", "Phyton"]}';

console.log(myJson);
console.log(typeof myJson);

// 28 - JSON para objeto e objeto para JSON

const myObject = JSON.parse(myJson);
console.log(myObject);

// json invalido
const badJson = '{"name": Matheus, "age": 28}';

// const myBadObject = JSON.parse(badJson);

// Adicionando propriedade nova dentro do Objeto
myObject.isOpenToWork = true;

console.log(myObject);

// Com o dado manipulado e convertendo pra JSON novamente para enviar para API
const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
