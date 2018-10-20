const ipfsAPI = require('ipfs-api');
const fs = require('fs');

const ipfs = ipfsAPI('localhost', '6545', {  protocol: 'http' });

ipfs.files.add();
