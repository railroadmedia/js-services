/**
 * @module Discount
 */

import axios from 'axios';

/**
 * Get a discount
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.order_by_column - order by method
 * @param {String} params.order_by_direction - order by method
 * @param {String|Number} params.page - page from products pulled from
 * @param {String|Number} params.limit - number of products to show
 * @returns {Promise} Response or Error Object
 */
export function getDiscounts({
    url,
    order_by_column,
    order_by_direction,
    page,
    limit,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/address`, {
                params: {
                    order_by_column,
                    order_by_direction,
                    page,
                    limit,
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
 * List products
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.discount_id - Id of discount
 * @returns {Promise} Response or Error Object
 */
export function discountIds({
    url,
    discount_id,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/discounts/${discount_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Create a new discount
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.name - Name
 * @param {String} params.description - Description
 * @param {String} params.type - must be 'discount'
 * @param {String|Number} params.amount - Amount
 * @param {String|Number} params.product_id - product's ID
 * @param {String} params.active - active
 * @param {String} params.visible - visible
 * @param {String} params.note - Note
 * @param {Datetime} params.created_at - Created at 
 * @param {String} params.type_ - Type
 * @param {String|Number} params.id - ID
 * @returns {Promise} Response or Error Object
 */
export function putDiscounts({
    url,
    name,
    description,
    type,
    amount,
    product_id,
    active,
    visible,
    note,
    created_at,
    type_,
    id,
    
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/ecommerce/discount`, {
                data: {
                    type: 'discount',
                    attributes: {
                        name,
                        description,
                        type,
                        amount,
                        product_id,
                        active,
                        visible,
                        note,
                        created_at,
                    },
                    relationships: {
                        product: {
                            data: {
                                type_,
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
 * Update an existing discount
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.name - Name
 * @param {String|Number} params.amount - amount of discount
 * @param {Datetime} params.expiration_date - expiration date
 * @param {String} params.type - type of discount
 * @param {String} params.discount_id - ID for discount

 * @returns {Promise} Response or Error Object
 */
export function patchDiscount({
    url,
    discount_id,
    name,
    amount,
    expiration_date,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/ecommerce/discount/${discount_id}`, {
                data: {
                    type: 'discount',
                    attributes: {
                        name,
                        amount,
                        expiration_date,
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
 * Delete an existing discount
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.discount_id - Discount id 
 * @returns {Promise} Response or Error Object
 */
export function deleteDiscount({
    url,
    discount_id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/ecommerce/discount/${discount_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

const Discount = {
    getDiscounts,
    discountIds,
    putDiscounts,
    patchDiscount,
    deleteDiscount,
};

export default Discount;
