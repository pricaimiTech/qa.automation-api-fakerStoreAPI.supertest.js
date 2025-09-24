const {
    getRequest
} = require('../../src/helpers/request');
const { validateSchema } = require('../../src/helpers/schemaValidator');
const schema = require('../../src/schema/products.schema.json');

describe('Contract: Get All Products', () => {

    let response;
    const path = '/products';

    beforeAll(async() => {
        response = await getRequest(path)
    });

    it('Validate Contract', () => {
        validateSchema(response, schema);
    })
});