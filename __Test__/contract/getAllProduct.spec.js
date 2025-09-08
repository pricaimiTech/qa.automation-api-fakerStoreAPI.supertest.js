const {
    getRequest
} = require('../../src/helpers/request');

describe('Contract: Get All Products', () => {
    
    let response;
    const path = '/products';

    it('Request', async() => {
        response = await getRequest(path);
        console.log('Response:', response);
    });
});