<a name="module_Railcontent"></a>

## Railcontent

* [Railcontent](#module_Railcontent)
    * [.getContent(params)](#module_Railcontent.getContent) ⇒ <code>Promise</code>
    * [.getContentById(params)](#module_Railcontent.getContentById) ⇒ <code>Promise</code>

<a name="module_Railcontent.getContent"></a>

### Railcontent.getContent(params) ⇒ <code>Promise</code>
Get a list of content

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

<a name="module_Railcontent.getContentById"></a>

### Railcontent.getContentById(params) ⇒ <code>Promise</code>
Get a list of content

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.id | <code>String</code> \| <code>Number</code> | Content ID |

