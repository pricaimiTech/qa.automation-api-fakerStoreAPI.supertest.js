const { getRequest } = require("../../src/helpers/request");

describe('Get All Products', () => {
    
    it('Should Get All Products return be an array', async () => {
        const products = await getRequest('/products');
        expect(Array.isArray(products)).toBe(true);
    });
});