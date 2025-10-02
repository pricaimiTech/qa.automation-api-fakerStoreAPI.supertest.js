const { faker } = require('@faker-js/faker');


const newProduct= {
    id: faker.number.int(),
    title: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.url(),
}

console.log(newProduct)