
var TLS = {
  'Versions': {
    '1.1': [ 0x03, 0x02 ],
    '1.2': [ 0x03, 0x03 ]
  },
  'ContentTypes': {
    'change_cipher_spec': 20,
    'alert': 21,
    'handshake': 22,
    'application_data': 23,
    'default': 255
  }
};

exports.TLS = TLS;
