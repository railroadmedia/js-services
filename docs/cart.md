<a name="module_Cart"></a>

## Cart

* [Cart](#module_Cart)
    * [.cart(params)](#module_Cart.cart) ⇒ <code>Promise</code>
    * [.clearCart(params)](#module_Cart.clearCart) ⇒ <code>Promise</code>
    * [.addToCart(params)](#module_Cart.addToCart) ⇒ <code>Promise</code>
    * [.removeFromCart(params)](#module_Cart.removeFromCart) ⇒ <code>Promise</code>
    * [.updateProductQuantity(params)](#module_Cart.updateProductQuantity) ⇒ <code>Promise</code>
    * [.updateTotalOverrides(params)](#module_Cart.updateTotalOverrides) ⇒ <code>Promise</code>
    * [.sessionAddress(params)](#module_Cart.sessionAddress) ⇒ <code>Promise</code>

<a name="module_Cart.cart"></a>

### Cart.cart(params) ⇒ <code>Promise</code>
Returns the current content of the cart

**Kind**: static method of [<code>Cart</code>](#module_Cart)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params. | <code>String</code> | - |

<a name="module_Cart.clearCart"></a>

### Cart.clearCart(params) ⇒ <code>Promise</code>
Clears the cart of all items and data cache

**Kind**: static method of [<code>Cart</code>](#module_Cart)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params. | <code>String</code> | - |

<a name="module_Cart.addToCart"></a>

### Cart.addToCart(params) ⇒ <code>Promise</code>
Add a new item to the cart via a static href link (get request)

**Kind**: static method of [<code>Cart</code>](#module_Cart)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.products | <code>Array</code> | Array of skus |
| params.locked | <code>String</code> | if true quantities are locked |
| params.promocode | <code>String</code> | promotional code |

<a name="module_Cart.removeFromCart"></a>

### Cart.removeFromCart(params) ⇒ <code>Promise</code>
Remove item from the cart.

**Kind**: static method of [<code>Cart</code>](#module_Cart)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.product_sku | <code>String</code> | Product's unique identifying SKU |

<a name="module_Cart.updateProductQuantity"></a>

### Cart.updateProductQuantity(params) ⇒ <code>Promise</code>
Update item quantity in the cart

**Kind**: static method of [<code>Cart</code>](#module_Cart)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.product_sku | <code>String</code> | Product's unique identifying SKU |
| params.new_quantity | <code>String</code> \| <code>Number</code> | new quantity of product |

<a name="module_Cart.updateTotalOverrides"></a>

### Cart.updateTotalOverrides(params) ⇒ <code>Promise</code>
Update total overrides in the cart

**Kind**: static method of [<code>Cart</code>](#module_Cart)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.product_taxes_due_override | <code>String</code> | 'place-orders-for-other-users' permission is required |
| params.shipping_taxes_due_override | <code>String</code> | 'place-orders-for-other-users' permission is required |
| params.shipping_due_override | <code>String</code> | 'place-orders-for-other-users' permission is required |
| params.order_items_due_overrides | <code>String</code> | place-orders-for-other-users' permission is required |

<a name="module_Cart.sessionAddress"></a>

### Cart.sessionAddress(params) ⇒ <code>Promise</code>
Updates the session addresses for the cart

**Kind**: static method of [<code>Cart</code>](#module_Cart)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.billing_address_id | <code>String</code> | home address |
| params.billing_email | <code>String</code> | email address |
| params.billing_country | <code>String</code> | user country |
| params.billing_region | <code>String</code> | region of world |
| params.billing_zip_or_postal_code | <code>String</code> | postal code / zip |
| params.shipping_address_id | <code>String</code> | address id |
| params.shipping_address_line_1 | <code>String</code> | address line 1 |
| params.shipping_city | <code>String</code> | city |
| params.shipping_country | <code>String</code> | country |
| params.shipping_first_name | <code>String</code> | name |
| params.shipping_last_name | <code>String</code> | last name |
| params.shipping_region | <code>String</code> | region |
| params.shipping_zip | <code>String</code> | postal or zip |

