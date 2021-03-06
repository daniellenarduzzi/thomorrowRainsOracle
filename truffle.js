require('babel-register')({
  ignore: /node_modules\/(?!zeppelin-solidity)/
});
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8545,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    ropsten: {
      host: "localhost",
      network_id: 3,
      port: 8545,
      gas: 2900000
    }
  },
  mocha: {
   useColors: true
  }
};
