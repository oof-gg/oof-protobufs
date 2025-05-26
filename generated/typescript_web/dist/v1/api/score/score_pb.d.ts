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

  getOffset(): number;
  setOffset(value: number): PlayerScoresRequest;

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
    offset: number,
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

  getOffset(): number;
  setOffset(value: number): LeaderboardRequest;

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
    offset: number,
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

export class StandardResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): StandardResponse;

  getMessage(): string;
  setMessage(value: string): StandardResponse;

  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): StandardResponse;
  clearErrorsList(): StandardResponse;
  addErrors(value: string, index?: number): StandardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StandardResponse): StandardResponse.AsObject;
  static serializeBinaryToWriter(message: StandardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardResponse;
  static deserializeBinaryFromReader(message: StandardResponse, reader: jspb.BinaryReader): StandardResponse;
}

export namespace StandardResponse {
  export type AsObject = {
    success: boolean,
    message: string,
    errorsList: Array<string>,
  }
}

