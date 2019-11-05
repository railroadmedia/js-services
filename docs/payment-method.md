<a name="module_PaymentMethods"></a>

## PaymentMethods

* [PaymentMethods](#module_PaymentMethods)
    * [.getPaymentMethod(params)](#module_PaymentMethods.getPaymentMethod) ⇒ <code>Promise</code>
    * [.putPaymentMethod(params)](#module_PaymentMethods.putPaymentMethod) ⇒ <code>Promise</code>
    * [.patchPaymentMethod(params)](#module_PaymentMethods.patchPaymentMethod) ⇒ <code>Promise</code>
    * [.deletePaymentMethod(params)](#module_PaymentMethods.deletePaymentMethod) ⇒ <code>Promise</code>

<a name="module_PaymentMethods.getPaymentMethod"></a>

### PaymentMethods.getPaymentMethod(params) ⇒ <code>Promise</code>
List users payment methods

**Kind**: static method of [<code>PaymentMethods</code>](#module_PaymentMethods)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.user_id | <code>String</code> | user's ID |
| params.view_deleted | <code>String</code> | requires 'show_deleted' permission |

<a name="module_PaymentMethods.putPaymentMethod"></a>

### PaymentMethods.putPaymentMethod(params) ⇒ <code>Promise</code>
Create a new payment method

**Kind**: static method of [<code>PaymentMethods</code>](#module_PaymentMethods)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.user_id | <code>String</code> | user's ID |
| params.method_type | <code>String</code> | method |
| params.card_token | <code>String</code> | card token |
| params.gateway | <code>String</code> | gateway |
| params.address_id | <code>String</code> | address |
| params.customer_id | <code>String</code> | customer |
| params.currency | <code>String</code> | currency |

<a name="module_PaymentMethods.patchPaymentMethod"></a>

### PaymentMethods.patchPaymentMethod(params) ⇒ <code>Promise</code>
Update an existing payment method

**Kind**: static method of [<code>PaymentMethods</code>](#module_PaymentMethods)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.payment_method_id | <code>String</code> | payment ID |
| params.gateway | <code>String</code> | gateway |
| params.month | <code>String</code> | month |
| params.year | <code>String</code> | year |
| params.country | <code>String</code> | country |
| params.tegion | <code>String</code> | region |
| params.currency | <code>String</code> | currency |

<a name="module_PaymentMethods.deletePaymentMethod"></a>

### PaymentMethods.deletePaymentMethod(params) ⇒ <code>Promise</code>
Delete an existing payment method

**Kind**: static method of [<code>PaymentMethods</code>](#module_PaymentMethods)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.payment_method_id | <code>String</code> | - |

