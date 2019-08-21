/**
 * @module Products
 */

import axios from 'axios';

/**
 * List products
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.order_by_column - order by column
 * @param {String} params.order_by_direction - order by direction
 * @param {String|Number} params.page - page to pull from
 * @param {String|Number} params.limit - number to pull
 * @param {Array} params.brand - brand
 * @returns {Promise} Response or Error Object
 */
export function getProducts({
    url,
    order_by_column,
    order_by_direction,
    page,
    limit,
    brand,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/products`, {
                data: {
                    order_by_column,
                    order_by_direction,
                    page,
                    limit,
                    brand,
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
 * Create a new product
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.name - Name
 * @param {String} params.sku - SKU
 * @param {String} params.price - Price
 * @param {String} params.type - Type
 * @param {String} params.active - Active
 * @param {String} params.category - Category
 * @param {String} params.description - Description
 * @param {String} params.thumbnail_url - Thumbnail
 * @param {String} params.is_physical - Is physical
 * @param {String} params.weight - Weight
 * @param {String} params.subscription_interval_type - Subscription
 * @param {String} params.subscription_interval_count - Subscription
 * @param {String} params.stock - Stock
 * @param {String} params.brand - Brand
 * @param {String} params.note - Note
 * @param {String} params.created_at - Created
 * @returns {Promise} Response or Error Object
 */
export function putProduct({
    url,
    name,
    sku,
    price,
    type,
    active,
    category,
    description,
    thumbnail_url,
    is_physical,
    weight,
    subscription_interval_type,
    subscription_interval_count,
    stock,
    brand,
    note,
    created_at,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/ecommerce/products`, {
                data: {
                    type: 'product',
                    attributes: {
                        name,
                        sku,
                        price,
                        type,
                        active,
                        category,
                        description,
                        thumbnail_url,
                        is_physical,
                        weight,
                        subscription_interval_type,
                        subscription_interval_count,
                        stock,
                        brand,
                        note,
                        created_at,
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
 * Update a product
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.name - Name
 * @param {String} params.sku - SKU
 * @param {String} params.price - Price
 * @param {String} params.type - Type
 * @param {String} params.active - Active
 * @param {String} params.category - Category
 * @param {String} params.description - Description
 * @param {String} params.thumbnail_url - Thumbnail
 * @param {String} params.is_physical - Is physical
 * @param {String} params.weight - Weight
 * @param {String} params.subscription_interval_type - Subscription
 * @param {String} params.subscription_interval_count - Subscription
 * @param {String} params.stock - Stock
 * @param {String} params.brand - Brand
 * @param {String} params.note - Note
 * @param {String} params.product_id - product_id
 * @param {String} params.created_at - Created
 * @returns {Promise} Response or Error Object
 */
export function patchProduct({
    url,
    name,
    sku,
    price,
    type,
    active,
    category,
    description,
    thumbnail_url,
    is_physical,
    weight,
    subscription_interval_type,
    subscription_interval_count,
    stock,
    brand,
    note,
    created_at,
    product_id,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/ecommerce/products/${product_id}`, {
                data: {
                    type: 'product',
                    attributes: {
                        name,
                        sku,
                        price,
                        type,
                        active,
                        category,
                        description,
                        thumbnail_url,
                        is_physical,
                        weight,
                        subscription_interval_type,
                        subscription_interval_count,
                        stock,
                        brand,
                        note,
                        created_at,
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
 * Update a product
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.product_id - product_id
 * @returns {Promise} Response or Error Object
 */
export function deleteProduct({
    url,
    product_id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/ecommerce/products/${product_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

const Products = {
    getProducts,
    putProduct,
    patchProduct,
    deleteProduct,
};

export default Products;
