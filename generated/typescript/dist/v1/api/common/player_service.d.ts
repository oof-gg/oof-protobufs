import { type CallOptions, ChannelCredentials, Client, ClientDuplexStream, type ClientOptions, type ClientUnaryCall, handleBidiStreamingCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { PlayerAction } from "../player/action";
import { Player, PlayerGet, PlayerUpdate, StandardResponse } from "../player/player";
export declare const protobufPackage = "v1.api.common";
export type PlayerServiceService = typeof PlayerServiceService;
export declare const PlayerServiceService: {
    readonly createPlayer: {
        readonly path: "/v1.api.common.PlayerService/CreatePlayer";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Player) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Player;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly getPlayer: {
        readonly path: "/v1.api.common.PlayerService/GetPlayer";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PlayerGet) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PlayerGet;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly updatePlayer: {
        readonly path: "/v1.api.common.PlayerService/UpdatePlayer";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PlayerUpdate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PlayerUpdate;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly streamEvents: {
        readonly path: "/v1.api.common.PlayerService/StreamEvents";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: PlayerAction) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PlayerAction;
        readonly responseSerialize: (value: PlayerAction) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PlayerAction;
    };
};
export interface PlayerServiceServer extends UntypedServiceImplementation {
    createPlayer: handleUnaryCall<Player, StandardResponse>;
    getPlayer: handleUnaryCall<PlayerGet, StandardResponse>;
    updatePlayer: handleUnaryCall<PlayerUpdate, StandardResponse>;
    streamEvents: handleBidiStreamingCall<PlayerAction, PlayerAction>;
}
export interface PlayerServiceClient extends Client {
    createPlayer(request: Player, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    createPlayer(request: Player, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    createPlayer(request: Player, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getPlayer(request: PlayerGet, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getPlayer(request: PlayerGet, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getPlayer(request: PlayerGet, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updatePlayer(request: PlayerUpdate, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updatePlayer(request: PlayerUpdate, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updatePlayer(request: PlayerUpdate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    streamEvents(): ClientDuplexStream<PlayerAction, PlayerAction>;
    streamEvents(options: Partial<CallOptions>): ClientDuplexStream<PlayerAction, PlayerAction>;
    streamEvents(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<PlayerAction, PlayerAction>;
}
export declare const PlayerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PlayerServiceClient;
    service: typeof PlayerServiceService;
    serviceName: string;
};
