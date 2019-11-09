/**
 * @module UserLogin
 */

import axios from 'axios';

/**
 * User logs in
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.email - User email
 * @param {String} params.password - User password
 * @returns {Promise} Response or Error Object
 */
export function userLogin({
    url = '',
    email,
    password,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/usora/api/login`, {
                email,
                password,
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
 * User logs out
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @returns {Promise} Response or Error Object
 */
export function userLogout({
    url = '',
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/usora/api/logout`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });
}

/**
 * User forgot password
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.email - The user's email
 * @returns {Promise} Response or Error Object
 */
export function userForgotPassword({
    url = '',
    email,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/usora/api/forgot`, {
                email,
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
 * Update profile
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.attributes - The attributes of the user to update
 * @returns {Promise} Response or Error Object
 */
export function userUpdate({
    url = '',
    attributes = {},
}) {
    return new Promise((resolve) => {
        axios
            .post(`${url}/usora/api/profile/update`, {
                data: {
                    attributes,
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


const UserLogin = {
    userLogin,
    userLogout,
    userForgotPassword,
    userUpdate,
};

export default UserLogin;
