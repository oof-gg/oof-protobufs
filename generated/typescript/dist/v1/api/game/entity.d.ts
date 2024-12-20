import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.game";
/** / The Entity message */
export interface Entity {
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
        [key: string]: EntityAttribute;
    };
    /** / The controller of the entity */
    controller: Entity_ControllerStateEnum;
    /** / The owner of the entity */
    playerId?: string | undefined;
    /** / Can be any JSON data */
    data?: string | undefined;
}
export declare enum Entity_ControllerStateEnum {
    SERVER = 0,
    PLAYER = 1,
    UNRECOGNIZED = -1
}
export declare function entity_ControllerStateEnumFromJSON(object: any): Entity_ControllerStateEnum;
export declare function entity_ControllerStateEnumToJSON(object: Entity_ControllerStateEnum): string;
export interface Entity_AttributesEntry {
    key: string;
    value: EntityAttribute | undefined;
}
/** / The Entities message */
export interface Entities {
    /** / The entities */
    entities: Entity[];
}
/** / The EntityAttribute message */
export interface EntityAttribute {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
/** / The EntityCreate message */
export interface EntityGet {
    /** / The unique identifier of the entity */
    id: string;
    /** / The session id of the entity */
    sessionId: string;
    /** / The game id of the entity */
    gameId: string;
}
/** / The RegisterEntity message */
export interface EntityCreate {
    /** / The name of the entity, e.g. "ball" */
    name: string;
    /** / The type of the entity, e.g. "object" */
    type: string;
    /** / The session id of the entity */
    sessionId: string;
    /** / The game id of the entity */
    gameId: string;
    /** / The attributes of the entity */
    attributes: {
        [key: string]: EntityAttribute;
    };
    /** / The controller of the entity */
    controller: EntityCreate_ControllerStateEnum;
    /** / The owner of the entity */
    playerId?: string | undefined;
    /** / Can be any JSON data */
    data?: string | undefined;
}
export declare enum EntityCreate_ControllerStateEnum {
    SERVER = 0,
    PLAYER = 1,
    UNRECOGNIZED = -1
}
export declare function entityCreate_ControllerStateEnumFromJSON(object: any): EntityCreate_ControllerStateEnum;
export declare function entityCreate_ControllerStateEnumToJSON(object: EntityCreate_ControllerStateEnum): string;
export interface EntityCreate_AttributesEntry {
    key: string;
    value: EntityAttribute | undefined;
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
    attributes: EntityAttribute[];
}
/** / The EntityDelete message */
export interface EntityDelete {
    /** / The unique identifier of the entity */
    id: string;
    /** / The session id of the entity */
    sessionId: string;
    /** / The game id of the entity */
    gameId: string;
}
export declare const Entity: MessageFns<Entity>;
export declare const Entity_AttributesEntry: MessageFns<Entity_AttributesEntry>;
export declare const Entities: MessageFns<Entities>;
export declare const EntityAttribute: MessageFns<EntityAttribute>;
export declare const EntityGet: MessageFns<EntityGet>;
export declare const EntityCreate: MessageFns<EntityCreate>;
export declare const EntityCreate_AttributesEntry: MessageFns<EntityCreate_AttributesEntry>;
export declare const EntityUpdate: MessageFns<EntityUpdate>;
export declare const EntityDelete: MessageFns<EntityDelete>;
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
