import { type CallOptions, ChannelCredentials, Client, type ClientOptions, ClientReadableStream, type ClientUnaryCall, ClientWritableStream, handleClientStreamingCall, handleServerStreamingCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { StandardResponse } from "../../std/responses";
import { Entities, Entity, EntityCreate, EntityDelete, EntityGet, EntityUpdate } from "./entity";
import { GameEvent } from "./event";
import { JoinLeaveGame } from "./join_leave";
import { Session, SessionCreate, SessionDelete, SessionGet, Sessions, SessionUpdate } from "./session";
export declare const protobufPackage = "v1.api.game";
export type GameService = typeof GameService;
export declare const GameService: {
    /** / Join or leave a game, returns the queued session if not joined */
    readonly joinLeave: {
        readonly path: "/v1.api.game.Game/JoinLeave";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: JoinLeaveGame) => Buffer;
        readonly requestDeserialize: (value: Buffer) => JoinLeaveGame;
        readonly responseSerialize: (value: Session) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Session;
    };
    readonly createSession: {
        readonly path: "/v1.api.game.Game/CreateSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionCreate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionCreate;
        readonly responseSerialize: (value: Session) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Session;
    };
    readonly getSession: {
        readonly path: "/v1.api.game.Game/GetSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionGet) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionGet;
        readonly responseSerialize: (value: Sessions) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Sessions;
    };
    readonly updateSession: {
        readonly path: "/v1.api.game.Game/UpdateSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionUpdate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionUpdate;
        readonly responseSerialize: (value: Session) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Session;
    };
    readonly deleteSession: {
        readonly path: "/v1.api.game.Game/DeleteSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionDelete) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionDelete;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    /** TODO: Adjust payloads for protos */
    readonly createEntity: {
        readonly path: "/v1.api.game.Game/CreateEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityCreate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityCreate;
        readonly responseSerialize: (value: Entity) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Entity;
    };
    readonly getEntity: {
        readonly path: "/v1.api.game.Game/GetEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityGet) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityGet;
        readonly responseSerialize: (value: Entities) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Entities;
    };
    readonly updateEntity: {
        readonly path: "/v1.api.game.Game/UpdateEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityUpdate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityUpdate;
        readonly responseSerialize: (value: Entity) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Entity;
    };
    readonly deleteEntity: {
        readonly path: "/v1.api.game.Game/DeleteEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityDelete) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityDelete;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    /** / Wait for queue updates */
    readonly streamEvents: {
        readonly path: "/v1.api.game.Game/StreamEvents";
        readonly requestStream: true;
        readonly responseStream: false;
        readonly requestSerialize: (value: GameEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GameEvent;
        readonly responseSerialize: (value: GameEvent) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GameEvent;
    };
    /** / Stream events from the game */
    readonly watchQueue: {
        readonly path: "/v1.api.game.Game/WatchQueue";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: Session) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Session;
        readonly responseSerialize: (value: Session) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Session;
    };
};
export interface GameServer extends UntypedServiceImplementation {
    /** / Join or leave a game, returns the queued session if not joined */
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
    /** / Wait for queue updates */
    streamEvents: handleClientStreamingCall<GameEvent, GameEvent>;
    /** / Stream events from the game */
    watchQueue: handleServerStreamingCall<Session, Session>;
}
export interface GameClient extends Client {
    /** / Join or leave a game, returns the queued session if not joined */
    joinLeave(request: JoinLeaveGame, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
    joinLeave(request: JoinLeaveGame, metadata: Metadata, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
    joinLeave(request: JoinLeaveGame, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
    createSession(request: SessionCreate, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
    createSession(request: SessionCreate, metadata: Metadata, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
    createSession(request: SessionCreate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
    getSession(request: SessionGet, callback: (error: ServiceError | null, response: Sessions) => void): ClientUnaryCall;
    getSession(request: SessionGet, metadata: Metadata, callback: (error: ServiceError | null, response: Sessions) => void): ClientUnaryCall;
    getSession(request: SessionGet, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Sessions) => void): ClientUnaryCall;
    updateSession(request: SessionUpdate, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
    updateSession(request: SessionUpdate, metadata: Metadata, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
    updateSession(request: SessionUpdate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Session) => void): ClientUnaryCall;
    deleteSession(request: SessionDelete, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    deleteSession(request: SessionDelete, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    deleteSession(request: SessionDelete, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    /** TODO: Adjust payloads for protos */
    createEntity(request: EntityCreate, callback: (error: ServiceError | null, response: Entity) => void): ClientUnaryCall;
    createEntity(request: EntityCreate, metadata: Metadata, callback: (error: ServiceError | null, response: Entity) => void): ClientUnaryCall;
    createEntity(request: EntityCreate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Entity) => void): ClientUnaryCall;
    getEntity(request: EntityGet, callback: (error: ServiceError | null, response: Entities) => void): ClientUnaryCall;
    getEntity(request: EntityGet, metadata: Metadata, callback: (error: ServiceError | null, response: Entities) => void): ClientUnaryCall;
    getEntity(request: EntityGet, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Entities) => void): ClientUnaryCall;
    updateEntity(request: EntityUpdate, callback: (error: ServiceError | null, response: Entity) => void): ClientUnaryCall;
    updateEntity(request: EntityUpdate, metadata: Metadata, callback: (error: ServiceError | null, response: Entity) => void): ClientUnaryCall;
    updateEntity(request: EntityUpdate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Entity) => void): ClientUnaryCall;
    deleteEntity(request: EntityDelete, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    deleteEntity(request: EntityDelete, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    deleteEntity(request: EntityDelete, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    /** / Wait for queue updates */
    streamEvents(callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    streamEvents(metadata: Metadata, callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    streamEvents(options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    streamEvents(metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    /** / Stream events from the game */
    watchQueue(request: Session, options?: Partial<CallOptions>): ClientReadableStream<Session>;
    watchQueue(request: Session, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Session>;
}
export declare const GameClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GameClient;
    service: typeof GameService;
    serviceName: string;
};
