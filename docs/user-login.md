<a name="module_User_login"></a>

## User\_login

* [User_login](#module_User_login)
    * [.userLogin(params)](#module_User_login.userLogin) ⇒ <code>Promise</code>
    * [.userLogout(params)](#module_User_login.userLogout) ⇒ <code>Promise</code>
    * [.userForgotPassword(params)](#module_User_login.userForgotPassword) ⇒ <code>Promise</code>
    * [.userUpdate(params)](#module_User_login.userUpdate) ⇒ <code>Promise</code>

<a name="module_User_login.userLogin"></a>

### User_login.userLogin(params) ⇒ <code>Promise</code>
User logs in

**Kind**: static method of [<code>User\_login</code>](#module_User_login)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.email | <code>String</code> | User email |
| params.password | <code>String</code> | User password |

<a name="module_User_login.userLogout"></a>

### User_login.userLogout(params) ⇒ <code>Promise</code>
User logs out

**Kind**: static method of [<code>User\_login</code>](#module_User_login)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |

<a name="module_User_login.userForgotPassword"></a>

### User_login.userForgotPassword(params) ⇒ <code>Promise</code>
User forgot password

**Kind**: static method of [<code>User\_login</code>](#module_User_login)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.email | <code>String</code> | The user's email |

<a name="module_User_login.userUpdate"></a>

### User_login.userUpdate(params) ⇒ <code>Promise</code>
Update profile

**Kind**: static method of [<code>User\_login</code>](#module_User_login)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |

