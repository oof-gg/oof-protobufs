// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: game/session.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "game";

/** / Represents a game session, can be used to store game state and attributes such as scores, times, players, and active in-game configurations. */
export interface Session {
  id: string;
  gameId: string;
  /**
   * / Players in the session (can be used to store player state and attributes)
   * / Optional: This can be used to store player state and attributes, but not recommended for large player counts.
   */
  playerIds: string[];
  /** / Game state as defined by the GameState enum */
  state: Session_GameState;
  /** / Game attributes as a map of string to GameAttribute */
  attributes: { [key: string]: Session_GameAttribute };
}

export enum Session_GameState {
  CREATED = 0,
  WAITING = 1,
  STARTED = 2,
  FINISHED = 3,
  UNRECOGNIZED = -1,
}

export function session_GameStateFromJSON(object: any): Session_GameState {
  switch (object) {
    case 0:
    case "CREATED":
      return Session_GameState.CREATED;
    case 1:
    case "WAITING":
      return Session_GameState.WAITING;
    case 2:
    case "STARTED":
      return Session_GameState.STARTED;
    case 3:
    case "FINISHED":
      return Session_GameState.FINISHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Session_GameState.UNRECOGNIZED;
  }
}

export function session_GameStateToJSON(object: Session_GameState): string {
  switch (object) {
    case Session_GameState.CREATED:
      return "CREATED";
    case Session_GameState.WAITING:
      return "WAITING";
    case Session_GameState.STARTED:
      return "STARTED";
    case Session_GameState.FINISHED:
      return "FINISHED";
    case Session_GameState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Session_AttributesEntry {
  key: string;
  value: Session_GameAttribute | undefined;
}

/** TODO: Check if this is the best way to represent game attributes */
export interface Session_GameAttribute {
  stringValue?: string | undefined;
  intValue?: number | undefined;
  floatValue?: number | undefined;
  boolValue?: boolean | undefined;
}

function createBaseSession(): Session {
  return { id: "", gameId: "", playerIds: [], state: 0, attributes: {} };
}

export const Session: MessageFns<Session> = {
  encode(message: Session, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.gameId !== "") {
      writer.uint32(18).string(message.gameId);
    }
    for (const v of message.playerIds) {
      writer.uint32(26).string(v!);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      Session_AttributesEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Session {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.playerIds.push(reader.string());
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

          const entry5 = Session_AttributesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.attributes[entry5.key] = entry5.value;
          }
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

  fromJSON(object: any): Session {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
      playerIds: globalThis.Array.isArray(object?.playerIds)
        ? object.playerIds.map((e: any) => globalThis.String(e))
        : [],
      state: isSet(object.state) ? session_GameStateFromJSON(object.state) : 0,
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{ [key: string]: Session_GameAttribute }>((acc, [key, value]) => {
          acc[key] = Session_GameAttribute.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Session): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    if (message.playerIds?.length) {
      obj.playerIds = message.playerIds;
    }
    if (message.state !== 0) {
      obj.state = session_GameStateToJSON(message.state);
    }
    if (message.attributes) {
      const entries = Object.entries(message.attributes);
      if (entries.length > 0) {
        obj.attributes = {};
        entries.forEach(([k, v]) => {
          obj.attributes[k] = Session_GameAttribute.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Session>, I>>(base?: I): Session {
    return Session.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Session>, I>>(object: I): Session {
    const message = createBaseSession();
    message.id = object.id ?? "";
    message.gameId = object.gameId ?? "";
    message.playerIds = object.playerIds?.map((e) => e) || [];
    message.state = object.state ?? 0;
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{ [key: string]: Session_GameAttribute }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Session_GameAttribute.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSession_AttributesEntry(): Session_AttributesEntry {
  return { key: "", value: undefined };
}

export const Session_AttributesEntry: MessageFns<Session_AttributesEntry> = {
  encode(message: Session_AttributesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Session_GameAttribute.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Session_AttributesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession_AttributesEntry();
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

          message.value = Session_GameAttribute.decode(reader, reader.uint32());
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

  fromJSON(object: any): Session_AttributesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Session_GameAttribute.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Session_AttributesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Session_GameAttribute.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Session_AttributesEntry>, I>>(base?: I): Session_AttributesEntry {
    return Session_AttributesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Session_AttributesEntry>, I>>(object: I): Session_AttributesEntry {
    const message = createBaseSession_AttributesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Session_GameAttribute.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSession_GameAttribute(): Session_GameAttribute {
  return { stringValue: undefined, intValue: undefined, floatValue: undefined, boolValue: undefined };
}

export const Session_GameAttribute: MessageFns<Session_GameAttribute> = {
  encode(message: Session_GameAttribute, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): Session_GameAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession_GameAttribute();
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

  fromJSON(object: any): Session_GameAttribute {
    return {
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
      intValue: isSet(object.intValue) ? globalThis.Number(object.intValue) : undefined,
      floatValue: isSet(object.floatValue) ? globalThis.Number(object.floatValue) : undefined,
      boolValue: isSet(object.boolValue) ? globalThis.Boolean(object.boolValue) : undefined,
    };
  },

  toJSON(message: Session_GameAttribute): unknown {
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

  create<I extends Exact<DeepPartial<Session_GameAttribute>, I>>(base?: I): Session_GameAttribute {
    return Session_GameAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Session_GameAttribute>, I>>(object: I): Session_GameAttribute {
    const message = createBaseSession_GameAttribute();
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
