const nock = require('nock');

import * as Products from '../../src/products';

// Stub the API to return hardcoded data at specific endpoints
const CODE_200_ENDPOINT = 'https://200response.com';
const CODE_400_ENDPOINT = 'https://400response.com';
const CODE_500_ENDPOINT = 'https://500response.com';

describe('products', () => {
    // Before every test we need to create mocks for the endpoint
    beforeEach(() => {
        // Mock a successful 2xx GET request
        nock(CODE_200_ENDPOINT)
            .get(/products/)
            .reply(200, CODE_200_RESPONSE)
            .put(/products/)
            .reply(200, CODE_200_RESPONSE)
            .patch(/products/)
            .reply(200, CODE_200_RESPONSE)
            .delete(/products/)
            .reply(200, CODE_200_RESPONSE);
        // Mock a failed 4xx request
        nock(CODE_400_ENDPOINT)
            .get(/products/)
            .reply(400, CODE_400_RESPONSE)
            .put(/products/)
            .reply(400, CODE_400_RESPONSE)
            .patch(/products/)
            .reply(400, CODE_400_RESPONSE)
            .delete(/products/)
            .reply(400, CODE_400_RESPONSE);
        // Mock a failed 5xx request
        nock(CODE_500_ENDPOINT)
            .get(/products/)
            .reply(500, CODE_500_RESPONSE)
            .put(/products/)
            .reply(500, CODE_500_RESPONSE)
            .patch(/products/)
            .reply(500, CODE_500_RESPONSE)
            .delete(/products/)
            .reply(500, CODE_500_RESPONSE);
    });

    afterAll(() => {
        nock.restore();
    });

    // Create an array of all functions in the module
    const functions = Object.keys(Products).filter(name => name !== 'default');

    // Loop through every function and run the test
    for(let i = 0; i < functions.length; i++){
        describe(functions[i], () => {
            it('returns data with a 2XX code', async () => {
                const { response, error } = await Products[functions[i]]({
                    url: CODE_200_ENDPOINT
                });

                expect(response).toBeDefined();
                expect(response.status).toBe(200);
                expect(response.data.results).toBe('success');
            });

            it('returns an error with a 4XX code', async () => {
                const { response, error } = await Products[functions[i]]({
                    url: CODE_400_ENDPOINT
                });

                expect(error).toBeDefined();
                expect(error.response.status).toBe(400);
                expect(error.response.data.detail).toBe('error');
            });

            it('returns an error with a 5XX code', async () => {
                const { response, error } = await Products[functions[i]]({
                    url: CODE_500_ENDPOINT
                });

                expect(error).toBeDefined();
                expect(error.response.status).toBe(500);
                expect(error.response.data.detail).toBe('error');
            });
        });
    }
});