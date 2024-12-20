import { type CallOptions, ChannelCredentials, Client, ClientDuplexStream, type ClientOptions, type ClientUnaryCall, handleBidiStreamingCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { StandardResponse } from "../../std/responses";
import { GlobalEvent } from "./event";
import { JoinLeaveGame } from "./join_leave";
export declare const protobufPackage = "v1.api.global";
export type GlobalServiceService = typeof GlobalServiceService;
export declare const GlobalServiceService: {
    readonly joinLeave: {
        readonly path: "/v1.api.global.GlobalService/JoinLeave";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: JoinLeaveGame) => Buffer;
        readonly requestDeserialize: (value: Buffer) => JoinLeaveGame;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly streamEvents: {
        readonly path: "/v1.api.global.GlobalService/StreamEvents";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: GlobalEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GlobalEvent;
        readonly responseSerialize: (value: GlobalEvent) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GlobalEvent;
    };
};
export interface GlobalServiceServer extends UntypedServiceImplementation {
    joinLeave: handleUnaryCall<JoinLeaveGame, StandardResponse>;
    streamEvents: handleBidiStreamingCall<GlobalEvent, GlobalEvent>;
}
export interface GlobalServiceClient extends Client {
    joinLeave(request: JoinLeaveGame, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    joinLeave(request: JoinLeaveGame, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    joinLeave(request: JoinLeaveGame, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    streamEvents(): ClientDuplexStream<GlobalEvent, GlobalEvent>;
    streamEvents(options: Partial<CallOptions>): ClientDuplexStream<GlobalEvent, GlobalEvent>;
    streamEvents(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<GlobalEvent, GlobalEvent>;
}
export declare const GlobalServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GlobalServiceClient;
    service: typeof GlobalServiceService;
    serviceName: string;
};
