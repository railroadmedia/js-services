const nock = require('nock');

import * as Discount from '../../src/discount';

// Stub the API to return hardcoded data at specific endpoints
const CODE_200_ENDPOINT = 'https://200response.com';
const CODE_400_ENDPOINT = 'https://400response.com';
const CODE_500_ENDPOINT = 'https://500response.com';

describe('discount', () => {
    // Before every test we need to create mocks for the endpoint
    beforeEach(() => {
        // Mock a successful 2xx GET request
        nock(CODE_200_ENDPOINT)
            .get(/discount/)
            .reply(200, CODE_200_RESPONSE)
            .put(/discount/)
            .reply(200, CODE_200_RESPONSE)
            .patch(/discount/)
            .reply(200, CODE_200_RESPONSE)
            .delete(/discount/)
            .reply(200, CODE_200_RESPONSE);
        // Mock a failed 4xx request
        nock(CODE_400_ENDPOINT)
            .get(/discount/)
            .reply(400, CODE_400_RESPONSE)
            .put(/discount/)
            .reply(400, CODE_400_RESPONSE)
            .patch(/discount/)
            .reply(400, CODE_400_RESPONSE)
            .delete(/discount/)
            .reply(400, CODE_400_RESPONSE);
        // Mock a failed 5xx request
        nock(CODE_500_ENDPOINT)
            .get(/discount/)
            .reply(500, CODE_500_RESPONSE)
            .put(/discount/)
            .reply(500, CODE_500_RESPONSE)
            .patch(/discount/)
            .reply(500, CODE_500_RESPONSE)
            .delete(/discount/)
            .reply(500, CODE_500_RESPONSE);
    });

    afterAll(() => {
        nock.restore();
    });

    // Create an array of all functions in the module
    const functions = Object.keys(Discount).filter(name => name !== 'default');

    // Loop through every function and run the test
    for(let i = 0; i < functions.length; i++){
        describe(functions[i], () => {
            it('returns data with a 2XX code', async () => {
                const { response, error } = await Discount[functions[i]]({
                    url: CODE_200_ENDPOINT
                });

                expect(response).toBeDefined();
                expect(response.status).toBe(200);
                expect(response.data.results).toBe('success');
            });

            it('returns an error with a 4XX code', async () => {
                const { response, error } = await Discount[functions[i]]({
                    url: CODE_400_ENDPOINT
                });

                expect(error).toBeDefined();
                expect(error.response.status).toBe(400);
                expect(error.response.data.detail).toBe('error');
            });

            it('returns an error with a 5XX code', async () => {
                const { response, error } = await Discount[functions[i]]({
                    url: CODE_500_ENDPOINT
                });

                expect(error).toBeDefined();
                expect(error.response.status).toBe(500);
                expect(error.response.data.detail).toBe('error');
            });
        });
    }
});