import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"


export class Error extends jspb.Message {
  getCode(): number;
  setCode(value: number): Error;

  getMessage(): string;
  setMessage(value: string): Error;

  getDetails(): string;
  setDetails(value: string): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    code: number,
    message: string,
    details: string,
  }
}

export class Success extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): Success;

  getDetails(): string;
  setDetails(value: string): Success;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Success.AsObject;
  static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
  static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Success;
  static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
}

export namespace Success {
  export type AsObject = {
    message: string,
    details: string,
  }
}

export class StandardResponse extends jspb.Message {
  getSuccess(): Success | undefined;
  setSuccess(value?: Success): StandardResponse;
  hasSuccess(): boolean;
  clearSuccess(): StandardResponse;

  getError(): Error | undefined;
  setError(value?: Error): StandardResponse;
  hasError(): boolean;
  clearError(): StandardResponse;

  getResultCase(): StandardResponse.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StandardResponse): StandardResponse.AsObject;
  static serializeBinaryToWriter(message: StandardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardResponse;
  static deserializeBinaryFromReader(message: StandardResponse, reader: jspb.BinaryReader): StandardResponse;
}

export namespace StandardResponse {
  export type AsObject = {
    success?: Success.AsObject,
    error?: Error.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    SUCCESS = 1,
    ERROR = 2,
  }
}

export class PaginationMetadata extends jspb.Message {
  getPage(): number;
  setPage(value: number): PaginationMetadata;

  getPageSize(): number;
  setPageSize(value: number): PaginationMetadata;

  getTotalItems(): number;
  setTotalItems(value: number): PaginationMetadata;

  getTotalPages(): number;
  setTotalPages(value: number): PaginationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationMetadata): PaginationMetadata.AsObject;
  static serializeBinaryToWriter(message: PaginationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationMetadata;
  static deserializeBinaryFromReader(message: PaginationMetadata, reader: jspb.BinaryReader): PaginationMetadata;
}

export namespace PaginationMetadata {
  export type AsObject = {
    page: number,
    pageSize: number,
    totalItems: number,
    totalPages: number,
  }
}

export class PaginatedResponse extends jspb.Message {
  getPagination(): PaginationMetadata | undefined;
  setPagination(value?: PaginationMetadata): PaginatedResponse;
  hasPagination(): boolean;
  clearPagination(): PaginatedResponse;

  getItemsList(): Array<google_protobuf_any_pb.Any>;
  setItemsList(value: Array<google_protobuf_any_pb.Any>): PaginatedResponse;
  clearItemsList(): PaginatedResponse;
  addItems(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginatedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaginatedResponse): PaginatedResponse.AsObject;
  static serializeBinaryToWriter(message: PaginatedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginatedResponse;
  static deserializeBinaryFromReader(message: PaginatedResponse, reader: jspb.BinaryReader): PaginatedResponse;
}

export namespace PaginatedResponse {
  export type AsObject = {
    pagination?: PaginationMetadata.AsObject,
    itemsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

