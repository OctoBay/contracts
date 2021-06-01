import { store } from '@graphprotocol/graph-ts'
import {
  IssueDepositEvent,
  WithdrawIssueDepositsEvent,
  RefundIssueDepositEvent,
  UserDepositEvent,
  WithdrawUserDepositEvent,
  RefundUserDepositEvent
} from '../generated/DepositStorage/DepositStorage'
import { Issue, IssueDeposit, User, UserDeposit } from '../generated/schema'

export function handleIssueDepositEvent(event: IssueDepositEvent): void {
  let issue = Issue.load(event.params.issueId)
  if (!issue) {
    issue = new Issue(event.params.issueId)
    issue.status = 0
    issue.save()
  }
  let deposit = new IssueDeposit(event.params.depositId.toString())
  deposit.from = event.params.from
  deposit.amount = event.params.amount
  deposit.issue = event.params.issueId
  deposit.save()
}

export function handleRefundIssueDepositEvent(event: RefundIssueDepositEvent): void {
  store.remove('IssueDeposit', event.params.depositId.toString())
}

export function handleWithdrawIssueDepositsEvent(event: WithdrawIssueDepositsEvent): void {
  let issue = Issue.load(event.params.issueId)
  if (issue) {
    issue.status = 1
    issue.save()
  }
}

export function handleUserDepositEvent(event: UserDepositEvent): void {
  let user = User.load(event.params.githubUserId)
  if (!user) {
    user = new User(event.params.githubUserId)
    user.save()
  }
  let deposit = new UserDeposit(event.params.depositId.toString())
  deposit.from = event.params.from
  deposit.amount = event.params.amount
  deposit.user = event.params.githubUserId
  deposit.save()
}

export function handleRefundUserDepositEvent(event: RefundUserDepositEvent): void {
  store.remove('UserDeposit', event.params.depositId.toString())
}

export function handleWithdrawUserDepositEvent(event: WithdrawUserDepositEvent): void {
  store.remove('UserDeposit', event.params.depositId.toString())
}