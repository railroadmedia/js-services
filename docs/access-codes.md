<a name="module_AccessCodes"></a>

## AccessCodes

* [AccessCodes](#module_AccessCodes)
    * [.redeemAccessCodes(params)](#module_AccessCodes.redeemAccessCodes) ⇒ <code>Promise</code>
    * [.getAccessCodes(params)](#module_AccessCodes.getAccessCodes) ⇒ <code>Promise</code>
    * [.getAccessCodesSearch(params)](#module_AccessCodes.getAccessCodesSearch) ⇒ <code>Promise</code>

<a name="module_AccessCodes.redeemAccessCodes"></a>

### AccessCodes.redeemAccessCodes(params) ⇒ <code>Promise</code>
Used to claim an action code for an existing or new user

**Kind**: static method of [<code>AccessCodes</code>](#module_AccessCodes)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.access_code | <code>String</code> | The exact access code without dashes or spaces |
| params.email | <code>String</code> | Email for the new user to be created |
| params.password | <code>String</code> | Raw password for the new user to be created |
| params.password_confirmation | <code>String</code> | Confirm password |
| params.redirect | <code>String</code> | Where to redirect after the request is processed |

<a name="module_AccessCodes.getAccessCodes"></a>

### AccessCodes.getAccessCodes(params) ⇒ <code>Promise</code>
List access codes

**Kind**: static method of [<code>AccessCodes</code>](#module_AccessCodes)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.order_by_column | <code>String</code> | The column to order the code using |
| params.order_by_direction | <code>String</code> | Which direction to order |
| params.page | <code>String</code> \| <code>Number</code> | Which page to load, will be {limit} long |
| params.limit | <code>String</code> \| <code>number</code> | How many to load per page |
| params.brands | <code>Array</code> | Limit results to codes that belong to specific brands |

<a name="module_AccessCodes.getAccessCodesSearch"></a>

### AccessCodes.getAccessCodesSearch(params) ⇒ <code>Promise</code>
Search for access codes based on any part of the code

**Kind**: static method of [<code>AccessCodes</code>](#module_AccessCodes)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.order_by_column | <code>String</code> | The column to order the code using |
| params.order_by_direction | <code>String</code> | Which direction to order |
| params.page | <code>String</code> \| <code>Number</code> | Which page to load, will be {limit} long |
| params.limit | <code>String</code> \| <code>number</code> | How many to load per page |
| params.brands | <code>Array</code> | Limit results to codes that belong to specific brands |

