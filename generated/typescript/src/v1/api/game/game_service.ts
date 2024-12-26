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
  ClientDuplexStream,
  type ClientOptions,
  type ClientUnaryCall,
  handleBidiStreamingCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { StandardResponse } from "../../std/responses";
import { Entities, Entity, EntityCreate, EntityDelete, EntityGet, EntityUpdate } from "./entity";
import { GameEvent } from "./event";
import { JoinLeaveGame } from "./join_leave";
import { Session, SessionCreate, SessionDelete, SessionGet, Sessions, SessionUpdate } from "./session";

export const protobufPackage = "v1.api.game";

export type GameService = typeof GameService;
export const GameService = {
  /** / Join or leave a game */
  joinLeave: {
    path: "/v1.api.game.Game/JoinLeave",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: JoinLeaveGame) => Buffer.from(JoinLeaveGame.encode(value).finish()),
    requestDeserialize: (value: Buffer) => JoinLeaveGame.decode(value),
    responseSerialize: (value: Session) => Buffer.from(Session.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Session.decode(value),
  },
  createSession: {
    path: "/v1.api.game.Game/CreateSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionCreate) => Buffer.from(SessionCreate.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionCreate.decode(value),
    responseSerialize: (value: Session) => Buffer.from(Session.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Session.decode(value),
  },
  getSession: {
    path: "/v1.api.game.Game/GetSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionGet) => Buffer.from(SessionGet.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionGet.decode(value),
    responseSerialize: (value: Sessions) => Buffer.from(Sessions.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Sessions.decode(value),
  },
  updateSession: {
    path: "/v1.api.game.Game/UpdateSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionUpdate) => Buffer.from(SessionUpdate.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionUpdate.decode(value),
    responseSerialize: (value: Session) => Buffer.from(Session.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Session.decode(value),
  },
  deleteSession: {
    path: "/v1.api.game.Game/DeleteSession",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SessionDelete) => Buffer.from(SessionDelete.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SessionDelete.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  /** TODO: Adjust payloads for protos */
  createEntity: {
    path: "/v1.api.game.Game/CreateEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityCreate) => Buffer.from(EntityCreate.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityCreate.decode(value),
    responseSerialize: (value: Entity) => Buffer.from(Entity.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Entity.decode(value),
  },
  getEntity: {
    path: "/v1.api.game.Game/GetEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityGet) => Buffer.from(EntityGet.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityGet.decode(value),
    responseSerialize: (value: Entities) => Buffer.from(Entities.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Entities.decode(value),
  },
  updateEntity: {
    path: "/v1.api.game.Game/UpdateEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityUpdate) => Buffer.from(EntityUpdate.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityUpdate.decode(value),
    responseSerialize: (value: Entity) => Buffer.from(Entity.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Entity.decode(value),
  },
  deleteEntity: {
    path: "/v1.api.game.Game/DeleteEntity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EntityDelete) => Buffer.from(EntityDelete.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EntityDelete.decode(value),
    responseSerialize: (value: StandardResponse) => Buffer.from(StandardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StandardResponse.decode(value),
  },
  /** Stream events from the game */
  streamEvents: {
    path: "/v1.api.game.Game/StreamEvents",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: GameEvent) => Buffer.from(GameEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GameEvent.decode(value),
    responseSerialize: (value: GameEvent) => Buffer.from(GameEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GameEvent.decode(value),
  },
} as const;

export interface GameServer extends UntypedServiceImplementation {
  /** / Join or leave a game */
  joinLeave: handleUnaryCall<JoinLeaveGame, Session>;
  createSession: handleUnaryCall<SessionCreate, Session>;
  getSession: handleUnaryCall<SessionGet, Sessions>;
  updateSession: handleUnaryCall<SessionUpdate, Session>;
  deleteSession: handleUnaryCall<SessionDelete, StandardResponse>;
  /** TODO: Adjust payloads for protos */
  createEntity: handleUnaryCall<EntityCreate, Entity>;
  getEntity: handleUnaryCall<EntityGet, Entities>;
  updateEntity: handleUnaryCall<EntityUpdate, Entity>;
  deleteEntity: handleUnaryCall<EntityDelete, StandardResponse>;
  /** Stream events from the game */
  streamEvents: handleBidiStreamingCall<GameEvent, GameEvent>;
}

export interface GameClient extends Client {
  /** / Join or leave a game */
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
    request: EntityCreate,
    callback: (error: ServiceError | null, response: Entity) => void,
  ): ClientUnaryCall;
  createEntity(
    request: EntityCreate,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Entity) => void,
  ): ClientUnaryCall;
  createEntity(
    request: EntityCreate,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Entity) => void,
  ): ClientUnaryCall;
  getEntity(request: EntityGet, callback: (error: ServiceError | null, response: Entities) => void): ClientUnaryCall;
  getEntity(
    request: EntityGet,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Entities) => void,
  ): ClientUnaryCall;
  getEntity(
    request: EntityGet,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Entities) => void,
  ): ClientUnaryCall;
  updateEntity(
    request: EntityUpdate,
    callback: (error: ServiceError | null, response: Entity) => void,
  ): ClientUnaryCall;
  updateEntity(
    request: EntityUpdate,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Entity) => void,
  ): ClientUnaryCall;
  updateEntity(
    request: EntityUpdate,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Entity) => void,
  ): ClientUnaryCall;
  deleteEntity(
    request: EntityDelete,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  deleteEntity(
    request: EntityDelete,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  deleteEntity(
    request: EntityDelete,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StandardResponse) => void,
  ): ClientUnaryCall;
  /** Stream events from the game */
  streamEvents(): ClientDuplexStream<GameEvent, GameEvent>;
  streamEvents(options: Partial<CallOptions>): ClientDuplexStream<GameEvent, GameEvent>;
  streamEvents(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<GameEvent, GameEvent>;
}

export const GameClient = makeGenericClientConstructor(GameService, "v1.api.game.Game") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GameClient;
  service: typeof GameService;
  serviceName: string;
};
