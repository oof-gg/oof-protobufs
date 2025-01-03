"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: game/instance.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceState = exports.protobufPackage = void 0;
exports.instanceStateFromJSON = instanceStateFromJSON;
exports.instanceStateToJSON = instanceStateToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "game";
var InstanceState;
(function (InstanceState) {
    InstanceState[InstanceState["INITIALIZING"] = 0] = "INITIALIZING";
    InstanceState[InstanceState["RUNNING"] = 1] = "RUNNING";
    InstanceState[InstanceState["PAUSED"] = 2] = "PAUSED";
    InstanceState[InstanceState["CRASHED"] = 3] = "CRASHED";
    InstanceState[InstanceState["ABORTED"] = 4] = "ABORTED";
    InstanceState[InstanceState["SHUTTING_DOWN"] = 5] = "SHUTTING_DOWN";
    InstanceState[InstanceState["STOPPED"] = 6] = "STOPPED";
    InstanceState[InstanceState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceState || (exports.InstanceState = InstanceState = {}));
function instanceStateFromJSON(object) {
    switch (object) {
        case 0:
        case "INITIALIZING":
            return InstanceState.INITIALIZING;
        case 1:
        case "RUNNING":
            return InstanceState.RUNNING;
        case 2:
        case "PAUSED":
            return InstanceState.PAUSED;
        case 3:
        case "CRASHED":
            return InstanceState.CRASHED;
        case 4:
        case "ABORTED":
            return InstanceState.ABORTED;
        case 5:
        case "SHUTTING_DOWN":
            return InstanceState.SHUTTING_DOWN;
        case 6:
        case "STOPPED":
            return InstanceState.STOPPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InstanceState.UNRECOGNIZED;
    }
}
function instanceStateToJSON(object) {
    switch (object) {
        case InstanceState.INITIALIZING:
            return "INITIALIZING";
        case InstanceState.RUNNING:
            return "RUNNING";
        case InstanceState.PAUSED:
            return "PAUSED";
        case InstanceState.CRASHED:
            return "CRASHED";
        case InstanceState.ABORTED:
            return "ABORTED";
        case InstanceState.SHUTTING_DOWN:
            return "SHUTTING_DOWN";
        case InstanceState.STOPPED:
            return "STOPPED";
        case InstanceState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseInstance() {
    return { state: 0, gameId: undefined, playerId: undefined, data: undefined };
}
exports.Instance = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.gameId !== undefined) {
            writer.uint32(18).string(message.gameId);
        }
        if (message.playerId !== undefined) {
            writer.uint32(26).string(message.playerId);
        }
        if (message.data !== undefined) {
            writer.uint32(34).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
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
                    if (tag !== 26) {
                        break;
                    }
                    message.playerId = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.data = reader.string();
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
            state: isSet(object.state) ? instanceStateFromJSON(object.state) : 0,
            gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : undefined,
            playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : undefined,
            data: isSet(object.data) ? globalThis.String(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = instanceStateToJSON(message.state);
        }
        if (message.gameId !== undefined) {
            obj.gameId = message.gameId;
        }
        if (message.playerId !== undefined) {
            obj.playerId = message.playerId;
        }
        if (message.data !== undefined) {
            obj.data = message.data;
        }
        return obj;
    },
    create(base) {
        return exports.Instance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseInstance();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.gameId = (_b = object.gameId) !== null && _b !== void 0 ? _b : undefined;
        message.playerId = (_c = object.playerId) !== null && _c !== void 0 ? _c : undefined;
        message.data = (_d = object.data) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
