// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Config extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Config entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Config entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Config", id.toString(), this);
  }

  static load(id: string): Config | null {
    return store.get("Config", id) as Config | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get trustedForwarder(): Bytes | null {
    let value = this.get("trustedForwarder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set trustedForwarder(value: Bytes | null) {
    if (value === null) {
      this.unset("trustedForwarder");
    } else {
      this.set("trustedForwarder", Value.fromBytes(value as Bytes));
    }
  }

  get userAddressStorage(): Bytes | null {
    let value = this.get("userAddressStorage");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set userAddressStorage(value: Bytes | null) {
    if (value === null) {
      this.unset("userAddressStorage");
    } else {
      this.set("userAddressStorage", Value.fromBytes(value as Bytes));
    }
  }

  get oracleStorage(): Bytes | null {
    let value = this.get("oracleStorage");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set oracleStorage(value: Bytes | null) {
    if (value === null) {
      this.unset("oracleStorage");
    } else {
      this.set("oracleStorage", Value.fromBytes(value as Bytes));
    }
  }

  get depositStorage(): Bytes | null {
    let value = this.get("depositStorage");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set depositStorage(value: Bytes | null) {
    if (value === null) {
      this.unset("depositStorage");
    } else {
      this.set("depositStorage", Value.fromBytes(value as Bytes));
    }
  }

  get octobayGovernor(): Bytes | null {
    let value = this.get("octobayGovernor");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set octobayGovernor(value: Bytes | null) {
    if (value === null) {
      this.unset("octobayGovernor");
    } else {
      this.set("octobayGovernor", Value.fromBytes(value as Bytes));
    }
  }

  get octobayGovNFT(): Bytes | null {
    let value = this.get("octobayGovNFT");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set octobayGovNFT(value: Bytes | null) {
    if (value === null) {
      this.unset("octobayGovNFT");
    } else {
      this.set("octobayGovNFT", Value.fromBytes(value as Bytes));
    }
  }

  get ethUSDPriceFeed(): Bytes | null {
    let value = this.get("ethUSDPriceFeed");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set ethUSDPriceFeed(value: Bytes | null) {
    if (value === null) {
      this.unset("ethUSDPriceFeed");
    } else {
      this.set("ethUSDPriceFeed", Value.fromBytes(value as Bytes));
    }
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get addresses(): Array<string> | null {
    let value = this.get("addresses");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set addresses(value: Array<string> | null) {
    if (value === null) {
      this.unset("addresses");
    } else {
      this.set("addresses", Value.fromStringArray(value as Array<string>));
    }
  }

  get deposits(): Array<string> | null {
    let value = this.get("deposits");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set deposits(value: Array<string> | null) {
    if (value === null) {
      this.unset("deposits");
    } else {
      this.set("deposits", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class UserDeposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserDeposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserDeposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserDeposit", id.toString(), this);
  }

  static load(id: string): UserDeposit | null {
    return store.get("UserDeposit", id) as UserDeposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }
}

export class UserAddress extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserAddress entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserAddress entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserAddress", id.toString(), this);
  }

  static load(id: string): UserAddress | null {
    return store.get("UserAddress", id) as UserAddress | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }
}

export class Issue extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Issue entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Issue entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Issue", id.toString(), this);
  }

  static load(id: string): Issue | null {
    return store.get("Issue", id) as Issue | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get deposits(): Array<string> {
    let value = this.get("deposits");
    return value.toStringArray();
  }

  set deposits(value: Array<string>) {
    this.set("deposits", Value.fromStringArray(value));
  }
}

export class IssueDeposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save IssueDeposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save IssueDeposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("IssueDeposit", id.toString(), this);
  }

  static load(id: string): IssueDeposit | null {
    return store.get("IssueDeposit", id) as IssueDeposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get issue(): string {
    let value = this.get("issue");
    return value.toString();
  }

  set issue(value: string) {
    this.set("issue", Value.fromString(value));
  }
}

export class Oracle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Oracle entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Oracle entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Oracle", id.toString(), this);
  }

  static load(id: string): Oracle | null {
    return store.get("Oracle", id) as Oracle | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get ethAddress(): Bytes {
    let value = this.get("ethAddress");
    return value.toBytes();
  }

  set ethAddress(value: Bytes) {
    this.set("ethAddress", Value.fromBytes(value));
  }

  get jobs(): Array<string> {
    let value = this.get("jobs");
    return value.toStringArray();
  }

  set jobs(value: Array<string>) {
    this.set("jobs", Value.fromStringArray(value));
  }
}

export class OracleJob extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OracleJob entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OracleJob entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OracleJob", id.toString(), this);
  }

  static load(id: string): OracleJob | null {
    return store.get("OracleJob", id) as OracleJob | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get oracle(): string {
    let value = this.get("oracle");
    return value.toString();
  }

  set oracle(value: string) {
    this.set("oracle", Value.fromString(value));
  }
}

export class GovernanceDepartment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save GovernanceDepartment entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GovernanceDepartment entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GovernanceDepartment", id.toString(), this);
  }

  static load(id: string): GovernanceDepartment | null {
    return store.get("GovernanceDepartment", id) as GovernanceDepartment | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get projectId(): string {
    let value = this.get("projectId");
    return value.toString();
  }

  set projectId(value: string) {
    this.set("projectId", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get minQuorum(): i32 {
    let value = this.get("minQuorum");
    return value.toI32();
  }

  set minQuorum(value: i32) {
    this.set("minQuorum", Value.fromI32(value));
  }

  get requiredSharesToCreateProposals(): i32 {
    let value = this.get("requiredSharesToCreateProposals");
    return value.toI32();
  }

  set requiredSharesToCreateProposals(value: i32) {
    this.set("requiredSharesToCreateProposals", Value.fromI32(value));
  }

  get holders(): Array<string> | null {
    let value = this.get("holders");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set holders(value: Array<string> | null) {
    if (value === null) {
      this.unset("holders");
    } else {
      this.set("holders", Value.fromStringArray(value as Array<string>));
    }
  }

  get nfts(): Array<string> | null {
    let value = this.get("nfts");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set nfts(value: Array<string> | null) {
    if (value === null) {
      this.unset("nfts");
    } else {
      this.set("nfts", Value.fromStringArray(value as Array<string>));
    }
  }

  get proposals(): Array<string> | null {
    let value = this.get("proposals");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set proposals(value: Array<string> | null) {
    if (value === null) {
      this.unset("proposals");
    } else {
      this.set("proposals", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class GovernanceTokenHolder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save GovernanceTokenHolder entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GovernanceTokenHolder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GovernanceTokenHolder", id.toString(), this);
  }

  static load(id: string): GovernanceTokenHolder | null {
    return store.get(
      "GovernanceTokenHolder",
      id
    ) as GovernanceTokenHolder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ethAddress(): Bytes {
    let value = this.get("ethAddress");
    return value.toBytes();
  }

  set ethAddress(value: Bytes) {
    this.set("ethAddress", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get department(): string {
    let value = this.get("department");
    return value.toString();
  }

  set department(value: string) {
    this.set("department", Value.fromString(value));
  }
}

export class GovernancePermissionNFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save GovernancePermissionNFT entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GovernancePermissionNFT entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GovernancePermissionNFT", id.toString(), this);
  }

  static load(id: string): GovernancePermissionNFT | null {
    return store.get(
      "GovernancePermissionNFT",
      id
    ) as GovernancePermissionNFT | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ownerAddress(): Bytes {
    let value = this.get("ownerAddress");
    return value.toBytes();
  }

  set ownerAddress(value: Bytes) {
    this.set("ownerAddress", Value.fromBytes(value));
  }

  get permissions(): Array<string> {
    let value = this.get("permissions");
    return value.toStringArray();
  }

  set permissions(value: Array<string>) {
    this.set("permissions", Value.fromStringArray(value));
  }

  get department(): string {
    let value = this.get("department");
    return value.toString();
  }

  set department(value: string) {
    this.set("department", Value.fromString(value));
  }
}

export class GovernanceProposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save GovernanceProposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GovernanceProposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GovernanceProposal", id.toString(), this);
  }

  static load(id: string): GovernanceProposal | null {
    return store.get("GovernanceProposal", id) as GovernanceProposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get quorum(): i32 {
    let value = this.get("quorum");
    return value.toI32();
  }

  set quorum(value: i32) {
    this.set("quorum", Value.fromI32(value));
  }

  get startDate(): BigInt {
    let value = this.get("startDate");
    return value.toBigInt();
  }

  set startDate(value: BigInt) {
    this.set("startDate", Value.fromBigInt(value));
  }

  get endDate(): BigInt {
    let value = this.get("endDate");
    return value.toBigInt();
  }

  set endDate(value: BigInt) {
    this.set("endDate", Value.fromBigInt(value));
  }

  get balanceSnapshotId(): BigInt {
    let value = this.get("balanceSnapshotId");
    return value.toBigInt();
  }

  set balanceSnapshotId(value: BigInt) {
    this.set("balanceSnapshotId", Value.fromBigInt(value));
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (value === null) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(value as Array<string>));
    }
  }

  get department(): string {
    let value = this.get("department");
    return value.toString();
  }

  set department(value: string) {
    this.set("department", Value.fromString(value));
  }
}

export class GovernanceProposalVote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save GovernanceProposalVote entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GovernanceProposalVote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GovernanceProposalVote", id.toString(), this);
  }

  static load(id: string): GovernanceProposalVote | null {
    return store.get(
      "GovernanceProposalVote",
      id
    ) as GovernanceProposalVote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get holder(): string {
    let value = this.get("holder");
    return value.toString();
  }

  set holder(value: string) {
    this.set("holder", Value.fromString(value));
  }

  get percentage(): i32 {
    let value = this.get("percentage");
    return value.toI32();
  }

  set percentage(value: i32) {
    this.set("percentage", Value.fromI32(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }
}
