/** @module Services */

import axios from 'axios';
import Railcontent from './src/railcontent';

/**
 * Configure the instance of axios with some defaults
 *
 * @param {Object} params - Function parameters
 * @param {String} params.baseURL - The base url to send all requests to
 * @param {String|Number} params.authToken - Your JWT token received from signing in
 */
export function configure({
    baseURL,
    authToken,
}) {
    if (baseURL) {
        axios.defaults.baseURL = baseURL;
    }

    if (authToken) {
        axios.defaults.headers.Authorization = `Bearer ${authToken}`;
    }
}

// Export every function individually
export * from './src/railcontent';

// Export every module individually
export {
    Railcontent,
};

// Create Services object to export as default
export default {
    Railcontent,
};
