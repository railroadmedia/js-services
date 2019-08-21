/**
 * @module Daily_statistics
 */

import axios from 'axios';

/**
 * List daily products
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {Datetime} params.small_date_time - datetime of smaller date
 * @param {Datetime} params.big_date_time -  datetime of larger date
 * @param {String} params.brand - if this is not passed, all brands will be considered
 * @returns {Promise} Response or Error Object
 */
export function dailyStatistics({
    url,
    small_date_time,
    big_date_time,
    brand,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/ecommerce/daily-statistics`, {
                params: {
                    small_date_time,
                    big_date_time,
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

const Daily_statistics = {
    dailyStatistics,
};

export default Daily_statistics;
