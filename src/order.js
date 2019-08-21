/**
 * @module Order
 */

import axios from 'axios';

/**
 * List orders
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {Datetime} params.start_date - only pull orders after this time
 * @param {Datetime} params.end_date - only pull orders before this time
 * @param {String|Number} params.user_id - User's ID
 * @param {String} params.view_deleted - requires 'show_deleted' permission to include soft-deleted orders
 * @param {String} params.order_by_column - sorting method
 * @param {String} params.order_by_direction - sorting method
 * @param {String|Number} params.page - number page taking data from
 * @param {String|Number} params.limit - number orders to pull per page
 * @param {Array} params.brands - list of brands 
 * @returns {Promise} Response or Error Object
 */
export function getOrders({
    url,
    start_date,
    end_date,
    user_id,
    view_deleted,
    order_by_column,
    order_by_direction,
    page,
    limit,
    brands,

}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/orders`, {
                data: {
                    start_date,
                    end_date,
                    user_id,
                    view_deleted,
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
 * Get an order
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.order_id - orderID
 * @returns {Promise} Response or Error Object
 */
export function getOrderID({
    url,
    order_id,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/orders/${order_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Update an existing order
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.order_id - orderID
 * @param {String} params.note - 
 * @param {String} params.total_due - total
 * @param {String} params.taxes_due - tax
 * @param {String} params.shipping_due - shipping
 * @param {String} params.total_paid - paid
 * @returns {Promise} Response or Error Object
 */
export function patchOrderID({
    url,
    order_id,
    total_due,
    taxes_due,
    shipping_due,
    total_paid,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/ecommerce/order/${order_id}`, {
                data: {
                    type: 'order',
                    attributes: {
                        order_id,
                        total_due,
                        taxes_due,
                        shipping_due,
                        total_paid,    
                    },
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
 * Get an order
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.order_id - orderID
 * @returns {Promise} Response or Error Object
 */
export function deleteOrderID({
    url,
    order_id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/ecommerce/order/${order_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

const Order = {
    getOrders,
    getOrderID,

};

export default Order;
