// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UserAddressAddedEvent extends ethereum.Event {
  get params(): UserAddressAddedEvent__Params {
    return new UserAddressAddedEvent__Params(this);
  }
}

export class UserAddressAddedEvent__Params {
  _event: UserAddressAddedEvent;

  constructor(event: UserAddressAddedEvent) {
    this._event = event;
  }

  get userId(): string {
    return this._event.parameters[0].value.toString();
  }

  get addressName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get ethAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class UserAddressRemovedEvent extends ethereum.Event {
  get params(): UserAddressRemovedEvent__Params {
    return new UserAddressRemovedEvent__Params(this);
  }
}

export class UserAddressRemovedEvent__Params {
  _event: UserAddressRemovedEvent;

  constructor(event: UserAddressRemovedEvent) {
    this._event = event;
  }

  get userId(): string {
    return this._event.parameters[0].value.toString();
  }

  get addressName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get ethAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class UserAddressStorage extends ethereum.SmartContract {
  static bind(address: Address): UserAddressStorage {
    return new UserAddressStorage("UserAddressStorage", address);
  }

  addresses(param0: string, param1: Bytes): Address {
    let result = super.call(
      "addresses",
      "addresses(string,bytes32):(address)",
      [ethereum.Value.fromString(param0), ethereum.Value.fromFixedBytes(param1)]
    );

    return result[0].toAddress();
  }

  try_addresses(param0: string, param1: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "addresses",
      "addresses(string,bytes32):(address)",
      [ethereum.Value.fromString(param0), ethereum.Value.fromFixedBytes(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  octobay(): Address {
    let result = super.call("octobay", "octobay():(address)", []);

    return result[0].toAddress();
  }

  try_octobay(): ethereum.CallResult<Address> {
    let result = super.tryCall("octobay", "octobay():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userIdsByAddress(param0: Address): string {
    let result = super.call(
      "userIdsByAddress",
      "userIdsByAddress(address):(string)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toString();
  }

  try_userIdsByAddress(param0: Address): ethereum.CallResult<string> {
    let result = super.tryCall(
      "userIdsByAddress",
      "userIdsByAddress(address):(string)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetOctobayCall extends ethereum.Call {
  get inputs(): SetOctobayCall__Inputs {
    return new SetOctobayCall__Inputs(this);
  }

  get outputs(): SetOctobayCall__Outputs {
    return new SetOctobayCall__Outputs(this);
  }
}

export class SetOctobayCall__Inputs {
  _call: SetOctobayCall;

  constructor(call: SetOctobayCall) {
    this._call = call;
  }

  get _octobay(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOctobayCall__Outputs {
  _call: SetOctobayCall;

  constructor(call: SetOctobayCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class AddUserAddressCall extends ethereum.Call {
  get inputs(): AddUserAddressCall__Inputs {
    return new AddUserAddressCall__Inputs(this);
  }

  get outputs(): AddUserAddressCall__Outputs {
    return new AddUserAddressCall__Outputs(this);
  }
}

export class AddUserAddressCall__Inputs {
  _call: AddUserAddressCall;

  constructor(call: AddUserAddressCall) {
    this._call = call;
  }

  get _userId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _addressName(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _address(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class AddUserAddressCall__Outputs {
  _call: AddUserAddressCall;

  constructor(call: AddUserAddressCall) {
    this._call = call;
  }
}

export class DeleteUserAddressCall extends ethereum.Call {
  get inputs(): DeleteUserAddressCall__Inputs {
    return new DeleteUserAddressCall__Inputs(this);
  }

  get outputs(): DeleteUserAddressCall__Outputs {
    return new DeleteUserAddressCall__Outputs(this);
  }
}

export class DeleteUserAddressCall__Inputs {
  _call: DeleteUserAddressCall;

  constructor(call: DeleteUserAddressCall) {
    this._call = call;
  }

  get _userId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _addressName(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class DeleteUserAddressCall__Outputs {
  _call: DeleteUserAddressCall;

  constructor(call: DeleteUserAddressCall) {
    this._call = call;
  }
}
