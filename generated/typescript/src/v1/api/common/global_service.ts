// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v3.14.0
// source: v1/api/common/global_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
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
import { StandardResponse } from "../../std/responses";
import { GameEvent } from "../game/event";
import { GlobalEvent } from "../global/event";
import { PlayerAction } from "../player/action";

export const protobufPackage = "v1.api.common";

/** / Websocket Events, message can trigger API calls or other events */
export interface WebSocketMessage {
  globalEvent?: GlobalEvent | undefined;
  gameEvent?: GameEvent | undefined;
  playerAction?: PlayerAction | undefined;
  response?: StandardResponse | undefined;
}

function createBaseWebSocketMessage(): WebSocketMessage {
  return { globalEvent: undefined, gameEvent: undefined, playerAction: undefined, response: undefined };
}

export const WebSocketMessage: MessageFns<WebSocketMessage> = {
  encode(message: WebSocketMessage, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.globalEvent !== undefined) {
      GlobalEvent.encode(message.globalEvent, writer.uint32(10).fork()).join();
    }
    if (message.gameEvent !== undefined) {
      GameEvent.encode(message.gameEvent, writer.uint32(18).fork()).join();
    }
    if (message.playerAction !== undefined) {
      PlayerAction.encode(message.playerAction, writer.uint32(26).fork()).join();
    }
    if (message.response !== undefined) {
      StandardResponse.encode(message.response, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WebSocketMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebSocketMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.globalEvent = GlobalEvent.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.gameEvent = GameEvent.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.playerAction = PlayerAction.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.response = StandardResponse.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebSocketMessage {
    return {
      globalEvent: isSet(object.globalEvent) ? GlobalEvent.fromJSON(object.globalEvent) : undefined,
      gameEvent: isSet(object.gameEvent) ? GameEvent.fromJSON(object.gameEvent) : undefined,
      playerAction: isSet(object.playerAction) ? PlayerAction.fromJSON(object.playerAction) : undefined,
      response: isSet(object.response) ? StandardResponse.fromJSON(object.response) : undefined,
    };
  },

  toJSON(message: WebSocketMessage): unknown {
    const obj: any = {};
    if (message.globalEvent !== undefined) {
      obj.globalEvent = GlobalEvent.toJSON(message.globalEvent);
    }
    if (message.gameEvent !== undefined) {
      obj.gameEvent = GameEvent.toJSON(message.gameEvent);
    }
    if (message.playerAction !== undefined) {
      obj.playerAction = PlayerAction.toJSON(message.playerAction);
    }
    if (message.response !== undefined) {
      obj.response = StandardResponse.toJSON(message.response);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WebSocketMessage>, I>>(base?: I): WebSocketMessage {
    return WebSocketMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WebSocketMessage>, I>>(object: I): WebSocketMessage {
    const message = createBaseWebSocketMessage();
    message.globalEvent = (object.globalEvent !== undefined && object.globalEvent !== null)
      ? GlobalEvent.fromPartial(object.globalEvent)
      : undefined;
    message.gameEvent = (object.gameEvent !== undefined && object.gameEvent !== null)
      ? GameEvent.fromPartial(object.gameEvent)
      : undefined;
    message.playerAction = (object.playerAction !== undefined && object.playerAction !== null)
      ? PlayerAction.fromPartial(object.playerAction)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? StandardResponse.fromPartial(object.response)
      : undefined;
    return message;
  },
};

/** / Global service for joining and leaving games */
export type GlobalServiceService = typeof GlobalServiceService;
export const GlobalServiceService = {
  /** / Stream events from the global service */
  streamEvents: {
    path: "/v1.api.common.GlobalService/StreamEvents",
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
  "v1.api.common.GlobalService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GlobalServiceClient;
  service: typeof GlobalServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
