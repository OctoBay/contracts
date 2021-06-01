/**
 * This script generates a subgraph manifest from a template, filling in the
 * addresses and block number of the latest deployment.
 */

const fs = require('fs')
const Web3 = require('web3')
const web3 = new Web3(process.env.KOVAN_RPC_NODE)
const OCTOBAY = require(`./build/contracts/Octobay.json`).networks[42]

web3.eth.getTransactionReceipt(OCTOBAY.transactionHash).then(tx => {
  const manifestTemplate = fs.readFileSync('./subgraph.template.yaml', 'utf-8')
    .replace('{{ OCTOBAY_ADDRESS }}', OCTOBAY.address)
    .replace('{{ DEPOSIT_STORAGE_ADDRESS }}', require(`./build/contracts/DepositStorage.json`).networks[42].address)
    .replace('{{ USER_ADDRESS_STORAGE_ADDRESS }}', require(`./build/contracts/UserAddressStorage.json`).networks[42].address)
    .replace('{{ ORACLE_STORAGE_ADDRESS }}', require(`./build/contracts/OracleStorage.json`).networks[42].address)
    .replace('{{ GOVERNOR_ADDRESS }}', require(`./build/contracts/OctobayGovernor.json`).networks[42].address)
    .replace('{{ GOV_NFT_ADDRESS }}', require(`./build/contracts/OctobayGovNFT.json`).networks[42].address)
    .replace(/{{ BLOCK_NUMBER }}/g, tx.blockNumber)
  
  fs.writeFileSync(`./subgraph.yaml`, manifestTemplate)
}).catch(console.error)
