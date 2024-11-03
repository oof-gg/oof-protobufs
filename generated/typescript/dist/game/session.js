// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: game/session.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export const protobufPackage = "game";
export var Session_GameState;
(function (Session_GameState) {
    Session_GameState[Session_GameState["CREATED"] = 0] = "CREATED";
    Session_GameState[Session_GameState["WAITING"] = 1] = "WAITING";
    Session_GameState[Session_GameState["STARTED"] = 2] = "STARTED";
    Session_GameState[Session_GameState["FINISHED"] = 3] = "FINISHED";
    Session_GameState[Session_GameState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Session_GameState || (Session_GameState = {}));
export function session_GameStateFromJSON(object) {
    switch (object) {
        case 0:
        case "CREATED":
            return Session_GameState.CREATED;
        case 1:
        case "WAITING":
            return Session_GameState.WAITING;
        case 2:
        case "STARTED":
            return Session_GameState.STARTED;
        case 3:
        case "FINISHED":
            return Session_GameState.FINISHED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Session_GameState.UNRECOGNIZED;
    }
}
export function session_GameStateToJSON(object) {
    switch (object) {
        case Session_GameState.CREATED:
            return "CREATED";
        case Session_GameState.WAITING:
            return "WAITING";
        case Session_GameState.STARTED:
            return "STARTED";
        case Session_GameState.FINISHED:
            return "FINISHED";
        case Session_GameState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseSession() {
    return { id: "", gameId: "", playerIds: [], state: 0, attributes: {} };
}
export const Session = {
    encode(message, writer = new BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.gameId !== "") {
            writer.uint32(18).string(message.gameId);
        }
        for (const v of message.playerIds) {
            writer.uint32(26).string(v);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        Object.entries(message.attributes).forEach(([key, value]) => {
            Session_AttributesEntry.encode({ key: key, value }, writer.uint32(42).fork()).join();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
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
                    message.playerIds.push(reader.string());
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
                    const entry5 = Session_AttributesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.attributes[entry5.key] = entry5.value;
                    }
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
            playerIds: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.playerIds)
                ? object.playerIds.map((e) => globalThis.String(e))
                : [],
            state: isSet(object.state) ? session_GameStateFromJSON(object.state) : 0,
            attributes: isObject(object.attributes)
                ? Object.entries(object.attributes).reduce((acc, [key, value]) => {
                    acc[key] = Session_GameAttribute.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.gameId !== "") {
            obj.gameId = message.gameId;
        }
        if ((_a = message.playerIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.playerIds = message.playerIds;
        }
        if (message.state !== 0) {
            obj.state = session_GameStateToJSON(message.state);
        }
        if (message.attributes) {
            const entries = Object.entries(message.attributes);
            if (entries.length > 0) {
                obj.attributes = {};
                entries.forEach(([k, v]) => {
                    obj.attributes[k] = Session_GameAttribute.toJSON(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return Session.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSession();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.gameId = (_b = object.gameId) !== null && _b !== void 0 ? _b : "";
        message.playerIds = ((_c = object.playerIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.state = (_d = object.state) !== null && _d !== void 0 ? _d : 0;
        message.attributes = Object.entries((_e = object.attributes) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Session_GameAttribute.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseSession_AttributesEntry() {
    return { key: "", value: undefined };
}
export const Session_AttributesEntry = {
    encode(message, writer = new BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Session_GameAttribute.encode(message.value, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession_AttributesEntry();
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
                    message.value = Session_GameAttribute.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? Session_GameAttribute.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = Session_GameAttribute.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return Session_AttributesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSession_AttributesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? Session_GameAttribute.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseSession_GameAttribute() {
    return { stringValue: undefined, intValue: undefined, floatValue: undefined, boolValue: undefined };
}
export const Session_GameAttribute = {
    encode(message, writer = new BinaryWriter()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession_GameAttribute();
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
        return Session_GameAttribute.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSession_GameAttribute();
        message.stringValue = (_a = object.stringValue) !== null && _a !== void 0 ? _a : undefined;
        message.intValue = (_b = object.intValue) !== null && _b !== void 0 ? _b : undefined;
        message.floatValue = (_c = object.floatValue) !== null && _c !== void 0 ? _c : undefined;
        message.boolValue = (_d = object.boolValue) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
