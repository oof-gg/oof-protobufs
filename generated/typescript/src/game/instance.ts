// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: game/instance.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "game";

export enum InstanceState {
  INITIALIZING = 0,
  RUNNING = 1,
  PAUSED = 2,
  CRASHED = 3,
  ABORTED = 4,
  SHUTTING_DOWN = 5,
  STOPPED = 6,
  UNRECOGNIZED = -1,
}

export function instanceStateFromJSON(object: any): InstanceState {
  switch (object) {
    case 0:
    case "INITIALIZING":
      return InstanceState.INITIALIZING;
    case 1:
    case "RUNNING":
      return InstanceState.RUNNING;
    case 2:
    case "PAUSED":
      return InstanceState.PAUSED;
    case 3:
    case "CRASHED":
      return InstanceState.CRASHED;
    case 4:
    case "ABORTED":
      return InstanceState.ABORTED;
    case 5:
    case "SHUTTING_DOWN":
      return InstanceState.SHUTTING_DOWN;
    case 6:
    case "STOPPED":
      return InstanceState.STOPPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstanceState.UNRECOGNIZED;
  }
}

export function instanceStateToJSON(object: InstanceState): string {
  switch (object) {
    case InstanceState.INITIALIZING:
      return "INITIALIZING";
    case InstanceState.RUNNING:
      return "RUNNING";
    case InstanceState.PAUSED:
      return "PAUSED";
    case InstanceState.CRASHED:
      return "CRASHED";
    case InstanceState.ABORTED:
      return "ABORTED";
    case InstanceState.SHUTTING_DOWN:
      return "SHUTTING_DOWN";
    case InstanceState.STOPPED:
      return "STOPPED";
    case InstanceState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** / Represents the game instance (between App and Game), can be used to trigger operations to run in parent App from child Game container over messages. */
export interface Instance {
  state: InstanceState;
  gameId?: string | undefined;
  playerId?: string | undefined;
  data?: string | undefined;
}

function createBaseInstance(): Instance {
  return { state: 0, gameId: undefined, playerId: undefined, data: undefined };
}

export const Instance: MessageFns<Instance> = {
  encode(message: Instance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.gameId !== undefined) {
      writer.uint32(18).string(message.gameId);
    }
    if (message.playerId !== undefined) {
      writer.uint32(26).string(message.playerId);
    }
    if (message.data !== undefined) {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Instance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.gameId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.playerId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.data = reader.string();
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

  fromJSON(object: any): Instance {
    return {
      state: isSet(object.state) ? instanceStateFromJSON(object.state) : 0,
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : undefined,
      playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : undefined,
      data: isSet(object.data) ? globalThis.String(object.data) : undefined,
    };
  },

  toJSON(message: Instance): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = instanceStateToJSON(message.state);
    }
    if (message.gameId !== undefined) {
      obj.gameId = message.gameId;
    }
    if (message.playerId !== undefined) {
      obj.playerId = message.playerId;
    }
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Instance>, I>>(base?: I): Instance {
    return Instance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Instance>, I>>(object: I): Instance {
    const message = createBaseInstance();
    message.state = object.state ?? 0;
    message.gameId = object.gameId ?? undefined;
    message.playerId = object.playerId ?? undefined;
    message.data = object.data ?? undefined;
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
