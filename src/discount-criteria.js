/**
 * @module Discount_criteria
 */

import axios from 'axios';

/**
 * Create a new discount criteria for a discount
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.discount_id - ID
 * @param {String} params.name - name
 * @param {String} params.type - 'product quantity requirement', 'date requirement', 'order total requirement',
 * @param {String|Number} params.product_id - 
 * @param {String|Number} params.min - to be set depending on the type
 * @param {String|Number} params.max -to be set depending on the type
 * @param {Datetime} params.created_at - created at datetime
 * @param {String} params.type - type 
 * @param {String|Number} params.id -id
 * @returns {Promise} Response or Error Object
 */
export function putDiscountCriteria({
    url,
    name, 
    type,
    product_id,
    min,
    max,
    discount_id,
    created_at,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/ecommerce/discount-criteria/${discount_id}`, {
                data: {
                    type: 'discountCriteria',
                    attributes: {
                        name,
                        type,
                        product_id,
                        min,
                        max,
                        discount_id,
                        created_at,
                    },
                    relationships: {
                        product: {
                            data: {
                                type: 'product',
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
 * Update an existing discount criteria
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.discount_id - ID
 * @param {String|Number} params.min - to be set depending on the type
 * @param {String|Number} params.max -to be set depending on the type
 * @param {String|Number} params.id -id
 * @returns {Promise} Response or Error Object
 */
export function patchDiscountCriteria({
    url,
    discount_id,
    min,
    max,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/ecommerce/discount-criteria/${discount_id}`, {
                data: {
                    type: 'discountCriteria',
                    attributes: {
                        min,
                        max,
                    },
                    relationships: {
                        product: {
                            data: {
                                type: 'product',
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
 * Delete an existing discount criteria
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.discount_id - ID
 * @returns {Promise} Response or Error Object
 */
export function deleteDiscountCriteria({
    url,
    discount_id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/ecommerce/discount-criteria/${discount_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

const Discount_criteria = {
    putDiscountCriteria,
    patchDiscountCriteria,
    deleteDiscountCriteria,
};

export default Discount_criteria;
