"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: v1/api/player/player.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Players = exports.PlayerGet = exports.PlayerUpdate = exports.PlayerCreate = exports.Player = exports.PlayerStatus = exports.PlayerType = exports.protobufPackage = void 0;
exports.playerTypeFromJSON = playerTypeFromJSON;
exports.playerTypeToJSON = playerTypeToJSON;
exports.playerStatusFromJSON = playerStatusFromJSON;
exports.playerStatusToJSON = playerStatusToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "v1.api.player";
var PlayerType;
(function (PlayerType) {
    /** HUMAN - default */
    PlayerType[PlayerType["HUMAN"] = 0] = "HUMAN";
    PlayerType[PlayerType["AI"] = 1] = "AI";
    PlayerType[PlayerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PlayerType || (exports.PlayerType = PlayerType = {}));
function playerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "HUMAN":
            return PlayerType.HUMAN;
        case 1:
        case "AI":
            return PlayerType.AI;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PlayerType.UNRECOGNIZED;
    }
}
function playerTypeToJSON(object) {
    switch (object) {
        case PlayerType.HUMAN:
            return "HUMAN";
        case PlayerType.AI:
            return "AI";
        case PlayerType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var PlayerStatus;
(function (PlayerStatus) {
    /** ACTIVE - default */
    PlayerStatus[PlayerStatus["ACTIVE"] = 0] = "ACTIVE";
    PlayerStatus[PlayerStatus["INACTIVE"] = 1] = "INACTIVE";
    PlayerStatus[PlayerStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PlayerStatus || (exports.PlayerStatus = PlayerStatus = {}));
function playerStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTIVE":
            return PlayerStatus.ACTIVE;
        case 1:
        case "INACTIVE":
            return PlayerStatus.INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PlayerStatus.UNRECOGNIZED;
    }
}
function playerStatusToJSON(object) {
    switch (object) {
        case PlayerStatus.ACTIVE:
            return "ACTIVE";
        case PlayerStatus.INACTIVE:
            return "INACTIVE";
        case PlayerStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBasePlayer() {
    return { id: "", username: "", email: undefined, team: undefined, score: 0, type: 0, status: 0, role: undefined };
}
exports.Player = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.username !== "") {
            writer.uint32(18).string(message.username);
        }
        if (message.email !== undefined) {
            writer.uint32(26).string(message.email);
        }
        if (message.team !== undefined) {
            writer.uint32(34).string(message.team);
        }
        if (message.score !== 0) {
            writer.uint32(40).int32(message.score);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.role !== undefined) {
            writer.uint32(66).string(message.role);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlayer();
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
                    message.username = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.team = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.score = reader.int32();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                }
                case 7: {
                    if (tag !== 56) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.role = reader.string();
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
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : undefined,
            team: isSet(object.team) ? globalThis.String(object.team) : undefined,
            score: isSet(object.score) ? globalThis.Number(object.score) : 0,
            type: isSet(object.type) ? playerTypeFromJSON(object.type) : 0,
            status: isSet(object.status) ? playerStatusFromJSON(object.status) : 0,
            role: isSet(object.role) ? globalThis.String(object.role) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.email !== undefined) {
            obj.email = message.email;
        }
        if (message.team !== undefined) {
            obj.team = message.team;
        }
        if (message.score !== 0) {
            obj.score = Math.round(message.score);
        }
        if (message.type !== 0) {
            obj.type = playerTypeToJSON(message.type);
        }
        if (message.status !== 0) {
            obj.status = playerStatusToJSON(message.status);
        }
        if (message.role !== undefined) {
            obj.role = message.role;
        }
        return obj;
    },
    create(base) {
        return exports.Player.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePlayer();
        message.id = object.id ?? "";
        message.username = object.username ?? "";
        message.email = object.email ?? undefined;
        message.team = object.team ?? undefined;
        message.score = object.score ?? 0;
        message.type = object.type ?? 0;
        message.status = object.status ?? 0;
        message.role = object.role ?? undefined;
        return message;
    },
};
function createBasePlayerCreate() {
    return { username: "", email: undefined, team: undefined, score: 0, type: 0, status: 0, role: undefined };
}
exports.PlayerCreate = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.email !== undefined) {
            writer.uint32(18).string(message.email);
        }
        if (message.team !== undefined) {
            writer.uint32(26).string(message.team);
        }
        if (message.score !== 0) {
            writer.uint32(32).int32(message.score);
        }
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.role !== undefined) {
            writer.uint32(58).string(message.role);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlayerCreate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.team = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.score = reader.int32();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.role = reader.string();
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
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : undefined,
            team: isSet(object.team) ? globalThis.String(object.team) : undefined,
            score: isSet(object.score) ? globalThis.Number(object.score) : 0,
            type: isSet(object.type) ? playerTypeFromJSON(object.type) : 0,
            status: isSet(object.status) ? playerStatusFromJSON(object.status) : 0,
            role: isSet(object.role) ? globalThis.String(object.role) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.email !== undefined) {
            obj.email = message.email;
        }
        if (message.team !== undefined) {
            obj.team = message.team;
        }
        if (message.score !== 0) {
            obj.score = Math.round(message.score);
        }
        if (message.type !== 0) {
            obj.type = playerTypeToJSON(message.type);
        }
        if (message.status !== 0) {
            obj.status = playerStatusToJSON(message.status);
        }
        if (message.role !== undefined) {
            obj.role = message.role;
        }
        return obj;
    },
    create(base) {
        return exports.PlayerCreate.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePlayerCreate();
        message.username = object.username ?? "";
        message.email = object.email ?? undefined;
        message.team = object.team ?? undefined;
        message.score = object.score ?? 0;
        message.type = object.type ?? 0;
        message.status = object.status ?? 0;
        message.role = object.role ?? undefined;
        return message;
    },
};
function createBasePlayerUpdate() {
    return { id: "", team: undefined, type: undefined, status: undefined, role: undefined };
}
exports.PlayerUpdate = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.team !== undefined) {
            writer.uint32(34).string(message.team);
        }
        if (message.type !== undefined) {
            writer.uint32(48).int32(message.type);
        }
        if (message.status !== undefined) {
            writer.uint32(56).int32(message.status);
        }
        if (message.role !== undefined) {
            writer.uint32(66).string(message.role);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlayerUpdate();
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
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.team = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                }
                case 7: {
                    if (tag !== 56) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.role = reader.string();
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
            team: isSet(object.team) ? globalThis.String(object.team) : undefined,
            type: isSet(object.type) ? playerTypeFromJSON(object.type) : undefined,
            status: isSet(object.status) ? playerStatusFromJSON(object.status) : undefined,
            role: isSet(object.role) ? globalThis.String(object.role) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.team !== undefined) {
            obj.team = message.team;
        }
        if (message.type !== undefined) {
            obj.type = playerTypeToJSON(message.type);
        }
        if (message.status !== undefined) {
            obj.status = playerStatusToJSON(message.status);
        }
        if (message.role !== undefined) {
            obj.role = message.role;
        }
        return obj;
    },
    create(base) {
        return exports.PlayerUpdate.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePlayerUpdate();
        message.id = object.id ?? "";
        message.team = object.team ?? undefined;
        message.type = object.type ?? undefined;
        message.status = object.status ?? undefined;
        message.role = object.role ?? undefined;
        return message;
    },
};
function createBasePlayerGet() {
    return { id: undefined };
}
exports.PlayerGet = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== undefined) {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlayerGet();
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.PlayerGet.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePlayerGet();
        message.id = object.id ?? undefined;
        return message;
    },
};
function createBasePlayers() {
    return { players: [] };
}
exports.Players = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.players) {
            exports.Player.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlayers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.players.push(exports.Player.decode(reader, reader.uint32()));
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
            players: globalThis.Array.isArray(object?.players) ? object.players.map((e) => exports.Player.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.players?.length) {
            obj.players = message.players.map((e) => exports.Player.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Players.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePlayers();
        message.players = object.players?.map((e) => exports.Player.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
