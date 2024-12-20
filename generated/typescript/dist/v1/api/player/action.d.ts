import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.player";
export interface PlayerAction {
    /** / Unique identifier of the player */
    playerId: string;
    /** / Unique identifier of the session */
    sessionId: string;
    /** / Unique identifier of the game */
    gameId: string;
    /** / Type of action */
    type: PlayerAction_ActionType;
    /** / Position of the player (optional) */
    position?: PlayerAction_Position | undefined;
    /** / Velocity of the player (optional) */
    velocity?: PlayerAction_Velocity | undefined;
    /** / Custom actions the player can take */
    action: {
        [key: string]: PlayerAction_PlayerAction;
    };
    timestamp: number;
}
/** / Type of action */
export declare enum PlayerAction_ActionType {
    /** CUSTOM - / Custom action */
    CUSTOM = 0,
    /** MOVE - / Move action */
    MOVE = 1,
    /** JUMP - / Jump action */
    JUMP = 2,
    /** SHOOT - / Shoot action */
    SHOOT = 3,
    /** PICKUP - / Pickup action */
    PICKUP = 4,
    /** DROP - / Drop action */
    DROP = 5,
    /** USE - / Use action */
    USE = 6,
    /** INTERACT - / Interact action */
    INTERACT = 7,
    UNRECOGNIZED = -1
}
export declare function playerAction_ActionTypeFromJSON(object: any): PlayerAction_ActionType;
export declare function playerAction_ActionTypeToJSON(object: PlayerAction_ActionType): string;
export interface PlayerAction_ActionEntry {
    key: string;
    value: PlayerAction_PlayerAction | undefined;
}
/** / Position of the player */
export interface PlayerAction_Position {
    x: number;
    y: number;
    z: number;
}
/** / Velocity of the player */
export interface PlayerAction_Velocity {
    x: number;
    y: number;
    z: number;
}
/** / Custom actions the player can take */
export interface PlayerAction_PlayerAction {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
export declare const PlayerAction: MessageFns<PlayerAction>;
export declare const PlayerAction_ActionEntry: MessageFns<PlayerAction_ActionEntry>;
export declare const PlayerAction_Position: MessageFns<PlayerAction_Position>;
export declare const PlayerAction_Velocity: MessageFns<PlayerAction_Velocity>;
export declare const PlayerAction_PlayerAction: MessageFns<PlayerAction_PlayerAction>;
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
