/**
 * simple script to update the ABIs in ./abis for the Subgraph after contracts
 * have been compiled
 */

const fs = require('fs')

const updateAbi = contractName => {
  fs.writeFileSync(
    `./abis/${contractName}.json`,
    JSON.stringify(
      require(`./build/contracts/${contractName}.json`).abi,
      null,
      2
    )
  )
}

updateAbi('Octobay')
updateAbi('OctobayGovernor')
updateAbi('OctobayGovNFT')
updateAbi('OracleStorage')
updateAbi('UserAddressStorage')
updateAbi('DepositStorage')