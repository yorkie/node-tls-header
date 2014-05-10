
TLS Header
=================
Generating TLS Header in pure javascript.

### Installation
```
$ npm install tls-header
```

### Usage
```js
var header = Object.create(TLSHeader);
header.version = '1.1';
header.type = 'handshake';
// actually here is your handshake/applicationData/... buffers
header.body = new Buffer([]);

// access your buffer
header.toBuffer();
```

### License
MIT
