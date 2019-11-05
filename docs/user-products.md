<a name="module_UserProducts"></a>

## UserProducts

* [UserProducts](#module_UserProducts)
    * [.getUserProducts(params)](#module_UserProducts.getUserProducts) ⇒ <code>Promise</code>
    * [.putUserProduct(params)](#module_UserProducts.putUserProduct) ⇒ <code>Promise</code>
    * [.patchUserProduct(params)](#module_UserProducts.patchUserProduct) ⇒ <code>Promise</code>
    * [.deleteUserProduct(params)](#module_UserProducts.deleteUserProduct) ⇒ <code>Promise</code>

<a name="module_UserProducts.getUserProducts"></a>

### UserProducts.getUserProducts(params) ⇒ <code>Promise</code>
List user products

**Kind**: static method of [<code>UserProducts</code>](#module_UserProducts)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.user_id | <code>String</code> | user ID |
| params.view_deleted | <code>String</code> | view deleted |
| params.order_by_column | <code>String</code> | sort by |
| params.order_by_direction | <code>String</code> | sort by |
| params.page | <code>String</code> | page number |
| params.limit | <code>String</code> | number to pull per page |

<a name="module_UserProducts.putUserProduct"></a>

### UserProducts.putUserProduct(params) ⇒ <code>Promise</code>
Create a new user products

**Kind**: static method of [<code>UserProducts</code>](#module_UserProducts)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.quantity | <code>String</code> | product quantity |
| params.expiration_date | <code>Datetime</code> | expiration date |
| params.user_id | <code>String</code> | user ID |
| params.product_id | <code>String</code> | product ID |

<a name="module_UserProducts.patchUserProduct"></a>

### UserProducts.patchUserProduct(params) ⇒ <code>Promise</code>
Update a user products

**Kind**: static method of [<code>UserProducts</code>](#module_UserProducts)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.quantity | <code>String</code> | product quantity |
| params.product_id | <code>String</code> | product ID |

<a name="module_UserProducts.deleteUserProduct"></a>

### UserProducts.deleteUserProduct(params) ⇒ <code>Promise</code>
Delete an existing user product

**Kind**: static method of [<code>UserProducts</code>](#module_UserProducts)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.product_id | <code>String</code> | productID |

