"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: v1/api/game/game.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameUpdateResponse = exports.GameUpdateRequest = exports.GameGetResponse = exports.GameGetRequest = exports.GameCreateResponse = exports.GameCreateRequest = exports.Game = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "v1.api.game";
function createBaseGame() {
    return { id: "", name: "", description: "", data: "" };
}
exports.Game = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.data !== "") {
            writer.uint32(34).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGame();
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
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            data: isSet(object.data) ? globalThis.String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.data !== "") {
            obj.data = message.data;
        }
        return obj;
    },
    create(base) {
        return exports.Game.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGame();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.data = object.data ?? "";
        return message;
    },
};
function createBaseGameCreateRequest() {
    return { name: "", description: "", data: "" };
}
exports.GameCreateRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGameCreateRequest();
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
                    message.description = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
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
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            data: isSet(object.data) ? globalThis.String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.data !== "") {
            obj.data = message.data;
        }
        return obj;
    },
    create(base) {
        return exports.GameCreateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGameCreateRequest();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.data = object.data ?? "";
        return message;
    },
};
function createBaseGameCreateResponse() {
    return { game: undefined };
}
exports.GameCreateResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.game !== undefined) {
            exports.Game.encode(message.game, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGameCreateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.game = exports.Game.decode(reader, reader.uint32());
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
        return { game: isSet(object.game) ? exports.Game.fromJSON(object.game) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.game !== undefined) {
            obj.game = exports.Game.toJSON(message.game);
        }
        return obj;
    },
    create(base) {
        return exports.GameCreateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGameCreateResponse();
        message.game = (object.game !== undefined && object.game !== null) ? exports.Game.fromPartial(object.game) : undefined;
        return message;
    },
};
function createBaseGameGetRequest() {
    return { id: undefined };
}
exports.GameGetRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== undefined) {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGameGetRequest();
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
        return exports.GameGetRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGameGetRequest();
        message.id = object.id ?? undefined;
        return message;
    },
};
function createBaseGameGetResponse() {
    return { game: undefined };
}
exports.GameGetResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.game !== undefined) {
            exports.Game.encode(message.game, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGameGetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.game = exports.Game.decode(reader, reader.uint32());
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
        return { game: isSet(object.game) ? exports.Game.fromJSON(object.game) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.game !== undefined) {
            obj.game = exports.Game.toJSON(message.game);
        }
        return obj;
    },
    create(base) {
        return exports.GameGetResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGameGetResponse();
        message.game = (object.game !== undefined && object.game !== null) ? exports.Game.fromPartial(object.game) : undefined;
        return message;
    },
};
function createBaseGameUpdateRequest() {
    return { id: "", name: "", description: "", data: "" };
}
exports.GameUpdateRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.data !== "") {
            writer.uint32(34).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGameUpdateRequest();
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
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            data: isSet(object.data) ? globalThis.String(object.data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.data !== "") {
            obj.data = message.data;
        }
        return obj;
    },
    create(base) {
        return exports.GameUpdateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGameUpdateRequest();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.data = object.data ?? "";
        return message;
    },
};
function createBaseGameUpdateResponse() {
    return { game: undefined };
}
exports.GameUpdateResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.game !== undefined) {
            exports.Game.encode(message.game, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGameUpdateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.game = exports.Game.decode(reader, reader.uint32());
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
        return { game: isSet(object.game) ? exports.Game.fromJSON(object.game) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.game !== undefined) {
            obj.game = exports.Game.toJSON(message.game);
        }
        return obj;
    },
    create(base) {
        return exports.GameUpdateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGameUpdateResponse();
        message.game = (object.game !== undefined && object.game !== null) ? exports.Game.fromPartial(object.game) : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
