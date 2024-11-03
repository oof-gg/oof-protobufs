"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: player/state.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.State_PlayerAttribute = exports.State_AttributesEntry = exports.State = exports.State_PlayerState = exports.protobufPackage = void 0;
exports.state_PlayerStateFromJSON = state_PlayerStateFromJSON;
exports.state_PlayerStateToJSON = state_PlayerStateToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "player";
var State_PlayerState;
(function (State_PlayerState) {
    State_PlayerState[State_PlayerState["WAITING"] = 0] = "WAITING";
    State_PlayerState[State_PlayerState["PLAYING"] = 1] = "PLAYING";
    State_PlayerState[State_PlayerState["FINISHED"] = 2] = "FINISHED";
    State_PlayerState[State_PlayerState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State_PlayerState || (exports.State_PlayerState = State_PlayerState = {}));
function state_PlayerStateFromJSON(object) {
    switch (object) {
        case 0:
        case "WAITING":
            return State_PlayerState.WAITING;
        case 1:
        case "PLAYING":
            return State_PlayerState.PLAYING;
        case 2:
        case "FINISHED":
            return State_PlayerState.FINISHED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State_PlayerState.UNRECOGNIZED;
    }
}
function state_PlayerStateToJSON(object) {
    switch (object) {
        case State_PlayerState.WAITING:
            return "WAITING";
        case State_PlayerState.PLAYING:
            return "PLAYING";
        case State_PlayerState.FINISHED:
            return "FINISHED";
        case State_PlayerState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseState() {
    return { playerId: "", sessionId: "", gameId: "", state: 0, attributes: {}, timestamp: 0 };
}
exports.State = {
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
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        Object.entries(message.attributes).forEach(([key, value]) => {
            exports.State_AttributesEntry.encode({ key: key, value }, writer.uint32(42).fork()).join();
        });
        if (message.timestamp !== 0) {
            writer.uint32(48).int64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState();
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
                    message.state = reader.int32();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    const entry5 = exports.State_AttributesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.attributes[entry5.key] = entry5.value;
                    }
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
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
            state: isSet(object.state) ? state_PlayerStateFromJSON(object.state) : 0,
            attributes: isObject(object.attributes)
                ? Object.entries(object.attributes).reduce((acc, [key, value]) => {
                    acc[key] = exports.State_PlayerAttribute.fromJSON(value);
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
        if (message.state !== 0) {
            obj.state = state_PlayerStateToJSON(message.state);
        }
        if (message.attributes) {
            const entries = Object.entries(message.attributes);
            if (entries.length > 0) {
                obj.attributes = {};
                entries.forEach(([k, v]) => {
                    obj.attributes[k] = exports.State_PlayerAttribute.toJSON(v);
                });
            }
        }
        if (message.timestamp !== 0) {
            obj.timestamp = Math.round(message.timestamp);
        }
        return obj;
    },
    create(base) {
        return exports.State.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseState();
        message.playerId = object.playerId ?? "";
        message.sessionId = object.sessionId ?? "";
        message.gameId = object.gameId ?? "";
        message.state = object.state ?? 0;
        message.attributes = Object.entries(object.attributes ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.State_PlayerAttribute.fromPartial(value);
            }
            return acc;
        }, {});
        message.timestamp = object.timestamp ?? 0;
        return message;
    },
};
function createBaseState_AttributesEntry() {
    return { key: "", value: undefined };
}
exports.State_AttributesEntry = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.State_PlayerAttribute.encode(message.value, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState_AttributesEntry();
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
                    message.value = exports.State_PlayerAttribute.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.State_PlayerAttribute.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.State_PlayerAttribute.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.State_AttributesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseState_AttributesEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.State_PlayerAttribute.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseState_PlayerAttribute() {
    return { stringValue: undefined, intValue: undefined, floatValue: undefined, boolValue: undefined };
}
exports.State_PlayerAttribute = {
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
        const message = createBaseState_PlayerAttribute();
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
        return exports.State_PlayerAttribute.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseState_PlayerAttribute();
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