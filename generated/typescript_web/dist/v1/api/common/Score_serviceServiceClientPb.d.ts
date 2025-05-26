/**
 * @fileoverview gRPC-Web generated client stub for v1.api.common
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as v1_api_score_score_pb from '../../../v1/api/score/score_pb';
export declare class ScoreServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorSubmitScore: grpcWeb.MethodDescriptor<v1_api_score_score_pb.ScoreSubmission, v1_api_score_score_pb.StandardResponse>;
    submitScore(request: v1_api_score_score_pb.ScoreSubmission, metadata?: grpcWeb.Metadata | null): Promise<v1_api_score_score_pb.StandardResponse>;
    submitScore(request: v1_api_score_score_pb.ScoreSubmission, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_score_score_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_score_score_pb.StandardResponse>;
    methodDescriptorGetPlayerScores: grpcWeb.MethodDescriptor<v1_api_score_score_pb.PlayerScoresRequest, v1_api_score_score_pb.PlayerScoresResponse>;
    getPlayerScores(request: v1_api_score_score_pb.PlayerScoresRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_score_score_pb.PlayerScoresResponse>;
    getPlayerScores(request: v1_api_score_score_pb.PlayerScoresRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_score_score_pb.PlayerScoresResponse) => void): grpcWeb.ClientReadableStream<v1_api_score_score_pb.PlayerScoresResponse>;
    methodDescriptorGetLeaderboard: grpcWeb.MethodDescriptor<v1_api_score_score_pb.LeaderboardRequest, v1_api_score_score_pb.Leaderboard>;
    getLeaderboard(request: v1_api_score_score_pb.LeaderboardRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_score_score_pb.Leaderboard>;
    getLeaderboard(request: v1_api_score_score_pb.LeaderboardRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_score_score_pb.Leaderboard) => void): grpcWeb.ClientReadableStream<v1_api_score_score_pb.Leaderboard>;
    methodDescriptorGetPlayerRank: grpcWeb.MethodDescriptor<v1_api_score_score_pb.PlayerRankRequest, v1_api_score_score_pb.PlayerRankResponse>;
    getPlayerRank(request: v1_api_score_score_pb.PlayerRankRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_score_score_pb.PlayerRankResponse>;
    getPlayerRank(request: v1_api_score_score_pb.PlayerRankRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_score_score_pb.PlayerRankResponse) => void): grpcWeb.ClientReadableStream<v1_api_score_score_pb.PlayerRankResponse>;
}
