/**
 * @module User_login
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
    url,
    email,
    password,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/usora/api/login`, {
                params: {
                    email,
                    password,
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
 * User logs out
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @returns {Promise} Response or Error Object
 */
export function userLogout({
    url,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/usora/api/profile`)
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
    url,
    email, 
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/usora/api/forgot`, {
                data: {
                    email,
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
 * Update profile
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @returns {Promise} Response or Error Object
 */
export function userUpdate({
    url,
}) {
    return new Promise((resolve) => {
        axios
            .post(`${url}/usora/api/profile/update`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}


const User_login = {
    userLogin,
    userLogout,
    userForgotPassword,
    userUpdate,
};

export default User_login;
