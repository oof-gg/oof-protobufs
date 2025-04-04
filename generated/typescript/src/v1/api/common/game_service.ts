// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v3.14.0
// source: v1/api/common/game_service.proto

/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  ClientDuplexStream,
  type ClientOptions,
  ClientReadableStream,
  type ClientUnaryCall,
  handleBidiStreamingCall,
  handleServerStreamingCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { EntityCreateRequest, EntityDeleteRequest, EntityGetRequest, EntityUpdateRequest } from "../game/entity";
import { GameEvent } from "../game/event";
import {
  GameCreateRequest,
  GameGetRequest,
  GameUpdateRequest,
  PaginatedResponse,
  StandardResponse,
  TrendingGamesRequest,
} from "../game/game";
import { JoinLeaveGame } from "../game/join_leave";
import { Session, SessionCreate, SessionDelete, SessionGet, SessionUpdate } from "../game/session";

export const protobufPackage = "v1.api.common";

export type GameServiceService = typeof GameServiceService;
export const GameServiceService = {
  /** / Join or leave a game, returns the queued session if not joined */
  joinLeave: {
    path: "/v1.api.common.GameService/JoinLeave",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: JoinLeaveGame) => Buffer.from(JoinLeaveGame.encode(value).finish()),
    requestDeserialize: (value: Buffer) => JoinLeaveGame.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  createSession: {
    path: "/v1.api.common.GameService/CreateSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionCreate) => Buffer.from(SessionCreate.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionCreate.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  getSession: {
    path: "/v1.api.common.GameService/GetSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionGet) => Buffer.from(SessionGet.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionGet.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  updateSession: {
    path: "/v1.api.common.GameService/UpdateSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionUpdate) => Buffer.from(SessionUpdate.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionUpdate.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  deleteSession: {
    path: "/v1.api.common.GameService/DeleteSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionDelete) => Buffer.from(SessionDelete.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionDelete.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  /**
   * TODO: Adjust payloads for protos
   * / Create a new entity
   */
  createEntity: {
    path: "/v1.api.common.GameService/CreateEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityCreateRequest) => Buffer.from(EntityCreateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityCreateRequest.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  /** / Get an entity by ID */
  getEntity: {
    path: "/v1.api.common.GameService/GetEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityGetRequest) => Buffer.from(EntityGetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityGetRequest.decode(value),
    responseSerialize: (value: PaginatedResponse) => Buffer.from(PaginatedResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PaginatedResponse.decode(value),
  },
  /** / Update an entity by ID */
  updateEntity: {
    path: "/v1.api.common.GameService/UpdateEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityUpdateRequest) => Buffer.from(EntityUpdateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityUpdateRequest.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  /** / Delete an entity by ID */
  deleteEntity: {
    path: "/v1.api.common.GameService/DeleteEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityDeleteRequest) => Buffer.from(EntityDeleteRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityDeleteRequest.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  /** / Create a new game */
  createGame: {
    path: "/v1.api.common.GameService/CreateGame",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GameCreateRequest) => Buffer.from(GameCreateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GameCreateRequest.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  /** / Get a game by ID */
  getGame: {
    path: "/v1.api.common.GameService/GetGame",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GameGetRequest) => Buffer.from(GameGetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GameGetRequest.decode(value),
    responseSerialize: (value: PaginatedResponse) => Buffer.from(PaginatedResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PaginatedResponse.decode(value),
  },
  /** / Update a game by ID */
  updateGame: {
    path: "/v1.api.common.GameService/UpdateGame",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GameUpdateRequest) => Buffer.from(GameUpdateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GameUpdateRequest.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  /** / Trending games */
  trendingGame: {
    path: "/v1.api.common.GameService/TrendingGame",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TrendingGamesRequest) => Buffer.from(TrendingGamesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TrendingGamesRequest.decode(value),
    responseSerialize: (value: PaginatedResponse) => Buffer.from(PaginatedResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PaginatedResponse.decode(value),
  },
  /** / Wait for queue updates */
  streamEvents: {
    path: "/v1.api.common.GameService/StreamEvents",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: GameEvent) => Buffer.from(GameEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GameEvent.decode(value),
    responseSerialize: (value: GameEvent) => Buffer.from(GameEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GameEvent.decode(value),
  },
  /** / Stream events from the game */
  watchQueue: {
    path: "/v1.api.common.GameService/WatchQueue",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Session) => Buffer.from(Session.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Session.decode(value),
    responseSerialize: (value: Session) => Buffer.from(Session.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Session.decode(value),
  },
} as const;

export interface GameServiceServer extends UntypedServiceImplementation {
  /** / Join or leave a game, returns the queued session if not joined */
  joinLeave: handleUnaryCall<JoinLeaveGame, StandardResponse>;
  createSession: handleUnaryCall<SessionCreate, StandardResponse>;
  getSession: handleUnaryCall<SessionGet, StandardResponse>;
  updateSession: handleUnaryCall<SessionUpdate, StandardResponse>;
  deleteSession: handleUnaryCall<SessionDelete, StandardResponse>;
  /**
   * TODO: Adjust payloads for protos
   * / Create a new entity
   */
  createEntity: handleUnaryCall<EntityCreateRequest, StandardResponse>;
  /** / Get an entity by ID */
  getEntity: handleUnaryCall<EntityGetRequest, PaginatedResponse>;
  /** / Update an entity by ID */
  updateEntity: handleUnaryCall<EntityUpdateRequest, StandardResponse>;
  /** / Delete an entity by ID */
  deleteEntity: handleUnaryCall<EntityDeleteRequest, StandardResponse>;
  /** / Create a new game */
  createGame: handleUnaryCall<GameCreateRequest, StandardResponse>;
  /** / Get a game by ID */
  getGame: handleUnaryCall<GameGetRequest, PaginatedResponse>;
  /** / Update a game by ID */
  updateGame: handleUnaryCall<GameUpdateRequest, StandardResponse>;
  /** / Trending games */
  trendingGame: handleUnaryCall<TrendingGamesRequest, PaginatedResponse>;
  /** / Wait for queue updates */
  streamEvents: handleBidiStreamingCall<GameEvent, GameEvent>;
  /** / Stream events from the game */
  watchQueue: handleServerStreamingCall<Session, Session>;
}

export interface GameServiceClient extends Client {
  /** / Join or leave a game, returns the queued session if not joined */
  joinLeave(
    request: JoinLeaveGame,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  joinLeave(
    request: JoinLeaveGame,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  joinLeave(
    request: JoinLeaveGame,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  createSession(
    request: SessionCreate,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  createSession(
    request: SessionCreate,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  createSession(
    request: SessionCreate,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  getSession(
    request: SessionGet,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  getSession(
    request: SessionGet,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  getSession(
    request: SessionGet,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  updateSession(
    request: SessionUpdate,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  updateSession(
    request: SessionUpdate,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  updateSession(
    request: SessionUpdate,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  deleteSession(
    request: SessionDelete,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  deleteSession(
    request: SessionDelete,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  deleteSession(
    request: SessionDelete,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  /**
   * TODO: Adjust payloads for protos
   * / Create a new entity
   */
  createEntity(
    request: EntityCreateRequest,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  createEntity(
    request: EntityCreateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  createEntity(
    request: EntityCreateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  /** / Get an entity by ID */
  getEntity(
    request: EntityGetRequest,
    callback: (error: ServiceError | null, response: PaginatedResponse) => void,
  ): ClientUnaryCall;
  getEntity(
    request: EntityGetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PaginatedResponse) => void,
  ): ClientUnaryCall;
  getEntity(
    request: EntityGetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PaginatedResponse) => void,
  ): ClientUnaryCall;
  /** / Update an entity by ID */
  updateEntity(
    request: EntityUpdateRequest,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  updateEntity(
    request: EntityUpdateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  updateEntity(
    request: EntityUpdateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  /** / Delete an entity by ID */
  deleteEntity(
    request: EntityDeleteRequest,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  deleteEntity(
    request: EntityDeleteRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  deleteEntity(
    request: EntityDeleteRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  /** / Create a new game */
  createGame(
    request: GameCreateRequest,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  createGame(
    request: GameCreateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  createGame(
    request: GameCreateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  /** / Get a game by ID */
  getGame(
    request: GameGetRequest,
    callback: (error: ServiceError | null, response: PaginatedResponse) => void,
  ): ClientUnaryCall;
  getGame(
    request: GameGetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PaginatedResponse) => void,
  ): ClientUnaryCall;
  getGame(
    request: GameGetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PaginatedResponse) => void,
  ): ClientUnaryCall;
  /** / Update a game by ID */
  updateGame(
    request: GameUpdateRequest,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  updateGame(
    request: GameUpdateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  updateGame(
    request: GameUpdateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  /** / Trending games */
  trendingGame(
    request: TrendingGamesRequest,
    callback: (error: ServiceError | null, response: PaginatedResponse) => void,
  ): ClientUnaryCall;
  trendingGame(
    request: TrendingGamesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PaginatedResponse) => void,
  ): ClientUnaryCall;
  trendingGame(
    request: TrendingGamesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PaginatedResponse) => void,
  ): ClientUnaryCall;
  /** / Wait for queue updates */
  streamEvents(): ClientDuplexStream<GameEvent, GameEvent>;
  streamEvents(options: Partial<CallOptions>): ClientDuplexStream<GameEvent, GameEvent>;
  streamEvents(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<GameEvent, GameEvent>;
  /** / Stream events from the game */
  watchQueue(request: Session, options?: Partial<CallOptions>): ClientReadableStream<Session>;
  watchQueue(request: Session, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Session>;
}

export const GameServiceClient = makeGenericClientConstructor(
  GameServiceService,
  "v1.api.common.GameService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GameServiceClient;
  service: typeof GameServiceService;
  serviceName: string;
};
