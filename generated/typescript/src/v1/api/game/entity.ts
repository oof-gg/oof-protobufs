// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: v1/api/game/entity.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "v1.api.game";

/** / The Entity message */
export interface Entity {
  /** / The name of the entity, e.g. "ball" */
  name: string;
  /** / The type of the entity, e.g. "object" */
  type: string;
  /** / The unique identifier of the entity */
  id: string;
  /** / The session id of the entity */
  sessionId: string;
  /** / The game id of the entity */
  gameId: string;
  /** / The attributes of the entity */
  attributes: { [key: string]: EntityAttribute };
  /** / The controller of the entity */
  controller: Entity_ControllerStateEnum;
  /** / The owner of the entity */
  playerId?:
    | string
    | undefined;
  /** / Can be any JSON data */
  data?: string | undefined;
}

export enum Entity_ControllerStateEnum {
  SERVER = 0,
  PLAYER = 1,
  UNRECOGNIZED = -1,
}

export function entity_ControllerStateEnumFromJSON(object: any): Entity_ControllerStateEnum {
  switch (object) {
    case 0:
    case "SERVER":
      return Entity_ControllerStateEnum.SERVER;
    case 1:
    case "PLAYER":
      return Entity_ControllerStateEnum.PLAYER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Entity_ControllerStateEnum.UNRECOGNIZED;
  }
}

