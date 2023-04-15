/* eslint-disable no-undef */
const TimelesNFT = artifacts.require('TimelesNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(TimelesNFT, 'Timeles NFTs', 'TNT', 10, accounts[1])
}
