<a name="module_Products"></a>

## Products

* [Products](#module_Products)
    * [.getProducts(params)](#module_Products.getProducts) ⇒ <code>Promise</code>
    * [.putProduct(params)](#module_Products.putProduct) ⇒ <code>Promise</code>
    * [.patchProduct(params)](#module_Products.patchProduct) ⇒ <code>Promise</code>
    * [.deleteProduct(params)](#module_Products.deleteProduct) ⇒ <code>Promise</code>

<a name="module_Products.getProducts"></a>

### Products.getProducts(params) ⇒ <code>Promise</code>
List products

**Kind**: static method of [<code>Products</code>](#module_Products)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.order_by_column | <code>String</code> | order by column |
| params.order_by_direction | <code>String</code> | order by direction |
| params.page | <code>String</code> \| <code>Number</code> | page to pull from |
| params.limit | <code>String</code> \| <code>Number</code> | number to pull |
| params.brand | <code>Array</code> | brand |

<a name="module_Products.putProduct"></a>

### Products.putProduct(params) ⇒ <code>Promise</code>
Create a new product

**Kind**: static method of [<code>Products</code>](#module_Products)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.name | <code>String</code> | Name |
| params.sku | <code>String</code> | SKU |
| params.price | <code>String</code> | Price |
| params.type | <code>String</code> | Type |
| params.active | <code>String</code> | Active |
| params.category | <code>String</code> | Category |
| params.description | <code>String</code> | Description |
| params.thumbnail_url | <code>String</code> | Thumbnail |
| params.is_physical | <code>String</code> | Is physical |
| params.weight | <code>String</code> | Weight |
| params.subscription_interval_type | <code>String</code> | Subscription |
| params.subscription_interval_count | <code>String</code> | Subscription |
| params.stock | <code>String</code> | Stock |
| params.brand | <code>String</code> | Brand |
| params.note | <code>String</code> | Note |
| params.created_at | <code>String</code> | Created |

<a name="module_Products.patchProduct"></a>

### Products.patchProduct(params) ⇒ <code>Promise</code>
Update a product

**Kind**: static method of [<code>Products</code>](#module_Products)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.name | <code>String</code> | Name |
| params.sku | <code>String</code> | SKU |
| params.price | <code>String</code> | Price |
| params.type | <code>String</code> | Type |
| params.active | <code>String</code> | Active |
| params.category | <code>String</code> | Category |
| params.description | <code>String</code> | Description |
| params.thumbnail_url | <code>String</code> | Thumbnail |
| params.is_physical | <code>String</code> | Is physical |
| params.weight | <code>String</code> | Weight |
| params.subscription_interval_type | <code>String</code> | Subscription |
| params.subscription_interval_count | <code>String</code> | Subscription |
| params.stock | <code>String</code> | Stock |
| params.brand | <code>String</code> | Brand |
| params.note | <code>String</code> | Note |
| params.product_id | <code>String</code> | product_id |
| params.created_at | <code>String</code> | Created |

<a name="module_Products.deleteProduct"></a>

### Products.deleteProduct(params) ⇒ <code>Promise</code>
Update a product

**Kind**: static method of [<code>Products</code>](#module_Products)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.product_id | <code>String</code> | product_id |

