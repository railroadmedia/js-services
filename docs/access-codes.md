<a name="module_Access_codes"></a>

## Access\_codes

* [Access_codes](#module_Access_codes)
    * [.redeemAccessCodes(params)](#module_Access_codes.redeemAccessCodes) ⇒ <code>Promise</code>
    * [.getAccessCodes(params)](#module_Access_codes.getAccessCodes) ⇒ <code>Promise</code>
    * [.getAccessCodesSearch(params)](#module_Access_codes.getAccessCodesSearch) ⇒ <code>Promise</code>

<a name="module_Access_codes.redeemAccessCodes"></a>

### Access_codes.redeemAccessCodes(params) ⇒ <code>Promise</code>
Used to claim an action code for an existing or new user

**Kind**: static method of [<code>Access\_codes</code>](#module_Access_codes)  
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

<a name="module_Access_codes.getAccessCodes"></a>

### Access_codes.getAccessCodes(params) ⇒ <code>Promise</code>
List access codes

**Kind**: static method of [<code>Access\_codes</code>](#module_Access_codes)  
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

<a name="module_Access_codes.getAccessCodesSearch"></a>

### Access_codes.getAccessCodesSearch(params) ⇒ <code>Promise</code>
Search for access codes based on any part of the code

**Kind**: static method of [<code>Access\_codes</code>](#module_Access_codes)  
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

