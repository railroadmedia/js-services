/** @module Services */

import axios from 'axios';
import Railcontent from './src/railcontent';
import Daily_statistics from './src/daily-statistics';
import Access_codes from './src/access-codes';
import Cart from './src/cart';
import Order from './src/order';
import Shipping from './src/shipping';
import Payment_method from './src/payment-method';
import Payments from './src/payments';
import Products from './src/products';

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
export * from './src/daily-statistics';
export * from './src/access-codes';
export * from './src/cart';
export * from './src/order';
export * from './src/shipping';
export * from './src/payment-method';
export * from './src/payments';
export * from './src/products';

// Export every module individually
export {
    Railcontent,
    Daily_statistics,
    Access_codes,
    Cart,
    Order,
    Shipping,
    Payment_method,
    Payments,
    Products,
};

// Create Services object to export as default
export default {
    Railcontent,
    Daily_statistics,
    Access_codes,
    Cart,
    Order,
    Shipping,
    Payment_method,
    Payments,
    Products, 
};
