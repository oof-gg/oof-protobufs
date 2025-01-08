"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for v1.api.game
 * @enhanceable
 * @public
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServiceClient = void 0;
// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: v1/api/game/game_service.proto
/* eslint-disable */
// @ts-nocheck
const grpcWeb = require("grpc-web");
const v1_api_game_entity_pb = require("../../../v1/api/game/entity_pb"); // proto import: "v1/api/game/entity.proto"
const v1_api_game_join_leave_pb = require("../../../v1/api/game/join_leave_pb"); // proto import: "v1/api/game/join_leave.proto"
const v1_api_game_session_pb = require("../../../v1/api/game/session_pb"); // proto import: "v1/api/game/session.proto"
const v1_std_responses_pb = require("../../../v1/std/responses_pb"); // proto import: "v1/std/responses.proto"
class GameServiceClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorJoinLeave = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/JoinLeave', grpcWeb.MethodType.UNARY, v1_api_game_join_leave_pb.JoinLeaveGame, v1_api_game_session_pb.Session, (request) => {
            return request.serializeBinary();
        }, v1_api_game_session_pb.Session.deserializeBinary);
        this.methodDescriptorCreateSession = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/CreateSession', grpcWeb.MethodType.UNARY, v1_api_game_session_pb.SessionCreate, v1_api_game_session_pb.Session, (request) => {
            return request.serializeBinary();
        }, v1_api_game_session_pb.Session.deserializeBinary);
        this.methodDescriptorGetSession = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/GetSession', grpcWeb.MethodType.UNARY, v1_api_game_session_pb.SessionGet, v1_api_game_session_pb.Sessions, (request) => {
            return request.serializeBinary();
        }, v1_api_game_session_pb.Sessions.deserializeBinary);
        this.methodDescriptorUpdateSession = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/UpdateSession', grpcWeb.MethodType.UNARY, v1_api_game_session_pb.SessionUpdate, v1_api_game_session_pb.Session, (request) => {
            return request.serializeBinary();
        }, v1_api_game_session_pb.Session.deserializeBinary);
        this.methodDescriptorDeleteSession = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/DeleteSession', grpcWeb.MethodType.UNARY, v1_api_game_session_pb.SessionDelete, v1_std_responses_pb.StandardResponse, (request) => {
            return request.serializeBinary();
        }, v1_std_responses_pb.StandardResponse.deserializeBinary);
        this.methodDescriptorCreateEntity = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/CreateEntity', grpcWeb.MethodType.UNARY, v1_api_game_entity_pb.EntityCreateRequest, v1_api_game_entity_pb.EntityCreateResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_game_entity_pb.EntityCreateResponse.deserializeBinary);
        this.methodDescriptorGetEntity = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/GetEntity', grpcWeb.MethodType.UNARY, v1_api_game_entity_pb.EntityGetRequest, v1_api_game_entity_pb.EntityGetResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_game_entity_pb.EntityGetResponse.deserializeBinary);
        this.methodDescriptorUpdateEntity = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/UpdateEntity', grpcWeb.MethodType.UNARY, v1_api_game_entity_pb.EntityUpdateRequest, v1_api_game_entity_pb.EntityUpdateResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_game_entity_pb.EntityUpdateResponse.deserializeBinary);
        this.methodDescriptorDeleteEntity = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/DeleteEntity', grpcWeb.MethodType.UNARY, v1_api_game_entity_pb.EntityDeleteRequest, v1_api_game_entity_pb.EntityDeleteResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_game_entity_pb.EntityDeleteResponse.deserializeBinary);
        this.methodDescriptorWatchQueue = new grpcWeb.MethodDescriptor('/v1.api.game.GameService/WatchQueue', grpcWeb.MethodType.SERVER_STREAMING, v1_api_game_session_pb.Session, v1_api_game_session_pb.Session, (request) => {
            return request.serializeBinary();
        }, v1_api_game_session_pb.Session.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname.replace(/\/+$/, '');
        this.credentials_ = credentials;
        this.options_ = options;
    }
    joinLeave(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.game.GameService/JoinLeave', request, metadata || {}, this.methodDescriptorJoinLeave, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.game.GameService/JoinLeave', request, metadata || {}, this.methodDescriptorJoinLeave);
    }
    createSession(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.game.GameService/CreateSession', request, metadata || {}, this.methodDescriptorCreateSession, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.game.GameService/CreateSession', request, metadata || {}, this.methodDescriptorCreateSession);
    }
    getSession(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.game.GameService/GetSession', request, metadata || {}, this.methodDescriptorGetSession, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.game.GameService/GetSession', request, metadata || {}, this.methodDescriptorGetSession);
    }
    updateSession(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.game.GameService/UpdateSession', request, metadata || {}, this.methodDescriptorUpdateSession, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.game.GameService/UpdateSession', request, metadata || {}, this.methodDescriptorUpdateSession);
    }
    deleteSession(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.game.GameService/DeleteSession', request, metadata || {}, this.methodDescriptorDeleteSession, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.game.GameService/DeleteSession', request, metadata || {}, this.methodDescriptorDeleteSession);
    }
    createEntity(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.game.GameService/CreateEntity', request, metadata || {}, this.methodDescriptorCreateEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.game.GameService/CreateEntity', request, metadata || {}, this.methodDescriptorCreateEntity);
    }
    getEntity(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.game.GameService/GetEntity', request, metadata || {}, this.methodDescriptorGetEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.game.GameService/GetEntity', request, metadata || {}, this.methodDescriptorGetEntity);
    }
    updateEntity(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.game.GameService/UpdateEntity', request, metadata || {}, this.methodDescriptorUpdateEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.game.GameService/UpdateEntity', request, metadata || {}, this.methodDescriptorUpdateEntity);
    }
    deleteEntity(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.game.GameService/DeleteEntity', request, metadata || {}, this.methodDescriptorDeleteEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.game.GameService/DeleteEntity', request, metadata || {}, this.methodDescriptorDeleteEntity);
    }
    watchQueue(request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/v1.api.game.GameService/WatchQueue', request, metadata || {}, this.methodDescriptorWatchQueue);
    }
}
exports.GameServiceClient = GameServiceClient;