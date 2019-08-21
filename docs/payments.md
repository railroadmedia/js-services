<a name="module_Payments"></a>

## Payments

* [Payments](#module_Payments)
    * [.getPayment(params)](#module_Payments.getPayment) ⇒ <code>Promise</code>
    * [.putPayment(params)](#module_Payments.putPayment) ⇒ <code>Promise</code>
    * [.deletePayment(params)](#module_Payments.deletePayment) ⇒ <code>Promise</code>

<a name="module_Payments.getPayment"></a>

### Payments.getPayment(params) ⇒ <code>Promise</code>
List users payments

**Kind**: static method of [<code>Payments</code>](#module_Payments)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.order_id | <code>String</code> | order ID |
| params.subscription_id | <code>String</code> | order by subscription |
| params.order_by_column | <code>String</code> | order by column |
| params.order_by_direction | <code>String</code> | order by direction |
| params.page | <code>String</code> \| <code>Number</code> | page to pull from |
| params.limit | <code>String</code> \| <code>Number</code> | number to pull |
| params.view_deleted | <code>String</code> | view deleted |

<a name="module_Payments.putPayment"></a>

### Payments.putPayment(params) ⇒ <code>Promise</code>
Create a new payment. This DOES actually attempt to charge the user.

**Kind**: static method of [<code>Payments</code>](#module_Payments)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.due | <code>Datetime</code> | due |
| params.currency | <code>Datetime</code> | cyrrency |
| params.payment_gateway | <code>Datetime</code> | gateway |
| params.product_tax | <code>Datetime</code> | product tax |
| params.shipping_tax | <code>Datetime</code> | shipping tax |
| params.note | <code>Datetime</code> | note |
| params.id | <code>Datetime</code> | id |

<a name="module_Payments.deletePayment"></a>

### Payments.deletePayment(params) ⇒ <code>Promise</code>
Delete an existing payment

**Kind**: static method of [<code>Payments</code>](#module_Payments)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.payment_id | <code>String</code> \| <code>Number</code> | payment ID |

