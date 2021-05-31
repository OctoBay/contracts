import { OctobayGovNFT, MintNFTForGovTokenEvent, Transfer } from '../types/OctobayGovNFT/OctobayGovNFT'
import { GovernancePermissionNFT } from '../types/schema'

export function handleMintNFTForGovTokenEvent(event: MintNFTForGovTokenEvent): void {
  let nft = new GovernancePermissionNFT(event.params.tokenId.toString())
  let contract = OctobayGovNFT.bind(event.address)
  nft.ownerAddress = event.params.to
  nft.department = event.params.govTokenAddress.toHexString()
  nft.permissions = []
  let permissions = nft.permissions
  if (contract.hasPermission(event.params.tokenId, 0))
    permissions.push('MINT')
  if (contract.hasPermission(event.params.tokenId, 1))
    permissions.push('TRANSFER')
  if (contract.hasPermission(event.params.tokenId, 2))
    permissions.push('SET_ISSUE_GOVTOKEN')
  if (contract.hasPermission(event.params.tokenId, 3))
    permissions.push('CREATE_PROPOSAL')
  nft.permissions = permissions
  nft.save()
}

export function handleTransfer(event: Transfer): void {
  let nft = GovernancePermissionNFT.load(event.params.tokenId.toString())
  if (nft) {
    nft.ownerAddress = event.params.to
    nft.save()
  }
}