/**
 * @module Payments
 */

import axios from 'axios';

/**
 * List users payments
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.order_id - order ID
 * @param {String} params.subscription_id - order by subscription
 * @param {String} params.order_by_column - order by column
 * @param {String} params.order_by_direction - order by direction
 * @param {String|Number} params.page - page to pull from
 * @param {String|Number} params.limit - number to pull
 * @param {String} params.view_deleted - view deleted
 * @returns {Promise} Response or Error Object
 */
export function getPayment({
    url,
    order_id,
    subscription_id,
    order_by_column,
    order_by_direction,
    page,
    limit,
    view_deleted,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/address`, {
                data: {
                    order_id,
                    subscription_id,
                    order_by_column,
                    order_by_direction,
                    page,
                    limit,
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
 * Create a new payment. This DOES actually attempt to charge the user.
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {Datetime} params.due - due
 * @param {Datetime} params.currency - cyrrency
 * @param {Datetime} params.payment_gateway - gateway
 * @param {Datetime} params.product_tax - product tax
 * @param {Datetime} params.shipping_tax - shipping tax
 * @param {Datetime} params.note - note
 * @param {Datetime} params.id - id
 * 
 * @returns {Promise} Response or Error Object
 */
export function putPayment({
    url,
    due,
    currency,
    payment_gateway,
    product_tax,
    shipping_tax,
    note,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/ecommerce/payment`, {
                data: {
                    type: 'payment',
                    attributes: {
                        due,
                        currency,
                        payment_gateway,
                        product_tax,
                        shipping_tax,
                        note,
                    },
                    relationships: {
                        paymentMethod: {
                            data: {
                                type: 'paymentMethod',
                                id,
                            },
                        },
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
 * Delete an existing payment
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.payment_id - payment ID
 * @returns {Promise} Response or Error Object
 */
export function deletePayment({
    url,
    payment_id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/ecommerce/payment/${payment_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

const Payments = {
    getPayment,
    putPayment,
    deletePayment,
};

export default Payments;
