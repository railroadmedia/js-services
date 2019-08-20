/**
 * @module Railcontent
 */

import axios from 'axios';

/**
 * Get content data based on content id
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

/**
 * Get an array with contents data based on content ids
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {Array} params.ids - Array of content Ids
 * @returns {Promise} Response or Error Object
 */
export function getContentByIds({
    url,
    ids = [],
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/content/get-by-ids`, {
                params: {
                    ids: ids.join(','),
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
 * Get contents that are child of contentId
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.parentId - The parent content ID
 * @returns {Promise} Response or Error Object
 */
export function getContentChildById({
    url,
    parentId,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/content/parent/${parentId}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Get an array with contents that respect filter criteria
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.brand - Application brand
 * @param {Number|String} params.limit=20 - Maximum amount of results per page
 * @param {Number|String} params.page=1 - The page of content to return results for
 * @param {String} params.sort=-created_on - The database column to sort results by
 * @param {Array} params.statuses=['published', 'scheduled', 'draft'] - Content statuses to filter the results by
 * @param {String} params.term - A search term to filter the results by
 * @param {Array} params.included_types - Content types to filter the results by
 * @param {Array} params.required_fields - Array of key value pairs to filter the results by ex: {key:"difficulty", value:"2"}
 * @param {Array} params.required_user_states - All returned contents are required to have these states for the authenticated user
 * @param {Array} params.required_user_playlists - All returned contents are required to be inside these authenticated users playlists.
 * @returns {Promise} Response or Error Object
 */
export function getContent({
    url,
    brand,
    limit = '20',
    page = '1',
    sort = '-created_on',
    statuses = ['published', 'scheduled', 'draft'],
    term,
    included_types,
    required_fields = [],
    required_user_states = [],
    required_user_playlists = [],
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/content`, {
                params: {
                    brand,
                    limit,
                    page,
                    statuses,
                    sort,
                    term,
                    included_types,
                    required_fields: required_fields.map((field) => `${field.key},${field.value}`),
                    required_user_states,
                    required_user_playlists,
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
 * Full text search content
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.brand - Contents from the brand will be returned.
 * @param {String|Number} params.limit=20 - number of contents returned
 * @param {String|Number} params.page=1 - page of result set to return
 * @param {String} params.term - search term
 * @param {Array} params.included_types - Contents with these types will be returned
 * @param {Array} params.statuses=['published', 'scheduled', 'draft'] - All content must have one of these statuses.
 * @param {String} params.sort=-score - Key to sort the results by. Can be any of the following: `score` or `content_published_on`
 * @returns {Promise} Response or Error Object
 */
export function searchContent({
    url,
    brand,
    page = '1',
    limit = '20',
    term,
    included_types = [],
    statuses = ['published', 'scheduled', 'draft'],
    sort = '-score',
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/content/search`, {
                params: {
                    brand,
                    page,
                    limit,
                    term,
                    included_types,
                    statuses,
                    sort,
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
 * Create a new content based on request data
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.slug - slug of content
 * @param {String} params.type - type of content
 * @param {String} params.status=draft - status
 * @param {String} params.brand - The brand to create content for
 * @param {String} params.parent_id - The parent ID you wish to create a content child for
 * @returns {Promise} Response or Error Object
 */
export function storeContent({
    url,
    type,
    slug,
    status = 'draft',
    brand,
    parent_id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/content`, {
                data: {
                    slug, 
                    type,
                    status,
                    brand,
                    parent_id,
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
 * Update a content with request data
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.brand - New content brand
 * @param {String} params.slug - New slug of the content
 * @param {String} params.status - New status. Can be 'draft' 'published' 'archived'
 * @param {String} params.type - The new content type
 * @param {String} params.published_on - The new published on date
 * @param {String} params.parent_id - The parent ID you wish to attach this content to
 * @returns {Promise} Response or Error Object
 */
export function patchContent({
    url,
    brand,
    id,
    slug,
    type,
    published_on,
    status,
    parent_id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/content/${id}`, {
                data: {
                    brand,
                    slug, 
                    status,
                    type,
                    published_on,
                    parent_id,
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
 * Delete content
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - The id of content
 * @returns {Promise} Response or Error Object
 */
export function deleteContent({
    url,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/railcontent/content/${id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Mark content as deleted without actually deleting
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - The id of content
 * @returns {Promise} Response or Error Object
 */
export function softDeleteContent({
    url,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/railcontent/soft/content/${id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Create a new content field based on request data
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - integer id of content
 * @param {String|Number} params.content_id - The content id this field belongs to
 * @param {String|Number} params.key - The key of this field; also know as the name
 * @param {String} params.value - The value of the field
  * @param {String} params.type - The type of field this is. Options are 'string' 'integer' 'content_id'
 * @returns {Promise} Response or Error Object
 */
export function storeContentField({
    url,
    id,
    content_id,
    key,
    value,
    type,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/content/field/${id}`, {
                data: {
                    content_id,
                    key,
                    value,
                    type,
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
 * Update a content with the request data and return the updated content in JSON format
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.fieldId - integer id of content
 * @param {String} params.value - The value of the field
 * @returns {Promise} Response or Error Object
 */
export function updateContentField({
    url,
    fieldId,
    value,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/railcontent/content/field/${fieldId}`, {
                data: {
                    value,
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
 * Delete content field if exists in the database
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.token - The endpoint url
 * @param {String|Number} params.fieldId - integer id of content
 * @returns {Promise} Response or Error Object
 */
export function deleteContentField({
    url,
    fieldId,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/railcontent/content/field/${fieldId}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Get content field data based on content field id
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.fieldId - integer id of content
 * @returns {Promise} Response or Error Object
 */
export function getContentField({
    url,
    fieldId,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/content/field/${fieldId}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Create a new content record based on request data
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.value - The value of the datum
 * @param {String} params.key - The key of this datum; also know as the name
 * @param {String|Number} params.content_id - The content id this datum belongs to
 * @returns {Promise} Response or Error Object
 */
export function storeContentDatum({
    url,
    value,
    content_id, 
    key,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/content/datum`, {
                data: {
                    value,
                    content_id, 
                    key,
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
 * Update the content datum with the request data
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - id of the datum you want to edit.
 * @param {String} params.value - The value of the datum
 * @returns {Promise} Response or Error Object
 */
export function updateContentDatum({
    url,
    id, 
    value,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/content/datum/${id}`, {
                data: {
                    value, 
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
 * Update the content datum with the request data
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - id of the datum you want to edit.
 * @returns {Promise} Response or Error Object
 */
export function deleteContentDatum({
    url,
    id, 
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/railcontent/content/datum/${id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Update the content datum with the request data
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.parent_id - The content id of the parent
 * @param {String|Number} params.child_id - The content id of the child
 * @param {String} params.child_position - The position relative to the other children
 * @returns {Promise} Response or Error Object
 */
export function storeContentHierarchy({
    url,
    parent_id,
    child_id,
    child_position,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/content/hierarchy`, {
                data: {
                    parent_id,
                    child_id,
                    child_position,
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
 * Delete the link between parent content and child content and reposition other childrens
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.parent_id - The content id of the parent
 * @param {String|Number} params.child_id - The content id of the child
 * @returns {Promise} Response or Error Object
 */
export function deleteContentFromHierarchy({
    url,
    parent_id,
    child_id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/railcontent/content/hierarchy/${parent_id}/${child_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Start authenticated user progress on content
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.content_id - The content id you want to start
 * @returns {Promise} Response or Error Object
 */
export function startAuthenticatedUserProgress({
    url,
    content_id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/content/hierarchy/${content_id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Save the progress on a content for the authenticated user
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.content_id - The content id you want to start
 * @param {String|Number} params.progress_percent - The progress percent
 * @returns {Promise} Response or Error Object
 */
export function saveAuthenticatedUserProgress({
    url,
    content_id,
    progress_percent,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/content/hierarchy`, {
                data: {
                    content_id,
                    progress_percent,
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
 * Delete the content progress for the authenticated user
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.content_id - The content id you want to start
 * @returns {Promise} Response or Error Object
 */
export function resetAuthenticatedUserProgress({
    url,
    content_id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/reset`, {
                data: {
                    content_id,
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
 * Set content as complete for the authenticated user
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.content_id - The content id you want to start
 * @returns {Promise} Response or Error Object
 */
export function completeAuthenticatedUserProgress({
    url,
    content_id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/complete`, {
                data: {
                    content_id,
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
 * Store a new permission in the CMS
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.name - The name of this permission
 * @returns {Promise} Response or Error Object
 */
export function storePermission({
    url,
    name,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/permission`, {
                data: {
                    name,
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
 * Change permission name or the brand where the permission it's available
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - Id of the permission you want to change
 * @param {String} params.name - The name of this permission
 * @returns {Promise} Response or Error Object
 */
export function changePermission({
    url,
    name,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/railcontent/permission/${id}`, {
                data: {
                    name,
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
 * Delete the permission and all the links with contents
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - Id of the permission you want to delete
 * @returns {Promise} Response or Error Object
 */
export function deletePermission({
    url,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/permission/${id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Delete the permission and all the links with contents
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.content_type - The type of contents you want to assign the permission to
 * @param {String|Number} params.permission_id - The permission id you want to assign to the content
 * @returns {Promise} Response or Error Object
 */
export function assignPermission({
    url,
    content_type,
    permission_id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/permission/assign`, {
                data: {
                    content_type,
                    permission_id,  
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
 * Dissociate permissions from a specific content or all content of a certain type
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.content_type - The type of contents you want to assign the permission to
 * @param {String|Number} params.permission_id - The permission id you want to assign to the content
 * @returns {Promise} Response or Error Object
 */
export function dissociatePermission({
    url,
    content_type,
    permission_id,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/railcontent/permission/dissociate`, {
                data: {
                    content_type,
                    permission_id,
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
 * Give users access to specific content for a specific amount of time
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.user_id - The user's id
 * @param {String|Number} params.permission_id - The permission id you want to assign to the content
 * @param {Datetime} params.start_date - The date when the user has access
 * @param {Datetime} params.expiration_date - If null user has access forever; else until the expiration date
 * @returns {Promise} Response or Error Object
 */
export function giveUserAccess({
    url,
    user_id, 
    permission_id,
    start_date, 
    expiration_date,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/user-permission`, {
                data: {
                    user_id,
                    permission_id,
                    start_date,
                    expiration_date,
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
 * Give users access to specific content for a specific amount of time
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.userPermissionId - The permission id
 * @param {Datetime} params.expiration_date - If null user has access forever; else until the expiration date
 * @returns {Promise} Response or Error Object
 */
export function changeUserAccess({
    url,
    userPermissionId,
    expiration_date,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/railcontent/user-permission/${userPermissionId}`, {
                data: {
                    expiration_date,
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
 * Delete user access to content 
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint's url
 * @param {String|Number} params.userPermissionId - The permission id
 * @returns {Promise} Response or Error Object
 */
export function deleteUserAccess({
    url,
    userPermissionId,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/railcontent/user-permission/${userPermissionId}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Give users access to specific content for a specific amount of time
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.user_id - If it's set only the permissions for the specified user are returned
 * @param {String} params.only_active - If it's false the expired permissions are returned also
 * @returns {Promise} Response or Error Object
 */
export function pullUserPermissions({
    url,
    user_id,
    only_active,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/user-permission`, {
                params: {
                    user_id,
                    only_active,
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
 * Change comment. Administrator can edit any comment; other users can edit only their comments
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - Id of the comment you want to edit
 * @param {String} params.comment - The description of the comment
 * @returns {Promise} Response or Error Object
 */
export function changeComment({
    url,
    comment,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .patch(`${url}/railcontent/user-permission/${id}`, {
                data: {
                    comment,
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
 * Delete content comment or mark comment as deleted
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - Id of the comment you want to edit
 * @returns {Promise} Response or Error Object
 */
export function deleteComment({
    url,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/railcontent/user-permission/${id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Add a reply to a comment if the request data pass the validation
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.parent_id - The comment id you want to assign the reply to
 * @param {String} params.comment - The comment description
 * @returns {Promise} Response or Error Object
 */
export function replyComment({
    url,
    parent_id,
    comment,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/comment/reply`, {
                data: {
                    comment,
                    parent_id,
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
 * Pull the comments based on the criteria passed in request
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String} params.parent_id - The comment id you want to assign the reply to
 * @param {String} params.comment - The comment description
 * @param {String|Number} params.page - Pagination page
 * @param {String|Number} params.limit - Amount of comments to pull per page
 * @param {String|Number} params.content_id - Only comments for this content id will be returned
 * @param {String} params.user_id - The user's id
 * @returns {Promise} Response or Error Object
 */
export function pullComments({
    url,
    parent_id,
    comment,
    page,
    limit,
    content_id,
    user_id,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/comment`, {
                data: {
                    comment,
                    parent_id,
                    page,
                    limit,
                    content_id,
                    user_id,
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
 * Get the linked comments
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.limit - Amount of comments to pull per page
 * @param {String|Number} params.id - The comment id
 * @returns {Promise} Response or Error Object
 */
export function getLinkedComments({
    url,
    id,
    limit,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/comment/${id}`, {
                data: {
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
 * Authenticated user likes a comment
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - The comment id
 * @returns {Promise} Response or Error Object
 */
export function likeComment({
    url,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .put(`${url}/railcontent/comment-like/${id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Authenticated user unlikes a comment
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - The comment id
 * @returns {Promise} Response or Error Object
 */
export function unlikeComment({
    url,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/railcontent/comment-like/${id}`)
            .then((response) => {
                resolve({ response });
            })
            .catch((error) => {
                resolve({ error });
            });
    });    
}

/**
 * Get likes for the given comment id - paginated
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - The comment id
 * @param {String|Number} params.page - Page number
 * @param {String|Number} params.limit - Number of comments to pull per page
 * @returns {Promise} Response or Error Object
 */
export function getCommentLikes({
    url,
    id,
    page,
    limit,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/comment-likes/${id}`, {
                data: {
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
 * The managers have the ability to get comment assignments for
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - The comment id
 * @param {String} params.user_id - The userID to get comments for
 * @returns {Promise} Response or Error Object
 */
export function pullAssignedComments({
    url,
    id,
    user_id,
}) {
    return new Promise((resolve) => {
        axios
            .get(`${url}/railcontent/assigned-comment/${id}`, {
                data: {
                    user_id,
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
 * Delete comment assignations
 *
 * @param {Object} params - Function parameters
 * @param {String} params.url - The endpoint url
 * @param {String|Number} params.id - The comment id
 * @param {String} params.user_id - The userID to get comments for
 * @returns {Promise} Response or Error Object
 */
export function deleteCommentAssignment({
    url,
    id,
}) {
    return new Promise((resolve) => {
        axios
            .delete(`${url}/railcontent/assigned-comment/${id}`)
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
    getContentByIds,
    getContentChildById,
    searchContent,
    storeContent,
    patchContent,
    deleteContent,
    softDeleteContent,
    storeContentField,
    updateContentField,
    deleteContentField,
    getContentField,
    storeContentDatum,
    updateContentDatum,
    deleteContentDatum,
    storeContentHierarchy,
    deleteContentFromHierarchy,
    startAuthenticatedUserProgress,
    resetAuthenticatedUserProgress,
    completeAuthenticatedUserProgress,
    storePermission,
    changePermission,
    deletePermission,
    assignPermission,
    dissociatePermission,
    giveUserAccess,
    changeUserAccess,
    deleteUserAccess,
    pullUserPermissions,
    changeComment,
    deleteComment,
    replyComment,
    pullComments,
    getLinkedComments,
    likeComment,
    unlikeComment,
    getCommentLikes,
    pullAssignedComments,
    deleteCommentAssignment,
};

export default Railcontent;
