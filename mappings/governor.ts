import { DepartmentCreatedEvent, ProposalCreatedEvent, VoteCastEvent, AwardGovernanceTokensEvent } from '../types/OctobayGovernor/OctobayGovernor'
import { GovernanceDepartment, GovernanceProposal, GovernanceProposalVote, GovernanceTokenHolder } from '../types/schema'

export function handleDepartmentCreatedEvent(event: DepartmentCreatedEvent): void {
  let department = new GovernanceDepartment(event.params.tokenAddress.toHexString())
  department.creator = event.params.creator
  department.projectId = event.params.projectId
  department.tokenAddress = event.params.tokenAddress
  department.name = event.params.tokenName
  department.symbol = event.params.tokenSymbol
  department.minQuorum = event.params.minQuorum
  department.requiredSharesToCreateProposals = event.params.newProposalShare
  department.save()
}

export function handleProposalCreatedEvent(event: ProposalCreatedEvent): void {
  let proposal = new GovernanceProposal(event.params.discussionId)
  proposal.count = event.params.proposalId
  proposal.quorum = event.params.quorum
  proposal.startDate = event.params.startDate
  proposal.endDate = event.params.endDate
  proposal.balanceSnapshotId = event.params.snapshotId
  proposal.department = event.params.tokenAddress.toHexString()
  proposal.save()
}

export function handleVoteCastEvent(event: VoteCastEvent): void {
  let vote = new GovernanceProposalVote(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  vote.holder = event.params.voter.toHexString()
  vote.percentage = event.params.vote
  vote.proposal = event.params.discussionId
  vote.save()
}

export function handleAwardGovernanceTokensEvent(event: AwardGovernanceTokensEvent): void {
  let holder = GovernanceTokenHolder.load(event.params.recipient.toHexString())
  if (!holder) {
    holder = new GovernanceTokenHolder(event.params.recipient.toHexString())
    holder.ethAddress = event.params.recipient
    holder.balance = event.params.amount
    holder.department = event.params.tokenAddr.toHexString()
    holder.save()
  } else {
    holder.balance = holder.balance.plus(event.params.amount)
    holder.save()
  }
}