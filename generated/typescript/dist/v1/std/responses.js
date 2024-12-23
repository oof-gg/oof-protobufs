"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: v1/std/responses.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedResponse = exports.PaginationMetadata = exports.StandardResponse = exports.Success = exports.Error = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const any_1 = require("../../google/protobuf/any");
exports.protobufPackage = "v1.std";
function createBaseError() {
    return { code: 0, message: "", details: "" };
}
exports.Error = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.details !== "") {
            writer.uint32(26).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseError();
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
                    message.details = reader.string();
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
            details: isSet(object.details) ? globalThis.String(object.details) : "",
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
        if (message.details !== "") {
            obj.details = message.details;
        }
        return obj;
    },
    create(base) {
        return exports.Error.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseError();
        message.code = object.code ?? 0;
        message.message = object.message ?? "";
        message.details = object.details ?? "";
        return message;
    },
};
function createBaseSuccess() {
    return { message: "", details: "" };
}
exports.Success = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.details !== "") {
            writer.uint32(18).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuccess();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.details = reader.string();
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
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            details: isSet(object.details) ? globalThis.String(object.details) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.details !== "") {
            obj.details = message.details;
        }
        return obj;
    },
    create(base) {
        return exports.Success.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSuccess();
        message.message = object.message ?? "";
        message.details = object.details ?? "";
        return message;
    },
};
function createBaseStandardResponse() {
    return { success: undefined, error: undefined };
}
exports.StandardResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.success !== undefined) {
            exports.Success.encode(message.success, writer.uint32(10).fork()).join();
        }
        if (message.error !== undefined) {
            exports.Error.encode(message.error, writer.uint32(18).fork()).join();
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
                    if (tag !== 10) {
                        break;
                    }
                    message.success = exports.Success.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.error = exports.Error.decode(reader, reader.uint32());
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
            success: isSet(object.success) ? exports.Success.fromJSON(object.success) : undefined,
            error: isSet(object.error) ? exports.Error.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.success !== undefined) {
            obj.success = exports.Success.toJSON(message.success);
        }
        if (message.error !== undefined) {
            obj.error = exports.Error.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.StandardResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStandardResponse();
        message.success = (object.success !== undefined && object.success !== null)
            ? exports.Success.fromPartial(object.success)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null) ? exports.Error.fromPartial(object.error) : undefined;
        return message;
    },
};
function createBasePaginationMetadata() {
    return { page: 0, pageSize: 0, totalItems: 0, totalPages: 0 };
}
exports.PaginationMetadata = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.page !== 0) {
            writer.uint32(8).int32(message.page);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int32(message.pageSize);
        }
        if (message.totalItems !== 0) {
            writer.uint32(24).int64(message.totalItems);
        }
        if (message.totalPages !== 0) {
            writer.uint32(32).int32(message.totalPages);
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
                    message.page = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.pageSize = reader.int32();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.totalItems = longToNumber(reader.int64());
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.totalPages = reader.int32();
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
            page: isSet(object.page) ? globalThis.Number(object.page) : 0,
            pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
            totalItems: isSet(object.totalItems) ? globalThis.Number(object.totalItems) : 0,
            totalPages: isSet(object.totalPages) ? globalThis.Number(object.totalPages) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.page !== 0) {
            obj.page = Math.round(message.page);
        }
        if (message.pageSize !== 0) {
            obj.pageSize = Math.round(message.pageSize);
        }
        if (message.totalItems !== 0) {
            obj.totalItems = Math.round(message.totalItems);
        }
        if (message.totalPages !== 0) {
            obj.totalPages = Math.round(message.totalPages);
        }
        return obj;
    },
    create(base) {
        return exports.PaginationMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePaginationMetadata();
        message.page = object.page ?? 0;
        message.pageSize = object.pageSize ?? 0;
        message.totalItems = object.totalItems ?? 0;
        message.totalPages = object.totalPages ?? 0;
        return message;
    },
};
function createBasePaginatedResponse() {
    return { pagination: undefined, items: [] };
}
exports.PaginatedResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            exports.PaginationMetadata.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.items) {
            any_1.Any.encode(v, writer.uint32(18).fork()).join();
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
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = exports.PaginationMetadata.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.items.push(any_1.Any.decode(reader, reader.uint32()));
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
            pagination: isSet(object.pagination) ? exports.PaginationMetadata.fromJSON(object.pagination) : undefined,
            items: globalThis.Array.isArray(object?.items) ? object.items.map((e) => any_1.Any.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = exports.PaginationMetadata.toJSON(message.pagination);
        }
        if (message.items?.length) {
            obj.items = message.items.map((e) => any_1.Any.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.PaginatedResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePaginatedResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? exports.PaginationMetadata.fromPartial(object.pagination)
            : undefined;
        message.items = object.items?.map((e) => any_1.Any.fromPartial(e)) || [];
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
function isSet(value) {
    return value !== null && value !== undefined;
}
