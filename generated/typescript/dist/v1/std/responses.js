"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: v1/std/responses.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedResponse = exports.PaginationMetadata = exports.StandardResponse = exports.Status = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const game_1 = require("../api/game/game");
exports.protobufPackage = "v1.std";
function createBaseStatus() {
    return { code: 0, message: "", details: [] };
}
exports.Status = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        for (const v of message.details) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.details.push(reader.string());
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
            code: isSet(object.code) ? globalThis.Number(object.code) : 0,
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            details: globalThis.Array.isArray(object?.details) ? object.details.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== 0) {
            obj.code = Math.round(message.code);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.details?.length) {
            obj.details = message.details;
        }
        return obj;
    },
    create(base) {
        return exports.Status.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStatus();
        message.code = object.code ?? 0;
        message.message = object.message ?? "";
        message.details = object.details?.map((e) => e) || [];
        return message;
    },
};
function createBaseStandardResponse() {
    return { code: 0, message: "", error: undefined, singleGame: undefined, games: undefined };
}
exports.StandardResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.error !== undefined) {
            exports.Status.encode(message.error, writer.uint32(26).fork()).join();
        }
        if (message.singleGame !== undefined) {
            game_1.Game.encode(message.singleGame, writer.uint32(34).fork()).join();
        }
        if (message.games !== undefined) {
            game_1.Games.encode(message.games, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStandardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.error = exports.Status.decode(reader, reader.uint32());
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.singleGame = game_1.Game.decode(reader, reader.uint32());
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.games = game_1.Games.decode(reader, reader.uint32());
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
            code: isSet(object.code) ? globalThis.Number(object.code) : 0,
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            error: isSet(object.error) ? exports.Status.fromJSON(object.error) : undefined,
            singleGame: isSet(object.singleGame) ? game_1.Game.fromJSON(object.singleGame) : undefined,
            games: isSet(object.games) ? game_1.Games.fromJSON(object.games) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== 0) {
            obj.code = Math.round(message.code);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.error !== undefined) {
            obj.error = exports.Status.toJSON(message.error);
        }
        if (message.singleGame !== undefined) {
            obj.singleGame = game_1.Game.toJSON(message.singleGame);
        }
        if (message.games !== undefined) {
            obj.games = game_1.Games.toJSON(message.games);
        }
        return obj;
    },
    create(base) {
        return exports.StandardResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStandardResponse();
        message.code = object.code ?? 0;
        message.message = object.message ?? "";
        message.error = (object.error !== undefined && object.error !== null)
            ? exports.Status.fromPartial(object.error)
            : undefined;
        message.singleGame = (object.singleGame !== undefined && object.singleGame !== null)
            ? game_1.Game.fromPartial(object.singleGame)
            : undefined;
        message.games = (object.games !== undefined && object.games !== null) ? game_1.Games.fromPartial(object.games) : undefined;
        return message;
    },
};
function createBasePaginationMetadata() {
    return { pageSize: undefined, prevPageToken: undefined, nextPageToken: undefined };
}
exports.PaginationMetadata = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pageSize !== undefined) {
            writer.uint32(8).int32(message.pageSize);
        }
        if (message.prevPageToken !== undefined) {
            writer.uint32(18).string(message.prevPageToken);
        }
        if (message.nextPageToken !== undefined) {
            writer.uint32(26).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaginationMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.pageSize = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.prevPageToken = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.nextPageToken = reader.string();
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
            pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : undefined,
            prevPageToken: isSet(object.prevPageToken) ? globalThis.String(object.prevPageToken) : undefined,
            nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pageSize !== undefined) {
            obj.pageSize = Math.round(message.pageSize);
        }
        if (message.prevPageToken !== undefined) {
            obj.prevPageToken = message.prevPageToken;
        }
        if (message.nextPageToken !== undefined) {
            obj.nextPageToken = message.nextPageToken;
        }
        return obj;
    },
    create(base) {
        return exports.PaginationMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePaginationMetadata();
        message.pageSize = object.pageSize ?? undefined;
        message.prevPageToken = object.prevPageToken ?? undefined;
        message.nextPageToken = object.nextPageToken ?? undefined;
        return message;
    },
};
function createBasePaginatedResponse() {
    return { code: 0, message: "", error: undefined, pagination: undefined, singleGame: undefined, games: undefined };
}
exports.PaginatedResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.error !== undefined) {
            exports.Status.encode(message.error, writer.uint32(26).fork()).join();
        }
        if (message.pagination !== undefined) {
            exports.PaginationMetadata.encode(message.pagination, writer.uint32(34).fork()).join();
        }
        if (message.singleGame !== undefined) {
            game_1.Game.encode(message.singleGame, writer.uint32(42).fork()).join();
        }
        if (message.games !== undefined) {
            game_1.Games.encode(message.games, writer.uint32(50).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaginatedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.error = exports.Status.decode(reader, reader.uint32());
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.pagination = exports.PaginationMetadata.decode(reader, reader.uint32());
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.singleGame = game_1.Game.decode(reader, reader.uint32());
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.games = game_1.Games.decode(reader, reader.uint32());
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
            code: isSet(object.code) ? globalThis.Number(object.code) : 0,
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            error: isSet(object.error) ? exports.Status.fromJSON(object.error) : undefined,
            pagination: isSet(object.pagination) ? exports.PaginationMetadata.fromJSON(object.pagination) : undefined,
            singleGame: isSet(object.singleGame) ? game_1.Game.fromJSON(object.singleGame) : undefined,
            games: isSet(object.games) ? game_1.Games.fromJSON(object.games) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== 0) {
            obj.code = Math.round(message.code);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.error !== undefined) {
            obj.error = exports.Status.toJSON(message.error);
        }
        if (message.pagination !== undefined) {
            obj.pagination = exports.PaginationMetadata.toJSON(message.pagination);
        }
        if (message.singleGame !== undefined) {
            obj.singleGame = game_1.Game.toJSON(message.singleGame);
        }
        if (message.games !== undefined) {
            obj.games = game_1.Games.toJSON(message.games);
        }
        return obj;
    },
    create(base) {
        return exports.PaginatedResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePaginatedResponse();
        message.code = object.code ?? 0;
        message.message = object.message ?? "";
        message.error = (object.error !== undefined && object.error !== null)
            ? exports.Status.fromPartial(object.error)
            : undefined;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? exports.PaginationMetadata.fromPartial(object.pagination)
            : undefined;
        message.singleGame = (object.singleGame !== undefined && object.singleGame !== null)
            ? game_1.Game.fromPartial(object.singleGame)
            : undefined;
        message.games = (object.games !== undefined && object.games !== null) ? game_1.Games.fromPartial(object.games) : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
