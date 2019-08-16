/**
 * @module Railcontent
 */

import axios from 'axios';

/**
 * Get a list of content
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.brand - Application brand
 * @param {Number|String} params.limit - Maximum amount of results per page
 * @param {Number|String} params.page - The page of content to return results for
 * @param {String} params.sort - The database column to sort results by
 * @param {Array} params.statuses - Content statuses to filter the results by
 * @param {String} params.term - A search term to filter the results by
 * @param {Array} params.included_types - Content types to filter the results by
 * @param {Array} params.included_fields - Included field types to filter the results by
 * @returns {Promise} Response or Error Object
 */
export function getContent({
    url,
    brand = 'drumeo',
    limit = '20',
    page = '1',
    sort = '-created_on',
    statuses = ['published', 'scheduled', 'draft'],
    term,
    included_types,
    included_fields,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/content`, {
                params: {
                    brand,
                    limit,
                    statuses,
                    sort,
                    term,
                    included_types,
                    included_fields,
                    page,
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
 * Get a list of content
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - Content ID
 * @returns {Promise} Response or Error Object
 */
export function getContentById({
    url,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/content/${id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

const Railcontent = {
    getContent,
    getContentById,
};

export default Railcontent;
