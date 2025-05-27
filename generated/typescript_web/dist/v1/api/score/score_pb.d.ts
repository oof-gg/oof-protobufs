import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Score extends jspb.Message {
  getId(): string;
  setId(value: string): Score;

  getPlayerId(): string;
  setPlayerId(value: string): Score;

  getGameId(): string;
  setGameId(value: string): Score;

  getInstanceId(): string;
  setInstanceId(value: string): Score;

  getValue(): number;
  setValue(value: number): Score;

  getScoreType(): string;
  setScoreType(value: string): Score;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Score;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Score;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): Score;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Score.AsObject;
  static toObject(includeInstance: boolean, msg: Score): Score.AsObject;
  static serializeBinaryToWriter(message: Score, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Score;
  static deserializeBinaryFromReader(message: Score, reader: jspb.BinaryReader): Score;
}

export namespace Score {
  export type AsObject = {
    id: string,
    playerId: string,
    gameId: string,
    instanceId: string,
    value: number,
    scoreType: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadataMap: Array<[string, string]>,
  }
}

export class LeaderboardEntry extends jspb.Message {
  getRank(): number;
  setRank(value: number): LeaderboardEntry;

  getScore(): Score | undefined;
  setScore(value?: Score): LeaderboardEntry;
  hasScore(): boolean;
  clearScore(): LeaderboardEntry;

  getPlayerName(): string;
  setPlayerName(value: string): LeaderboardEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaderboardEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LeaderboardEntry): LeaderboardEntry.AsObject;
  static serializeBinaryToWriter(message: LeaderboardEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaderboardEntry;
  static deserializeBinaryFromReader(message: LeaderboardEntry, reader: jspb.BinaryReader): LeaderboardEntry;
}

export namespace LeaderboardEntry {
  export type AsObject = {
    rank: number,
    score?: Score.AsObject,
    playerName: string,
  }
}

export class PlayerScoresRequest extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): PlayerScoresRequest;

  getGameId(): string;
  setGameId(value: string): PlayerScoresRequest;

  getLimit(): number;
  setLimit(value: number): PlayerScoresRequest;

  getCursor(): string;
  setCursor(value: string): PlayerScoresRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerScoresRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerScoresRequest): PlayerScoresRequest.AsObject;
  static serializeBinaryToWriter(message: PlayerScoresRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerScoresRequest;
  static deserializeBinaryFromReader(message: PlayerScoresRequest, reader: jspb.BinaryReader): PlayerScoresRequest;
}

export namespace PlayerScoresRequest {
  export type AsObject = {
    playerId: string,
    gameId: string,
    limit: number,
    cursor: string,
  }
}

export class PlayerScoresResponse extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): PlayerScoresResponse;

  getGameId(): string;
  setGameId(value: string): PlayerScoresResponse;

  getScoresList(): Array<Score>;
  setScoresList(value: Array<Score>): PlayerScoresResponse;
  clearScoresList(): PlayerScoresResponse;
  addScores(value?: Score, index?: number): Score;

  getTotalCount(): number;
  setTotalCount(value: number): PlayerScoresResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerScoresResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerScoresResponse): PlayerScoresResponse.AsObject;
  static serializeBinaryToWriter(message: PlayerScoresResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerScoresResponse;
  static deserializeBinaryFromReader(message: PlayerScoresResponse, reader: jspb.BinaryReader): PlayerScoresResponse;
}

export namespace PlayerScoresResponse {
  export type AsObject = {
    playerId: string,
    gameId: string,
    scoresList: Array<Score.AsObject>,
    totalCount: number,
  }
}

export class Leaderboard extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): Leaderboard;

  getScoreType(): string;
  setScoreType(value: string): Leaderboard;

  getTimePeriod(): string;
  setTimePeriod(value: string): Leaderboard;

  getEntriesList(): Array<LeaderboardEntry>;
  setEntriesList(value: Array<LeaderboardEntry>): Leaderboard;
  clearEntriesList(): Leaderboard;
  addEntries(value?: LeaderboardEntry, index?: number): LeaderboardEntry;

  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): Leaderboard;
  hasLastUpdated(): boolean;
  clearLastUpdated(): Leaderboard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Leaderboard.AsObject;
  static toObject(includeInstance: boolean, msg: Leaderboard): Leaderboard.AsObject;
  static serializeBinaryToWriter(message: Leaderboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Leaderboard;
  static deserializeBinaryFromReader(message: Leaderboard, reader: jspb.BinaryReader): Leaderboard;
}

