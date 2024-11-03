"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: game/entity.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityUpdate = exports.RegisterEntity_EntityAttribute = exports.RegisterEntity_AttributesEntry = exports.RegisterEntity = exports.RegisterEntity_ControllerStateEnum = exports.protobufPackage = void 0;
exports.registerEntity_ControllerStateEnumFromJSON = registerEntity_ControllerStateEnumFromJSON;
exports.registerEntity_ControllerStateEnumToJSON = registerEntity_ControllerStateEnumToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "game";
var RegisterEntity_ControllerStateEnum;
(function (RegisterEntity_ControllerStateEnum) {
    RegisterEntity_ControllerStateEnum[RegisterEntity_ControllerStateEnum["SERVER"] = 0] = "SERVER";
    RegisterEntity_ControllerStateEnum[RegisterEntity_ControllerStateEnum["PLAYER"] = 1] = "PLAYER";
    RegisterEntity_ControllerStateEnum[RegisterEntity_ControllerStateEnum["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RegisterEntity_ControllerStateEnum || (exports.RegisterEntity_ControllerStateEnum = RegisterEntity_ControllerStateEnum = {}));
function registerEntity_ControllerStateEnumFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVER":
            return RegisterEntity_ControllerStateEnum.SERVER;
        case 1:
        case "PLAYER":
            return RegisterEntity_ControllerStateEnum.PLAYER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RegisterEntity_ControllerStateEnum.UNRECOGNIZED;
    }
}
function registerEntity_ControllerStateEnumToJSON(object) {
    switch (object) {
        case RegisterEntity_ControllerStateEnum.SERVER:
            return "SERVER";
        case RegisterEntity_ControllerStateEnum.PLAYER:
            return "PLAYER";
        case RegisterEntity_ControllerStateEnum.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseRegisterEntity() {
    return {
        name: "",
        type: "",
        id: "",
        sessionId: "",
        gameId: "",
        attributes: {},
        controllerState: 0,
        playerId: undefined,
        data: undefined,
    };
}
exports.RegisterEntity = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.sessionId !== "") {
            writer.uint32(34).string(message.sessionId);
        }
        if (message.gameId !== "") {
            writer.uint32(42).string(message.gameId);
        }
        Object.entries(message.attributes).forEach(([key, value]) => {
            exports.RegisterEntity_AttributesEntry.encode({ key: key, value }, writer.uint32(50).fork()).join();
        });
        if (message.controllerState !== 0) {
            writer.uint32(56).int32(message.controllerState);
        }
        if (message.playerId !== undefined) {
            writer.uint32(66).string(message.playerId);
        }
        if (message.data !== undefined) {
            writer.uint32(74).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterEntity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.sessionId = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.gameId = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    const entry6 = exports.RegisterEntity_AttributesEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.attributes[entry6.key] = entry6.value;
                    }
                    continue;
                }
                case 7: {
                    if (tag !== 56) {
                        break;
                    }
                    message.controllerState = reader.int32();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.playerId = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
            attributes: isObject(object.attributes)
                ? Object.entries(object.attributes).reduce((acc, [key, value]) => {
                    acc[key] = exports.RegisterEntity_EntityAttribute.fromJSON(value);
                    return acc;
                }, {})
                : {},
            controllerState: isSet(object.controllerState)
                ? registerEntity_ControllerStateEnumFromJSON(object.controllerState)
                : 0,
            playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : undefined,
            data: isSet(object.data) ? globalThis.String(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.gameId !== "") {
            obj.gameId = message.gameId;
        }
        if (message.attributes) {
            const entries = Object.entries(message.attributes);
            if (entries.length > 0) {
                obj.attributes = {};
                entries.forEach(([k, v]) => {
                    obj.attributes[k] = exports.RegisterEntity_EntityAttribute.toJSON(v);
                });
            }
        }
        if (message.controllerState !== 0) {
            obj.controllerState = registerEntity_ControllerStateEnumToJSON(message.controllerState);
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
        return exports.RegisterEntity.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterEntity();
        message.name = object.name ?? "";
        message.type = object.type ?? "";
        message.id = object.id ?? "";
        message.sessionId = object.sessionId ?? "";
        message.gameId = object.gameId ?? "";
        message.attributes = Object.entries(object.attributes ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.RegisterEntity_EntityAttribute.fromPartial(value);
            }
            return acc;
        }, {});
        message.controllerState = object.controllerState ?? 0;
        message.playerId = object.playerId ?? undefined;
        message.data = object.data ?? undefined;
        return message;
    },
};
function createBaseRegisterEntity_AttributesEntry() {
    return { key: "", value: undefined };
}
exports.RegisterEntity_AttributesEntry = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.RegisterEntity_EntityAttribute.encode(message.value, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterEntity_AttributesEntry();
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
                    message.value = exports.RegisterEntity_EntityAttribute.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.RegisterEntity_EntityAttribute.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.RegisterEntity_EntityAttribute.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.RegisterEntity_AttributesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterEntity_AttributesEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.RegisterEntity_EntityAttribute.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseRegisterEntity_EntityAttribute() {
    return { stringValue: undefined, intValue: undefined, floatValue: undefined, boolValue: undefined };
}
exports.RegisterEntity_EntityAttribute = {
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
        const message = createBaseRegisterEntity_EntityAttribute();
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
        return exports.RegisterEntity_EntityAttribute.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterEntity_EntityAttribute();
        message.stringValue = object.stringValue ?? undefined;
        message.intValue = object.intValue ?? undefined;
        message.floatValue = object.floatValue ?? undefined;
        message.boolValue = object.boolValue ?? undefined;
        return message;
    },
};
function createBaseEntityUpdate() {
    return { id: "", sessionId: "", gameId: "", attributes: [] };
}
exports.EntityUpdate = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        if (message.gameId !== "") {
            writer.uint32(26).string(message.gameId);
        }
        for (const v of message.attributes) {
            exports.RegisterEntity_EntityAttribute.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEntityUpdate();
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
                    if (tag !== 34) {
                        break;
                    }
                    message.attributes.push(exports.RegisterEntity_EntityAttribute.decode(reader, reader.uint32()));
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
            sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
            gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
            attributes: globalThis.Array.isArray(object?.attributes)
                ? object.attributes.map((e) => exports.RegisterEntity_EntityAttribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.gameId !== "") {
            obj.gameId = message.gameId;
        }
        if (message.attributes?.length) {
            obj.attributes = message.attributes.map((e) => exports.RegisterEntity_EntityAttribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.EntityUpdate.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEntityUpdate();
        message.id = object.id ?? "";
        message.sessionId = object.sessionId ?? "";
        message.gameId = object.gameId ?? "";
        message.attributes = object.attributes?.map((e) => exports.RegisterEntity_EntityAttribute.fromPartial(e)) || [];
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}