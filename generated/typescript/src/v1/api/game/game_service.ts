// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: v1/api/game/game_service.proto

/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  ClientReadableStream,
  type ClientUnaryCall,
  ClientWritableStream,
  handleClientStreamingCall,
  handleServerStreamingCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { StandardResponse } from "../../std/responses";
import {
  EntityCreateRequest,
  EntityCreateResponse,
  EntityDeleteRequest,
  EntityDeleteResponse,
  EntityGetRequest,
  EntityGetResponse,
  EntityUpdateRequest,
  EntityUpdateResponse,
} from "./entity";
import { GameEvent } from "./event";
import { JoinLeaveGame } from "./join_leave";
import { Session, SessionCreate, SessionDelete, SessionGet, Sessions, SessionUpdate } from "./session";

export const protobufPackage = "v1.api.game";

export type GameServiceService = typeof GameServiceService;
export const GameServiceService = {
  /** / Join or leave a game, returns the queued session if not joined */
  joinLeave: {
    path: "/v1.api.game.GameService/JoinLeave",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: JoinLeaveGame) => Buffer.from(JoinLeaveGame.encode(value).finish()),
    requestDeserialize: (value: Buffer) => JoinLeaveGame.decode(value),
    responseSerialize: (value: Session) => Buffer.from(Session.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Session.decode(value),
  },
  createSession: {
    path: "/v1.api.game.GameService/CreateSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionCreate) => Buffer.from(SessionCreate.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionCreate.decode(value),
    responseSerialize: (value: Session) => Buffer.from(Session.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Session.decode(value),
  },
  getSession: {
    path: "/v1.api.game.GameService/GetSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionGet) => Buffer.from(SessionGet.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionGet.decode(value),
    responseSerialize: (value: Sessions) => Buffer.from(Sessions.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Sessions.decode(value),
  },
  updateSession: {
    path: "/v1.api.game.GameService/UpdateSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionUpdate) => Buffer.from(SessionUpdate.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionUpdate.decode(value),
    responseSerialize: (value: Session) => Buffer.from(Session.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Session.decode(value),
  },
  deleteSession: {
    path: "/v1.api.game.GameService/DeleteSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionDelete) => Buffer.from(SessionDelete.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionDelete.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  /** TODO: Adjust payloads for protos */
  createEntity: {
    path: "/v1.api.game.GameService/CreateEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityCreateRequest) => Buffer.from(EntityCreateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityCreateRequest.decode(value),
    responseSerialize: (value: EntityCreateResponse) => Buffer.from(EntityCreateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EntityCreateResponse.decode(value),
  },
  getEntity: {
    path: "/v1.api.game.GameService/GetEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityGetRequest) => Buffer.from(EntityGetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityGetRequest.decode(value),
    responseSerialize: (value: EntityGetResponse) => Buffer.from(EntityGetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EntityGetResponse.decode(value),
  },
  updateEntity: {
    path: "/v1.api.game.GameService/UpdateEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityUpdateRequest) => Buffer.from(EntityUpdateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityUpdateRequest.decode(value),
    responseSerialize: (value: EntityUpdateResponse) => Buffer.from(EntityUpdateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EntityUpdateResponse.decode(value),
  },
  deleteEntity: {
    path: "/v1.api.game.GameService/DeleteEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityDeleteRequest) => Buffer.from(EntityDeleteRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityDeleteRequest.decode(value),
    responseSerialize: (value: EntityDeleteResponse) => Buffer.from(EntityDeleteResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EntityDeleteResponse.decode(value),
  },
  /** / Wait for queue updates */
  streamEvents: {
    path: "/v1.api.game.GameService/StreamEvents",
    requestStream: true,
    responseStream: false,
    requestSerialize: (value: GameEvent) => Buffer.from(GameEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GameEvent.decode(value),
    responseSerialize: (value: GameEvent) => Buffer.from(GameEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GameEvent.decode(value),
  },
  /** / Stream events from the game */
  watchQueue: {
    path: "/v1.api.game.GameService/WatchQueue",
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
  joinLeave: handleUnaryCall<JoinLeaveGame, Session>;
  createSession: handleUnaryCall<SessionCreate, Session>;
  getSession: handleUnaryCall<SessionGet, Sessions>;
  updateSession: handleUnaryCall<SessionUpdate, Session>;
  deleteSession: handleUnaryCall<SessionDelete, StandardResponse>;
  /** TODO: Adjust payloads for protos */
  createEntity: handleUnaryCall<EntityCreateRequest, EntityCreateResponse>;
  getEntity: handleUnaryCall<EntityGetRequest, EntityGetResponse>;
  updateEntity: handleUnaryCall<EntityUpdateRequest, EntityUpdateResponse>;
  deleteEntity: handleUnaryCall<EntityDeleteRequest, EntityDeleteResponse>;
  /** / Wait for queue updates */
  streamEvents: handleClientStreamingCall<GameEvent, GameEvent>;
  /** / Stream events from the game */
  watchQueue: handleServerStreamingCall<Session, Session>;
}

export interface GameServiceClient extends Client {
  /** / Join or leave a game, returns the queued session if not joined */
  joinLeave(request: JoinLeaveGame, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
  joinLeave(
    request: JoinLeaveGame,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Session) => void,
  ): ClientUnaryCall;
  joinLeave(
    request: JoinLeaveGame,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Session) => void,
  ): ClientUnaryCall;
  createSession(
    request: SessionCreate,
    callback: (error: ServiceError | null, response: Session) => void,
  ): ClientUnaryCall;
  createSession(
    request: SessionCreate,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Session) => void,
  ): ClientUnaryCall;
  createSession(
    request: SessionCreate,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Session) => void,
  ): ClientUnaryCall;
  getSession(request: SessionGet, callback: (error: ServiceError | null, response: Sessions) => void): ClientUnaryCall;
  getSession(
    request: SessionGet,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Sessions) => void,
  ): ClientUnaryCall;
  getSession(
    request: SessionGet,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Sessions) => void,
  ): ClientUnaryCall;
  updateSession(
    request: SessionUpdate,
    callback: (error: ServiceError | null, response: Session) => void,
  ): ClientUnaryCall;
  updateSession(
    request: SessionUpdate,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Session) => void,
  ): ClientUnaryCall;
  updateSession(
    request: SessionUpdate,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Session) => void,
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
  /** TODO: Adjust payloads for protos */
  createEntity(
    request: EntityCreateRequest,
    callback: (error: ServiceError | null, response: EntityCreateResponse) => void,
  ): ClientUnaryCall;
  createEntity(
    request: EntityCreateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EntityCreateResponse) => void,
  ): ClientUnaryCall;
  createEntity(
    request: EntityCreateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EntityCreateResponse) => void,
  ): ClientUnaryCall;
  getEntity(
    request: EntityGetRequest,
    callback: (error: ServiceError | null, response: EntityGetResponse) => void,
  ): ClientUnaryCall;
  getEntity(
    request: EntityGetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EntityGetResponse) => void,
  ): ClientUnaryCall;
  getEntity(
    request: EntityGetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EntityGetResponse) => void,
  ): ClientUnaryCall;
  updateEntity(
    request: EntityUpdateRequest,
    callback: (error: ServiceError | null, response: EntityUpdateResponse) => void,
  ): ClientUnaryCall;
  updateEntity(
    request: EntityUpdateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EntityUpdateResponse) => void,
  ): ClientUnaryCall;
  updateEntity(
    request: EntityUpdateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EntityUpdateResponse) => void,
  ): ClientUnaryCall;
  deleteEntity(
    request: EntityDeleteRequest,
    callback: (error: ServiceError | null, response: EntityDeleteResponse) => void,
  ): ClientUnaryCall;
  deleteEntity(
    request: EntityDeleteRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EntityDeleteResponse) => void,
  ): ClientUnaryCall;
  deleteEntity(
    request: EntityDeleteRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EntityDeleteResponse) => void,
  ): ClientUnaryCall;
  /** / Wait for queue updates */
  streamEvents(callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
  streamEvents(
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GameEvent) => void,
  ): ClientWritableStream<GameEvent>;
  streamEvents(
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GameEvent) => void,
  ): ClientWritableStream<GameEvent>;
  streamEvents(
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GameEvent) => void,
  ): ClientWritableStream<GameEvent>;
  /** / Stream events from the game */
  watchQueue(request: Session, options?: Partial<CallOptions>): ClientReadableStream<Session>;
  watchQueue(request: Session, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Session>;
}

export const GameServiceClient = makeGenericClientConstructor(
  GameServiceService,
  "v1.api.game.GameService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GameServiceClient;
  service: typeof GameServiceService;
  serviceName: string;
};
