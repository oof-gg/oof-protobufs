"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: game/instance.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthConfig_ConfigEntry = exports.AuthConfig = exports.InstanceCommandMessage = exports.InstanceNotification = exports.Instance = exports.InstanceCommandEnum = exports.InstanceStateEnum = exports.protobufPackage = void 0;
exports.instanceStateEnumFromJSON = instanceStateEnumFromJSON;
exports.instanceStateEnumToJSON = instanceStateEnumToJSON;
exports.instanceCommandEnumFromJSON = instanceCommandEnumFromJSON;
exports.instanceCommandEnumToJSON = instanceCommandEnumToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "game";
var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum[InstanceStateEnum["INITIALIZING"] = 0] = "INITIALIZING";
    InstanceStateEnum[InstanceStateEnum["RUNNING"] = 1] = "RUNNING";
    InstanceStateEnum[InstanceStateEnum["PAUSED"] = 2] = "PAUSED";
    InstanceStateEnum[InstanceStateEnum["CRASHED"] = 3] = "CRASHED";
    InstanceStateEnum[InstanceStateEnum["ABORTED"] = 4] = "ABORTED";
    InstanceStateEnum[InstanceStateEnum["SHUTTING_DOWN"] = 5] = "SHUTTING_DOWN";
    InstanceStateEnum[InstanceStateEnum["STOPPED"] = 6] = "STOPPED";
    InstanceStateEnum[InstanceStateEnum["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceStateEnum || (exports.InstanceStateEnum = InstanceStateEnum = {}));
function instanceStateEnumFromJSON(object) {
    switch (object) {
        case 0:
        case "INITIALIZING":
            return InstanceStateEnum.INITIALIZING;
        case 1:
        case "RUNNING":
            return InstanceStateEnum.RUNNING;
        case 2:
        case "PAUSED":
            return InstanceStateEnum.PAUSED;
        case 3:
        case "CRASHED":
            return InstanceStateEnum.CRASHED;
        case 4:
        case "ABORTED":
            return InstanceStateEnum.ABORTED;
        case 5:
        case "SHUTTING_DOWN":
            return InstanceStateEnum.SHUTTING_DOWN;
        case 6:
        case "STOPPED":
            return InstanceStateEnum.STOPPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InstanceStateEnum.UNRECOGNIZED;
    }
}
function instanceStateEnumToJSON(object) {
    switch (object) {
        case InstanceStateEnum.INITIALIZING:
            return "INITIALIZING";
        case InstanceStateEnum.RUNNING:
            return "RUNNING";
        case InstanceStateEnum.PAUSED:
            return "PAUSED";
        case InstanceStateEnum.CRASHED:
            return "CRASHED";
        case InstanceStateEnum.ABORTED:
            return "ABORTED";
        case InstanceStateEnum.SHUTTING_DOWN:
            return "SHUTTING_DOWN";
        case InstanceStateEnum.STOPPED:
            return "STOPPED";
        case InstanceStateEnum.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var InstanceCommandEnum;
(function (InstanceCommandEnum) {
    InstanceCommandEnum[InstanceCommandEnum["START"] = 0] = "START";
    InstanceCommandEnum[InstanceCommandEnum["PAUSE"] = 1] = "PAUSE";
    InstanceCommandEnum[InstanceCommandEnum["RESUME"] = 2] = "RESUME";
    InstanceCommandEnum[InstanceCommandEnum["STOP"] = 3] = "STOP";
    InstanceCommandEnum[InstanceCommandEnum["ABORT"] = 4] = "ABORT";
    InstanceCommandEnum[InstanceCommandEnum["SHUTDOWN"] = 5] = "SHUTDOWN";
    InstanceCommandEnum[InstanceCommandEnum["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceCommandEnum || (exports.InstanceCommandEnum = InstanceCommandEnum = {}));
function instanceCommandEnumFromJSON(object) {
    switch (object) {
        case 0:
        case "START":
            return InstanceCommandEnum.START;
        case 1:
        case "PAUSE":
            return InstanceCommandEnum.PAUSE;
        case 2:
        case "RESUME":
            return InstanceCommandEnum.RESUME;
        case 3:
        case "STOP":
            return InstanceCommandEnum.STOP;
        case 4:
        case "ABORT":
            return InstanceCommandEnum.ABORT;
        case 5:
        case "SHUTDOWN":
            return InstanceCommandEnum.SHUTDOWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InstanceCommandEnum.UNRECOGNIZED;
    }
}
function instanceCommandEnumToJSON(object) {
    switch (object) {
        case InstanceCommandEnum.START:
            return "START";
        case InstanceCommandEnum.PAUSE:
            return "PAUSE";
        case InstanceCommandEnum.RESUME:
            return "RESUME";
        case InstanceCommandEnum.STOP:
            return "STOP";
        case InstanceCommandEnum.ABORT:
            return "ABORT";
        case InstanceCommandEnum.SHUTDOWN:
            return "SHUTDOWN";
        case InstanceCommandEnum.UNRECOGNIZED:
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
            state: isSet(object.state) ? instanceStateEnumFromJSON(object.state) : 0,
            gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : undefined,
            playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : undefined,
            data: isSet(object.data) ? globalThis.String(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = instanceStateEnumToJSON(message.state);
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
        return exports.Instance.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInstance();
        message.state = object.state ?? 0;
        message.gameId = object.gameId ?? undefined;
        message.playerId = object.playerId ?? undefined;
        message.data = object.data ?? undefined;
        return message;
    },
};
function createBaseInstanceNotification() {
    return { state: 0, gameId: undefined, playerId: undefined, data: undefined };
}
exports.InstanceNotification = {
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
        const message = createBaseInstanceNotification();
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
            state: isSet(object.state) ? instanceStateEnumFromJSON(object.state) : 0,
            gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : undefined,
            playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : undefined,
            data: isSet(object.data) ? globalThis.String(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = instanceStateEnumToJSON(message.state);
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
        return exports.InstanceNotification.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInstanceNotification();
        message.state = object.state ?? 0;
        message.gameId = object.gameId ?? undefined;
        message.playerId = object.playerId ?? undefined;
        message.data = object.data ?? undefined;
        return message;
    },
};
function createBaseInstanceCommandMessage() {
    return { state: 0, gameId: undefined, playerId: undefined, data: undefined, authConfig: undefined };
}
exports.InstanceCommandMessage = {
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
        if (message.authConfig !== undefined) {
            exports.AuthConfig.encode(message.authConfig, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstanceCommandMessage();
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
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.authConfig = exports.AuthConfig.decode(reader, reader.uint32());
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
            state: isSet(object.state) ? instanceCommandEnumFromJSON(object.state) : 0,
            gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : undefined,
            playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : undefined,
            data: isSet(object.data) ? globalThis.String(object.data) : undefined,
            authConfig: isSet(object.authConfig) ? exports.AuthConfig.fromJSON(object.authConfig) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = instanceCommandEnumToJSON(message.state);
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
        if (message.authConfig !== undefined) {
            obj.authConfig = exports.AuthConfig.toJSON(message.authConfig);
        }
        return obj;
    },
    create(base) {
        return exports.InstanceCommandMessage.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInstanceCommandMessage();
        message.state = object.state ?? 0;
        message.gameId = object.gameId ?? undefined;
        message.playerId = object.playerId ?? undefined;
        message.data = object.data ?? undefined;
        message.authConfig = (object.authConfig !== undefined && object.authConfig !== null)
            ? exports.AuthConfig.fromPartial(object.authConfig)
            : undefined;
        return message;
    },
};
function createBaseAuthConfig() {
    return { token: "", config: {} };
}
exports.AuthConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        Object.entries(message.config).forEach(([key, value]) => {
            exports.AuthConfig_ConfigEntry.encode({ key: key, value }, writer.uint32(18).fork()).join();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    const entry2 = exports.AuthConfig_ConfigEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.config[entry2.key] = entry2.value;
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
            token: isSet(object.token) ? globalThis.String(object.token) : "",
            config: isObject(object.config)
                ? Object.entries(object.config).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.token !== "") {
            obj.token = message.token;
        }
        if (message.config) {
            const entries = Object.entries(message.config);
            if (entries.length > 0) {
                obj.config = {};
                entries.forEach(([k, v]) => {
                    obj.config[k] = v;
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.AuthConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthConfig();
        message.token = object.token ?? "";
        message.config = Object.entries(object.config ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseAuthConfig_ConfigEntry() {
    return { key: "", value: "" };
}
exports.AuthConfig_ConfigEntry = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthConfig_ConfigEntry();
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
                    message.value = reader.string();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.AuthConfig_ConfigEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthConfig_ConfigEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}