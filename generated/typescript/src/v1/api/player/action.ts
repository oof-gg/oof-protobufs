// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v3.14.0
// source: v1/api/player/action.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "v1.api.player";

/** / Type of action */
export enum ActionType {
  /** CUSTOM - / Custom action */
  CUSTOM = 0,
  /** MOVE - / Move action */
  MOVE = 1,
  /** JUMP - / Jump action */
  JUMP = 2,
  /** SHOOT - / Shoot action */
  SHOOT = 3,
  /** PICKUP - / Pickup action */
  PICKUP = 4,
  /** DROP - / Drop action */
  DROP = 5,
  /** USE - / Use action */
  USE = 6,
  /** INTERACT - / Interact action */
  INTERACT = 7,
  UNRECOGNIZED = -1,
}

export function actionTypeFromJSON(object: any): ActionType {
  switch (object) {
    case 0:
    case "CUSTOM":
      return ActionType.CUSTOM;
    case 1:
    case "MOVE":
      return ActionType.MOVE;
    case 2:
    case "JUMP":
      return ActionType.JUMP;
    case 3:
    case "SHOOT":
      return ActionType.SHOOT;
    case 4:
    case "PICKUP":
      return ActionType.PICKUP;
    case 5:
    case "DROP":
      return ActionType.DROP;
    case 6:
    case "USE":
      return ActionType.USE;
    case 7:
    case "INTERACT":
      return ActionType.INTERACT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionType.UNRECOGNIZED;
  }
}

