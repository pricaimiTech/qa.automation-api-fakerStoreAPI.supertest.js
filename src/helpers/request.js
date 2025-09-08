const request = require('supertest');

const baseURL = 'https://fakestoreapi.com';

async function getRequest(path) {
    try {
        const response = await request(baseURL)
            .get(path)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
        return response;
    } catch (error) {
        console.error(`Error making GET request:, ${path}`, error)
        throw error;
    }
}

module.exports = {getRequest};