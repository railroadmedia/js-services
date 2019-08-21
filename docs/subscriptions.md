<a name="module_Subscriptions"></a>

## Subscriptions

* [Subscriptions](#module_Subscriptions)
    * [.getSubscriptions(params)](#module_Subscriptions.getSubscriptions) ⇒ <code>Promise</code>
    * [.putSubscriptions(params)](#module_Subscriptions.putSubscriptions) ⇒ <code>Promise</code>
    * [.postSubscriptions(params)](#module_Subscriptions.postSubscriptions) ⇒ <code>Promise</code>
    * [.deleteSubscriptions(params)](#module_Subscriptions.deleteSubscriptions) ⇒ <code>Promise</code>
    * [.getFailedSubscriptions(params)](#module_Subscriptions.getFailedSubscriptions) ⇒ <code>Promise</code>

<a name="module_Subscriptions.getSubscriptions"></a>

### Subscriptions.getSubscriptions(params) ⇒ <code>Promise</code>
List subscriptions

**Kind**: static method of [<code>Subscriptions</code>](#module_Subscriptions)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.user_id | <code>String</code> | User's ID |
| params.view_deleted | <code>String</code> | view delete |
| params.order_by_column | <code>String</code> | sorting method |
| params.order_by_direction | <code>String</code> | sorting method |
| params.page | <code>String</code> \| <code>Number</code> | page number |
| params.limit | <code>String</code> \| <code>Number</code> | number to show per page |
| params.brands | <code>Array</code> | - |

<a name="module_Subscriptions.putSubscriptions"></a>

### Subscriptions.putSubscriptions(params) ⇒ <code>Promise</code>
Create a new subscription

**Kind**: static method of [<code>Subscriptions</code>](#module_Subscriptions)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.brand | <code>String</code> | brand |
| params.type | <code>String</code> | type |
| params.user_id | <code>String</code> | user id |
| params.customer_id | <code>String</code> | customer id |
| params.order_id | <code>String</code> | order id |
| params.product_id | <code>String</code> | product id |
| params.is_active | <code>String</code> | is active |
| params.start_date | <code>String</code> \| <code>Number</code> | start datetime |
| params.paid_until | <code>String</code> | paid until |
| params.canceled_on | <code>String</code> \| <code>Number</code> | subscription cancel date |
| params.note | <code>String</code> | note |
| params.total_price | <code>String</code> \| <code>Number</code> | total price |
| params.tax | <code>String</code> \| <code>Number</code> | tax total |
| params.currency | <code>String</code> | currency type |
| params.interval_count | <code>String</code> \| <code>Number</code> | interval count |
| params.total_cycles_due | <code>String</code> \| <code>Number</code> | cycles due |
| params.total_cycles_paid | <code>String</code> \| <code>Number</code> | cycles paid |
| params.payment_method_id | <code>String</code> | payment method |
| params.created_at | <code>Datetime</code> | datetime creation |
| params.payment_id | <code>String</code> | ID of payment |

<a name="module_Subscriptions.postSubscriptions"></a>

### Subscriptions.postSubscriptions(params) ⇒ <code>Promise</code>
Renew a subscription. The users product access and renewals dates will be updated automatically

**Kind**: static method of [<code>Subscriptions</code>](#module_Subscriptions)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.Subscription_id | <code>String</code> | subscription ID |

<a name="module_Subscriptions.deleteSubscriptions"></a>

### Subscriptions.deleteSubscriptions(params) ⇒ <code>Promise</code>
Delete a subscription

**Kind**: static method of [<code>Subscriptions</code>](#module_Subscriptions)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.subscription_id | <code>String</code> | subscription ID |

<a name="module_Subscriptions.getFailedSubscriptions"></a>

### Subscriptions.getFailedSubscriptions(params) ⇒ <code>Promise</code>
Pulled the failed subscriptions

**Kind**: static method of [<code>Subscriptions</code>](#module_Subscriptions)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.type | <code>String</code> | type |
| params.page | <code>String</code> \| <code>Number</code> | page to pull from |
| params.limit | <code>String</code> \| <code>Number</code> | number to pull |
| params.order_by_column | <code>String</code> | order by column |
| params.order_by_direction | <code>String</code> | order by direction |
| params.brands | <code>Array</code> | brands |
| params.user_id | <code>String</code> | user ID |
| params.big_date_time | <code>Datetime</code> | later datetime |
| params.small_date_time | <code>Datetime</code> | early datetime |

