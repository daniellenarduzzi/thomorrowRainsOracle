var fetch = require('fetch')
var OracleContract = require('./build/contracts/MnnLllueveOracle.json').abi
var contract = require('truffle-contract')

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

(async () =>  {
  const oracleInstance = await new web3.eth.Contract(OracleContract, '0x4ed92647064896fb13f2730a4e3b0b024401aba3')
  const accounts = await web3.eth.getAccounts()

  // oracleInstance.once("CallbackGetMnnLllueve", (error,ev) => {
    var city_id = 3838583;
    var user_id = "abf4978c2f92bc6278f83a9ab5981e7e";
    // console.log(ev);
    fetch.fetchUrl('https://api.openweathermap.org/data/2.5/forecast?id='+city_id+'&APPID='+user_id , (err, m, b) => {
      const Json = JSON.parse(b.toString());
      let mnnLlueve
      if(Json.list[7].rain!=undefined && Json.list[7].rain['3h']>0.05){
        mnnLlueve = true
      }
      else
        mnnLlueve = false
      console.log(mnnLlueve);
      oracleInstance.methods.setMnnLlueve(mnnLlueve).send({from: accounts[0]})
  })
})()
