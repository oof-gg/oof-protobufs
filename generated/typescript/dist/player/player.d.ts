import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "player";
export interface Player {
    id: string;
    username: string;
    email?: string | undefined;
    team?: string | undefined;
    score: number;
    type: Player_PlayerType;
    status: Player_PlayerStatus;
    /** Role of the player in the game */
    role?: string | undefined;
}
export declare enum Player_PlayerType {
    /** HUMAN - default */
    HUMAN = 0,
    AI = 1,
    UNRECOGNIZED = -1
}
export declare function player_PlayerTypeFromJSON(object: any): Player_PlayerType;
export declare function player_PlayerTypeToJSON(object: Player_PlayerType): string;
export declare enum Player_PlayerStatus {
    /** ACTIVE - default */
    ACTIVE = 0,
    INACTIVE = 1,
    UNRECOGNIZED = -1
}
export declare function player_PlayerStatusFromJSON(object: any): Player_PlayerStatus;
export declare function player_PlayerStatusToJSON(object: Player_PlayerStatus): string;
export declare const Player: MessageFns<Player>;
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
