// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v3.14.0
// source: v1/api/player/state.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "v1.api.player";

export interface State {
  playerId: string;
  sessionId: string;
  gameId: string;
  state: State_PlayerState;
  attributes: { [key: string]: State_PlayerAttribute };
  timestamp: number;
}

export enum State_PlayerState {
  WAITING = 0,
  PLAYING = 1,
  FINISHED = 2,
  UNRECOGNIZED = -1,
}

export function state_PlayerStateFromJSON(object: any): State_PlayerState {
  switch (object) {
    case 0:
    case "WAITING":
      return State_PlayerState.WAITING;
    case 1:
    case "PLAYING":
      return State_PlayerState.PLAYING;
    case 2:
    case "FINISHED":
      return State_PlayerState.FINISHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State_PlayerState.UNRECOGNIZED;
  }
}

export function state_PlayerStateToJSON(object: State_PlayerState): string {
  switch (object) {
    case State_PlayerState.WAITING:
      return "WAITING";
    case State_PlayerState.PLAYING:
      return "PLAYING";
    case State_PlayerState.FINISHED:
      return "FINISHED";
    case State_PlayerState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface State_AttributesEntry {
  key: string;
  value: State_PlayerAttribute | undefined;
}

export interface State_PlayerAttribute {
  stringValue?: string | undefined;
  intValue?: number | undefined;
  floatValue?: number | undefined;
  boolValue?: boolean | undefined;
}

function createBaseState(): State {
  return { playerId: "", sessionId: "", gameId: "", state: 0, attributes: {}, timestamp: 0 };
}

export const State: MessageFns<State> = {
  encode(message: State, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.playerId !== "") {
      writer.uint32(10).string(message.playerId);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.gameId !== "") {
      writer.uint32(26).string(message.gameId);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      State_AttributesEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    if (message.timestamp !== 0) {
      writer.uint32(48).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): State {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.playerId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.gameId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = State_AttributesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.attributes[entry5.key] = entry5.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.timestamp = longToNumber(reader.int64());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): State {
    return {
      playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : "",
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
      state: isSet(object.state) ? state_PlayerStateFromJSON(object.state) : 0,
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{ [key: string]: State_PlayerAttribute }>((acc, [key, value]) => {
          acc[key] = State_PlayerAttribute.fromJSON(value);
          return acc;
        }, {})
        : {},
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
    };
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    if (message.state !== 0) {
      obj.state = state_PlayerStateToJSON(message.state);
    }
    if (message.attributes) {
      const entries = Object.entries(message.attributes);
      if (entries.length > 0) {
        obj.attributes = {};
        entries.forEach(([k, v]) => {
          obj.attributes[k] = State_PlayerAttribute.toJSON(v);
        });
      }
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<State>, I>>(base?: I): State {
    return State.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.playerId = object.playerId ?? "";
    message.sessionId = object.sessionId ?? "";
    message.gameId = object.gameId ?? "";
    message.state = object.state ?? 0;
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{ [key: string]: State_PlayerAttribute }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = State_PlayerAttribute.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseState_AttributesEntry(): State_AttributesEntry {
  return { key: "", value: undefined };
}

export const State_AttributesEntry: MessageFns<State_AttributesEntry> = {
  encode(message: State_AttributesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      State_PlayerAttribute.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): State_AttributesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState_AttributesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = State_PlayerAttribute.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): State_AttributesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? State_PlayerAttribute.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: State_AttributesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = State_PlayerAttribute.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<State_AttributesEntry>, I>>(base?: I): State_AttributesEntry {
    return State_AttributesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<State_AttributesEntry>, I>>(object: I): State_AttributesEntry {
    const message = createBaseState_AttributesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? State_PlayerAttribute.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseState_PlayerAttribute(): State_PlayerAttribute {
  return { stringValue: undefined, intValue: undefined, floatValue: undefined, boolValue: undefined };
}

export const State_PlayerAttribute: MessageFns<State_PlayerAttribute> = {
  encode(message: State_PlayerAttribute, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.stringValue !== undefined) {
      writer.uint32(18).string(message.stringValue);
    }
    if (message.intValue !== undefined) {
      writer.uint32(24).int32(message.intValue);
    }
    if (message.floatValue !== undefined) {
      writer.uint32(37).float(message.floatValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(40).bool(message.boolValue);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): State_PlayerAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState_PlayerAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.stringValue = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.intValue = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 37) {
            break;
          }

          message.floatValue = reader.float();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.boolValue = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): State_PlayerAttribute {
    return {
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
      intValue: isSet(object.intValue) ? globalThis.Number(object.intValue) : undefined,
      floatValue: isSet(object.floatValue) ? globalThis.Number(object.floatValue) : undefined,
      boolValue: isSet(object.boolValue) ? globalThis.Boolean(object.boolValue) : undefined,
    };
  },

  toJSON(message: State_PlayerAttribute): unknown {
    const obj: any = {};
    if (message.stringValue !== undefined) {
      obj.stringValue = message.stringValue;
    }
    if (message.intValue !== undefined) {
      obj.intValue = Math.round(message.intValue);
    }
    if (message.floatValue !== undefined) {
      obj.floatValue = message.floatValue;
    }
    if (message.boolValue !== undefined) {
      obj.boolValue = message.boolValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<State_PlayerAttribute>, I>>(base?: I): State_PlayerAttribute {
    return State_PlayerAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<State_PlayerAttribute>, I>>(object: I): State_PlayerAttribute {
    const message = createBaseState_PlayerAttribute();
    message.stringValue = object.stringValue ?? undefined;
    message.intValue = object.intValue ?? undefined;
    message.floatValue = object.floatValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
