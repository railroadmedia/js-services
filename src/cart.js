/**
 * @module Cart
 */

import axios from 'axios';

/**
 * Returns the current content of the cart
 *
 * @param {Object} params - Function parameters
 * @param {String} params. - 
 * @returns {Promise} Response or Error Object
 */
export function cart({
    url,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/json/cart`, {
                params: {

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
 * Clears the cart of all items and data cache
 *
 * @param {Object} params - Function parameters
 * @param {String} params. - 
 * @returns {Promise} Response or Error Object
 */
export function clearCart({
    url,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/json/clear-cart`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Add a new item to the cart via a static href link (get request)
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {Array} params.products - Array of skus
 * @param {String} params.locked - if true quantities are locked
 * @param {String} params.promocode -   promotional code
 * @returns {Promise} Response or Error Object
 */
export function addToCart({
    url,
    products,
    locked,
    promocode,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/json/cart/add-to-cart`, {
                params: {
                    products,
                    locked,
                    promocode,
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
 * Remove item from the cart.
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.product_sku - Product's unique identifying SKU
 * @returns {Promise} Response or Error Object
 */
export function removeFromCart({
    url,
    product_sku,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/json/cart/remove-from-cart/${product_sku}`, {
                params: {
                    product_sku,
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
 * Update item quantity in the cart
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.product_sku - Product's unique identifying SKU
 * @param {String|Number} params.new_quantity - new quantity of product 
 * @returns {Promise} Response or Error Object
 */
export function updateProductQuantity({
    url,
    product_sku,
    new_quantity,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/json/update-product-quantity/${product_sku}/${new_quantity}`, {
                params: {
                    product_sku,
                    new_quantity,
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
 * Update total overrides in the cart
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.product_taxes_due_override - 'place-orders-for-other-users' permission is required 
 * @param {String} params.shipping_taxes_due_override - 'place-orders-for-other-users' permission is required 
 * @param {String} params.shipping_due_override - 'place-orders-for-other-users' permission is required 
 * @param {String} params.order_items_due_overrides - place-orders-for-other-users' permission is required
 * @returns {Promise} Response or Error Object
 */
export function updateTotalOverrides({
    url,
    product_taxes_due_override,
    shipping_taxes_due_override,
    shipping_due_override,
    order_items_due_overrides,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/json/update-total-overrides`, {
                params: {
                    product_taxes_due_override,
                    shipping_taxes_due_override,
                    shipping_due_override,
                    order_items_due_overrides,
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
 * Updates the session addresses for the cart
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.billing_address_id - home address
 * @param {String} params.billing_email - email address
 * @param {String} params.billing_country - user country
 * @param {String} params.billing_region - region of world
 * @param {String} params.billing_zip_or_postal_code - postal code / zip
 * @param {String} params.shipping_address_id - address id
 * @param {String} params.shipping_address_line_1 - address line 1
 * @param {String} params.shipping_city - city
 * @param {String} params.shipping_country - country
 * @param {String} params.shipping_first_name - name
 * @param {String} params.shipping_last_name - last name
 * @param {String} params.shipping_region - region
 * @param {String} params.shipping_zip - postal or zip
 * @returns {Promise} Response or Error Object
 */
export function sessionAddress({
    url,
    billing_address_id,
    billing_email,
    billing_country,
    billing_region,
    billing_zip_or_postal_code,
    shipping_address_id,
    shipping_address_line_1,
    shipping_city,
    shipping_country,
    shipping_first_name,
    shipping_last_name,
    shipping_region,
    shipping_zip,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/json/session-address`, {
                params: {
                    billing_address_id,
                    billing_email,
                    billing_country,
                    billing_region,
                    billing_zip_or_postal_code,
                    shipping_address_id,
                    shipping_address_line_1,
                    shipping_city,
                    shipping_country,
                    shipping_first_name,
                    shipping_last_name,
                    shipping_region,
                    shipping_zip,
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

const Cart = {
    addToCart,
    cart,
    clearCart,
    removeFromCart,
    updateProductQuantity,
    updateTotalOverrides,
    sessionAddress,
};

export default Cart;
