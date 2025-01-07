import { type CallOptions, ChannelCredentials, Client, type ClientOptions, ClientReadableStream, type ClientUnaryCall, ClientWritableStream, handleClientStreamingCall, handleServerStreamingCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { StandardResponse } from "../../std/responses";
import { EntityCreateRequest, EntityCreateResponse, EntityDeleteRequest, EntityDeleteResponse, EntityGetRequest, EntityGetResponse, EntityUpdateRequest, EntityUpdateResponse } from "./entity";
import { GameEvent } from "./event";
import { JoinLeaveGame } from "./join_leave";
import { Session, SessionCreate, SessionDelete, SessionGet, Sessions, SessionUpdate } from "./session";
export declare const protobufPackage = "v1.api.game";
export type GameServiceService = typeof GameServiceService;
export declare const GameServiceService: {
    /** / Join or leave a game, returns the queued session if not joined */
    readonly joinLeave: {
        readonly path: "/v1.api.game.GameService/JoinLeave";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: JoinLeaveGame) => Buffer;
        readonly requestDeserialize: (value: Buffer) => JoinLeaveGame;
        readonly responseSerialize: (value: Session) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Session;
    };
    readonly createSession: {
        readonly path: "/v1.api.game.GameService/CreateSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionCreate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionCreate;
        readonly responseSerialize: (value: Session) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Session;
    };
    readonly getSession: {
        readonly path: "/v1.api.game.GameService/GetSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionGet) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionGet;
        readonly responseSerialize: (value: Sessions) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Sessions;
    };
    readonly updateSession: {
        readonly path: "/v1.api.game.GameService/UpdateSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionUpdate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionUpdate;
        readonly responseSerialize: (value: Session) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Session;
    };
    readonly deleteSession: {
        readonly path: "/v1.api.game.GameService/DeleteSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionDelete) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionDelete;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    /** TODO: Adjust payloads for protos */
    readonly createEntity: {
        readonly path: "/v1.api.game.GameService/CreateEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityCreateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityCreateRequest;
        readonly responseSerialize: (value: EntityCreateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EntityCreateResponse;
    };
    readonly getEntity: {
        readonly path: "/v1.api.game.GameService/GetEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityGetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityGetRequest;
        readonly responseSerialize: (value: EntityGetResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EntityGetResponse;
    };
    readonly updateEntity: {
        readonly path: "/v1.api.game.GameService/UpdateEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityUpdateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityUpdateRequest;
        readonly responseSerialize: (value: EntityUpdateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EntityUpdateResponse;
    };
    readonly deleteEntity: {
        readonly path: "/v1.api.game.GameService/DeleteEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityDeleteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityDeleteRequest;
        readonly responseSerialize: (value: EntityDeleteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EntityDeleteResponse;
    };
    /** / Wait for queue updates */
    readonly streamEvents: {
        readonly path: "/v1.api.game.GameService/StreamEvents";
        readonly requestStream: true;
        readonly responseStream: false;
        readonly requestSerialize: (value: GameEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GameEvent;
        readonly responseSerialize: (value: GameEvent) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GameEvent;
    };
    /** / Stream events from the game */
    readonly watchQueue: {
        readonly path: "/v1.api.game.GameService/WatchQueue";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: Session) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Session;
        readonly responseSerialize: (value: Session) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Session;
    };
};
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
    createEntity(request: EntityCreateRequest, callback: (error: ServiceError | null, response: EntityCreateResponse) => void): ClientUnaryCall;
    createEntity(request: EntityCreateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: EntityCreateResponse) => void): ClientUnaryCall;
    createEntity(request: EntityCreateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EntityCreateResponse) => void): ClientUnaryCall;
    getEntity(request: EntityGetRequest, callback: (error: ServiceError | null, response: EntityGetResponse) => void): ClientUnaryCall;
    getEntity(request: EntityGetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: EntityGetResponse) => void): ClientUnaryCall;
    getEntity(request: EntityGetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EntityGetResponse) => void): ClientUnaryCall;
    updateEntity(request: EntityUpdateRequest, callback: (error: ServiceError | null, response: EntityUpdateResponse) => void): ClientUnaryCall;
    updateEntity(request: EntityUpdateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: EntityUpdateResponse) => void): ClientUnaryCall;
    updateEntity(request: EntityUpdateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EntityUpdateResponse) => void): ClientUnaryCall;
    deleteEntity(request: EntityDeleteRequest, callback: (error: ServiceError | null, response: EntityDeleteResponse) => void): ClientUnaryCall;
    deleteEntity(request: EntityDeleteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: EntityDeleteResponse) => void): ClientUnaryCall;
    deleteEntity(request: EntityDeleteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EntityDeleteResponse) => void): ClientUnaryCall;
    /** / Wait for queue updates */
    streamEvents(callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    streamEvents(metadata: Metadata, callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    streamEvents(options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    streamEvents(metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    /** / Stream events from the game */
    watchQueue(request: Session, options?: Partial<CallOptions>): ClientReadableStream<Session>;
    watchQueue(request: Session, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Session>;
}
export declare const GameServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GameServiceClient;
    service: typeof GameServiceService;
    serviceName: string;
};
