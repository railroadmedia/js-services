/** @module Services */

import axios from 'axios';
import AccessCodes from './src/access-codes';
import Cart from './src/cart';
import DailyStatistics from './src/daily-statistics';
import DiscountCriteria from './src/discount-criteria';
import Discount from './src/discount';
import Order from './src/order';
import PaymentMethods from './src/payment-method';
import Payments from './src/payments';
import Products from './src/products';
import Railcontent from './src/railcontent';
import Shipping from './src/shipping';
import Subscriptions from './src/subscriptions';
import UserLogin from './src/user-login';
import UserProducts from './src/user-products';

/**
 * Configure the instance of axios with some defaults
 *
 * @param {Object} params - Function parameters
 * @param {String} params.baseURL - The base url to send all requests to
 * @param {String} params.contentType - The content type of your request
 * @param {String} params.accept - The data format that you will accept in the response
 * @param {String|Number} params.authToken - Your JWT token received from signing in
 */
export function configure({
    baseURL,
    authToken,
    contentType,
    accept,
}) {
    if (baseURL) {
        axios.defaults.baseURL = baseURL;
    }

    if (authToken) {
        axios.defaults.headers.Authorization = `Bearer ${authToken}`;
    }

    if (contentType) {
        axios.defaults.headers['Content-Type'] = contentType;
    }

    if (accept) {
        axios.defaults.headers.Accept = accept;
    }
}

// Export every function individually
export * from './src/access-codes';
export * from './src/cart';
export * from './src/daily-statistics';
export * from './src/discount-criteria';
export * from './src/discount';
export * from './src/order';
export * from './src/payment-method';
export * from './src/payments';
export * from './src/products';
export * from './src/railcontent';
export * from './src/shipping';
export * from './src/subscriptions';
export * from './src/user-login';
export * from './src/user-products';

// Export every module individually
const Services = {
    AccessCodes,
    Cart,
    DailyStatistics,
    DiscountCriteria,
    Discount,
    Order,
    PaymentMethods,
    Payments,
    Products,
    Railcontent,
    Shipping,
    Subscriptions,
    UserLogin,
    UserProducts,
};

// Create Services object to export as default
export default Services;
