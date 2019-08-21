/**
 * @module Subscriptions
 */

import axios from 'axios';

/**
 * List subscriptions
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.user_id - User's ID
 * @param {String} params.view_deleted - view delete
 * @param {String} params.order_by_column - sorting method
 * @param {String} params.order_by_direction - sorting method
 * @param {String|Number} params.page - page number
 * @param {String|Number} params.limit - number to show per page
 * @param {Array} params.brands -
 * @returns {Promise} Response or Error Object
 */
export function getSubscriptions({
    url,
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
            .get(`${url}/ecommerce/subscriptions`, {
                data: {
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
 * Create a new subscription
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.brand - brand
 * @param {String} params.type - type
 * @param {String} params.user_id - user id
 * @param {String} params.customer_id - customer id
 * @param {String} params.order_id - order id
 * @param {String} params.product_id - product id
 * @param {String} params.is_active - is active
 * @param {String|Number} params.start_date - start datetime
 * @param {String} params.paid_until - paid until
 * @param {String|Number} params.canceled_on - subscription cancel date
 * @param {String} params.note - note
 * @param {String|Number} params.total_price - total price
 * @param {String|Number} params.tax - tax total
 * @param {String} params.currency - currency type
 * @param {String|Number} params.interval_count - interval count
 * @param {String|Number} params.total_cycles_due - cycles due
 * @param {String|Number} params.total_cycles_paid - cycles paid
 * @param {String} params.payment_method_id - payment method
 * @param {Datetime} params.created_at - datetime creation
 * @param {String} params.payment_id - ID of payment
 * @returns {Promise} Response or Error Object
 */
export function putSubscriptions({
    url,
    brand,
    type,
    user_id,
    customer_id,
    order_id,
    product_id,
    is_active,
    start_date,
    paid_until,
    canceled_on,
    note,
    total_price,
    tax,
    currency,
    interval_type,
    interval_count,
    total_cycles_due,
    total_cycles_paid,
    payment_method_id,
    created_at,
    payment_id,
    
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/ecommerce/address`, {
                data: {
                    type: 'address',
                    attributes: {
                        brand,
                        type,
                        user_id,
                        customer_id,
                        order_id,
                        product_id,
                        is_active,
                        start_date,
                        paid_until,
                        canceled_on,
                        note,
                        total_price,
                        tax,
                        currency,
                        interval_type,
                        interval_count,
                        total_cycles_due,
                        total_cycles_paid,
                        payment_method_id,
                        created_at,
                    },
                    relationships: {
                        product: {
                            data: {
                                type: 'product',
                                product_id,
                            },
                        },
                        user: {
                            data: {
                                type: 'user',
                                user_id,
                            },
                        },
                        order: {
                            data: {
                                type: 'order',
                                order_id,
                            },
                        },
                        paymentMethod: {
                            data: {
                                type: 'paymentMethod',
                                payment_id,
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
 * Renew a subscription. The users product access and renewals dates will be updated automatically
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.Subscription_id - subscription ID
 * @returns {Promise} Response or Error Object
 */
export function postSubscriptions({
    url,
    Subscription_id,
}) {
    return new Promise((resolve) => {
        axios
            .post(`${url}/ecommerce/subscription-renew/${Subscription_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Delete a subscription
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.subscription_id - subscription ID
 * @returns {Promise} Response or Error Object
 */
export function deleteSubscriptions({
    url,
    Subscription_id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/ecommerce/subscription-renew/${Subscription_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Pulled the failed subscriptions
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.type - type
 * @param {String|Number} params.page - page to pull from
 * @param {String|Number} params.limit - number to pull
 * @param {String} params.order_by_column - order by column
 * @param {String} params.order_by_direction - order by direction
 * @param {Array} params.brands - brands
 * @param {String} params.user_id - user ID
 * @param {Datetime} params.big_date_time - later datetime
 * @param {Datetime} params.small_date_time - early datetime
 * @returns {Promise} Response or Error Object
 */
export function getFailedSubscriptions({
    url,
    type,
    page,
    limit,
    order_by_column,
    order_by_direction,
    brands,
    user_id,
    big_date_time,
    small_date_time,
    
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/failed-subscriptions`, {
                data: {
                    type,
                    page,
                    limit,
                    order_by_column,
                    order_by_direction,
                    brands,
                    user_id,
                    big_date_time,
                    small_date_time,
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

const Subscriptions = {
    getSubscriptions,
    putSubscriptions,
    postSubscriptions,
    deleteSubscriptions,
};

export default Subscriptions;
