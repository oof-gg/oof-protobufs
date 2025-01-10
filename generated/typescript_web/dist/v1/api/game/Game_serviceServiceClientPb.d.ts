/**
 * @fileoverview gRPC-Web generated client stub for v1.api.game
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as v1_api_game_entity_pb from '../../../v1/api/game/entity_pb';
import * as v1_api_game_game_pb from '../../../v1/api/game/game_pb';
import * as v1_api_game_join_leave_pb from '../../../v1/api/game/join_leave_pb';
import * as v1_api_game_session_pb from '../../../v1/api/game/session_pb';
import * as v1_std_responses_pb from '../../../v1/std/responses_pb';
export declare class GameServiceClient {
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
    methodDescriptorJoinLeave: grpcWeb.MethodDescriptor<v1_api_game_join_leave_pb.JoinLeaveGame, v1_api_game_session_pb.Session>;
    joinLeave(request: v1_api_game_join_leave_pb.JoinLeaveGame, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_session_pb.Session>;
    joinLeave(request: v1_api_game_join_leave_pb.JoinLeaveGame, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_session_pb.Session) => void): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Session>;
    methodDescriptorCreateSession: grpcWeb.MethodDescriptor<v1_api_game_session_pb.SessionCreate, v1_api_game_session_pb.Session>;
    createSession(request: v1_api_game_session_pb.SessionCreate, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_session_pb.Session>;
    createSession(request: v1_api_game_session_pb.SessionCreate, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_session_pb.Session) => void): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Session>;
    methodDescriptorGetSession: grpcWeb.MethodDescriptor<v1_api_game_session_pb.SessionGet, v1_api_game_session_pb.Sessions>;
    getSession(request: v1_api_game_session_pb.SessionGet, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_session_pb.Sessions>;
    getSession(request: v1_api_game_session_pb.SessionGet, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_session_pb.Sessions) => void): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Sessions>;
    methodDescriptorUpdateSession: grpcWeb.MethodDescriptor<v1_api_game_session_pb.SessionUpdate, v1_api_game_session_pb.Session>;
    updateSession(request: v1_api_game_session_pb.SessionUpdate, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_session_pb.Session>;
    updateSession(request: v1_api_game_session_pb.SessionUpdate, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_session_pb.Session) => void): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Session>;
    methodDescriptorDeleteSession: grpcWeb.MethodDescriptor<v1_api_game_session_pb.SessionDelete, v1_std_responses_pb.StandardResponse>;
    deleteSession(request: v1_api_game_session_pb.SessionDelete, metadata?: grpcWeb.Metadata | null): Promise<v1_std_responses_pb.StandardResponse>;
    deleteSession(request: v1_api_game_session_pb.SessionDelete, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_std_responses_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_std_responses_pb.StandardResponse>;
    methodDescriptorCreateEntity: grpcWeb.MethodDescriptor<v1_api_game_entity_pb.EntityCreateRequest, v1_api_game_entity_pb.EntityCreateResponse>;
    createEntity(request: v1_api_game_entity_pb.EntityCreateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_entity_pb.EntityCreateResponse>;
    createEntity(request: v1_api_game_entity_pb.EntityCreateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_entity_pb.EntityCreateResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_entity_pb.EntityCreateResponse>;
    methodDescriptorGetEntity: grpcWeb.MethodDescriptor<v1_api_game_entity_pb.EntityGetRequest, v1_api_game_entity_pb.EntityGetResponse>;
    getEntity(request: v1_api_game_entity_pb.EntityGetRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_entity_pb.EntityGetResponse>;
    getEntity(request: v1_api_game_entity_pb.EntityGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_entity_pb.EntityGetResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_entity_pb.EntityGetResponse>;
    methodDescriptorUpdateEntity: grpcWeb.MethodDescriptor<v1_api_game_entity_pb.EntityUpdateRequest, v1_api_game_entity_pb.EntityUpdateResponse>;
    updateEntity(request: v1_api_game_entity_pb.EntityUpdateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_entity_pb.EntityUpdateResponse>;
    updateEntity(request: v1_api_game_entity_pb.EntityUpdateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_entity_pb.EntityUpdateResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_entity_pb.EntityUpdateResponse>;
    methodDescriptorDeleteEntity: grpcWeb.MethodDescriptor<v1_api_game_entity_pb.EntityDeleteRequest, v1_api_game_entity_pb.EntityDeleteResponse>;
    deleteEntity(request: v1_api_game_entity_pb.EntityDeleteRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_entity_pb.EntityDeleteResponse>;
    deleteEntity(request: v1_api_game_entity_pb.EntityDeleteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_entity_pb.EntityDeleteResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_entity_pb.EntityDeleteResponse>;
    methodDescriptorCreateGame: grpcWeb.MethodDescriptor<v1_api_game_game_pb.GameCreateRequest, v1_api_game_game_pb.GameCreateResponse>;
    createGame(request: v1_api_game_game_pb.GameCreateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.GameCreateResponse>;
    createGame(request: v1_api_game_game_pb.GameCreateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.GameCreateResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.GameCreateResponse>;
    methodDescriptorGetGame: grpcWeb.MethodDescriptor<v1_api_game_game_pb.GameGetRequest, v1_api_game_game_pb.GameGetResponse>;
    getGame(request: v1_api_game_game_pb.GameGetRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.GameGetResponse>;
    getGame(request: v1_api_game_game_pb.GameGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.GameGetResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.GameGetResponse>;
    methodDescriptorUpdateGame: grpcWeb.MethodDescriptor<v1_api_game_game_pb.GameUpdateRequest, v1_api_game_game_pb.GameUpdateResponse>;
    updateGame(request: v1_api_game_game_pb.GameUpdateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.GameUpdateResponse>;
    updateGame(request: v1_api_game_game_pb.GameUpdateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.GameUpdateResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.GameUpdateResponse>;
    methodDescriptorWatchQueue: grpcWeb.MethodDescriptor<v1_api_game_session_pb.Session, v1_api_game_session_pb.Session>;
    watchQueue(request: v1_api_game_session_pb.Session, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Session>;
}
