# js-services - @musora/services
HTTP request modules for all Musora back-end services

[![Build Status](https://travis-ci.com/railroadmedia/js-services.png?branch=master)](https://travis-ci.com/railroadmedia/js-services)
[![Coverage Status](https://coveralls.io/repos/github/railroadmedia/js-services/badge.svg?branch=master)](https://coveralls.io/github/railroadmedia/js-services?branch=master)

## Installation

### Yarn
`yard add @musora/services`

### NPM
`npm install @musora/services --save`

## Usage

### Configure the Instance

When your app starts up, you can call the `configue` method below to configure your current
request instance with some defaults, like the base url and the users authentication token.

```javascript
import { configure } from '@musora/services';

configure({
    baseUrl: 'https://drumeo.com/laravel/public',
    contentType: 'application/json',
    accept: 'application/json',
    authToken: '...'
});
```

### Entire Module
```javascript
import Services from '@musora/services';

Services.Railcontent.getContent(...);
```

### Individual Module
```javascript
import { Railcontent } from '@musora/services';

Railcontent.getContent(...);
```

### Individual Function
```javascript
import { getContent } from '@musora/services';

getContent(...);
```

## Local Development

- `yarn test` - Run all tests
- `yarn docs` - Auto generate documentation
