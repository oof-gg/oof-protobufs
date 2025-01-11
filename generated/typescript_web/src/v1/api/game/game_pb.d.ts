import * as jspb from 'google-protobuf'



export class Game extends jspb.Message {
  getId(): string;
  setId(value: string): Game;

  getName(): string;
  setName(value: string): Game;

  getShortDescription(): string;
  setShortDescription(value: string): Game;

  getDescription(): string;
  setDescription(value: string): Game;

  getImageUrl(): string;
  setImageUrl(value: string): Game;

  getMaxSessions(): string;
  setMaxSessions(value: string): Game;

  getMaxPlayersPerSession(): string;
  setMaxPlayersPerSession(value: string): Game;

  getData(): string;
  setData(value: string): Game;
  hasData(): boolean;
  clearData(): Game;

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
    shortDescription: string,
    description: string,
    imageUrl: string,
    maxSessions: string,
    maxPlayersPerSession: string,
    data?: string,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 8,
  }
}

export class GameCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GameCreateRequest;

  getDescription(): string;
  setDescription(value: string): GameCreateRequest;

  getData(): string;
  setData(value: string): GameCreateRequest;
  hasData(): boolean;
  clearData(): GameCreateRequest;

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
    data?: string,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 3,
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
  hasId(): boolean;
  clearId(): GameGetRequest;

  getLimit(): number;
  setLimit(value: number): GameGetRequest;
  hasLimit(): boolean;
  clearLimit(): GameGetRequest;

  getCursor(): string;
  setCursor(value: string): GameGetRequest;
  hasCursor(): boolean;
  clearCursor(): GameGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameGetRequest): GameGetRequest.AsObject;
  static serializeBinaryToWriter(message: GameGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameGetRequest;
  static deserializeBinaryFromReader(message: GameGetRequest, reader: jspb.BinaryReader): GameGetRequest;
}

export namespace GameGetRequest {
  export type AsObject = {
    id?: string,
    limit?: number,
    cursor?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum LimitCase { 
    _LIMIT_NOT_SET = 0,
    LIMIT = 2,
  }

  export enum CursorCase { 
    _CURSOR_NOT_SET = 0,
    CURSOR = 3,
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
  hasData(): boolean;
  clearData(): GameUpdateRequest;

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
    data?: string,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 4,
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

export class Games extends jspb.Message {
  getGamesList(): Array<Game>;
  setGamesList(value: Array<Game>): Games;
  clearGamesList(): Games;
  addGames(value?: Game, index?: number): Game;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Games.AsObject;
  static toObject(includeInstance: boolean, msg: Games): Games.AsObject;
  static serializeBinaryToWriter(message: Games, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Games;
  static deserializeBinaryFromReader(message: Games, reader: jspb.BinaryReader): Games;
}

export namespace Games {
  export type AsObject = {
    gamesList: Array<Game.AsObject>,
  }
}

