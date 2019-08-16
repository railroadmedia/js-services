import axios from 'axios';

/**
 * Get a list of content
 *
 * @param {String} url
 * @param {String} brand
 * @param {Number|String} limit
 * @param {Array} statuses - Accepted values ('published', 'scheduled', 'draft', 'archived')
 * @param {String} sort
 * @param {String} term
 * @param {Array} included_types
 * @param {Array} included_fields
 * @param {Number|String} page
 * @returns {Promise} - Response or Error Object
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

const Railcontent = {
    getContent,
};

export default Railcontent;
