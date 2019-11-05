import { configure } from '../../index';
import axios from 'axios';

describe('configure', () => {
    it('can set the base url', () => {
        configure({
            baseURL: 'https://test.com',
        });

        expect(axios.defaults.baseURL).toBe('https://test.com');
    });

    it('can set the auth token', () => {
        configure({
            authToken: '12345',
        });

        expect(axios.defaults.headers.Authorization).toBe('Bearer 12345');
    });

    it('can set the content type', () => {
        configure({
            contentType: 'application/json',
        });

        expect(axios.defaults.headers['Content-Type']).toBe('application/json');
    });

    it('can set the accepted type', () => {
        configure({
            accept: 'application/json',
        });

        expect(axios.defaults.headers.Accept).toBe('application/json');
    });
});