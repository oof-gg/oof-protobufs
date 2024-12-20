import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../google/protobuf/any";
export declare const protobufPackage = "v1.std";
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
    success?: Success | undefined;
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
    pagination: PaginationMetadata | undefined;
    /** List of items in this page */
    items: Any[];
}
export declare const Error: MessageFns<Error>;
export declare const Success: MessageFns<Success>;
export declare const StandardResponse: MessageFns<StandardResponse>;
export declare const PaginationMetadata: MessageFns<PaginationMetadata>;
export declare const PaginatedResponse: MessageFns<PaginatedResponse>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