export function entity_ControllerStateEnumToJSON(object: Entity_ControllerStateEnum): string {
  switch (object) {
    case Entity_ControllerStateEnum.SERVER:
      return "SERVER";
    case Entity_ControllerStateEnum.PLAYER:
      return "PLAYER";
    case Entity_ControllerStateEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Entity_AttributesEntry {
  key: string;
  value: EntityAttribute | undefined;
}

/** / The Entities message */
export interface Entities {
  /** / The entities */
  entities: Entity[];
}

/** / The EntityAttribute message */
export interface EntityAttribute {
  stringValue?: string | undefined;
  intValue?: number | undefined;
  floatValue?: number | undefined;
  boolValue?: boolean | undefined;
}

/** / The EntityCreate message */
export interface EntityGet {
  /** / The unique identifier of the entity */
  id: string;
  /** / The session id of the entity */
  sessionId: string;
  /** / The game id of the entity */
  gameId: string;
}

/** / The RegisterEntity message */
export interface EntityCreate {
  /** / The name of the entity, e.g. "ball" */
  name: string;
  /** / The type of the entity, e.g. "object" */
  type: string;
  /** / The session id of the entity */
  sessionId: string;
  /** / The game id of the entity */
  gameId: string;
  /** / The attributes of the entity */
  attributes: { [key: string]: EntityAttribute };
  /** / The controller of the entity */
  controller: EntityCreate_ControllerStateEnum;
  /** / The owner of the entity */
  playerId?:
    | string
    | undefined;
  /** / Can be any JSON data */
  data?: string | undefined;
}

export enum EntityCreate_ControllerStateEnum {
  SERVER = 0,
  PLAYER = 1,
  UNRECOGNIZED = -1,
}

export function entityCreate_ControllerStateEnumFromJSON(object: any): EntityCreate_ControllerStateEnum {
  switch (object) {
    case 0:
    case "SERVER":
      return EntityCreate_ControllerStateEnum.SERVER;
    case 1:
    case "PLAYER":
      return EntityCreate_ControllerStateEnum.PLAYER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EntityCreate_ControllerStateEnum.UNRECOGNIZED;
  }
}

export function entityCreate_ControllerStateEnumToJSON(object: EntityCreate_ControllerStateEnum): string {
  switch (object) {
    case EntityCreate_ControllerStateEnum.SERVER:
      return "SERVER";
    case EntityCreate_ControllerStateEnum.PLAYER:
      return "PLAYER";
    case EntityCreate_ControllerStateEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EntityCreate_AttributesEntry {
  key: string;
  value: EntityAttribute | undefined;
}

/** / The EntityUpdate message */
export interface EntityUpdate {
  /** / The unique identifier of the entity */
  id: string;
  /** / The session id of the entity */
  sessionId: string;
  /** / The game id of the entity */
  gameId: string;
  /** / The attributes of the entity */
  attributes: EntityAttribute[];
}

/** / The EntityDelete message */
export interface EntityDelete {
  /** / The unique identifier of the entity */
  id: string;
  /** / The session id of the entity */
  sessionId: string;
  /** / The game id of the entity */
  gameId: string;
}

function createBaseEntity(): Entity {
  return {
    name: "",
    type: "",
    id: "",
    sessionId: "",
    gameId: "",
    attributes: {},
    controller: 0,
    playerId: undefined,
    data: undefined,
  };
}

export const Entity: MessageFns<Entity> = {
  encode(message: Entity, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.sessionId !== "") {
      writer.uint32(34).string(message.sessionId);
    }
    if (message.gameId !== "") {
      writer.uint32(42).string(message.gameId);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      Entity_AttributesEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    if (message.controller !== 0) {
      writer.uint32(56).int32(message.controller);
    }
    if (message.playerId !== undefined) {
      writer.uint32(66).string(message.playerId);
    }
    if (message.data !== undefined) {
      writer.uint32(74).string(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Entity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.gameId = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          const entry6 = Entity_AttributesEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.attributes[entry6.key] = entry6.value;
          }
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.controller = reader.int32() as any;
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.playerId = reader.string();
          continue;
        }
        case 9: {
          if (tag !== 74) {
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

  fromJSON(object: any): Entity {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{ [key: string]: EntityAttribute }>((acc, [key, value]) => {
          acc[key] = EntityAttribute.fromJSON(value);
          return acc;
        }, {})
        : {},
      controller: isSet(object.controller) ? entity_ControllerStateEnumFromJSON(object.controller) : 0,
      playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : undefined,
      data: isSet(object.data) ? globalThis.String(object.data) : undefined,
    };
  },

  toJSON(message: Entity): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    if (message.attributes) {
      const entries = Object.entries(message.attributes);
      if (entries.length > 0) {
        obj.attributes = {};
        entries.forEach(([k, v]) => {
          obj.attributes[k] = EntityAttribute.toJSON(v);
        });
      }
    }
    if (message.controller !== 0) {
      obj.controller = entity_ControllerStateEnumToJSON(message.controller);
    }
    if (message.playerId !== undefined) {
      obj.playerId = message.playerId;
    }
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Entity>, I>>(base?: I): Entity {
    return Entity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Entity>, I>>(object: I): Entity {
    const message = createBaseEntity();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    message.sessionId = object.sessionId ?? "";
    message.gameId = object.gameId ?? "";
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{ [key: string]: EntityAttribute }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = EntityAttribute.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.controller = object.controller ?? 0;
    message.playerId = object.playerId ?? undefined;
    message.data = object.data ?? undefined;
    return message;
  },
};

function createBaseEntity_AttributesEntry(): Entity_AttributesEntry {
  return { key: "", value: undefined };
}

export const Entity_AttributesEntry: MessageFns<Entity_AttributesEntry> = {
  encode(message: Entity_AttributesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      EntityAttribute.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Entity_AttributesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntity_AttributesEntry();
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

          message.value = EntityAttribute.decode(reader, reader.uint32());
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

  fromJSON(object: any): Entity_AttributesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? EntityAttribute.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Entity_AttributesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = EntityAttribute.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Entity_AttributesEntry>, I>>(base?: I): Entity_AttributesEntry {
    return Entity_AttributesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Entity_AttributesEntry>, I>>(object: I): Entity_AttributesEntry {
    const message = createBaseEntity_AttributesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? EntityAttribute.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEntities(): Entities {
  return { entities: [] };
}

export const Entities: MessageFns<Entities> = {
  encode(message: Entities, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.entities) {
      Entity.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Entities {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.entities.push(Entity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Entities {
    return {
      entities: globalThis.Array.isArray(object?.entities) ? object.entities.map((e: any) => Entity.fromJSON(e)) : [],
    };
  },

  toJSON(message: Entities): unknown {
    const obj: any = {};
    if (message.entities?.length) {
      obj.entities = message.entities.map((e) => Entity.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Entities>, I>>(base?: I): Entities {
    return Entities.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Entities>, I>>(object: I): Entities {
    const message = createBaseEntities();
    message.entities = object.entities?.map((e) => Entity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEntityAttribute(): EntityAttribute {
  return { stringValue: undefined, intValue: undefined, floatValue: undefined, boolValue: undefined };
}

export const EntityAttribute: MessageFns<EntityAttribute> = {
  encode(message: EntityAttribute, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): EntityAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityAttribute();
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

  fromJSON(object: any): EntityAttribute {
    return {
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
      intValue: isSet(object.intValue) ? globalThis.Number(object.intValue) : undefined,
      floatValue: isSet(object.floatValue) ? globalThis.Number(object.floatValue) : undefined,
      boolValue: isSet(object.boolValue) ? globalThis.Boolean(object.boolValue) : undefined,
    };
  },

  toJSON(message: EntityAttribute): unknown {
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

  create<I extends Exact<DeepPartial<EntityAttribute>, I>>(base?: I): EntityAttribute {
    return EntityAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityAttribute>, I>>(object: I): EntityAttribute {
    const message = createBaseEntityAttribute();
    message.stringValue = object.stringValue ?? undefined;
    message.intValue = object.intValue ?? undefined;
    message.floatValue = object.floatValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    return message;
  },
};

function createBaseEntityGet(): EntityGet {
  return { id: "", sessionId: "", gameId: "" };
}

export const EntityGet: MessageFns<EntityGet> = {
  encode(message: EntityGet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.gameId !== "") {
      writer.uint32(26).string(message.gameId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EntityGet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityGet();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntityGet {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
    };
  },

  toJSON(message: EntityGet): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EntityGet>, I>>(base?: I): EntityGet {
    return EntityGet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityGet>, I>>(object: I): EntityGet {
    const message = createBaseEntityGet();
    message.id = object.id ?? "";
    message.sessionId = object.sessionId ?? "";
    message.gameId = object.gameId ?? "";
    return message;
  },
};

function createBaseEntityCreate(): EntityCreate {
  return {
    name: "",
    type: "",
    sessionId: "",
    gameId: "",
    attributes: {},
    controller: 0,
    playerId: undefined,
    data: undefined,
  };
}

export const EntityCreate: MessageFns<EntityCreate> = {
  encode(message: EntityCreate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.sessionId !== "") {
      writer.uint32(34).string(message.sessionId);
    }
    if (message.gameId !== "") {
      writer.uint32(42).string(message.gameId);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      EntityCreate_AttributesEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    if (message.controller !== 0) {
      writer.uint32(56).int32(message.controller);
    }
    if (message.playerId !== undefined) {
      writer.uint32(66).string(message.playerId);
    }
    if (message.data !== undefined) {
      writer.uint32(74).string(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EntityCreate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.gameId = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          const entry6 = EntityCreate_AttributesEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.attributes[entry6.key] = entry6.value;
          }
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.controller = reader.int32() as any;
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.playerId = reader.string();
          continue;
        }
        case 9: {
          if (tag !== 74) {
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

  fromJSON(object: any): EntityCreate {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{ [key: string]: EntityAttribute }>((acc, [key, value]) => {
          acc[key] = EntityAttribute.fromJSON(value);
          return acc;
        }, {})
        : {},
      controller: isSet(object.controller) ? entityCreate_ControllerStateEnumFromJSON(object.controller) : 0,
      playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : undefined,
      data: isSet(object.data) ? globalThis.String(object.data) : undefined,
    };
  },

  toJSON(message: EntityCreate): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    if (message.attributes) {
      const entries = Object.entries(message.attributes);
      if (entries.length > 0) {
        obj.attributes = {};
        entries.forEach(([k, v]) => {
          obj.attributes[k] = EntityAttribute.toJSON(v);
        });
      }
    }
    if (message.controller !== 0) {
      obj.controller = entityCreate_ControllerStateEnumToJSON(message.controller);
    }
    if (message.playerId !== undefined) {
      obj.playerId = message.playerId;
    }
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EntityCreate>, I>>(base?: I): EntityCreate {
    return EntityCreate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityCreate>, I>>(object: I): EntityCreate {
    const message = createBaseEntityCreate();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.sessionId = object.sessionId ?? "";
    message.gameId = object.gameId ?? "";
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{ [key: string]: EntityAttribute }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = EntityAttribute.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.controller = object.controller ?? 0;
    message.playerId = object.playerId ?? undefined;
    message.data = object.data ?? undefined;
    return message;
  },
};

function createBaseEntityCreate_AttributesEntry(): EntityCreate_AttributesEntry {
  return { key: "", value: undefined };
}

export const EntityCreate_AttributesEntry: MessageFns<EntityCreate_AttributesEntry> = {
  encode(message: EntityCreate_AttributesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      EntityAttribute.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EntityCreate_AttributesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityCreate_AttributesEntry();
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

          message.value = EntityAttribute.decode(reader, reader.uint32());
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

  fromJSON(object: any): EntityCreate_AttributesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? EntityAttribute.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EntityCreate_AttributesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = EntityAttribute.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EntityCreate_AttributesEntry>, I>>(base?: I): EntityCreate_AttributesEntry {
    return EntityCreate_AttributesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityCreate_AttributesEntry>, I>>(object: I): EntityCreate_AttributesEntry {
    const message = createBaseEntityCreate_AttributesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? EntityAttribute.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEntityUpdate(): EntityUpdate {
  return { id: "", sessionId: "", gameId: "", attributes: [] };
}

export const EntityUpdate: MessageFns<EntityUpdate> = {
  encode(message: EntityUpdate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.gameId !== "") {
      writer.uint32(26).string(message.gameId);
    }
    for (const v of message.attributes) {
      EntityAttribute.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EntityUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityUpdate();
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
          if (tag !== 34) {
            break;
          }

          message.attributes.push(EntityAttribute.decode(reader, reader.uint32()));
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

  fromJSON(object: any): EntityUpdate {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => EntityAttribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EntityUpdate): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => EntityAttribute.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EntityUpdate>, I>>(base?: I): EntityUpdate {
    return EntityUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityUpdate>, I>>(object: I): EntityUpdate {
    const message = createBaseEntityUpdate();
    message.id = object.id ?? "";
    message.sessionId = object.sessionId ?? "";
    message.gameId = object.gameId ?? "";
    message.attributes = object.attributes?.map((e) => EntityAttribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEntityDelete(): EntityDelete {
  return { id: "", sessionId: "", gameId: "" };
}

export const EntityDelete: MessageFns<EntityDelete> = {
  encode(message: EntityDelete, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.gameId !== "") {
      writer.uint32(26).string(message.gameId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EntityDelete {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDelete();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntityDelete {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
    };
  },

  toJSON(message: EntityDelete): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EntityDelete>, I>>(base?: I): EntityDelete {
    return EntityDelete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityDelete>, I>>(object: I): EntityDelete {
    const message = createBaseEntityDelete();
    message.id = object.id ?? "";
    message.sessionId = object.sessionId ?? "";
    message.gameId = object.gameId ?? "";
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