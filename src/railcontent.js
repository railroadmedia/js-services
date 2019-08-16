/**
 * @module Railcontent
 */

import axios from 'axios';

/**
 * Get a list of content
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url
 * @param {String} params.brand
 * @param {Number|String} params.page
 * @param {Number|String} params.limit
 * @param {String} params.sort
 * @param {Array} params.statuses - Accepted values ('published', 'scheduled', 'draft', 'archived')
 * @param {String} params.term
 * @param {Array} params.included_types
 * @param {Array} params.included_fields
 * @returns {Promise} Response or Error Object
 */
export function getContent({
    url,
    brand = 'drumeo',
    page = '1',
    limit = '20',
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

// eslint-disable-next-line no-use-before-define
const Railcontent = {
    getContent,
};

export default Railcontent;
