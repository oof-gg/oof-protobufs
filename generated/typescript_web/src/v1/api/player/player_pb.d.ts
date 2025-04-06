import * as jspb from 'google-protobuf'



export class Player extends jspb.Message {
  getId(): string;
  setId(value: string): Player;

  getUsername(): string;
  setUsername(value: string): Player;

  getEmail(): string;
  setEmail(value: string): Player;
  hasEmail(): boolean;
  clearEmail(): Player;

  getTeam(): string;
  setTeam(value: string): Player;
  hasTeam(): boolean;
  clearTeam(): Player;

  getScore(): number;
  setScore(value: number): Player;

  getType(): PlayerType;
  setType(value: PlayerType): Player;

  getStatus(): PlayerStatus;
  setStatus(value: PlayerStatus): Player;

  getRole(): string;
  setRole(value: string): Player;
  hasRole(): boolean;
  clearRole(): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    id: string,
    username: string,
    email?: string,
    team?: string,
    score: number,
    type: PlayerType,
    status: PlayerStatus,
    role?: string,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 3,
  }

  export enum TeamCase { 
    _TEAM_NOT_SET = 0,
    TEAM = 4,
  }

  export enum RoleCase { 
    _ROLE_NOT_SET = 0,
    ROLE = 8,
  }
}

export class PlayerCreate extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): PlayerCreate;

  getEmail(): string;
  setEmail(value: string): PlayerCreate;
  hasEmail(): boolean;
  clearEmail(): PlayerCreate;

  getTeam(): string;
  setTeam(value: string): PlayerCreate;
  hasTeam(): boolean;
  clearTeam(): PlayerCreate;

  getScore(): number;
  setScore(value: number): PlayerCreate;

  getType(): PlayerType;
  setType(value: PlayerType): PlayerCreate;

  getStatus(): PlayerStatus;
  setStatus(value: PlayerStatus): PlayerCreate;

  getRole(): string;
  setRole(value: string): PlayerCreate;
  hasRole(): boolean;
  clearRole(): PlayerCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerCreate.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerCreate): PlayerCreate.AsObject;
  static serializeBinaryToWriter(message: PlayerCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerCreate;
  static deserializeBinaryFromReader(message: PlayerCreate, reader: jspb.BinaryReader): PlayerCreate;
}

export namespace PlayerCreate {
  export type AsObject = {
    username: string,
    email?: string,
    team?: string,
    score: number,
    type: PlayerType,
    status: PlayerStatus,
    role?: string,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 2,
  }

  export enum TeamCase { 
    _TEAM_NOT_SET = 0,
    TEAM = 3,
  }

  export enum RoleCase { 
    _ROLE_NOT_SET = 0,
    ROLE = 7,
  }
}

export class PlayerUpdate extends jspb.Message {
  getId(): string;
  setId(value: string): PlayerUpdate;

  getTeam(): string;
  setTeam(value: string): PlayerUpdate;
  hasTeam(): boolean;
  clearTeam(): PlayerUpdate;

  getType(): PlayerType;
  setType(value: PlayerType): PlayerUpdate;
  hasType(): boolean;
  clearType(): PlayerUpdate;

  getStatus(): PlayerStatus;
  setStatus(value: PlayerStatus): PlayerUpdate;
  hasStatus(): boolean;
  clearStatus(): PlayerUpdate;

  getRole(): string;
  setRole(value: string): PlayerUpdate;
  hasRole(): boolean;
  clearRole(): PlayerUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerUpdate): PlayerUpdate.AsObject;
  static serializeBinaryToWriter(message: PlayerUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerUpdate;
  static deserializeBinaryFromReader(message: PlayerUpdate, reader: jspb.BinaryReader): PlayerUpdate;
}

export namespace PlayerUpdate {
  export type AsObject = {
    id: string,
    team?: string,
    type?: PlayerType,
    status?: PlayerStatus,
    role?: string,
  }

  export enum TeamCase { 
    _TEAM_NOT_SET = 0,
    TEAM = 4,
  }

  export enum TypeCase { 
    _TYPE_NOT_SET = 0,
    TYPE = 6,
  }

  export enum StatusCase { 
    _STATUS_NOT_SET = 0,
    STATUS = 7,
  }

  export enum RoleCase { 
    _ROLE_NOT_SET = 0,
    ROLE = 8,
  }
}

export class PlayerGet extends jspb.Message {
  getId(): string;
  setId(value: string): PlayerGet;
  hasId(): boolean;
  clearId(): PlayerGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerGet.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerGet): PlayerGet.AsObject;
  static serializeBinaryToWriter(message: PlayerGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerGet;
  static deserializeBinaryFromReader(message: PlayerGet, reader: jspb.BinaryReader): PlayerGet;
}

export namespace PlayerGet {
  export type AsObject = {
    id?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }
}

export class Status extends jspb.Message {
  getCode(): number;
  setCode(value: number): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  getDetailsList(): Array<string>;
  setDetailsList(value: Array<string>): Status;
  clearDetailsList(): Status;
  addDetails(value: string, index?: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: number,
    message: string,
    detailsList: Array<string>,
  }
}

export class StandardResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): StandardResponse;

  getMessage(): string;
  setMessage(value: string): StandardResponse;

  getError(): Status | undefined;
  setError(value?: Status): StandardResponse;
  hasError(): boolean;
  clearError(): StandardResponse;

  getSinglePlayer(): Player | undefined;
  setSinglePlayer(value?: Player): StandardResponse;
  hasSinglePlayer(): boolean;
  clearSinglePlayer(): StandardResponse;

  getPlayers(): Players | undefined;
  setPlayers(value?: Players): StandardResponse;
  hasPlayers(): boolean;
  clearPlayers(): StandardResponse;

  getDataCase(): StandardResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StandardResponse): StandardResponse.AsObject;
  static serializeBinaryToWriter(message: StandardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardResponse;
  static deserializeBinaryFromReader(message: StandardResponse, reader: jspb.BinaryReader): StandardResponse;
}

export namespace StandardResponse {
  export type AsObject = {
    code: number,
    message: string,
    error?: Status.AsObject,
    singlePlayer?: Player.AsObject,
    players?: Players.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    SINGLE_PLAYER = 4,
    PLAYERS = 5,
  }
}

export class Players extends jspb.Message {
  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): Players;
  clearPlayersList(): Players;
  addPlayers(value?: Player, index?: number): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Players.AsObject;
  static toObject(includeInstance: boolean, msg: Players): Players.AsObject;
  static serializeBinaryToWriter(message: Players, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Players;
  static deserializeBinaryFromReader(message: Players, reader: jspb.BinaryReader): Players;
}

export namespace Players {
  export type AsObject = {
    playersList: Array<Player.AsObject>,
  }
}

export enum PlayerType { 
  HUMAN = 0,
  AI = 1,
}
export enum PlayerStatus { 
  ACTIVE = 0,
  INACTIVE = 1,
}
