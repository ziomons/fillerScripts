const Web3  = require('web3');
const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
const web3 = new Web3(provider);

const { abi } = require('./CryptoMon.json');
const contractAddress = /*nuovo address*/;

const contract = new web3.eth.Contract(abi, contractAddress);

contract.addUser.call('fakeAddress', 'tizio a caso');
