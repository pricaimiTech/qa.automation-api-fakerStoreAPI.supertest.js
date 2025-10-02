const { getRequest } = require("../../src/helpers/request");

describe('Get Product ID', () => {

    let randomProduct;

    beforeAll(async () => {
        const allProducts = await getRequest('/products');
        expect(allProducts.length).toBeGreaterThan(0);

        const randomIndex = Math.floor(Math.random() * allProducts.length);
        randomProduct = allProducts[randomIndex];

        console.log(`Randomly selected product: ${JSON.stringify(randomProduct)}`);

    })

    it('Should return product ID', async () => {

        const productId = randomProduct.id;

        const product = await getRequest(`/products/${productId}`);

        console.log(`Randomly selected product id: ${JSON.stringify(product)}`);


        expect(product.id).toEqual(randomProduct.id);
        expect(product.title).toEqual(randomProduct.title);
        expect(product.price).toEqual(randomProduct.price);
        expect(product.description).toEqual(randomProduct.description);
        expect(product.category).toEqual(randomProduct.category);
        expect(product.image).toEqual(randomProduct.image);
    });
});