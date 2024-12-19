// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: api/game/event.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "api.game";

/** / Game Events, message can trigger API calls or other events */
export interface GameEvent {
  /** / Unique identifier for the event to prevent duplicates, and to be able to retrieve the event from the server if necessary */
  id: string;
  eventName: string;
  timestamp: number;
  gameId?: string | undefined;
  playerId?: string | undefined;
  sessionId?: string | undefined;
  teamId?: string | undefined;
  attributes: { [key: string]: GameEvent_EventAttribute };
  type: GameEvent_EventType;
}

/** CUSTOM - Custom events */
export enum GameEvent_EventType {
  CUSTOM = 0,
  UNRECOGNIZED = -1,
}

export function gameEvent_EventTypeFromJSON(object: any): GameEvent_EventType {
  switch (object) {
    case 0:
    case "CUSTOM":
      return GameEvent_EventType.CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GameEvent_EventType.UNRECOGNIZED;
  }
}

export function gameEvent_EventTypeToJSON(object: GameEvent_EventType): string {
  switch (object) {
    case GameEvent_EventType.CUSTOM:
      return "CUSTOM";
    case GameEvent_EventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GameEvent_AttributesEntry {
  key: string;
  value: GameEvent_EventAttribute | undefined;
}

export interface GameEvent_EventAttribute {
  stringValue?: string | undefined;
  intValue?: number | undefined;
  floatValue?: number | undefined;
  boolValue?: boolean | undefined;
}

function createBaseGameEvent(): GameEvent {
  return {
    id: "",
    eventName: "",
    timestamp: 0,
    gameId: undefined,
    playerId: undefined,
    sessionId: undefined,
    teamId: undefined,
    attributes: {},
    type: 0,
  };
}

export const GameEvent: MessageFns<GameEvent> = {
  encode(message: GameEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.eventName !== "") {
      writer.uint32(18).string(message.eventName);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int64(message.timestamp);
    }
    if (message.gameId !== undefined) {
      writer.uint32(34).string(message.gameId);
    }
    if (message.playerId !== undefined) {
      writer.uint32(42).string(message.playerId);
    }
    if (message.sessionId !== undefined) {
      writer.uint32(58).string(message.sessionId);
    }
    if (message.teamId !== undefined) {
      writer.uint32(66).string(message.teamId);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      GameEvent_AttributesEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).join();
    });
    if (message.type !== 0) {
      writer.uint32(80).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameEvent();
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

          message.eventName = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.timestamp = longToNumber(reader.int64());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.gameId = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.playerId = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.teamId = reader.string();
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          const entry9 = GameEvent_AttributesEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.attributes[entry9.key] = entry9.value;
          }
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.type = reader.int32() as any;
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

  fromJSON(object: any): GameEvent {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      eventName: isSet(object.eventName) ? globalThis.String(object.eventName) : "",
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : undefined,
      playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : undefined,
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : undefined,
      teamId: isSet(object.teamId) ? globalThis.String(object.teamId) : undefined,
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{ [key: string]: GameEvent_EventAttribute }>((acc, [key, value]) => {
          acc[key] = GameEvent_EventAttribute.fromJSON(value);
          return acc;
        }, {})
        : {},
      type: isSet(object.type) ? gameEvent_EventTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: GameEvent): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.eventName !== "") {
      obj.eventName = message.eventName;
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.gameId !== undefined) {
      obj.gameId = message.gameId;
    }
    if (message.playerId !== undefined) {
      obj.playerId = message.playerId;
    }
    if (message.sessionId !== undefined) {
      obj.sessionId = message.sessionId;
    }
    if (message.teamId !== undefined) {
      obj.teamId = message.teamId;
    }
    if (message.attributes) {
      const entries = Object.entries(message.attributes);
      if (entries.length > 0) {
        obj.attributes = {};
        entries.forEach(([k, v]) => {
          obj.attributes[k] = GameEvent_EventAttribute.toJSON(v);
        });
      }
    }
    if (message.type !== 0) {
      obj.type = gameEvent_EventTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameEvent>, I>>(base?: I): GameEvent {
    return GameEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameEvent>, I>>(object: I): GameEvent {
    const message = createBaseGameEvent();
    message.id = object.id ?? "";
    message.eventName = object.eventName ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.gameId = object.gameId ?? undefined;
    message.playerId = object.playerId ?? undefined;
    message.sessionId = object.sessionId ?? undefined;
    message.teamId = object.teamId ?? undefined;
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{ [key: string]: GameEvent_EventAttribute }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = GameEvent_EventAttribute.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseGameEvent_AttributesEntry(): GameEvent_AttributesEntry {
  return { key: "", value: undefined };
}

export const GameEvent_AttributesEntry: MessageFns<GameEvent_AttributesEntry> = {
  encode(message: GameEvent_AttributesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      GameEvent_EventAttribute.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameEvent_AttributesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameEvent_AttributesEntry();
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

          message.value = GameEvent_EventAttribute.decode(reader, reader.uint32());
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

  fromJSON(object: any): GameEvent_AttributesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? GameEvent_EventAttribute.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GameEvent_AttributesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = GameEvent_EventAttribute.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameEvent_AttributesEntry>, I>>(base?: I): GameEvent_AttributesEntry {
    return GameEvent_AttributesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameEvent_AttributesEntry>, I>>(object: I): GameEvent_AttributesEntry {
    const message = createBaseGameEvent_AttributesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? GameEvent_EventAttribute.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseGameEvent_EventAttribute(): GameEvent_EventAttribute {
  return { stringValue: undefined, intValue: undefined, floatValue: undefined, boolValue: undefined };
}

export const GameEvent_EventAttribute: MessageFns<GameEvent_EventAttribute> = {
  encode(message: GameEvent_EventAttribute, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.stringValue !== undefined) {
      writer.uint32(10).string(message.stringValue);
    }
    if (message.intValue !== undefined) {
      writer.uint32(16).int32(message.intValue);
    }
    if (message.floatValue !== undefined) {
      writer.uint32(29).float(message.floatValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(32).bool(message.boolValue);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameEvent_EventAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameEvent_EventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.stringValue = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.intValue = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 29) {
            break;
          }

          message.floatValue = reader.float();
          continue;
        }
        case 4: {
          if (tag !== 32) {
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

  fromJSON(object: any): GameEvent_EventAttribute {
    return {
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
      intValue: isSet(object.intValue) ? globalThis.Number(object.intValue) : undefined,
      floatValue: isSet(object.floatValue) ? globalThis.Number(object.floatValue) : undefined,
      boolValue: isSet(object.boolValue) ? globalThis.Boolean(object.boolValue) : undefined,
    };
  },

  toJSON(message: GameEvent_EventAttribute): unknown {
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

  create<I extends Exact<DeepPartial<GameEvent_EventAttribute>, I>>(base?: I): GameEvent_EventAttribute {
    return GameEvent_EventAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameEvent_EventAttribute>, I>>(object: I): GameEvent_EventAttribute {
    const message = createBaseGameEvent_EventAttribute();
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
