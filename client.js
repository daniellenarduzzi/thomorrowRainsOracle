var OracleContract = require('./build/contracts/MnnLllueveOracle.json').abi
var contract = require('truffle-contract')

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var oracleInstance = new web3.eth.Contract(OracleContract, '0x4ed92647064896fb13f2730a4e3b0b024401aba3');
(async () =>  {
   const mnnLlueve = await oracleInstance.methods.getMnnLlueve().call()
   console.log(mnnLlueve);
   if(mnnLlueve){
     console.log("mañana llueve");
   }
   else {
     console.log("mañana NO llueve");
   }
})()
