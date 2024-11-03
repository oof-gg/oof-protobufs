"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: player/action.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action_PlayerAction = exports.Action_Velocity = exports.Action_Position = exports.Action_ActionEntry = exports.Action = exports.Action_ActionType = exports.protobufPackage = void 0;
exports.action_ActionTypeFromJSON = action_ActionTypeFromJSON;
exports.action_ActionTypeToJSON = action_ActionTypeToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "player";
/** / Type of action */
var Action_ActionType;
(function (Action_ActionType) {
    /** CUSTOM - / Custom action */
    Action_ActionType[Action_ActionType["CUSTOM"] = 0] = "CUSTOM";
    /** MOVE - / Move action */
    Action_ActionType[Action_ActionType["MOVE"] = 1] = "MOVE";
    /** JUMP - / Jump action */
    Action_ActionType[Action_ActionType["JUMP"] = 2] = "JUMP";
    /** SHOOT - / Shoot action */
    Action_ActionType[Action_ActionType["SHOOT"] = 3] = "SHOOT";
    /** PICKUP - / Pickup action */
    Action_ActionType[Action_ActionType["PICKUP"] = 4] = "PICKUP";
    /** DROP - / Drop action */
    Action_ActionType[Action_ActionType["DROP"] = 5] = "DROP";
    /** USE - / Use action */
    Action_ActionType[Action_ActionType["USE"] = 6] = "USE";
    /** INTERACT - / Interact action */
    Action_ActionType[Action_ActionType["INTERACT"] = 7] = "INTERACT";
    Action_ActionType[Action_ActionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Action_ActionType || (exports.Action_ActionType = Action_ActionType = {}));
function action_ActionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CUSTOM":
            return Action_ActionType.CUSTOM;
        case 1:
        case "MOVE":
            return Action_ActionType.MOVE;
        case 2:
        case "JUMP":
            return Action_ActionType.JUMP;
        case 3:
        case "SHOOT":
            return Action_ActionType.SHOOT;
        case 4:
        case "PICKUP":
            return Action_ActionType.PICKUP;
        case 5:
        case "DROP":
            return Action_ActionType.DROP;
        case 6:
        case "USE":
            return Action_ActionType.USE;
        case 7:
        case "INTERACT":
            return Action_ActionType.INTERACT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Action_ActionType.UNRECOGNIZED;
    }
}
function action_ActionTypeToJSON(object) {
    switch (object) {
        case Action_ActionType.CUSTOM:
            return "CUSTOM";
        case Action_ActionType.MOVE:
            return "MOVE";
        case Action_ActionType.JUMP:
            return "JUMP";
        case Action_ActionType.SHOOT:
            return "SHOOT";
        case Action_ActionType.PICKUP:
            return "PICKUP";
        case Action_ActionType.DROP:
            return "DROP";
        case Action_ActionType.USE:
            return "USE";
        case Action_ActionType.INTERACT:
            return "INTERACT";
        case Action_ActionType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseAction() {
    return {
        playerId: "",
        sessionId: "",
        gameId: "",
        type: 0,
        position: undefined,
        velocity: undefined,
        action: {},
        timestamp: 0,
    };
}
exports.Action = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.playerId !== "") {
            writer.uint32(10).string(message.playerId);
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        if (message.gameId !== "") {
            writer.uint32(26).string(message.gameId);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.position !== undefined) {
            exports.Action_Position.encode(message.position, writer.uint32(42).fork()).join();
        }
        if (message.velocity !== undefined) {
            exports.Action_Velocity.encode(message.velocity, writer.uint32(50).fork()).join();
        }
        Object.entries(message.action).forEach(([key, value]) => {
            exports.Action_ActionEntry.encode({ key: key, value }, writer.uint32(58).fork()).join();
        });
        if (message.timestamp !== 0) {
            writer.uint32(64).int64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAction();
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
                    message.sessionId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.gameId = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.position = exports.Action_Position.decode(reader, reader.uint32());
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.velocity = exports.Action_Velocity.decode(reader, reader.uint32());
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    const entry7 = exports.Action_ActionEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.action[entry7.key] = entry7.value;
                    }
                    continue;
                }
                case 8: {
                    if (tag !== 64) {
                        break;
                    }
                    message.timestamp = longToNumber(reader.int64());
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
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
            type: isSet(object.type) ? action_ActionTypeFromJSON(object.type) : 0,
            position: isSet(object.position) ? exports.Action_Position.fromJSON(object.position) : undefined,
            velocity: isSet(object.velocity) ? exports.Action_Velocity.fromJSON(object.velocity) : undefined,
            action: isObject(object.action)
                ? Object.entries(object.action).reduce((acc, [key, value]) => {
                    acc[key] = exports.Action_PlayerAction.fromJSON(value);
                    return acc;
                }, {})
                : {},
            timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.playerId !== "") {
            obj.playerId = message.playerId;
        }
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.gameId !== "") {
            obj.gameId = message.gameId;
        }
        if (message.type !== 0) {
            obj.type = action_ActionTypeToJSON(message.type);
        }
        if (message.position !== undefined) {
            obj.position = exports.Action_Position.toJSON(message.position);
        }
        if (message.velocity !== undefined) {
            obj.velocity = exports.Action_Velocity.toJSON(message.velocity);
        }
        if (message.action) {
            const entries = Object.entries(message.action);
            if (entries.length > 0) {
                obj.action = {};
                entries.forEach(([k, v]) => {
                    obj.action[k] = exports.Action_PlayerAction.toJSON(v);
                });
            }
        }
        if (message.timestamp !== 0) {
            obj.timestamp = Math.round(message.timestamp);
        }
        return obj;
    },
    create(base) {
        return exports.Action.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction();
        message.playerId = object.playerId ?? "";
        message.sessionId = object.sessionId ?? "";
        message.gameId = object.gameId ?? "";
        message.type = object.type ?? 0;
        message.position = (object.position !== undefined && object.position !== null)
            ? exports.Action_Position.fromPartial(object.position)
            : undefined;
        message.velocity = (object.velocity !== undefined && object.velocity !== null)
            ? exports.Action_Velocity.fromPartial(object.velocity)
            : undefined;
        message.action = Object.entries(object.action ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.Action_PlayerAction.fromPartial(value);
            }
            return acc;
        }, {});
        message.timestamp = object.timestamp ?? 0;
        return message;
    },
};
function createBaseAction_ActionEntry() {
    return { key: "", value: undefined };
}
exports.Action_ActionEntry = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Action_PlayerAction.encode(message.value, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAction_ActionEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.Action_PlayerAction.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? exports.Action_PlayerAction.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.Action_PlayerAction.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.Action_ActionEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction_ActionEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.Action_PlayerAction.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseAction_Position() {
    return { x: 0, y: 0, z: 0 };
}
exports.Action_Position = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.z !== 0) {
            writer.uint32(29).float(message.z);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAction_Position();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 13) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                }
                case 2: {
                    if (tag !== 21) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
                }
                case 3: {
                    if (tag !== 29) {
                        break;
                    }
                    message.z = reader.float();
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
            x: isSet(object.x) ? globalThis.Number(object.x) : 0,
            y: isSet(object.y) ? globalThis.Number(object.y) : 0,
            z: isSet(object.z) ? globalThis.Number(object.z) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.x !== 0) {
            obj.x = message.x;
        }
        if (message.y !== 0) {
            obj.y = message.y;
        }
        if (message.z !== 0) {
            obj.z = message.z;
        }
        return obj;
    },
    create(base) {
        return exports.Action_Position.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction_Position();
        message.x = object.x ?? 0;
        message.y = object.y ?? 0;
        message.z = object.z ?? 0;
        return message;
    },
};
function createBaseAction_Velocity() {
    return { x: 0, y: 0, z: 0 };
}
exports.Action_Velocity = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.z !== 0) {
            writer.uint32(29).float(message.z);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAction_Velocity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 13) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                }
                case 2: {
                    if (tag !== 21) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
                }
                case 3: {
                    if (tag !== 29) {
                        break;
                    }
                    message.z = reader.float();
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
            x: isSet(object.x) ? globalThis.Number(object.x) : 0,
            y: isSet(object.y) ? globalThis.Number(object.y) : 0,
            z: isSet(object.z) ? globalThis.Number(object.z) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.x !== 0) {
            obj.x = message.x;
        }
        if (message.y !== 0) {
            obj.y = message.y;
        }
        if (message.z !== 0) {
            obj.z = message.z;
        }
        return obj;
    },
    create(base) {
        return exports.Action_Velocity.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction_Velocity();
        message.x = object.x ?? 0;
        message.y = object.y ?? 0;
        message.z = object.z ?? 0;
        return message;
    },
};
function createBaseAction_PlayerAction() {
    return { stringValue: undefined, intValue: undefined, floatValue: undefined, boolValue: undefined };
}
exports.Action_PlayerAction = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.stringValue !== undefined) {
            writer.uint32(18).string(message.stringValue);
        }
        if (message.intValue !== undefined) {
            writer.uint32(24).int32(message.intValue);
        }
        if (message.floatValue !== undefined) {
            writer.uint32(37).float(message.floatValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(40).bool(message.boolValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAction_PlayerAction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.stringValue = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.intValue = reader.int32();
                    continue;
                }
                case 4: {
                    if (tag !== 37) {
                        break;
                    }
                    message.floatValue = reader.float();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.boolValue = reader.bool();
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
            stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
            intValue: isSet(object.intValue) ? globalThis.Number(object.intValue) : undefined,
            floatValue: isSet(object.floatValue) ? globalThis.Number(object.floatValue) : undefined,
            boolValue: isSet(object.boolValue) ? globalThis.Boolean(object.boolValue) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.stringValue !== undefined) {
            obj.stringValue = message.stringValue;
        }
        if (message.intValue !== undefined) {
            obj.intValue = Math.round(message.intValue);
        }
        if (message.floatValue !== undefined) {
            obj.floatValue = message.floatValue;
        }
        if (message.boolValue !== undefined) {
            obj.boolValue = message.boolValue;
        }
        return obj;
    },
    create(base) {
        return exports.Action_PlayerAction.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction_PlayerAction();
        message.stringValue = object.stringValue ?? undefined;
        message.intValue = object.intValue ?? undefined;
        message.floatValue = object.floatValue ?? undefined;
        message.boolValue = object.boolValue ?? undefined;
        return message;
    },
};
function longToNumber(int64) {
    const num = globalThis.Number(int64.toString());
    if (num > globalThis.Number.MAX_SAFE_INTEGER) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    if (num < globalThis.Number.MIN_SAFE_INTEGER) {
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    }
    return num;
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
