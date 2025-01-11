// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: v1/api/common/global_service.proto

/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  ClientDuplexStream,
  type ClientOptions,
  handleBidiStreamingCall,
  makeGenericClientConstructor,
  Metadata,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { GlobalEvent } from "../global/event";

export const protobufPackage = "v1.api.global";

/** / Global service for joining and leaving games */
export type GlobalServiceService = typeof GlobalServiceService;
export const GlobalServiceService = {
  /** / Stream events from the global service */
  streamEvents: {
    path: "/v1.api.global.GlobalService/StreamEvents",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: GlobalEvent) => Buffer.from(GlobalEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GlobalEvent.decode(value),
    responseSerialize: (value: GlobalEvent) => Buffer.from(GlobalEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GlobalEvent.decode(value),
  },
} as const;

export interface GlobalServiceServer extends UntypedServiceImplementation {
  /** / Stream events from the global service */
  streamEvents: handleBidiStreamingCall<GlobalEvent, GlobalEvent>;
}

export interface GlobalServiceClient extends Client {
  /** / Stream events from the global service */
  streamEvents(): ClientDuplexStream<GlobalEvent, GlobalEvent>;
  streamEvents(options: Partial<CallOptions>): ClientDuplexStream<GlobalEvent, GlobalEvent>;
  streamEvents(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<GlobalEvent, GlobalEvent>;
}

export const GlobalServiceClient = makeGenericClientConstructor(
  GlobalServiceService,
  "v1.api.global.GlobalService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GlobalServiceClient;
  service: typeof GlobalServiceService;
  serviceName: string;
};
