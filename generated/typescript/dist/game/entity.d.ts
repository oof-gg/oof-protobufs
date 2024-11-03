import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "game";
/** / The RegisterEntity message */
export interface RegisterEntity {
    /** / The name of the entity, e.g. "ball" */
    name: string;
    /** / The type of the entity, e.g. "object" */
    type: string;
    /** / The unique identifier of the entity */
    id: string;
    /** / The session id of the entity */
    sessionId: string;
    /** / The game id of the entity */
    gameId: string;
    /** / The attributes of the entity */
    attributes: {
        [key: string]: RegisterEntity_EntityAttribute;
    };
    /** / The controller of the entity */
    controllerState: RegisterEntity_ControllerStateEnum;
    /** / The owner of the entity */
    playerId?: string | undefined;
    /** / Can be any JSON data */
    data?: string | undefined;
}
export declare enum RegisterEntity_ControllerStateEnum {
    SERVER = 0,
    PLAYER = 1,
    UNRECOGNIZED = -1
}
export declare function registerEntity_ControllerStateEnumFromJSON(object: any): RegisterEntity_ControllerStateEnum;
export declare function registerEntity_ControllerStateEnumToJSON(object: RegisterEntity_ControllerStateEnum): string;
export interface RegisterEntity_AttributesEntry {
    key: string;
    value: RegisterEntity_EntityAttribute | undefined;
}
/** / The EntityAttribute message */
export interface RegisterEntity_EntityAttribute {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
/** / The EntityUpdate message */
export interface EntityUpdate {
    /** / The unique identifier of the entity */
    id: string;
    /** / The session id of the entity */
    sessionId: string;
    /** / The game id of the entity */
    gameId: string;
    /** / The attributes of the entity */
    attributes: RegisterEntity_EntityAttribute[];
}
export declare const RegisterEntity: MessageFns<RegisterEntity>;
export declare const RegisterEntity_AttributesEntry: MessageFns<RegisterEntity_AttributesEntry>;
export declare const RegisterEntity_EntityAttribute: MessageFns<RegisterEntity_EntityAttribute>;
export declare const EntityUpdate: MessageFns<EntityUpdate>;
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
