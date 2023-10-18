// 1 - setTimeout
console.log("Ainda não executou");

setTimeout(function () {
  console.log("Requisição assíncrona!");
}, 2000);

console.log("Ainda não executou 2");

// 2 - setInterval
console.log("Ainda não começou");

// setInterval(function () {
//   console.log("Intervalo assíncrono");
// }, 3000);

console.log("Ainda não começou 2");

// 3 - Promise
const promessa = Promise.resolve(5 + 5);

console.log("Algum código!");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`Agora é: ${value}`));

console.log("Outro codigo");

// 4 - falha na promisse
Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores inválidos")
    }
  })
  .catch((error) => console.log(`Um erro ocorreu: ${error}`))

//  5 - rejeicao
function checkNumber(n) {
  return new Promise((resolve, reject) => {

    if (n > 10) {
      resolve(`O número é maior que 10`)
    } else {
      reject(new Error(`O número não é maior que 10`))
    }
  })
}

const a = checkNumber(20)

const b = checkNumber(10)

a.then((valor) => console.log(`O resultado é ${valor}`)).catch((error) => console.log(`Um erro ocorreu: ${error}`))

b.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

//  6 - resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10)
  }, 3000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30)
  } else {
    reject("Erro!")
  }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - async functions
async function somarComDelay(a, b) {
  return a + b
}

somarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é ${value}`);
})

console.log("Teste async");

// 8 - async await
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolvida");
    }, 2000)
  })
}

async function chamadaAsync() {
  console.log("Chamando a Promise, e esperando o resultado");
  const resulto = await resolveComDelay();
  console.log(`O resulado chegou: ${resulto}`);
}

chamadaAsync();

// 9 - generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// Resolve
const PromiseComDelay = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Esta mensagem esta com delay")
  }, 3000)
})

PromiseComDelay.then((response) => {
  console.log(response);
})

//  Reject
const myPromise = new Promise((_resolve, reject) => {
  setTimeout(() => {
    reject("Ocorreu um erro")
  }, 2000)
})

myPromise.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
})

// async e await

const ecommerce = () => {
  return new Promise((response) => {
    setTimeout(() => {
      response({ Category: "Eletronics", Products: "Smarthphone, Tv, air conditioner, Ipad, Notebook" })
    }, 2000);
  });
};

const fetchProducts = async () => {
  try {
    console.log("Loading products, please wait.");

    const pickProducts = await ecommerce();

    const { Category, Products } = pickProducts;

    console.log("Category:", Category);
    console.log("Products:", Products);
  } catch (error) {
    console.error("Unfortunaly, isn't possible to find this product")
  };
};

fetchProducts();

const personGoals = () => {
  return new Promise((response) => {
    setTimeout(() => {
      response({ Goals: "physical exercise, study, diet, learn about a new programming language" })
    }, 1500);
  })
}

const fetchGoals = async () => {
  try {

    console.log("Searching for informations...");

    const getInfos = await personGoals();

    const { Goals } = getInfos;

    console.log("Your goals are:", Goals);
  } catch (error) {
    console.error("We didn't find your goals, sorry", error);
  }
}

fetchGoals();