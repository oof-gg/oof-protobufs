import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { LeaderboardRequest, PlayerRankRequest, PlayerScoresRequest, ScoreSubmission, StandardResponse } from "../score/score";
export declare const protobufPackage = "v1.api.common";
export type ScoreServiceService = typeof ScoreServiceService;
export declare const ScoreServiceService: {
    readonly submitScore: {
        readonly path: "/v1.api.common.ScoreService/SubmitScore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ScoreSubmission) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ScoreSubmission;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly getPlayerScores: {
        readonly path: "/v1.api.common.ScoreService/GetPlayerScores";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PlayerScoresRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PlayerScoresRequest;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly getLeaderboard: {
        readonly path: "/v1.api.common.ScoreService/GetLeaderboard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LeaderboardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LeaderboardRequest;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly getPlayerRank: {
        readonly path: "/v1.api.common.ScoreService/GetPlayerRank";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PlayerRankRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PlayerRankRequest;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
};
export interface ScoreServiceServer extends UntypedServiceImplementation {
    submitScore: handleUnaryCall<ScoreSubmission, StandardResponse>;
    getPlayerScores: handleUnaryCall<PlayerScoresRequest, StandardResponse>;
    getLeaderboard: handleUnaryCall<LeaderboardRequest, StandardResponse>;
    getPlayerRank: handleUnaryCall<PlayerRankRequest, StandardResponse>;
}
export interface ScoreServiceClient extends Client {
    submitScore(request: ScoreSubmission, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    submitScore(request: ScoreSubmission, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    submitScore(request: ScoreSubmission, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getPlayerScores(request: PlayerScoresRequest, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getPlayerScores(request: PlayerScoresRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getPlayerScores(request: PlayerScoresRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getLeaderboard(request: LeaderboardRequest, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getLeaderboard(request: LeaderboardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getLeaderboard(request: LeaderboardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getPlayerRank(request: PlayerRankRequest, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getPlayerRank(request: PlayerRankRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getPlayerRank(request: PlayerRankRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
}
export declare const ScoreServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ScoreServiceClient;
    service: typeof ScoreServiceService;
    serviceName: string;
};
