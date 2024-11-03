import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "player";
export interface Action {
    /** / Unique identifier of the player */
    playerId: string;
    /** / Unique identifier of the session */
    sessionId: string;
    /** / Unique identifier of the game */
    gameId: string;
    /** / Type of action */
    type: Action_ActionType;
    /** / Position of the player (optional) */
    position?: Action_Position | undefined;
    /** / Velocity of the player (optional) */
    velocity?: Action_Velocity | undefined;
    /** / Custom actions the player can take */
    action: {
        [key: string]: Action_PlayerAction;
    };
    timestamp: number;
}
/** / Type of action */
export declare enum Action_ActionType {
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
export declare function action_ActionTypeFromJSON(object: any): Action_ActionType;
export declare function action_ActionTypeToJSON(object: Action_ActionType): string;
export interface Action_ActionEntry {
    key: string;
    value: Action_PlayerAction | undefined;
}
/** / Position of the player */
export interface Action_Position {
    x: number;
    y: number;
    z: number;
}
/** / Velocity of the player */
export interface Action_Velocity {
    x: number;
    y: number;
    z: number;
}
/** / Custom actions the player can take */
export interface Action_PlayerAction {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
export declare const Action: MessageFns<Action>;
export declare const Action_ActionEntry: MessageFns<Action_ActionEntry>;
export declare const Action_Position: MessageFns<Action_Position>;
export declare const Action_Velocity: MessageFns<Action_Velocity>;
export declare const Action_PlayerAction: MessageFns<Action_PlayerAction>;
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
