const eth_util = require('ethereumjs-util');

// paste in the private key we provided here. NEVER PASTE YOUR OWN PRIVATE KEY INTO UNTRUSTED APPLICATIONS
const privateKey = '';
// get a public key from a given private key
const privateKeyAsBuffer = eth_util.toBuffer(privateKey);

// get public key from private key buffer
const publicKey = eth_util.privateToPublic(privateKeyAsBuffer);

// turn public key buffer into a string
const publicKeyString = eth_util.bufferToHex(publicKey);

// log public key string to console
console.log(publicKeyString);
