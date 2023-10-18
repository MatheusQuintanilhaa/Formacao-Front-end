// filter - filtra elementos de um array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const hightNumbers = arr.filter((n) => {
//   if (n >= 3) {
//     return n
//   }
// })

// console.log(hightNumbers);

// const users = [
//   { name: "Matheus", available: true },
//   { name: "Joao", available: false },
//   { name: "Carla", available: true },
//   { name: "Alirio", available: false },
//   { name: "Rayane", available: true },
// ]

// const availables = users.filter((user) => {
//   if (user.available === true) {
//     return user
//   }
// })

// console.log(availables);

// map - retorna um novo array, de mesmo tamanho, iterando cada item de um array
const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Eletrica", price: 150.00, category: "Eletro" },
  { name: "Fogao", price: 499.00, category: "Eletro" },
  { name: "Cala", price: 87.99, category: "Roupas" },
]

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true
  }
})

console.log(products);

// template literals
const userName = "Matheus"
const age = 28

console.log(`O nome do usuario é ${userName} e tem ${age} anos.`);

// destructuring
const fruits = ["Maca", "Mamao", "laranja"]

const [f1, f2, f3] = fruits

console.log(f1, f2, f3);

const productsDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periferico",
  color: "Cinza"
}

const { name: productName, price, category, color } = productsDetails;

console.log(`O nome do produto é ${productName}, ele custa R$${price}, esta na categoria ${category} e tem a cor ${color}`);

// spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3);

const a4 = [0, ...a3, 7]

console.log(a4);

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const otherInfos = { km: 100000, price: 5000 }

const car = { ...carName, ...carBrand, ...otherInfos }

console.log(car);

// classes
class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const shirt = new Product("Sueter", 20)

console.log(shirt);

console.log(shirt.productWithDiscount(10));

// Heranca
class ProductWithAttributes extends Product {

  constructor(name, price, colors) {
    super(name, price)
    this.colors = colors
  }

  showColors() {
    console.log("As cores sao: ");
    this.colors.forEach((color) => {
      console.log(color);
    })
  }
}

const hat = new ProductWithAttributes("Chapeu", 29.99, ["Preto", "Amarelo", "Verde"])

console.log(hat);

console.log(hat.name);

hat.showColors()