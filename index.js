
var constants = require('./constants');
var versions = constants.TLS.Versions;
var types = constants.TLS.ContentTypes;


module.exports = {

  /*
   * Tls version
   */
  get version () {
    return this._version || versions['1.1'];
  },

  /*
   * Tls version
   */
  set version (val) {
    this._version = versions[val] || versions['1.1'];
  },

  /*
   * Tls content type
   */
  get type () {
    return this._type || types['handshake'];
  },
  
  /*
   * Tls content type
   */
  set type (val) {
    this._type = types[val] || types['handshake'];
  },

  /*
   * Tls fragment length
   */
  get length () {
    return this._length || 0;
  },

  /*
   * Tls fragment length
   */
  set length (val) {
    throw new Error('internal usage');
  },

  /*
   * Tls fragment
   */
  get body () {
    return this._body;
  },

  /*
   * Tls fragment
   */
  set body (val) {
    this._body = val;
    this._length = val.length;
  },

  /*
   * Tls buffer
   */
  toBuffer: function() {
    var buf = new Buffer(5);
    buf.writeUInt8(this.type, 0);
    buf.writeUInt8(this.version[0], 1);
    buf.writeUInt8(this.version[1], 2);
    buf.writeUInt16BE(this.length, 3);
    // if `this.body` is a Buffer then concat them
    var fragment = null;
    if (!(this.body instanceof Buffer)) {
      fragment = new Buffer(this.body);
    }
    return Buffer.concat([buf, this.body]);
  }

};