export function actionTypeToJSON(object: ActionType): string {
  switch (object) {
    case ActionType.CUSTOM:
      return "CUSTOM";
    case ActionType.MOVE:
      return "MOVE";
    case ActionType.JUMP:
      return "JUMP";
    case ActionType.SHOOT:
      return "SHOOT";
    case ActionType.PICKUP:
      return "PICKUP";
    case ActionType.DROP:
      return "DROP";
    case ActionType.USE:
      return "USE";
    case ActionType.INTERACT:
      return "INTERACT";
    case ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PlayerAction {
  /** / Unique identifier of the player */
  playerId: string;
  /** / Unique identifier of the session */
  sessionId: string;
  /** / Unique identifier of the game */
  gameId: string;
  /** / Type of action */
  type: ActionType;
  /** / Position of the player (optional) */
  position?:
    | Position
    | undefined;
  /** / Velocity of the player (optional) */
  velocity?:
    | Velocity
    | undefined;
  /** / Custom actions the player can take */
  action: { [key: string]: PlayerActionAttribute };
  timestamp: number;
}

export interface PlayerAction_ActionEntry {
  key: string;
  value: PlayerActionAttribute | undefined;
}

/** / Position of the player */
export interface Position {
  x: number;
  y: number;
  z: number;
}

/** / Velocity of the player */
export interface Velocity {
  x: number;
  y: number;
  z: number;
}

/** / Custom actions the player can take */
export interface PlayerActionAttribute {
  stringValue?: string | undefined;
  intValue?: number | undefined;
  floatValue?: number | undefined;
  boolValue?: boolean | undefined;
}

function createBasePlayerAction(): PlayerAction {
  return {
    playerId: "",
    sessionId: "",
    gameId: "",
    type: 0,
    position: undefined,
    velocity: undefined,
    action: {},
    timestamp: 0,
  };
}

export const PlayerAction: MessageFns<PlayerAction> = {
  encode(message: PlayerAction, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.playerId !== "") {
      writer.uint32(10).string(message.playerId);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.gameId !== "") {
      writer.uint32(26).string(message.gameId);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(42).fork()).join();
    }
    if (message.velocity !== undefined) {
      Velocity.encode(message.velocity, writer.uint32(50).fork()).join();
    }
    Object.entries(message.action).forEach(([key, value]) => {
      PlayerAction_ActionEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).join();
    });
    if (message.timestamp !== 0) {
      writer.uint32(64).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerAction();
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

          message.type = reader.int32() as any;
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.position = Position.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.velocity = Velocity.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          const entry7 = PlayerAction_ActionEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.action[entry7.key] = entry7.value;
          }
          continue;
        }
        case 8: {
          if (tag !== 64) {
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

  fromJSON(object: any): PlayerAction {
    return {
      playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : "",
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
      type: isSet(object.type) ? actionTypeFromJSON(object.type) : 0,
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      velocity: isSet(object.velocity) ? Velocity.fromJSON(object.velocity) : undefined,
      action: isObject(object.action)
        ? Object.entries(object.action).reduce<{ [key: string]: PlayerActionAttribute }>((acc, [key, value]) => {
          acc[key] = PlayerActionAttribute.fromJSON(value);
          return acc;
        }, {})
        : {},
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
    };
  },

  toJSON(message: PlayerAction): unknown {
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
    if (message.type !== 0) {
      obj.type = actionTypeToJSON(message.type);
    }
    if (message.position !== undefined) {
      obj.position = Position.toJSON(message.position);
    }
    if (message.velocity !== undefined) {
      obj.velocity = Velocity.toJSON(message.velocity);
    }
    if (message.action) {
      const entries = Object.entries(message.action);
      if (entries.length > 0) {
        obj.action = {};
        entries.forEach(([k, v]) => {
          obj.action[k] = PlayerActionAttribute.toJSON(v);
        });
      }
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerAction>, I>>(base?: I): PlayerAction {
    return PlayerAction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerAction>, I>>(object: I): PlayerAction {
    const message = createBasePlayerAction();
    message.playerId = object.playerId ?? "";
    message.sessionId = object.sessionId ?? "";
    message.gameId = object.gameId ?? "";
    message.type = object.type ?? 0;
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    message.velocity = (object.velocity !== undefined && object.velocity !== null)
      ? Velocity.fromPartial(object.velocity)
      : undefined;
    message.action = Object.entries(object.action ?? {}).reduce<{ [key: string]: PlayerActionAttribute }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PlayerActionAttribute.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBasePlayerAction_ActionEntry(): PlayerAction_ActionEntry {
  return { key: "", value: undefined };
}

export const PlayerAction_ActionEntry: MessageFns<PlayerAction_ActionEntry> = {
  encode(message: PlayerAction_ActionEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PlayerActionAttribute.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerAction_ActionEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerAction_ActionEntry();
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

          message.value = PlayerActionAttribute.decode(reader, reader.uint32());
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

  fromJSON(object: any): PlayerAction_ActionEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? PlayerActionAttribute.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PlayerAction_ActionEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = PlayerActionAttribute.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerAction_ActionEntry>, I>>(base?: I): PlayerAction_ActionEntry {
    return PlayerAction_ActionEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerAction_ActionEntry>, I>>(object: I): PlayerAction_ActionEntry {
    const message = createBasePlayerAction_ActionEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PlayerActionAttribute.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBasePosition(): Position {
  return { x: 0, y: 0, z: 0 };
}

export const Position: MessageFns<Position> = {
  encode(message: Position, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Position {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        }
        case 2: {
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
        }
        case 3: {
          if (tag !== 29) {
            break;
          }

          message.z = reader.float();
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

  fromJSON(object: any): Position {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
      z: isSet(object.z) ? globalThis.Number(object.z) : 0,
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    if (message.z !== 0) {
      obj.z = message.z;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Position>, I>>(base?: I): Position {
    return Position.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Position>, I>>(object: I): Position {
    const message = createBasePosition();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseVelocity(): Velocity {
  return { x: 0, y: 0, z: 0 };
}

export const Velocity: MessageFns<Velocity> = {
  encode(message: Velocity, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Velocity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVelocity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        }
        case 2: {
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
        }
        case 3: {
          if (tag !== 29) {
            break;
          }

          message.z = reader.float();
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

  fromJSON(object: any): Velocity {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
      z: isSet(object.z) ? globalThis.Number(object.z) : 0,
    };
  },

  toJSON(message: Velocity): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    if (message.z !== 0) {
      obj.z = message.z;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Velocity>, I>>(base?: I): Velocity {
    return Velocity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Velocity>, I>>(object: I): Velocity {
    const message = createBaseVelocity();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBasePlayerActionAttribute(): PlayerActionAttribute {
  return { stringValue: undefined, intValue: undefined, floatValue: undefined, boolValue: undefined };
}

export const PlayerActionAttribute: MessageFns<PlayerActionAttribute> = {
  encode(message: PlayerActionAttribute, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerActionAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerActionAttribute();
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

  fromJSON(object: any): PlayerActionAttribute {
    return {
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
      intValue: isSet(object.intValue) ? globalThis.Number(object.intValue) : undefined,
      floatValue: isSet(object.floatValue) ? globalThis.Number(object.floatValue) : undefined,
      boolValue: isSet(object.boolValue) ? globalThis.Boolean(object.boolValue) : undefined,
    };
  },

  toJSON(message: PlayerActionAttribute): unknown {
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

  create<I extends Exact<DeepPartial<PlayerActionAttribute>, I>>(base?: I): PlayerActionAttribute {
    return PlayerActionAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerActionAttribute>, I>>(object: I): PlayerActionAttribute {
    const message = createBasePlayerActionAttribute();
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
