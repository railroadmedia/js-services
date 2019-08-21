<a name="module_Discount_criteria"></a>

## Discount\_criteria

* [Discount_criteria](#module_Discount_criteria)
    * [.putDiscountCriteria(params)](#module_Discount_criteria.putDiscountCriteria) ⇒ <code>Promise</code>
    * [.patchDiscountCriteria(params)](#module_Discount_criteria.patchDiscountCriteria) ⇒ <code>Promise</code>
    * [.deleteDiscountCriteria(params)](#module_Discount_criteria.deleteDiscountCriteria) ⇒ <code>Promise</code>

<a name="module_Discount_criteria.putDiscountCriteria"></a>

### Discount_criteria.putDiscountCriteria(params) ⇒ <code>Promise</code>
Create a new discount criteria for a discount

**Kind**: static method of [<code>Discount\_criteria</code>](#module_Discount_criteria)  
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

<a name="module_Discount_criteria.patchDiscountCriteria"></a>

### Discount_criteria.patchDiscountCriteria(params) ⇒ <code>Promise</code>
Update an existing discount criteria

**Kind**: static method of [<code>Discount\_criteria</code>](#module_Discount_criteria)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.discount_id | <code>String</code> | ID |
| params.min | <code>String</code> \| <code>Number</code> | to be set depending on the type |
| params.max | <code>String</code> \| <code>Number</code> | to be set depending on the type |
| params.id | <code>String</code> \| <code>Number</code> | id |

<a name="module_Discount_criteria.deleteDiscountCriteria"></a>

### Discount_criteria.deleteDiscountCriteria(params) ⇒ <code>Promise</code>
Delete an existing discount criteria

**Kind**: static method of [<code>Discount\_criteria</code>](#module_Discount_criteria)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.discount_id | <code>String</code> | ID |

