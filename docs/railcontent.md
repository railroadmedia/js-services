<a name="module_Railcontent"></a>

## Railcontent
<a name="module_Railcontent.getContent"></a>

### Railcontent.getContent(params) ⇒ <code>Promise</code>
Get a list of content

**Kind**: static method of [<code>Railcontent</code>](#module_Railcontent)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> |  |
| params.brand | <code>String</code> |  |
| params.page | <code>Number</code> \| <code>String</code> |  |
| params.limit | <code>Number</code> \| <code>String</code> |  |
| params.sort | <code>String</code> |  |
| params.statuses | <code>Array</code> | Accepted values ('published', 'scheduled', 'draft', 'archived') |
| params.term | <code>String</code> |  |
| params.included_types | <code>Array</code> |  |
| params.included_fields | <code>Array</code> |  |

