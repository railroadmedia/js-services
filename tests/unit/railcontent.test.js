const nock = require('nock');

import * as Railcontent from '../../src/railcontent';

// Stub the API to return hardcoded data at specific endpoints
const CODE_200_ENDPOINT = 'https://200response.com';
const CODE_400_ENDPOINT = 'https://400response.com';
const CODE_500_ENDPOINT = 'https://500response.com';

describe('Railcontent', () => {
    // Before every test we need to create mocks for the endpoint
    beforeEach(() => {
        // Mock a successful 2xx request
        nock(CODE_200_ENDPOINT)
            .get(/railcontent/)
            .reply(200, {
                results: 'success',
            });
        // Mock a failed 4xx request
        nock(CODE_400_ENDPOINT)
            .get(/railcontent/)
            .reply(400, {
                detail: 'error',
            });
        // Mock a failed 5xx request
        nock(CODE_500_ENDPOINT)
            .get(/railcontent/)
            .reply(500, {
                detail: 'error',
            });
    });
    afterAll(() => {
        nock.restore();
    });

    // Create an array of all functions in the module
    const functions = Object.keys(Railcontent).filter(name => name !== 'default');

    // Loop through every function and run the test
    for(let i = 0; i < functions.length; i++){
        describe(functions[i], () => {
            it('returns data with a 2XX code', async () => {
                const { response, error } = await Railcontent[functions[i]]({
                    url: CODE_200_ENDPOINT
                });

                expect(response).toBeDefined();
                expect(response.status).toBe(200);
                expect(response.data.results).toBe('success');
            });

            it('returns an error with a 4XX code', async () => {
                const { response, error } = await Railcontent[functions[i]]({
                    url: CODE_400_ENDPOINT
                });

                expect(error).toBeDefined();
                expect(error.response.status).toBe(400);
                expect(error.response.data.detail).toBe('error');
            });

            it('returns an error with a 5XX code', async () => {
                const { response, error } = await Railcontent[functions[i]]({
                    url: CODE_500_ENDPOINT
                });

                expect(error).toBeDefined();
                expect(error.response.status).toBe(500);
                expect(error.response.data.detail).toBe('error');
            });
        });
    }
});