import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.game";
/** / Represents a game session, can be used to store game state and attributes such as scores, times, players, and active in-game configurations. */
export interface Session {
    id: string;
    gameId: string;
    /**
     * / Players in the session (can be used to store player state and attributes)
     * / Optional: This can be used to store player state and attributes, but not recommended for large player counts.
     */
    playerIds: string[];
    /** / Game state as defined by the GameState enum */
    state: Session_GameState;
    /** / Game attributes as a map of string to GameAttribute */
    attributes: {
        [key: string]: Session_GameAttribute;
    };
}
export declare enum Session_GameState {
    CREATED = 0,
    WAITING = 1,
    STARTED = 2,
    FINISHED = 3,
    UNRECOGNIZED = -1
}
export declare function session_GameStateFromJSON(object: any): Session_GameState;
export declare function session_GameStateToJSON(object: Session_GameState): string;
export interface Session_AttributesEntry {
    key: string;
    value: Session_GameAttribute | undefined;
}
/** TODO: Check if this is the best way to represent game attributes */
export interface Session_GameAttribute {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
export interface SessionGet {
    id?: string | undefined;
    gameId?: string | undefined;
}
export interface SessionDelete {
    id: string;
    gameId: string;
}
export interface Sessions {
    sessions: Session[];
}
export declare const Session: MessageFns<Session>;
export declare const Session_AttributesEntry: MessageFns<Session_AttributesEntry>;
export declare const Session_GameAttribute: MessageFns<Session_GameAttribute>;
export declare const SessionGet: MessageFns<SessionGet>;
export declare const SessionDelete: MessageFns<SessionDelete>;
export declare const Sessions: MessageFns<Sessions>;
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
