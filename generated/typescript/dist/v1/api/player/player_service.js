"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: v1/api/player/player_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerServiceClient = exports.PlayerServiceService = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const action_1 = require("./action");
const player_1 = require("./player");
exports.protobufPackage = "v1.api.player";
exports.PlayerServiceService = {
    createPlayer: {
        path: "/v1.api.player.PlayerService/CreatePlayer",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(player_1.Player.encode(value).finish()),
        requestDeserialize: (value) => player_1.Player.decode(value),
        responseSerialize: (value) => Buffer.from(player_1.Player.encode(value).finish()),
        responseDeserialize: (value) => player_1.Player.decode(value),
    },
    getPlayer: {
        path: "/v1.api.player.PlayerService/GetPlayer",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(player_1.PlayerGet.encode(value).finish()),
        requestDeserialize: (value) => player_1.PlayerGet.decode(value),
        responseSerialize: (value) => Buffer.from(player_1.Players.encode(value).finish()),
        responseDeserialize: (value) => player_1.Players.decode(value),
    },
    updatePlayer: {
        path: "/v1.api.player.PlayerService/UpdatePlayer",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(player_1.PlayerUpdate.encode(value).finish()),
        requestDeserialize: (value) => player_1.PlayerUpdate.decode(value),
        responseSerialize: (value) => Buffer.from(player_1.Player.encode(value).finish()),
        responseDeserialize: (value) => player_1.Player.decode(value),
    },
    streamEvents: {
        path: "/v1.api.player.PlayerService/StreamEvents",
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(action_1.PlayerAction.encode(value).finish()),
        requestDeserialize: (value) => action_1.PlayerAction.decode(value),
        responseSerialize: (value) => Buffer.from(action_1.PlayerAction.encode(value).finish()),
        responseDeserialize: (value) => action_1.PlayerAction.decode(value),
    },
};
exports.PlayerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PlayerServiceService, "v1.api.player.PlayerService");
