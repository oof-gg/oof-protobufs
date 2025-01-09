import * as jspb from 'google-protobuf'



export class Game extends jspb.Message {
  getId(): string;
  setId(value: string): Game;

  getName(): string;
  setName(value: string): Game;

  getDescription(): string;
  setDescription(value: string): Game;

  getData(): string;
  setData(value: string): Game;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Game.AsObject;
  static toObject(includeInstance: boolean, msg: Game): Game.AsObject;
  static serializeBinaryToWriter(message: Game, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Game;
  static deserializeBinaryFromReader(message: Game, reader: jspb.BinaryReader): Game;
}

export namespace Game {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    data: string,
  }
}

export class GameCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GameCreateRequest;

  getDescription(): string;
  setDescription(value: string): GameCreateRequest;

  getData(): string;
  setData(value: string): GameCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameCreateRequest): GameCreateRequest.AsObject;
  static serializeBinaryToWriter(message: GameCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameCreateRequest;
  static deserializeBinaryFromReader(message: GameCreateRequest, reader: jspb.BinaryReader): GameCreateRequest;
}

export namespace GameCreateRequest {
  export type AsObject = {
    name: string,
    description: string,
    data: string,
  }
}

export class GameCreateResponse extends jspb.Message {
  getGame(): Game | undefined;
  setGame(value?: Game): GameCreateResponse;
  hasGame(): boolean;
  clearGame(): GameCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameCreateResponse): GameCreateResponse.AsObject;
  static serializeBinaryToWriter(message: GameCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameCreateResponse;
  static deserializeBinaryFromReader(message: GameCreateResponse, reader: jspb.BinaryReader): GameCreateResponse;
}

export namespace GameCreateResponse {
  export type AsObject = {
    game?: Game.AsObject,
  }
}

export class GameGetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameGetRequest): GameGetRequest.AsObject;
  static serializeBinaryToWriter(message: GameGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameGetRequest;
  static deserializeBinaryFromReader(message: GameGetRequest, reader: jspb.BinaryReader): GameGetRequest;
}

export namespace GameGetRequest {
  export type AsObject = {
    id: string,
  }
}

export class GameGetResponse extends jspb.Message {
  getGame(): Game | undefined;
  setGame(value?: Game): GameGetResponse;
  hasGame(): boolean;
  clearGame(): GameGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameGetResponse): GameGetResponse.AsObject;
  static serializeBinaryToWriter(message: GameGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameGetResponse;
  static deserializeBinaryFromReader(message: GameGetResponse, reader: jspb.BinaryReader): GameGetResponse;
}

export namespace GameGetResponse {
  export type AsObject = {
    game?: Game.AsObject,
  }
}

export class GameUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameUpdateRequest;

  getName(): string;
  setName(value: string): GameUpdateRequest;

  getDescription(): string;
  setDescription(value: string): GameUpdateRequest;

  getData(): string;
  setData(value: string): GameUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateRequest): GameUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: GameUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateRequest;
  static deserializeBinaryFromReader(message: GameUpdateRequest, reader: jspb.BinaryReader): GameUpdateRequest;
}

export namespace GameUpdateRequest {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    data: string,
  }
}

export class GameUpdateResponse extends jspb.Message {
  getGame(): Game | undefined;
  setGame(value?: Game): GameUpdateResponse;
  hasGame(): boolean;
  clearGame(): GameUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateResponse): GameUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: GameUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateResponse;
  static deserializeBinaryFromReader(message: GameUpdateResponse, reader: jspb.BinaryReader): GameUpdateResponse;
}

export namespace GameUpdateResponse {
  export type AsObject = {
    game?: Game.AsObject,
  }
}
