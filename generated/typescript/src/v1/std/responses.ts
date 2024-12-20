// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: v1/std/responses.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "v1.std";

/** A standard error message. */
export interface Error {
  /** Error code (e.g., HTTP status code or custom code) */
  code: number;
  /** Human-readable error message */
  message: string;
  /** Optional details about the error */
  details: string;
}

/** A standard success response. */
export interface Success {
  /** Human-readable success message */
  message: string;
  /** Optional details about the success */
  details: string;
}

/** A standardized response wrapper for any data. */
export interface StandardResponse {
  /** Success message */
  success?:
    | Success
    | undefined;
  /** Error message */
  error?: Error | undefined;
}

/** Metadata for paginated responses. */
export interface PaginationMetadata {
  /** Current page number */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of items */
  totalItems: number;
  /** Total number of pages */
  totalPages: number;
}

/** A paginated response wrapper. */
export interface PaginatedResponse {
  /** Pagination metadata */
  pagination:
    | PaginationMetadata
    | undefined;
  /** List of items in this page */
  items: Any[];
}

function createBaseError(): Error {
  return { code: 0, message: "", details: "" };
}

export const Error: MessageFns<Error> = {
  encode(message: Error, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.details !== "") {
      writer.uint32(26).string(message.details);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Error {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.details = reader.string();
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

  fromJSON(object: any): Error {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      details: isSet(object.details) ? globalThis.String(object.details) : "",
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.details !== "") {
      obj.details = message.details;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.details = object.details ?? "";
    return message;
  },
};

function createBaseSuccess(): Success {
  return { message: "", details: "" };
}

export const Success: MessageFns<Success> = {
  encode(message: Success, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.details !== "") {
      writer.uint32(18).string(message.details);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Success {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.details = reader.string();
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

  fromJSON(object: any): Success {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      details: isSet(object.details) ? globalThis.String(object.details) : "",
    };
  },

  toJSON(message: Success): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.details !== "") {
      obj.details = message.details;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Success>, I>>(base?: I): Success {
    return Success.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Success>, I>>(object: I): Success {
    const message = createBaseSuccess();
    message.message = object.message ?? "";
    message.details = object.details ?? "";
    return message;
  },
};

function createBaseStandardResponse(): StandardResponse {
  return { success: undefined, error: undefined };
}

export const StandardResponse: MessageFns<StandardResponse> = {
  encode(message: StandardResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.success !== undefined) {
      Success.encode(message.success, writer.uint32(10).fork()).join();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StandardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStandardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.success = Success.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
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

  fromJSON(object: any): StandardResponse {
    return {
      success: isSet(object.success) ? Success.fromJSON(object.success) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: StandardResponse): unknown {
    const obj: any = {};
    if (message.success !== undefined) {
      obj.success = Success.toJSON(message.success);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StandardResponse>, I>>(base?: I): StandardResponse {
    return StandardResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StandardResponse>, I>>(object: I): StandardResponse {
    const message = createBaseStandardResponse();
    message.success = (object.success !== undefined && object.success !== null)
      ? Success.fromPartial(object.success)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBasePaginationMetadata(): PaginationMetadata {
  return { page: 0, pageSize: 0, totalItems: 0, totalPages: 0 };
}

export const PaginationMetadata: MessageFns<PaginationMetadata> = {
  encode(message: PaginationMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.totalItems !== 0) {
      writer.uint32(24).int64(message.totalItems);
    }
    if (message.totalPages !== 0) {
      writer.uint32(32).int32(message.totalPages);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PaginationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaginationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.page = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.totalItems = longToNumber(reader.int64());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.totalPages = reader.int32();
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

  fromJSON(object: any): PaginationMetadata {
    return {
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      totalItems: isSet(object.totalItems) ? globalThis.Number(object.totalItems) : 0,
      totalPages: isSet(object.totalPages) ? globalThis.Number(object.totalPages) : 0,
    };
  },

  toJSON(message: PaginationMetadata): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.totalItems !== 0) {
      obj.totalItems = Math.round(message.totalItems);
    }
    if (message.totalPages !== 0) {
      obj.totalPages = Math.round(message.totalPages);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaginationMetadata>, I>>(base?: I): PaginationMetadata {
    return PaginationMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaginationMetadata>, I>>(object: I): PaginationMetadata {
    const message = createBasePaginationMetadata();
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    message.totalItems = object.totalItems ?? 0;
    message.totalPages = object.totalPages ?? 0;
    return message;
  },
};

function createBasePaginatedResponse(): PaginatedResponse {
  return { pagination: undefined, items: [] };
}

export const PaginatedResponse: MessageFns<PaginatedResponse> = {
  encode(message: PaginatedResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pagination !== undefined) {
      PaginationMetadata.encode(message.pagination, writer.uint32(10).fork()).join();
    }
    for (const v of message.items) {
      Any.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PaginatedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaginatedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.pagination = PaginationMetadata.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.items.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PaginatedResponse {
    return {
      pagination: isSet(object.pagination) ? PaginationMetadata.fromJSON(object.pagination) : undefined,
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: PaginatedResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PaginationMetadata.toJSON(message.pagination);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaginatedResponse>, I>>(base?: I): PaginatedResponse {
    return PaginatedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaginatedResponse>, I>>(object: I): PaginatedResponse {
    const message = createBasePaginatedResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PaginationMetadata.fromPartial(object.pagination)
      : undefined;
    message.items = object.items?.map((e) => Any.fromPartial(e)) || [];
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