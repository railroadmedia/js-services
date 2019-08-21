<a name="module_User_products"></a>

## User\_products

* [User_products](#module_User_products)
    * [.getUserProducts(params)](#module_User_products.getUserProducts) ⇒ <code>Promise</code>
    * [.putUserProduct(params)](#module_User_products.putUserProduct) ⇒ <code>Promise</code>
    * [.patchUserProduct(params)](#module_User_products.patchUserProduct) ⇒ <code>Promise</code>
    * [.deleteUserProduct(params)](#module_User_products.deleteUserProduct) ⇒ <code>Promise</code>

<a name="module_User_products.getUserProducts"></a>

### User_products.getUserProducts(params) ⇒ <code>Promise</code>
List user products

**Kind**: static method of [<code>User\_products</code>](#module_User_products)  
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

<a name="module_User_products.putUserProduct"></a>

### User_products.putUserProduct(params) ⇒ <code>Promise</code>
Create a new user products

**Kind**: static method of [<code>User\_products</code>](#module_User_products)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.quantity | <code>String</code> | product quantity |
| params.expiration_date | <code>Datetime</code> | expiration date |
| params.user_id | <code>String</code> | user ID |
| params.product_id | <code>String</code> | product ID |

<a name="module_User_products.patchUserProduct"></a>

### User_products.patchUserProduct(params) ⇒ <code>Promise</code>
Update a user products

**Kind**: static method of [<code>User\_products</code>](#module_User_products)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.quantity | <code>String</code> | product quantity |
| params.product_id | <code>String</code> | product ID |

<a name="module_User_products.deleteUserProduct"></a>

### User_products.deleteUserProduct(params) ⇒ <code>Promise</code>
Delete an existing user product

**Kind**: static method of [<code>User\_products</code>](#module_User_products)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.product_id | <code>String</code> | productID |

