<a name="module_Order"></a>

## Order

* [Order](#module_Order)
    * [.getOrders(params)](#module_Order.getOrders) ⇒ <code>Promise</code>
    * [.getOrderID(params)](#module_Order.getOrderID) ⇒ <code>Promise</code>
    * [.patchOrderID(params)](#module_Order.patchOrderID) ⇒ <code>Promise</code>
    * [.deleteOrderID(params)](#module_Order.deleteOrderID) ⇒ <code>Promise</code>

<a name="module_Order.getOrders"></a>

### Order.getOrders(params) ⇒ <code>Promise</code>
List orders

**Kind**: static method of [<code>Order</code>](#module_Order)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.start_date | <code>Datetime</code> | only pull orders after this time |
| params.end_date | <code>Datetime</code> | only pull orders before this time |
| params.user_id | <code>String</code> \| <code>Number</code> | User's ID |
| params.view_deleted | <code>String</code> | requires 'show_deleted' permission to include soft-deleted orders |
| params.order_by_column | <code>String</code> | sorting method |
| params.order_by_direction | <code>String</code> | sorting method |
| params.page | <code>String</code> \| <code>Number</code> | number page taking data from |
| params.limit | <code>String</code> \| <code>Number</code> | number orders to pull per page |
| params.brands | <code>Array</code> | list of brands |

<a name="module_Order.getOrderID"></a>

### Order.getOrderID(params) ⇒ <code>Promise</code>
Get an order

**Kind**: static method of [<code>Order</code>](#module_Order)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.order_id | <code>String</code> \| <code>Number</code> | orderID |

<a name="module_Order.patchOrderID"></a>

### Order.patchOrderID(params) ⇒ <code>Promise</code>
Update an existing order

**Kind**: static method of [<code>Order</code>](#module_Order)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.order_id | <code>String</code> \| <code>Number</code> | orderID |
| params.note | <code>String</code> | - |
| params.total_due | <code>String</code> | total |
| params.taxes_due | <code>String</code> | tax |
| params.shipping_due | <code>String</code> | shipping |
| params.total_paid | <code>String</code> | paid |

<a name="module_Order.deleteOrderID"></a>

### Order.deleteOrderID(params) ⇒ <code>Promise</code>
Get an order

**Kind**: static method of [<code>Order</code>](#module_Order)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.order_id | <code>String</code> \| <code>Number</code> | orderID |

