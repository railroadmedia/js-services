/**
 * @module AccessCodes
 */

import axios from 'axios';

/**
 * Used to claim an action code for an existing or new user
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.access_code - The exact access code without dashes or spaces
 * @param {String} params.email - Email for the new user to be created
 * @param {String} params.password - Raw password for the new user to be created
 * @param {String} params.password_confirmation - Confirm password
 * @param {String} params.redirect - Where to redirect after the request is processed
 * @returns {Promise} Response or Error Object
 */
export function redeemAccessCodes({
    url,
    access_code,
    email,
    password,
    password_confirmation,
    redirect,
}) {
    return new Promise((resolve) => {
        axios
            .post(`${url}/ecommerce/access-codes/redeem`, {
                params: {
                    access_code,
                    email,
                    password,
                    password_confirmation,
                    redirect,
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
 * List access codes
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.order_by_column - The column to order the code using
 * @param {String} params.order_by_direction - Which direction to order
 * @param {String|Number} params.page - Which page to load, will be {limit} long
 * @param {String|number} params.limit - How many to load per page
 * @param {Array} params.brands - Limit results to codes that belong to specific brands
 * @returns {Promise} Response or Error Object
 */
export function getAccessCodes({
    url,
    order_by_column,
    order_by_direction,
    page,
    limit,
    brands,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/access-codes`, {
                params: {
                    order_by_column,
                    order_by_direction,
                    page,
                    limit,
                    brands,
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
 * Search for access codes based on any part of the code
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.order_by_column - The column to order the code using
 * @param {String} params.order_by_direction - Which direction to order
 * @param {String|Number} params.page - Which page to load, will be {limit} long
 * @param {String|number} params.limit - How many to load per page
 * @param {Array} params.brands - Limit results to codes that belong to specific brands
 * @returns {Promise} Response or Error Object
 */
export function getAccessCodesSearch({
    url,
    order_by_column,
    order_by_direction,
    page,
    limit,
    brands,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/access-codes`, {
                params: {
                    order_by_column,
                    order_by_direction,
                    page,
                    limit,
                    brands,
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

const AccessCodes = {
    redeemAccessCodes,
    getAccessCodes,
    getAccessCodesSearch,
};

export default AccessCodes;
