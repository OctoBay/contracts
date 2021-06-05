// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import '@openzeppelin/contracts/access/Ownable.sol';

contract Escrow is Ownable {

  /** Oracles */

  mapping(address => string) public oraclesByAddress;
  mapping(string => address) public oraclesById;

  function addOracle(address _address, string calldata _repoId) external onlyOwner {
    require(oraclesById[oraclesByAddress[_address]] == address(0), "Oracle does already exist.");
    oraclesByAddress[_address] = _repoId;
    oraclesById[_repoId] = _address;
  }

  function removeOracle(address _address) external onlyOwner {
    require(oraclesById[oraclesByAddress[_address]] != address(0), "Oracle does not exist.");
    delete oraclesById[oraclesByAddress[_address]];
    delete oraclesByAddress[_address];
  }

  modifier onlyOracle() {
    require(oraclesById[oraclesByAddress[msg.sender]] == msg.sender, "Only allowed for oracles.");
    _;
  }
  
  /** Deposits */

  struct Deposit {
    address from;
    uint256 value;
    string githubId;
  }

  mapping(uint256 => Deposit) public deposits;
  uint256 private nextDepositId = 0;

  event DepositEvent(address from, uint256 value, string githubId, uint256 depositId);

  function deposit(string calldata _githubId) external payable {
    require(msg.value > 0, 'You must send ETH.');

    nextDepositId++;
    deposits[nextDepositId] = Deposit(
      msg.sender,
      msg.value,
      _githubId
    );

    emit DepositEvent(msg.sender, msg.value, _githubId, nextDepositId);
  }

  event ReleaseEvent(uint256 depositId, uint256 value, address to);

  function release(uint256 _depositId, uint256 _value, address _to) external onlyOracle {
    require(deposits[_depositId].value >= _value, "Deposit is smaller than _value.");
    
    // transfer to 98% recipient and 2% and oracle
    payable(_to).transfer(_value * 98  / 100);
    payable(msg.sender).transfer(_value * 2 / 100);

    // reduce deposit
    deposits[_depositId].value -= _value;

    emit ReleaseEvent(_depositId, _value, _to);
  }
}