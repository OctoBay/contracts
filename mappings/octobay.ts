import {
  OwnershipTransferred,
  SetUserAddressStorageEvent,
  SetOracleStorageEvent,
  SetDepositStorageEvent,
  SetOctobayGovernorEvent,
  SetOctobayGovNFTEvent,
  SetEthUSDPriceFeedEvent
} from '../generated/Octobay/Octobay'
import { Config } from '../generated/schema'
import { ethereum } from "@graphprotocol/graph-ts";

function loadConfig(event: ethereum.Event): Config {
  return (
    Config.load(event.address.toHexString()) ||
    new Config(event.address.toHexString())
  ) as Config
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let config = loadConfig(event)
  config.owner = event.params.newOwner
  config.save()
}

export function handleSetUserAddressStorageEvent(event: SetUserAddressStorageEvent): void {
  let config = loadConfig(event)
  config.userAddressStorage = event.params.addressStorage
  config.save()
}

export function handleSetOracleStorageEvent(event: SetOracleStorageEvent): void {
  let config = loadConfig(event)
  config.oracleStorage = event.params.oracleStorage
  config.save()
}

export function handleSetDepositStorageEvent(event: SetDepositStorageEvent): void {
  let config = loadConfig(event)
  config.depositStorage = event.params.depositStorage
  config.save()
}

export function handleSetOctobayGovernorEvent(event: SetOctobayGovernorEvent): void {
  let config = loadConfig(event)
  config.octobayGovernor = event.params.octobayGovernor
  config.save()
}

export function handleSetOctobayGovNFTEvent(event: SetOctobayGovNFTEvent): void {
  let config = loadConfig(event)
  config.octobayGovNFT = event.params.octobayGovNFT
  config.save()
}

export function handleSetEthUSDPriceFeedEvent(event: SetEthUSDPriceFeedEvent): void {
  let config = loadConfig(event)
  config.ethUSDPriceFeed = event.params.ethUsdPriceFeed
  config.save()
}