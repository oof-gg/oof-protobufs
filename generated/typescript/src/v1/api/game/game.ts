// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: v1/api/game/game.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "v1.api.game";

export interface Game {
  id: string;
  name: string;
  description: string;
  data: string;
}

export interface GameCreateRequest {
  name: string;
  description: string;
  data: string;
}

export interface GameCreateResponse {
  game: Game | undefined;
}

export interface GameGetRequest {
  id: string;
}

export interface GameGetResponse {
  game: Game | undefined;
}

export interface GameUpdateRequest {
  id: string;
  name: string;
  description: string;
  data: string;
}

export interface GameUpdateResponse {
  game: Game | undefined;
}

function createBaseGame(): Game {
  return { id: "", name: "", description: "", data: "" };
}

export const Game: MessageFns<Game> = {
  encode(message: Game, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Game {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGame();
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

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
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

  fromJSON(object: any): Game {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      data: isSet(object.data) ? globalThis.String(object.data) : "",
    };
  },

  toJSON(message: Game): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Game>, I>>(base?: I): Game {
    return Game.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Game>, I>>(object: I): Game {
    const message = createBaseGame();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseGameCreateRequest(): GameCreateRequest {
  return { name: "", description: "", data: "" };
}

export const GameCreateRequest: MessageFns<GameCreateRequest> = {
  encode(message: GameCreateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameCreateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameCreateRequest();
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

          message.description = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
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

  fromJSON(object: any): GameCreateRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      data: isSet(object.data) ? globalThis.String(object.data) : "",
    };
  },

  toJSON(message: GameCreateRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameCreateRequest>, I>>(base?: I): GameCreateRequest {
    return GameCreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameCreateRequest>, I>>(object: I): GameCreateRequest {
    const message = createBaseGameCreateRequest();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseGameCreateResponse(): GameCreateResponse {
  return { game: undefined };
}

export const GameCreateResponse: MessageFns<GameCreateResponse> = {
  encode(message: GameCreateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.game !== undefined) {
      Game.encode(message.game, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameCreateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.game = Game.decode(reader, reader.uint32());
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

  fromJSON(object: any): GameCreateResponse {
    return { game: isSet(object.game) ? Game.fromJSON(object.game) : undefined };
  },

  toJSON(message: GameCreateResponse): unknown {
    const obj: any = {};
    if (message.game !== undefined) {
      obj.game = Game.toJSON(message.game);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameCreateResponse>, I>>(base?: I): GameCreateResponse {
    return GameCreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameCreateResponse>, I>>(object: I): GameCreateResponse {
    const message = createBaseGameCreateResponse();
    message.game = (object.game !== undefined && object.game !== null) ? Game.fromPartial(object.game) : undefined;
    return message;
  },
};

function createBaseGameGetRequest(): GameGetRequest {
  return { id: "" };
}

export const GameGetRequest: MessageFns<GameGetRequest> = {
  encode(message: GameGetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameGetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameGetRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameGetRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GameGetRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameGetRequest>, I>>(base?: I): GameGetRequest {
    return GameGetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameGetRequest>, I>>(object: I): GameGetRequest {
    const message = createBaseGameGetRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGameGetResponse(): GameGetResponse {
  return { game: undefined };
}

export const GameGetResponse: MessageFns<GameGetResponse> = {
  encode(message: GameGetResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.game !== undefined) {
      Game.encode(message.game, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameGetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.game = Game.decode(reader, reader.uint32());
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

  fromJSON(object: any): GameGetResponse {
    return { game: isSet(object.game) ? Game.fromJSON(object.game) : undefined };
  },

  toJSON(message: GameGetResponse): unknown {
    const obj: any = {};
    if (message.game !== undefined) {
      obj.game = Game.toJSON(message.game);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameGetResponse>, I>>(base?: I): GameGetResponse {
    return GameGetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameGetResponse>, I>>(object: I): GameGetResponse {
    const message = createBaseGameGetResponse();
    message.game = (object.game !== undefined && object.game !== null) ? Game.fromPartial(object.game) : undefined;
    return message;
  },
};

function createBaseGameUpdateRequest(): GameUpdateRequest {
  return { id: "", name: "", description: "", data: "" };
}

export const GameUpdateRequest: MessageFns<GameUpdateRequest> = {
  encode(message: GameUpdateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameUpdateRequest();
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

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
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

  fromJSON(object: any): GameUpdateRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      data: isSet(object.data) ? globalThis.String(object.data) : "",
    };
  },

  toJSON(message: GameUpdateRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameUpdateRequest>, I>>(base?: I): GameUpdateRequest {
    return GameUpdateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameUpdateRequest>, I>>(object: I): GameUpdateRequest {
    const message = createBaseGameUpdateRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseGameUpdateResponse(): GameUpdateResponse {
  return { game: undefined };
}

export const GameUpdateResponse: MessageFns<GameUpdateResponse> = {
  encode(message: GameUpdateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.game !== undefined) {
      Game.encode(message.game, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameUpdateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.game = Game.decode(reader, reader.uint32());
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

  fromJSON(object: any): GameUpdateResponse {
    return { game: isSet(object.game) ? Game.fromJSON(object.game) : undefined };
  },

  toJSON(message: GameUpdateResponse): unknown {
    const obj: any = {};
    if (message.game !== undefined) {
      obj.game = Game.toJSON(message.game);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameUpdateResponse>, I>>(base?: I): GameUpdateResponse {
    return GameUpdateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameUpdateResponse>, I>>(object: I): GameUpdateResponse {
    const message = createBaseGameUpdateResponse();
    message.game = (object.game !== undefined && object.game !== null) ? Game.fromPartial(object.game) : undefined;
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
