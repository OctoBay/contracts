
const Escrow = artifacts.require("Escrow")

module.exports = function (deployer, network) {
  if (network == 'kovan') {
    deployer.deploy(Escrow)
  }
}
