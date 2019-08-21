/**
 * @module Shipping
 */

import axios from 'axios';

/**
 * Get all orders and items that need to be fulfilled between the specified dates
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {Datetime} params.small_date_time - early date time
 * @param {Datetime} params.big_date_time - later date time
 * @param {String} params.CSV - CSV 
 * @returns {Promise} Response or Error Object
 */
export function getFulfillment({
    url,
    small_date_time,
    big_date_time,
    CSV,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/fulfillment`, {
                data: {
                    small_date_time,
                    big_date_time,
                    CSV,
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
 * Update an existing fulfillment or all existing fulfillments for an order
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.tracking_number - Tracking number
 * @param {String} params.shipping_company - Shipping company
 * @param {Datetime} params.fulfilled_on - Fulfilled on
 * @param {String} params.order_item_id - Order item
 * @param {String} params.order_id - Order ID
 * @returns {Promise} Response or Error Object
 */
export function patchFulfillment({
    url,
    tracking_number,
    shipping_company,
    fulfilled_on,
    order_item_id,
    order_id,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/ecommerce/fulfillment`, {
                data: {
                    tracking_number,
                    shipping_company,
                    fulfilled_on,
                    order_item_id,
                    order_id,
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
 * Delete an existing fulfillment or all fulfillments for an order
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.order_item_id - Order item
 * @param {String} params.order_id - Order ID
 * @returns {Promise} Response or Error Object
 */
export function deleteFulfillment({
    url,
    order_item_id,
    order_id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/ecommerce/fulfillment`, {
                data: {
                    order_item_id,
                    order_id,
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
 * Upload a CSV file which is parsed and used to update existing fulfillments.
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {File} params.csv_file - CSV file
 * @returns {Promise} Response or Error Object
 */
export function uploadFileFulfillment({
    url,
    csv_file,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/ecommerce/fulfillment/mark-fulfilled-csv-upload-shipstation`, {
                data: {
                    csv_file,
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

const Shipping = {
    getFulfillment,
    patchFulfillment,
    deleteFulfillment,
    uploadFileFulfillment,

};

export default Shipping;
