<a name="module_Railcontent"></a>

## Railcontent

* [Railcontent](#module_Railcontent)
    * [.getContentById(params)](#module_Railcontent.getContentById) ⇒ <code>Promise</code>
    * [.getContentByIds(params)](#module_Railcontent.getContentByIds) ⇒ <code>Promise</code>
    * [.getContentChildById(params)](#module_Railcontent.getContentChildById) ⇒ <code>Promise</code>
    * [.getContent(params)](#module_Railcontent.getContent) ⇒ <code>Promise</code>
    * [.searchContent(params)](#module_Railcontent.searchContent) ⇒ <code>Promise</code>
    * [.storeContent(params)](#module_Railcontent.storeContent) ⇒ <code>Promise</code>
    * [.patchContent(params)](#module_Railcontent.patchContent) ⇒ <code>Promise</code>
    * [.deleteContent(params)](#module_Railcontent.deleteContent) ⇒ <code>Promise</code>
    * [.softDeleteContent(params)](#module_Railcontent.softDeleteContent) ⇒ <code>Promise</code>
    * [.storeContentField(params)](#module_Railcontent.storeContentField) ⇒ <code>Promise</code>
    * [.updateContentField(params)](#module_Railcontent.updateContentField) ⇒ <code>Promise</code>
    * [.deleteContentField(params)](#module_Railcontent.deleteContentField) ⇒ <code>Promise</code>
    * [.getContentField(params)](#module_Railcontent.getContentField) ⇒ <code>Promise</code>
    * [.storeContentDatum(params)](#module_Railcontent.storeContentDatum) ⇒ <code>Promise</code>
    * [.updateContentDatum(params)](#module_Railcontent.updateContentDatum) ⇒ <code>Promise</code>
    * [.deleteContentDatum(params)](#module_Railcontent.deleteContentDatum) ⇒ <code>Promise</code>
    * [.storeContentHierarchy(params)](#module_Railcontent.storeContentHierarchy) ⇒ <code>Promise</code>
    * [.deleteContentFromHierarchy(params)](#module_Railcontent.deleteContentFromHierarchy) ⇒ <code>Promise</code>
    * [.startAuthenticatedUserProgress(params)](#module_Railcontent.startAuthenticatedUserProgress) ⇒ <code>Promise</code>
    * [.saveAuthenticatedUserProgress(params)](#module_Railcontent.saveAuthenticatedUserProgress) ⇒ <code>Promise</code>
    * [.resetAuthenticatedUserProgress(params)](#module_Railcontent.resetAuthenticatedUserProgress) ⇒ <code>Promise</code>
    * [.completeAuthenticatedUserProgress(params)](#module_Railcontent.completeAuthenticatedUserProgress) ⇒ <code>Promise</code>
    * [.storePermission(params)](#module_Railcontent.storePermission) ⇒ <code>Promise</code>
    * [.changePermission(params)](#module_Railcontent.changePermission) ⇒ <code>Promise</code>
    * [.deletePermission(params)](#module_Railcontent.deletePermission) ⇒ <code>Promise</code>
    * [.assignPermission(params)](#module_Railcontent.assignPermission) ⇒ <code>Promise</code>
    * [.dissociatePermission(params)](#module_Railcontent.dissociatePermission) ⇒ <code>Promise</code>
    * [.giveUserAccess(params)](#module_Railcontent.giveUserAccess) ⇒ <code>Promise</code>
    * [.changeUserAccess(params)](#module_Railcontent.changeUserAccess) ⇒ <code>Promise</code>
    * [.deleteUserAccess(params)](#module_Railcontent.deleteUserAccess) ⇒ <code>Promise</code>
    * [.pullUserPermissions(params)](#module_Railcontent.pullUserPermissions) ⇒ <code>Promise</code>
    * [.changeComment(params)](#module_Railcontent.changeComment) ⇒ <code>Promise</code>
    * [.deleteComment(params)](#module_Railcontent.deleteComment) ⇒ <code>Promise</code>
    * [.replyComment(params)](#module_Railcontent.replyComment) ⇒ <code>Promise</code>
    * [.pullComments(params)](#module_Railcontent.pullComments) ⇒ <code>Promise</code>
    * [.getLinkedComments(params)](#module_Railcontent.getLinkedComments) ⇒ <code>Promise</code>
    * [.likeComment(params)](#module_Railcontent.likeComment) ⇒ <code>Promise</code>
    * [.unlikeComment(params)](#module_Railcontent.unlikeComment) ⇒ <code>Promise</code>
    * [.getCommentLikes(params)](#module_Railcontent.getCommentLikes) ⇒ <code>Promise</code>
    * [.pullAssignedComments(params)](#module_Railcontent.pullAssignedComments) ⇒ <code>Promise</code>
    * [.deleteCommentAssignment(params)](#module_Railcontent.deleteCommentAssignment) ⇒ <code>Promise</code>

<a name="module_Railcontent.getContentById"></a>

### Railcontent.getContentById(params) ⇒ <code>Promise</code>
Get content data based on content id

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | Content ID |

<a name="module_Railcontent.getContentByIds"></a>

### Railcontent.getContentByIds(params) ⇒ <code>Promise</code>
Get an array with contents data based on content ids

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.ids | <code>Array</code> | Array of content Ids |

<a name="module_Railcontent.getContentChildById"></a>

### Railcontent.getContentChildById(params) ⇒ <code>Promise</code>
Get contents that are child of contentId

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.parentID | <code>String</code> \| <code>Number</code> | parentID |

<a name="module_Railcontent.getContent"></a>

### Railcontent.getContent(params) ⇒ <code>Promise</code>
Get an array with contents that respect filter criteria

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.brand | <code>String</code> | Application brand |
| params.limit | <code>Number</code> \| <code>String</code> | Maximum amount of results per page |
| params.page | <code>Number</code> \| <code>String</code> | The page of content to return results for |
| params.sort | <code>String</code> | The database column to sort results by |
| params.statuses | <code>Array</code> | Content statuses to filter the results by |
| params.term | <code>String</code> | A search term to filter the results by |
| params.included_types | <code>Array</code> | Content types to filter the results by |
| params.included_fields | <code>Array</code> | Included field types to filter the results by |

<a name="module_Railcontent.searchContent"></a>

### Railcontent.searchContent(params) ⇒ <code>Promise</code>
Full text search content

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.limit | <code>String</code> \| <code>Number</code> | number of contents returned |
| params.page | <code>String</code> \| <code>Number</code> | page of result set to return |
| params.term | <code>String</code> | search term |

<a name="module_Railcontent.storeContent"></a>

### Railcontent.storeContent(params) ⇒ <code>Promise</code>
Create a new content based on request data

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.slug | <code>String</code> | slug of content |
| params.type | <code>String</code> | type of content |
| params.status | <code>String</code> | status |

<a name="module_Railcontent.patchContent"></a>

### Railcontent.patchContent(params) ⇒ <code>Promise</code>
Update a content with request data

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.slug | <code>String</code> | slug of content |
| params.status | <code>String</code> | status |

<a name="module_Railcontent.deleteContent"></a>

### Railcontent.deleteContent(params) ⇒ <code>Promise</code>
Delete content

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | The id of content |

<a name="module_Railcontent.softDeleteContent"></a>

### Railcontent.softDeleteContent(params) ⇒ <code>Promise</code>
Mark content as deleted without actually deleting

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | The id of content |

<a name="module_Railcontent.storeContentField"></a>

### Railcontent.storeContentField(params) ⇒ <code>Promise</code>
Create a new content field based on request data

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | integer id of content |
| params.content_id | <code>String</code> \| <code>Number</code> | The content id this field belongs to |
| params.key | <code>String</code> \| <code>Number</code> | The key of this field; also know as the name |
| params.value | <code>String</code> | The value of the field |
| params.type | <code>String</code> | The type of field this is. Options are 'string' 'integer' 'content_id' |

<a name="module_Railcontent.updateContentField"></a>

### Railcontent.updateContentField(params) ⇒ <code>Promise</code>
Update a content with the request data and return the updated content in JSON format

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.fieldId | <code>String</code> \| <code>Number</code> | integer id of content |
| params.value | <code>String</code> | The value of the field |

<a name="module_Railcontent.deleteContentField"></a>

### Railcontent.deleteContentField(params) ⇒ <code>Promise</code>
Delete content field if exists in the database

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.fieldId | <code>String</code> \| <code>Number</code> | integer id of content |

<a name="module_Railcontent.getContentField"></a>

### Railcontent.getContentField(params) ⇒ <code>Promise</code>
Get content field data based on content field id

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.fieldId | <code>String</code> \| <code>Number</code> | integer id of content |

<a name="module_Railcontent.storeContentDatum"></a>

### Railcontent.storeContentDatum(params) ⇒ <code>Promise</code>
Create a new content record based on request data

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.value | <code>String</code> | The value of the datum |
| params.key | <code>String</code> | The key of this datum; also know as the name |
| params.content_id | <code>String</code> \| <code>Number</code> | The content id this datum belongs to |

<a name="module_Railcontent.updateContentDatum"></a>

### Railcontent.updateContentDatum(params) ⇒ <code>Promise</code>
Update the content datum with the request data

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | id of the datum you want to edit. |
| params.value | <code>String</code> | The value of the datum |

<a name="module_Railcontent.deleteContentDatum"></a>

### Railcontent.deleteContentDatum(params) ⇒ <code>Promise</code>
Update the content datum with the request data

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | id of the datum you want to edit. |

<a name="module_Railcontent.storeContentHierarchy"></a>

### Railcontent.storeContentHierarchy(params) ⇒ <code>Promise</code>
Update the content datum with the request data

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.parent_id | <code>String</code> \| <code>Number</code> | The content id of the parent |
| params.child_id | <code>String</code> \| <code>Number</code> | The content id of the child |
| params.child_position | <code>String</code> | The position relative to the other children |

<a name="module_Railcontent.deleteContentFromHierarchy"></a>

### Railcontent.deleteContentFromHierarchy(params) ⇒ <code>Promise</code>
Delete the link between parent content and child content and reposition other childrens

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.parent_id | <code>String</code> \| <code>Number</code> | The content id of the parent |
| params.child_id | <code>String</code> \| <code>Number</code> | The content id of the child |

<a name="module_Railcontent.startAuthenticatedUserProgress"></a>

### Railcontent.startAuthenticatedUserProgress(params) ⇒ <code>Promise</code>
Start authenticated user progress on content

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.content_id | <code>String</code> \| <code>Number</code> | The content id you want to start |

<a name="module_Railcontent.saveAuthenticatedUserProgress"></a>

### Railcontent.saveAuthenticatedUserProgress(params) ⇒ <code>Promise</code>
Save the progress on a content for the authenticated user

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.content_id | <code>String</code> \| <code>Number</code> | The content id you want to start |
| params.progress_percent | <code>String</code> \| <code>Number</code> | The progress percent |

<a name="module_Railcontent.resetAuthenticatedUserProgress"></a>

### Railcontent.resetAuthenticatedUserProgress(params) ⇒ <code>Promise</code>
Delete the content progress for the authenticated user

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.content_id | <code>String</code> \| <code>Number</code> | The content id you want to start |

<a name="module_Railcontent.completeAuthenticatedUserProgress"></a>

### Railcontent.completeAuthenticatedUserProgress(params) ⇒ <code>Promise</code>
Set content as complete for the authenticated user

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.content_id | <code>String</code> \| <code>Number</code> | The content id you want to start |

<a name="module_Railcontent.storePermission"></a>

### Railcontent.storePermission(params) ⇒ <code>Promise</code>
Store a new permission in the CMS

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.name | <code>String</code> | The name of this permission |

<a name="module_Railcontent.changePermission"></a>

### Railcontent.changePermission(params) ⇒ <code>Promise</code>
Change permission name or the brand where the permission it's available

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | Id of the permission you want to change |
| params.name | <code>String</code> | The name of this permission |

<a name="module_Railcontent.deletePermission"></a>

### Railcontent.deletePermission(params) ⇒ <code>Promise</code>
Delete the permission and all the links with contents

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | Id of the permission you want to delete |

<a name="module_Railcontent.assignPermission"></a>

### Railcontent.assignPermission(params) ⇒ <code>Promise</code>
Delete the permission and all the links with contents

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.content_type | <code>String</code> | The type of contents you want to assign the permission to |
| params.permission_id | <code>String</code> \| <code>Number</code> | The permission id you want to assign to the content |

<a name="module_Railcontent.dissociatePermission"></a>

### Railcontent.dissociatePermission(params) ⇒ <code>Promise</code>
Dissociate permissions from a specific content or all content of a certain type

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.content_type | <code>String</code> | The type of contents you want to assign the permission to |
| params.permission_id | <code>String</code> \| <code>Number</code> | The permission id you want to assign to the content |

<a name="module_Railcontent.giveUserAccess"></a>

### Railcontent.giveUserAccess(params) ⇒ <code>Promise</code>
Give users access to specific content for a specific amount of time

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.user_id | <code>String</code> \| <code>Number</code> | The user's id |
| params.permission_id | <code>String</code> \| <code>Number</code> | The permission id you want to assign to the content |
| params.start_date | <code>Datetime</code> | The date when the user has access |
| params.expiration_date | <code>Datetime</code> | If null user has access forever; else until the expiration date |

<a name="module_Railcontent.changeUserAccess"></a>

### Railcontent.changeUserAccess(params) ⇒ <code>Promise</code>
Give users access to specific content for a specific amount of time

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.userPermissionId | <code>String</code> \| <code>Number</code> | The permission id |
| params.expiration_date | <code>Datetime</code> | If null user has access forever; else until the expiration date |

<a name="module_Railcontent.deleteUserAccess"></a>

### Railcontent.deleteUserAccess(params) ⇒ <code>Promise</code>
Delete user access to content

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint's url |
| params.userPermissionId | <code>String</code> \| <code>Number</code> | The permission id |

<a name="module_Railcontent.pullUserPermissions"></a>

### Railcontent.pullUserPermissions(params) ⇒ <code>Promise</code>
Give users access to specific content for a specific amount of time

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.user_id | <code>String</code> \| <code>Number</code> | If it's set only the permissions for the specified user are returned |
| params.only_active | <code>String</code> | If it's false the expired permissions are returned also |

<a name="module_Railcontent.changeComment"></a>

### Railcontent.changeComment(params) ⇒ <code>Promise</code>
Change comment. Administrator can edit any comment; other users can edit only their comments

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | Id of the comment you want to edit |
| params.comment | <code>String</code> | The description of the comment |

<a name="module_Railcontent.deleteComment"></a>

### Railcontent.deleteComment(params) ⇒ <code>Promise</code>
Delete content comment or mark comment as deleted

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | Id of the comment you want to edit |

<a name="module_Railcontent.replyComment"></a>

### Railcontent.replyComment(params) ⇒ <code>Promise</code>
Add a reply to a comment if the request data pass the validation

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.parent_id | <code>String</code> \| <code>Number</code> | The comment id you want to assign the reply to |
| params.comment | <code>String</code> | The comment description |

<a name="module_Railcontent.pullComments"></a>

### Railcontent.pullComments(params) ⇒ <code>Promise</code>
Pull the comments based on the criteria passed in request

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.parent_id | <code>String</code> | The comment id you want to assign the reply to |
| params.comment | <code>String</code> | The comment description |
| params.page | <code>String</code> \| <code>Number</code> | Pagination page |
| params.limit | <code>String</code> \| <code>Number</code> | Amount of comments to pull per page |
| params.content_id | <code>String</code> \| <code>Number</code> | Only comments for this content id will be returned |
| params.user_id | <code>String</code> | The user's id |

<a name="module_Railcontent.getLinkedComments"></a>

### Railcontent.getLinkedComments(params) ⇒ <code>Promise</code>
Get the linked comments

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.limit | <code>String</code> \| <code>Number</code> | Amount of comments to pull per page |
| params.id | <code>String</code> \| <code>Number</code> | The comment id |

<a name="module_Railcontent.likeComment"></a>

### Railcontent.likeComment(params) ⇒ <code>Promise</code>
Authenticated user likes a comment

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | The comment id |

<a name="module_Railcontent.unlikeComment"></a>

### Railcontent.unlikeComment(params) ⇒ <code>Promise</code>
Authenticated user unlikes a comment

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | The comment id |

<a name="module_Railcontent.getCommentLikes"></a>

### Railcontent.getCommentLikes(params) ⇒ <code>Promise</code>
Get likes for the given comment id - paginated

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | The comment id |
| params.page | <code>String</code> \| <code>Number</code> | Page number |
| params.limit | <code>String</code> \| <code>Number</code> | Number of comments to pull per page |

<a name="module_Railcontent.pullAssignedComments"></a>

### Railcontent.pullAssignedComments(params) ⇒ <code>Promise</code>
The managers have the ability to get comment assignments for

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | The comment id |
| params.user_id | <code>String</code> | The userID to get comments for |

<a name="module_Railcontent.deleteCommentAssignment"></a>

### Railcontent.deleteCommentAssignment(params) ⇒ <code>Promise</code>
Delete comment assignations

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | The comment id |
| params.user_id | <code>String</code> | The userID to get comments for |

