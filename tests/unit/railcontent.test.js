const nock = require('nock');

import { Railcontent } from '../../index';

// Stub the API to return hardcoded data at specific endpoints
const CODE_200_ENDPOINT = 'https://200response.com';
const CODE_400_ENDPOINT = 'https://400response.com';
const CODE_500_ENDPOINT = 'https://500response.com';

nock(CODE_200_ENDPOINT)
    .get(/railcontent/)
    .reply(200, {
        results: 'success',
    });
nock(CODE_400_ENDPOINT)
    .get(/railcontent/)
    .reply(400, {
        detail: 'error',
    });
nock(CODE_500_ENDPOINT)
    .get(/railcontent/)
    .reply(500, {
        detail: 'error',
    });

describe('Railcontent', () => {

    describe('getContent', () => {
        it('returns data with a 2XX code', async () => {
            const { response, error } = await Railcontent.getContent({
                url: CODE_200_ENDPOINT
            });

            expect(response).toBeDefined();
            expect(response.status).toBe(200);
            expect(response.data.results).toBe('success');
        });

        it('returns an error with a 4XX code', async () => {
            const { response, error } = await Railcontent.getContent({
                url: CODE_400_ENDPOINT
            });

            expect(error).toBeDefined();
            expect(error.response.status).toBe(400);
            expect(error.response.data.detail).toBe('error');
        });

        it('returns an error with a 5XX code', async () => {
            const { response, error } = await Railcontent.getContent({
                url: CODE_500_ENDPOINT
            });

            expect(error).toBeDefined();
            expect(error.response.status).toBe(500);
            expect(error.response.data.detail).toBe('error');
        });
    });
});