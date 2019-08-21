<a name="module_Daily_statistics"></a>

## Daily\_statistics
<a name="module_Daily_statistics.dailyStatistics"></a>

### Daily_statistics.dailyStatistics(params) ⇒ <code>Promise</code>
List daily products

**Kind**: static method of [<code>Daily\_statistics</code>](#module_Daily_statistics)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.small_date_time | <code>Datetime</code> | datetime of smaller date |
| params.big_date_time | <code>Datetime</code> | datetime of larger date |
| params.brand | <code>String</code> | if this is not passed, all brands will be considered |

