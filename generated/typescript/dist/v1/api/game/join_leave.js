"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: v1/api/game/join_leave.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinLeaveGame = exports.JoinLeaveGame_Action = exports.protobufPackage = void 0;
exports.joinLeaveGame_ActionFromJSON = joinLeaveGame_ActionFromJSON;
exports.joinLeaveGame_ActionToJSON = joinLeaveGame_ActionToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const regions_1 = require("../../std/regions");
exports.protobufPackage = "v1.api.game";
var JoinLeaveGame_Action;
(function (JoinLeaveGame_Action) {
    JoinLeaveGame_Action[JoinLeaveGame_Action["JOIN"] = 0] = "JOIN";
    JoinLeaveGame_Action[JoinLeaveGame_Action["LEAVE"] = 1] = "LEAVE";
    JoinLeaveGame_Action[JoinLeaveGame_Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(JoinLeaveGame_Action || (exports.JoinLeaveGame_Action = JoinLeaveGame_Action = {}));
function joinLeaveGame_ActionFromJSON(object) {
    switch (object) {
        case 0:
        case "JOIN":
            return JoinLeaveGame_Action.JOIN;
        case 1:
        case "LEAVE":
            return JoinLeaveGame_Action.LEAVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return JoinLeaveGame_Action.UNRECOGNIZED;
    }
}
function joinLeaveGame_ActionToJSON(object) {
    switch (object) {
        case JoinLeaveGame_Action.JOIN:
            return "JOIN";
        case JoinLeaveGame_Action.LEAVE:
            return "LEAVE";
        case JoinLeaveGame_Action.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseJoinLeaveGame() {
    return { playerId: "", gameId: "", action: 0, teamId: undefined, sessionId: undefined, region: undefined };
}
exports.JoinLeaveGame = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.playerId !== "") {
            writer.uint32(10).string(message.playerId);
        }
        if (message.gameId !== "") {
            writer.uint32(18).string(message.gameId);
        }
        if (message.action !== 0) {
            writer.uint32(24).int32(message.action);
        }
        if (message.teamId !== undefined) {
            writer.uint32(34).string(message.teamId);
        }
        if (message.sessionId !== undefined) {
            writer.uint32(42).string(message.sessionId);
        }
        if (message.region !== undefined) {
            writer.uint32(48).int32(message.region);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJoinLeaveGame();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.playerId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.gameId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.action = reader.int32();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.teamId = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.sessionId = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.region = reader.int32();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : "",
            gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
            action: isSet(object.action) ? joinLeaveGame_ActionFromJSON(object.action) : 0,
            teamId: isSet(object.teamId) ? globalThis.String(object.teamId) : undefined,
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : undefined,
            region: isSet(object.region) ? (0, regions_1.regionEnumFromJSON)(object.region) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.playerId !== "") {
            obj.playerId = message.playerId;
        }
        if (message.gameId !== "") {
            obj.gameId = message.gameId;
        }
        if (message.action !== 0) {
            obj.action = joinLeaveGame_ActionToJSON(message.action);
        }
        if (message.teamId !== undefined) {
            obj.teamId = message.teamId;
        }
        if (message.sessionId !== undefined) {
            obj.sessionId = message.sessionId;
        }
        if (message.region !== undefined) {
            obj.region = (0, regions_1.regionEnumToJSON)(message.region);
        }
        return obj;
    },
    create(base) {
        return exports.JoinLeaveGame.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseJoinLeaveGame();
        message.playerId = object.playerId ?? "";
        message.gameId = object.gameId ?? "";
        message.action = object.action ?? 0;
        message.teamId = object.teamId ?? undefined;
        message.sessionId = object.sessionId ?? undefined;
        message.region = object.region ?? undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
