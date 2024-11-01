// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: global/join_leave.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "global";

/** Message joining or leaving a game */
export interface JoinLeaveGame {
  playerId: string;
  gameId: string;
  action: JoinLeaveGame_Action;
}

export enum JoinLeaveGame_Action {
  JOIN = 0,
  LEAVE = 1,
  UNRECOGNIZED = -1,
}

export function joinLeaveGame_ActionFromJSON(object: any): JoinLeaveGame_Action {
  switch (object) {
    case 0:
    case "JOIN":
      return JoinLeaveGame_Action.JOIN;
    case 1:
    case "LEAVE":
      return JoinLeaveGame_Action.LEAVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JoinLeaveGame_Action.UNRECOGNIZED;
  }
}

export function joinLeaveGame_ActionToJSON(object: JoinLeaveGame_Action): string {
  switch (object) {
    case JoinLeaveGame_Action.JOIN:
      return "JOIN";
    case JoinLeaveGame_Action.LEAVE:
      return "LEAVE";
    case JoinLeaveGame_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseJoinLeaveGame(): JoinLeaveGame {
  return { playerId: "", gameId: "", action: 0 };
}

export const JoinLeaveGame: MessageFns<JoinLeaveGame> = {
  encode(message: JoinLeaveGame, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.playerId !== "") {
      writer.uint32(10).string(message.playerId);
    }
    if (message.gameId !== "") {
      writer.uint32(18).string(message.gameId);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): JoinLeaveGame {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinLeaveGame();
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

          message.gameId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.action = reader.int32() as any;
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

  fromJSON(object: any): JoinLeaveGame {
    return {
      playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
      action: isSet(object.action) ? joinLeaveGame_ActionFromJSON(object.action) : 0,
    };
  },

  toJSON(message: JoinLeaveGame): unknown {
    const obj: any = {};
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    if (message.action !== 0) {
      obj.action = joinLeaveGame_ActionToJSON(message.action);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JoinLeaveGame>, I>>(base?: I): JoinLeaveGame {
    return JoinLeaveGame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JoinLeaveGame>, I>>(object: I): JoinLeaveGame {
    const message = createBaseJoinLeaveGame();
    message.playerId = object.playerId ?? "";
    message.gameId = object.gameId ?? "";
    message.action = object.action ?? 0;
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
