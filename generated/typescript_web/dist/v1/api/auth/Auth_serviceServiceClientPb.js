"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for v1.api.auth
 * @enhanceable
 * @public
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceClient = void 0;
// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: v1/api/auth/auth_service.proto
/* eslint-disable */
// @ts-nocheck
const grpcWeb = require("grpc-web");
const v1_api_auth_auth_service_pb = require("../../../v1/api/auth/auth_service_pb"); // proto import: "v1/api/auth/auth_service.proto"
class AuthServiceClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorLogin = new grpcWeb.MethodDescriptor('/v1.api.auth.AuthService/Login', grpcWeb.MethodType.UNARY, v1_api_auth_auth_service_pb.LoginRequest, v1_api_auth_auth_service_pb.LoginResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_auth_auth_service_pb.LoginResponse.deserializeBinary);
        this.methodDescriptorRegister = new grpcWeb.MethodDescriptor('/v1.api.auth.AuthService/Register', grpcWeb.MethodType.UNARY, v1_api_auth_auth_service_pb.RegisterRequest, v1_api_auth_auth_service_pb.RegisterResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_auth_auth_service_pb.RegisterResponse.deserializeBinary);
        this.methodDescriptorValidateToken = new grpcWeb.MethodDescriptor('/v1.api.auth.AuthService/ValidateToken', grpcWeb.MethodType.UNARY, v1_api_auth_auth_service_pb.ValidateTokenRequest, v1_api_auth_auth_service_pb.ValidateTokenResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_auth_auth_service_pb.ValidateTokenResponse.deserializeBinary);
        this.methodDescriptorRefreshToken = new grpcWeb.MethodDescriptor('/v1.api.auth.AuthService/RefreshToken', grpcWeb.MethodType.UNARY, v1_api_auth_auth_service_pb.RefreshTokenRequest, v1_api_auth_auth_service_pb.RefreshTokenResponse, (request) => {
            return request.serializeBinary();
        }, v1_api_auth_auth_service_pb.RefreshTokenResponse.deserializeBinary);
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
    login(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.auth.AuthService/Login', request, metadata || {}, this.methodDescriptorLogin, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.auth.AuthService/Login', request, metadata || {}, this.methodDescriptorLogin);
    }
    register(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.auth.AuthService/Register', request, metadata || {}, this.methodDescriptorRegister, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.auth.AuthService/Register', request, metadata || {}, this.methodDescriptorRegister);
    }
    validateToken(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.auth.AuthService/ValidateToken', request, metadata || {}, this.methodDescriptorValidateToken, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.auth.AuthService/ValidateToken', request, metadata || {}, this.methodDescriptorValidateToken);
    }
    refreshToken(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/v1.api.auth.AuthService/RefreshToken', request, metadata || {}, this.methodDescriptorRefreshToken, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/v1.api.auth.AuthService/RefreshToken', request, metadata || {}, this.methodDescriptorRefreshToken);
    }
}
exports.AuthServiceClient = AuthServiceClient;