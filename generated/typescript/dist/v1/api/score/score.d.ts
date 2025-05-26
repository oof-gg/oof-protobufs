import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.score";
export interface Score {
    id: string;
    playerId: string;
    gameId: string;
    /** optional - for game session tracking */
    instanceId: string;
    value: number;
    /** "points", "time", "kills", etc. */
    scoreType: string;
    createdAt: Date | undefined;
    /** flexible for game-specific data */
    metadata: {
        [key: string]: string;
    };
}
export interface Score_MetadataEntry {
    key: string;
    value: string;
}
export interface LeaderboardEntry {
    rank: number;
    score: Score | undefined;
    /** denormalized for performance */
    playerName: string;
}
export interface PlayerScoresRequest {
    playerId: string;
    /** optional, if not provided, fetch all scores for the player */
    gameId: string;
    /** maximum number of scores to return */
    limit: number;
    /** for pagination */
    offset: number;
}
export interface PlayerScoresResponse {
    playerId: string;
    /** if provided in request */
    gameId: string;
    scores: Score[];
    /** total number of scores available for the player */
    totalCount: number;
}
export interface Leaderboard {
    gameId: string;
    scoreType: string;
    /** "all_time", "daily", "weekly", "monthly" */
    timePeriod: string;
    entries: LeaderboardEntry[];
    lastUpdated: Date | undefined;
}
export interface ScoreSubmission {
    playerId: string;
    gameId: string;
    instanceId: string;
    value: number;
    scoreType: string;
    metadata: {
        [key: string]: string;
    };
}
export interface ScoreSubmission_MetadataEntry {
    key: string;
    value: string;
}
export interface LeaderboardRequest {
    gameId: string;
    scoreType: string;
    timePeriod: string;
    limit: number;
    offset: number;
}
export interface PlayerRankRequest {
    playerId: string;
    /** optional, if not provided, fetch rank across all games */
    gameId: string;
    /** optional, if not provided, fetch overall rank */
    scoreType: string;
}
export interface PlayerRankResponse {
    playerId: string;
    /** if provided in request */
    gameId: string;
    /** if provided in request */
    scoreType: string;
    /** player's rank in the leaderboard */
    rank: number;
    /** player's score value */
    scoreValue: number;
    /** total number of players in the leaderboard for this game/score type */
    totalPlayers: number;
}
export interface StandardResponse {
    success: boolean;
    message: string;
    errors: string[];
}
export declare const Score: MessageFns<Score>;
export declare const Score_MetadataEntry: MessageFns<Score_MetadataEntry>;
export declare const LeaderboardEntry: MessageFns<LeaderboardEntry>;
export declare const PlayerScoresRequest: MessageFns<PlayerScoresRequest>;
export declare const PlayerScoresResponse: MessageFns<PlayerScoresResponse>;
export declare const Leaderboard: MessageFns<Leaderboard>;
export declare const ScoreSubmission: MessageFns<ScoreSubmission>;
export declare const ScoreSubmission_MetadataEntry: MessageFns<ScoreSubmission_MetadataEntry>;
export declare const LeaderboardRequest: MessageFns<LeaderboardRequest>;
export declare const PlayerRankRequest: MessageFns<PlayerRankRequest>;
export declare const PlayerRankResponse: MessageFns<PlayerRankResponse>;
export declare const StandardResponse: MessageFns<StandardResponse>;
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
