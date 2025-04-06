"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for v1.api.common
 * @enhanceable
 * @public
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerServiceClient = void 0;
// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.14.0
// source: v1/api/common/player_service.proto
/* eslint-disable */
// @ts-nocheck
const grpcWeb = require("grpc-web");
const v1_api_player_player_pb = require("../../../v1/api/player/player_pb"); // proto import: "v1/api/player/player.proto"
class PlayerServiceClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorCreatePlayer = new grpcWeb.MethodDescriptor('/v1.api.common.PlayerService/CreatePlayer', grpcWeb.MethodType.UNARY, v1_api_player_player_pb.Player, v1_api_player_player_pb.StandardResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_player_player_pb.StandardResponse.deserializeBinary);
        this.methodDescriptorGetPlayer = new grpcWeb.MethodDescriptor('/v1.api.common.PlayerService/GetPlayer', grpcWeb.MethodType.UNARY, v1_api_player_player_pb.PlayerGet, v1_api_player_player_pb.StandardResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_player_player_pb.StandardResponse.deserializeBinary);
        this.methodDescriptorUpdatePlayer = new grpcWeb.MethodDescriptor('/v1.api.common.PlayerService/UpdatePlayer', grpcWeb.MethodType.UNARY, v1_api_player_player_pb.PlayerUpdate, v1_api_player_player_pb.StandardResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_player_player_pb.StandardResponse.deserializeBinary);
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
    createPlayer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.common.PlayerService/CreatePlayer', request, metadata || {}, this.methodDescriptorCreatePlayer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.common.PlayerService/CreatePlayer', request, metadata || {}, this.methodDescriptorCreatePlayer);
    }
    getPlayer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.common.PlayerService/GetPlayer', request, metadata || {}, this.methodDescriptorGetPlayer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.common.PlayerService/GetPlayer', request, metadata || {}, this.methodDescriptorGetPlayer);
    }
    updatePlayer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.common.PlayerService/UpdatePlayer', request, metadata || {}, this.methodDescriptorUpdatePlayer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.common.PlayerService/UpdatePlayer', request, metadata || {}, this.methodDescriptorUpdatePlayer);
    }
}
exports.PlayerServiceClient = PlayerServiceClient;
