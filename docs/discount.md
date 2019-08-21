<a name="module_Discount"></a>

## Discount

* [Discount](#module_Discount)
    * [.getDiscounts(params)](#module_Discount.getDiscounts) ⇒ <code>Promise</code>
    * [.discountIds(params)](#module_Discount.discountIds) ⇒ <code>Promise</code>
    * [.putDiscounts(params)](#module_Discount.putDiscounts) ⇒ <code>Promise</code>
    * [.patchDiscount(params)](#module_Discount.patchDiscount) ⇒ <code>Promise</code>
    * [.deleteDiscount(params)](#module_Discount.deleteDiscount) ⇒ <code>Promise</code>

<a name="module_Discount.getDiscounts"></a>

### Discount.getDiscounts(params) ⇒ <code>Promise</code>
Get a discount

**Kind**: static method of [<code>Discount</code>](#module_Discount)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.order_by_column | <code>String</code> | order by method |
| params.order_by_direction | <code>String</code> | order by method |
| params.page | <code>String</code> \| <code>Number</code> | page from products pulled from |
| params.limit | <code>String</code> \| <code>Number</code> | number of products to show |

<a name="module_Discount.discountIds"></a>

### Discount.discountIds(params) ⇒ <code>Promise</code>
List products

**Kind**: static method of [<code>Discount</code>](#module_Discount)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.discount_id | <code>String</code> | Id of discount |

<a name="module_Discount.putDiscounts"></a>

### Discount.putDiscounts(params) ⇒ <code>Promise</code>
Create a new discount

**Kind**: static method of [<code>Discount</code>](#module_Discount)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.name | <code>String</code> | Name |
| params.description | <code>String</code> | Description |
| params.type | <code>String</code> | must be 'discount' |
| params.amount | <code>String</code> \| <code>Number</code> | Amount |
| params.product_id | <code>String</code> \| <code>Number</code> | product's ID |
| params.active | <code>String</code> | active |
| params.visible | <code>String</code> | visible |
| params.note | <code>String</code> | Note |
| params.created_at | <code>Datetime</code> | Created at |
| params.type_ | <code>String</code> | Type |
| params.id | <code>String</code> \| <code>Number</code> | ID |

<a name="module_Discount.patchDiscount"></a>

### Discount.patchDiscount(params) ⇒ <code>Promise</code>
Update an existing discount

**Kind**: static method of [<code>Discount</code>](#module_Discount)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.name | <code>String</code> | Name |
| params.amount | <code>String</code> \| <code>Number</code> | amount of discount |
| params.expiration_date | <code>Datetime</code> | expiration date |
| params.type | <code>String</code> | type of discount |
| params.discount_id | <code>String</code> | ID for discount |

<a name="module_Discount.deleteDiscount"></a>

### Discount.deleteDiscount(params) ⇒ <code>Promise</code>
Delete an existing discount

**Kind**: static method of [<code>Discount</code>](#module_Discount)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.discount_id | <code>String</code> | Discount id |