export namespace Leaderboard {
  export type AsObject = {
    gameId: string,
    scoreType: string,
    timePeriod: string,
    entriesList: Array<LeaderboardEntry.AsObject>,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ScoreSubmission extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): ScoreSubmission;

  getGameId(): string;
  setGameId(value: string): ScoreSubmission;

  getInstanceId(): string;
  setInstanceId(value: string): ScoreSubmission;

  getValue(): number;
  setValue(value: number): ScoreSubmission;

  getScoreType(): string;
  setScoreType(value: string): ScoreSubmission;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): ScoreSubmission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScoreSubmission.AsObject;
  static toObject(includeInstance: boolean, msg: ScoreSubmission): ScoreSubmission.AsObject;
  static serializeBinaryToWriter(message: ScoreSubmission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScoreSubmission;
  static deserializeBinaryFromReader(message: ScoreSubmission, reader: jspb.BinaryReader): ScoreSubmission;
}

export namespace ScoreSubmission {
  export type AsObject = {
    playerId: string,
    gameId: string,
    instanceId: string,
    value: number,
    scoreType: string,
    metadataMap: Array<[string, string]>,
  }
}

export class LeaderboardRequest extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): LeaderboardRequest;

  getScoreType(): string;
  setScoreType(value: string): LeaderboardRequest;

  getTimePeriod(): string;
  setTimePeriod(value: string): LeaderboardRequest;

  getLimit(): number;
  setLimit(value: number): LeaderboardRequest;

  getCursor(): string;
  setCursor(value: string): LeaderboardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaderboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaderboardRequest): LeaderboardRequest.AsObject;
  static serializeBinaryToWriter(message: LeaderboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaderboardRequest;
  static deserializeBinaryFromReader(message: LeaderboardRequest, reader: jspb.BinaryReader): LeaderboardRequest;
}

export namespace LeaderboardRequest {
  export type AsObject = {
    gameId: string,
    scoreType: string,
    timePeriod: string,
    limit: number,
    cursor: string,
  }
}

export class PlayerRankRequest extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): PlayerRankRequest;

  getGameId(): string;
  setGameId(value: string): PlayerRankRequest;

  getScoreType(): string;
  setScoreType(value: string): PlayerRankRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerRankRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerRankRequest): PlayerRankRequest.AsObject;
  static serializeBinaryToWriter(message: PlayerRankRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerRankRequest;
  static deserializeBinaryFromReader(message: PlayerRankRequest, reader: jspb.BinaryReader): PlayerRankRequest;
}

export namespace PlayerRankRequest {
  export type AsObject = {
    playerId: string,
    gameId: string,
    scoreType: string,
  }
}

export class PlayerRankResponse extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): PlayerRankResponse;

  getGameId(): string;
  setGameId(value: string): PlayerRankResponse;

  getScoreType(): string;
  setScoreType(value: string): PlayerRankResponse;

  getRank(): number;
  setRank(value: number): PlayerRankResponse;

  getScoreValue(): number;
  setScoreValue(value: number): PlayerRankResponse;

  getTotalPlayers(): number;
  setTotalPlayers(value: number): PlayerRankResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerRankResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerRankResponse): PlayerRankResponse.AsObject;
  static serializeBinaryToWriter(message: PlayerRankResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerRankResponse;
  static deserializeBinaryFromReader(message: PlayerRankResponse, reader: jspb.BinaryReader): PlayerRankResponse;
}

export namespace PlayerRankResponse {
  export type AsObject = {
    playerId: string,
    gameId: string,
    scoreType: string,
    rank: number,
    scoreValue: number,
    totalPlayers: number,
  }
}

export class PaginationMetadata extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): PaginationMetadata;
  hasPageSize(): boolean;
  clearPageSize(): PaginationMetadata;

  getPrevPageToken(): string;
  setPrevPageToken(value: string): PaginationMetadata;
  hasPrevPageToken(): boolean;
  clearPrevPageToken(): PaginationMetadata;

  getNextPageToken(): string;
  setNextPageToken(value: string): PaginationMetadata;
  hasNextPageToken(): boolean;
  clearNextPageToken(): PaginationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationMetadata): PaginationMetadata.AsObject;
  static serializeBinaryToWriter(message: PaginationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationMetadata;
  static deserializeBinaryFromReader(message: PaginationMetadata, reader: jspb.BinaryReader): PaginationMetadata;
}

