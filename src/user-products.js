/**
 * @module UserProducts
 */

import axios from 'axios';

/**
 * List user products
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.user_id - user ID
 * @param {String} params.view_deleted - view deleted
 * @param {String} params.order_by_column - sort by
 * @param {String} params.order_by_direction - sort by
 * @param {String} params.page - page number
 * @param {String} params.limit - number to pull per page
  * @returns {Promise} Response or Error Object
 */
export function getUserProducts({
    url,
    user_id,
    view_deleted,
    order_by_direction,
    order_by_column,
    page,
    limit,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/user-product`, {
                data: {
                    user_id,
                    view_deleted,
                    order_by_direction,
                    order_by_column,
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
 * Create a new user products
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.quantity - product quantity
 * @param {Datetime} params.expiration_date - expiration date
 * @param {String} params.user_id - user ID
 * @param {String} params.product_id - product ID
 * @returns {Promise} Response or Error Object
 */
export function putUserProduct({
    url,
    quantity,
    expiration_date,
    user_id,
    product_id,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/user-product`, {
                data: {
                    type: 'userProduct',
                    attributes: {
                        quantity,
                        expiration_date,
                    },
                    relationships: {
                        user: {
                            data: {
                                type: 'user',
                                user_id,
                            },
                        },
                        product: {
                            data: {
                                type: 'product',
                                product_id,
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
 * Update a user products
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.quantity - product quantity
 * @param {String} params.product_id - product ID
 * @returns {Promise} Response or Error Object
 */
export function patchUserProduct({
    url,
    quantity,
    product_id,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/ecommerce/user-product/${product_id}`, {
                data: {
                    type: 'userProduct',
                    attributes: {
                        quantity,
                    },
                    relationships: {
                        product: {
                            data: {
                                type: 'product',
                                product_id,
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
 * Delete an existing user product
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.product_id - productID
 * @returns {Promise} Response or Error Object
 */
export function deleteUserProduct({
    url,
    product_id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/ecommerce/user-product/${product_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

const UserProducts = {
    getUserProducts,
    putUserProduct,
    deleteUserProduct,
};

export default UserProducts;
