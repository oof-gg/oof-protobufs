import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.game";
export interface Game {
    id: string;
    name: string;
    description: string;
    data: string;
}
export interface GameCreateRequest {
    name: string;
    description: string;
    data: string;
}
export interface GameCreateResponse {
    game: Game | undefined;
}
export interface GameGetRequest {
    id?: string | undefined;
}
export interface GameGetResponse {
    game: Game | undefined;
}
export interface GameUpdateRequest {
    id: string;
    name: string;
    description: string;
    data: string;
}
export interface GameUpdateResponse {
    game: Game | undefined;
}
export declare const Game: MessageFns<Game>;
export declare const GameCreateRequest: MessageFns<GameCreateRequest>;
export declare const GameCreateResponse: MessageFns<GameCreateResponse>;
export declare const GameGetRequest: MessageFns<GameGetRequest>;
export declare const GameGetResponse: MessageFns<GameGetResponse>;
export declare const GameUpdateRequest: MessageFns<GameUpdateRequest>;
export declare const GameUpdateResponse: MessageFns<GameUpdateResponse>;
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
