<a name="module_DiscountCriteria"></a>

## DiscountCriteria

* [DiscountCriteria](#module_DiscountCriteria)
    * [.putDiscountCriteria(params)](#module_DiscountCriteria.putDiscountCriteria) ⇒ <code>Promise</code>
    * [.patchDiscountCriteria(params)](#module_DiscountCriteria.patchDiscountCriteria) ⇒ <code>Promise</code>
    * [.deleteDiscountCriteria(params)](#module_DiscountCriteria.deleteDiscountCriteria) ⇒ <code>Promise</code>

<a name="module_DiscountCriteria.putDiscountCriteria"></a>

### DiscountCriteria.putDiscountCriteria(params) ⇒ <code>Promise</code>
Create a new discount criteria for a discount

**Kind**: static method of [<code>DiscountCriteria</code>](#module_DiscountCriteria)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.discount_id | <code>String</code> | ID |
| params.name | <code>String</code> | name |
| params.type | <code>String</code> | 'product quantity requirement', 'date requirement', 'order total requirement', |
| params.product_id | <code>String</code> \| <code>Number</code> | - |
| params.min | <code>String</code> \| <code>Number</code> | to be set depending on the type |
| params.max | <code>String</code> \| <code>Number</code> | to be set depending on the type |
| params.created_at | <code>Datetime</code> | created at datetime |
| params.type | <code>String</code> | type |
| params.id | <code>String</code> \| <code>Number</code> | id |

<a name="module_DiscountCriteria.patchDiscountCriteria"></a>

### DiscountCriteria.patchDiscountCriteria(params) ⇒ <code>Promise</code>
Update an existing discount criteria

**Kind**: static method of [<code>DiscountCriteria</code>](#module_DiscountCriteria)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.discount_id | <code>String</code> | ID |
| params.min | <code>String</code> \| <code>Number</code> | to be set depending on the type |
| params.max | <code>String</code> \| <code>Number</code> | to be set depending on the type |
| params.id | <code>String</code> \| <code>Number</code> | id |

<a name="module_DiscountCriteria.deleteDiscountCriteria"></a>

### DiscountCriteria.deleteDiscountCriteria(params) ⇒ <code>Promise</code>
Delete an existing discount criteria

**Kind**: static method of [<code>DiscountCriteria</code>](#module_DiscountCriteria)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.discount_id | <code>String</code> | ID |

