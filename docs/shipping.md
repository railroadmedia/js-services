<a name="module_Shipping"></a>

## Shipping

* [Shipping](#module_Shipping)
    * [.getFulfillment(params)](#module_Shipping.getFulfillment) ⇒ <code>Promise</code>
    * [.patchFulfillment(params)](#module_Shipping.patchFulfillment) ⇒ <code>Promise</code>
    * [.deleteFulfillment(params)](#module_Shipping.deleteFulfillment) ⇒ <code>Promise</code>
    * [.uploadFileFulfillment(params)](#module_Shipping.uploadFileFulfillment) ⇒ <code>Promise</code>

<a name="module_Shipping.getFulfillment"></a>

### Shipping.getFulfillment(params) ⇒ <code>Promise</code>
Get all orders and items that need to be fulfilled between the specified dates

**Kind**: static method of [<code>Shipping</code>](#module_Shipping)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.small_date_time | <code>Datetime</code> | early date time |
| params.big_date_time | <code>Datetime</code> | later date time |
| params.CSV | <code>String</code> | CSV |

<a name="module_Shipping.patchFulfillment"></a>

### Shipping.patchFulfillment(params) ⇒ <code>Promise</code>
Update an existing fulfillment or all existing fulfillments for an order

**Kind**: static method of [<code>Shipping</code>](#module_Shipping)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.tracking_number | <code>String</code> \| <code>Number</code> | Tracking number |
| params.shipping_company | <code>String</code> | Shipping company |
| params.fulfilled_on | <code>Datetime</code> | Fulfilled on |
| params.order_item_id | <code>String</code> | Order item |
| params.order_id | <code>String</code> | Order ID |

<a name="module_Shipping.deleteFulfillment"></a>

### Shipping.deleteFulfillment(params) ⇒ <code>Promise</code>
Delete an existing fulfillment or all fulfillments for an order

**Kind**: static method of [<code>Shipping</code>](#module_Shipping)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.order_item_id | <code>String</code> | Order item |
| params.order_id | <code>String</code> | Order ID |

<a name="module_Shipping.uploadFileFulfillment"></a>

### Shipping.uploadFileFulfillment(params) ⇒ <code>Promise</code>
Upload a CSV file which is parsed and used to update existing fulfillments.

**Kind**: static method of [<code>Shipping</code>](#module_Shipping)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.csv_file | <code>File</code> | CSV file |