export namespace PaginationMetadata {
  export type AsObject = {
    pageSize?: number,
    prevPageToken?: string,
    nextPageToken?: string,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 1,
  }

  export enum PrevPageTokenCase { 
    _PREV_PAGE_TOKEN_NOT_SET = 0,
    PREV_PAGE_TOKEN = 2,
  }

  export enum NextPageTokenCase { 
    _NEXT_PAGE_TOKEN_NOT_SET = 0,
    NEXT_PAGE_TOKEN = 3,
  }
}

export class Status extends jspb.Message {
  getCode(): number;
  setCode(value: number): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  getDetails(): string;
  setDetails(value: string): Status;

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
    details: string,
  }
}

export class PaginatedResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): PaginatedResponse;

  getMessage(): string;
  setMessage(value: string): PaginatedResponse;

  getError(): Status | undefined;
  setError(value?: Status): PaginatedResponse;
  hasError(): boolean;
  clearError(): PaginatedResponse;

  getPagination(): PaginationMetadata | undefined;
  setPagination(value?: PaginationMetadata): PaginatedResponse;
  hasPagination(): boolean;
  clearPagination(): PaginatedResponse;

  getPlayerScores(): PlayerScoresResponse | undefined;
  setPlayerScores(value?: PlayerScoresResponse): PaginatedResponse;
  hasPlayerScores(): boolean;
  clearPlayerScores(): PaginatedResponse;

  getLeaderboard(): Leaderboard | undefined;
  setLeaderboard(value?: Leaderboard): PaginatedResponse;
  hasLeaderboard(): boolean;
  clearLeaderboard(): PaginatedResponse;

  getLeaderboardEntry(): LeaderboardEntry | undefined;
  setLeaderboardEntry(value?: LeaderboardEntry): PaginatedResponse;
  hasLeaderboardEntry(): boolean;
  clearLeaderboardEntry(): PaginatedResponse;

  getPlayerRank(): PlayerRankResponse | undefined;
  setPlayerRank(value?: PlayerRankResponse): PaginatedResponse;
  hasPlayerRank(): boolean;
  clearPlayerRank(): PaginatedResponse;

  getDataCase(): PaginatedResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginatedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaginatedResponse): PaginatedResponse.AsObject;
  static serializeBinaryToWriter(message: PaginatedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginatedResponse;
  static deserializeBinaryFromReader(message: PaginatedResponse, reader: jspb.BinaryReader): PaginatedResponse;
}

export namespace PaginatedResponse {
  export type AsObject = {
    code: number,
    message: string,
    error?: Status.AsObject,
    pagination?: PaginationMetadata.AsObject,
    playerScores?: PlayerScoresResponse.AsObject,
    leaderboard?: Leaderboard.AsObject,
    leaderboardEntry?: LeaderboardEntry.AsObject,
    playerRank?: PlayerRankResponse.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    PLAYER_SCORES = 5,
    LEADERBOARD = 6,
    LEADERBOARD_ENTRY = 7,
    PLAYER_RANK = 8,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 4,
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

  getPlayerScores(): PlayerScoresResponse | undefined;
  setPlayerScores(value?: PlayerScoresResponse): StandardResponse;
  hasPlayerScores(): boolean;
  clearPlayerScores(): StandardResponse;

  getLeaderboard(): Leaderboard | undefined;
  setLeaderboard(value?: Leaderboard): StandardResponse;
  hasLeaderboard(): boolean;
  clearLeaderboard(): StandardResponse;

  getLeaderboardEntry(): LeaderboardEntry | undefined;
  setLeaderboardEntry(value?: LeaderboardEntry): StandardResponse;
  hasLeaderboardEntry(): boolean;
  clearLeaderboardEntry(): StandardResponse;

  getPlayerRank(): PlayerRankResponse | undefined;
  setPlayerRank(value?: PlayerRankResponse): StandardResponse;
  hasPlayerRank(): boolean;
  clearPlayerRank(): StandardResponse;

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
    playerScores?: PlayerScoresResponse.AsObject,
    leaderboard?: Leaderboard.AsObject,
    leaderboardEntry?: LeaderboardEntry.AsObject,
    playerRank?: PlayerRankResponse.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    PLAYER_SCORES = 5,
    LEADERBOARD = 6,
    LEADERBOARD_ENTRY = 7,
    PLAYER_RANK = 8,
  }
}

