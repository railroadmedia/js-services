<a name="module_UserLogin"></a>

## UserLogin

* [UserLogin](#module_UserLogin)
    * [.userLogin(params)](#module_UserLogin.userLogin) ⇒ <code>Promise</code>
    * [.userLogout(params)](#module_UserLogin.userLogout) ⇒ <code>Promise</code>
    * [.userForgotPassword(params)](#module_UserLogin.userForgotPassword) ⇒ <code>Promise</code>
    * [.userUpdate(params)](#module_UserLogin.userUpdate) ⇒ <code>Promise</code>

<a name="module_UserLogin.userLogin"></a>

### UserLogin.userLogin(params) ⇒ <code>Promise</code>
User logs in

**Kind**: static method of [<code>UserLogin</code>](#module_UserLogin)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.email | <code>String</code> | User email |
| params.password | <code>String</code> | User password |

<a name="module_UserLogin.userLogout"></a>

### UserLogin.userLogout(params) ⇒ <code>Promise</code>
User logs out

**Kind**: static method of [<code>UserLogin</code>](#module_UserLogin)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |

<a name="module_UserLogin.userForgotPassword"></a>

### UserLogin.userForgotPassword(params) ⇒ <code>Promise</code>
User forgot password

**Kind**: static method of [<code>UserLogin</code>](#module_UserLogin)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |
| params.email | <code>String</code> | The user's email |

<a name="module_UserLogin.userUpdate"></a>

### UserLogin.userUpdate(params) ⇒ <code>Promise</code>
Update profile

**Kind**: static method of [<code>UserLogin</code>](#module_UserLogin)  
**Returns**: <code>Promise</code> - Response or Error Object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.url | <code>String</code> | The endpoint url |

