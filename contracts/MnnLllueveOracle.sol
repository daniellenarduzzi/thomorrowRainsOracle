pragma solidity ^0.4.23;

contract MnnLllueveOracle {
  // Contract owner
  address public owner;

  // BTC Marketcap Storage
  bool public mnnLlueve;

  // Callback function
  event CallbackGetMnnLllueve();

  constructor() public {
    owner = msg.sender;
  }

  function updateMnnLlueve() public {
    // Calls the callback function
    emit CallbackGetMnnLllueve();
  }

  function setMnnLlueve(bool _mnnLLueve) public {
    // If it isn't sent by a trusted oracle
    // a.k.a ourselves, ignore it
    require(msg.sender == owner);
    mnnLlueve = _mnnLLueve;
  }

  function getMnnLlueve() constant public returns (bool) {
    return mnnLlueve;
  }
}
