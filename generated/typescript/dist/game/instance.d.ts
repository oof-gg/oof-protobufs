import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "game";
export declare enum InstanceState {
    INITIALIZING = 0,
    RUNNING = 1,
    PAUSED = 2,
    CRASHED = 3,
    ABORTED = 4,
    SHUTTING_DOWN = 5,
    STOPPED = 6,
    UNRECOGNIZED = -1
}
export declare function instanceStateFromJSON(object: any): InstanceState;
export declare function instanceStateToJSON(object: InstanceState): string;
/** / Represents the game instance (between App and Game), can be used to trigger operations to run in parent App from child Game container over messages. */
export interface Instance {
    state: InstanceState;
    gameId?: string | undefined;
    playerId?: string | undefined;
    data?: string | undefined;
}
export declare const Instance: MessageFns<Instance>;
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
