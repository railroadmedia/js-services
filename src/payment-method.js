/**
 * @module PaymentMethods
 */

import axios from 'axios';

/**
 * List users payment methods
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.user_id - user's ID
 * @param {String} params.view_deleted - requires 'show_deleted' permission
 * @returns {Promise} Response or Error Object
 */
export function getPaymentMethod({
    url,
    user_id,
    view_deleted,
    
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/user-payment-method/${user_id}`, {
                data: {
                    user_id,
                    view_deleted,
                },
            })
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Create a new payment method
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.user_id - user's ID
 * @param {String} params.method_type - method
 * @param {String} params.card_token - card token
 * @param {String} params.gateway - gateway
 * @param {String} params.address_id - address
 * @param {String} params.customer_id - customer
 * @param {String} params.currency - currency
 * @returns {Promise} Response or Error Object
 */
export function putPaymentMethod({
    url,
    user_id,
    method_type,
    card_token,
    gateway,
    address_id,
    customer_id,
    currency,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/address`, {
                data: {
                    user_id,
                    method_type,
                    card_token,
                    gateway,
                    address_id,
                    customer_id,
                    currency,
                },
            })
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Update an existing payment method
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.payment_method_id - payment ID
 * @param {String} params.gateway - gateway
 * @param {String} params.month - month
 * @param {String} params.year - year
 * @param {String} params.country - country
 * @param {String} params.tegion - region
 * @param {String} params.currency - currency
 * @returns {Promise} Response or Error Object
 */
export function patchPaymentMethod({
    url,
    payment_method_id,
    gateway,
    month,
    year,
    country,
    region,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/ecommerce/payment_meethod/${payment_method_id}`, {
                data: {
                    gateway,
                    month,
                    year,
                    country,
                    region,
                },
            })
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Delete an existing payment method
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.payment_method_id -
 * @returns {Promise} Response or Error Object
 */
export function deletePaymentMethod({
    url,
    payment_method_id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/ecommerce/payment_meethod/${payment_method_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

const PaymentMethods = {
    getPaymentMethod,
    putPaymentMethod,
    patchPaymentMethod,
    deletePaymentMethod,
};

export default PaymentMethods;
