// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: v1/api/global/time.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "v1.api.global";

/** / Message to synchronize time across clients */
export interface GlobalTime {
  /** / Unix timestamp in milliseconds to synchronize time across clients */
  timestamp: number;
  /** / Hash of the timestamp to pass to the server */
  hash: string;
}

function createBaseGlobalTime(): GlobalTime {
  return { timestamp: 0, hash: "" };
}

export const GlobalTime: MessageFns<GlobalTime> = {
  encode(message: GlobalTime, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GlobalTime {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.int64());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.hash = reader.string();
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

  fromJSON(object: any): GlobalTime {
    return {
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      hash: isSet(object.hash) ? globalThis.String(object.hash) : "",
    };
  },

  toJSON(message: GlobalTime): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.hash !== "") {
      obj.hash = message.hash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GlobalTime>, I>>(base?: I): GlobalTime {
    return GlobalTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GlobalTime>, I>>(object: I): GlobalTime {
    const message = createBaseGlobalTime();
    message.timestamp = object.timestamp ?? 0;
    message.hash = object.hash ?? "";
    return message;
  },
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

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
