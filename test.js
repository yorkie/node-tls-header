
var test = require('tape');
var TLSHeader = require('./index');
var header = Object.create(TLSHeader);

test('shoud equal to expected buffer', function(t) {
  header.body = new Buffer([1,2,3]);
  var buf = header.toBuffer();
  t.equal(buf.length, 5+3);
});
