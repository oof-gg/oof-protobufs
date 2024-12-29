"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: v1/api/game/game_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameClient = exports.GameService = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const responses_1 = require("../../std/responses");
const entity_1 = require("./entity");
const event_1 = require("./event");
const join_leave_1 = require("./join_leave");
const session_1 = require("./session");
exports.protobufPackage = "v1.api.game";
exports.GameService = {
    /** / Join or leave a game, returns the queued session if not joined */
    joinLeave: {
        path: "/v1.api.game.Game/JoinLeave",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(join_leave_1.JoinLeaveGame.encode(value).finish()),
        requestDeserialize: (value) => join_leave_1.JoinLeaveGame.decode(value),
        responseSerialize: (value) => Buffer.from(session_1.Session.encode(value).finish()),
        responseDeserialize: (value) => session_1.Session.decode(value),
    },
    createSession: {
        path: "/v1.api.game.Game/CreateSession",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(session_1.SessionCreate.encode(value).finish()),
        requestDeserialize: (value) => session_1.SessionCreate.decode(value),
        responseSerialize: (value) => Buffer.from(session_1.Session.encode(value).finish()),
        responseDeserialize: (value) => session_1.Session.decode(value),
    },
    getSession: {
        path: "/v1.api.game.Game/GetSession",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(session_1.SessionGet.encode(value).finish()),
        requestDeserialize: (value) => session_1.SessionGet.decode(value),
        responseSerialize: (value) => Buffer.from(session_1.Sessions.encode(value).finish()),
        responseDeserialize: (value) => session_1.Sessions.decode(value),
    },
    updateSession: {
        path: "/v1.api.game.Game/UpdateSession",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(session_1.SessionUpdate.encode(value).finish()),
        requestDeserialize: (value) => session_1.SessionUpdate.decode(value),
        responseSerialize: (value) => Buffer.from(session_1.Session.encode(value).finish()),
        responseDeserialize: (value) => session_1.Session.decode(value),
    },
    deleteSession: {
        path: "/v1.api.game.Game/DeleteSession",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(session_1.SessionDelete.encode(value).finish()),
        requestDeserialize: (value) => session_1.SessionDelete.decode(value),
        responseSerialize: (value) => Buffer.from(responses_1.StandardResponse.encode(value).finish()),
        responseDeserialize: (value) => responses_1.StandardResponse.decode(value),
    },
    /** TODO: Adjust payloads for protos */
    createEntity: {
        path: "/v1.api.game.Game/CreateEntity",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(entity_1.EntityCreate.encode(value).finish()),
        requestDeserialize: (value) => entity_1.EntityCreate.decode(value),
        responseSerialize: (value) => Buffer.from(entity_1.Entity.encode(value).finish()),
        responseDeserialize: (value) => entity_1.Entity.decode(value),
    },
    getEntity: {
        path: "/v1.api.game.Game/GetEntity",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(entity_1.EntityGet.encode(value).finish()),
        requestDeserialize: (value) => entity_1.EntityGet.decode(value),
        responseSerialize: (value) => Buffer.from(entity_1.Entities.encode(value).finish()),
        responseDeserialize: (value) => entity_1.Entities.decode(value),
    },
    updateEntity: {
        path: "/v1.api.game.Game/UpdateEntity",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(entity_1.EntityUpdate.encode(value).finish()),
        requestDeserialize: (value) => entity_1.EntityUpdate.decode(value),
        responseSerialize: (value) => Buffer.from(entity_1.Entity.encode(value).finish()),
        responseDeserialize: (value) => entity_1.Entity.decode(value),
    },
    deleteEntity: {
        path: "/v1.api.game.Game/DeleteEntity",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(entity_1.EntityDelete.encode(value).finish()),
        requestDeserialize: (value) => entity_1.EntityDelete.decode(value),
        responseSerialize: (value) => Buffer.from(responses_1.StandardResponse.encode(value).finish()),
        responseDeserialize: (value) => responses_1.StandardResponse.decode(value),
    },
    /** / Wait for queue updates */
    streamEvents: {
        path: "/v1.api.game.Game/StreamEvents",
        requestStream: true,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(event_1.GameEvent.encode(value).finish()),
        requestDeserialize: (value) => event_1.GameEvent.decode(value),
        responseSerialize: (value) => Buffer.from(event_1.GameEvent.encode(value).finish()),
        responseDeserialize: (value) => event_1.GameEvent.decode(value),
    },
    /** / Stream events from the game */
    watchQueue: {
        path: "/v1.api.game.Game/WatchQueue",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(session_1.Session.encode(value).finish()),
        requestDeserialize: (value) => session_1.Session.decode(value),
        responseSerialize: (value) => Buffer.from(session_1.Session.encode(value).finish()),
        responseDeserialize: (value) => session_1.Session.decode(value),
    },
};
exports.GameClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.GameService, "v1.api.game.Game");
