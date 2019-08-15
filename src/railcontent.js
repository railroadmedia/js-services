import axios from 'axios';

const Railcontent = {
    /**
     * Get a list of content
     *
     * @param {String} prefix
     * @param {String} brand
     * @param {Number|String} limit
     * @param {Array} statuses - Accepted values ('published', 'scheduled', 'draft', 'archived')
     * @param {String} sort
     * @param {String} term
     * @param {Array} included_types
     * @param {Array} included_fields
     * @param {Number|String} page
     * @returns {Promise} - Response Object or Error Object
     */
    getContent({
        prefix,
        brand = 'drumeo',
        limit = '20',
        statuses = ['published', 'scheduled', 'draft'],
        sort = '-created_on',
        term,
        included_types,
        included_fields,
        page = '1',
    }) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${prefix}/railcontent/content`, {
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
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
};

export default Railcontent;