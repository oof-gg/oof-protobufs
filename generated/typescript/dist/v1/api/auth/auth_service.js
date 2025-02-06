"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: v1/api/auth/auth_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceClient = exports.AuthServiceService = exports.RefreshTokenResponse = exports.RefreshTokenRequest = exports.RegisterResponse = exports.RegisterRequest = exports.ValidateTokenResponse = exports.ValidateTokenRequest = exports.LoginResponse = exports.TwitchLoginRequest = exports.LoginRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const grpc_js_1 = require("@grpc/grpc-js");
exports.protobufPackage = "v1.api.auth";
function createBaseLoginRequest() {
    return { username: "", password: "" };
}
exports.LoginRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginRequest();
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
                    message.password = reader.string();
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
            password: isSet(object.password) ? globalThis.String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.LoginRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginRequest();
        message.username = object.username ?? "";
        message.password = object.password ?? "";
        return message;
    },
};
function createBaseTwitchLoginRequest() {
    return { twitchToken: "" };
}
exports.TwitchLoginRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.twitchToken !== "") {
            writer.uint32(10).string(message.twitchToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTwitchLoginRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.twitchToken = reader.string();
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
        return { twitchToken: isSet(object.twitchToken) ? globalThis.String(object.twitchToken) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.twitchToken !== "") {
            obj.twitchToken = message.twitchToken;
        }
        return obj;
    },
    create(base) {
        return exports.TwitchLoginRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTwitchLoginRequest();
        message.twitchToken = object.twitchToken ?? "";
        return message;
    },
};
function createBaseLoginResponse() {
    return { accessToken: "", refreshToken: "", expiresIn: 0 };
}
exports.LoginResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        if (message.refreshToken !== "") {
            writer.uint32(18).string(message.refreshToken);
        }
        if (message.expiresIn !== 0) {
            writer.uint32(24).int64(message.expiresIn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.accessToken = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.refreshToken = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.expiresIn = longToNumber(reader.int64());
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
            accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
            refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
            expiresIn: isSet(object.expiresIn) ? globalThis.Number(object.expiresIn) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accessToken !== "") {
            obj.accessToken = message.accessToken;
        }
        if (message.refreshToken !== "") {
            obj.refreshToken = message.refreshToken;
        }
        if (message.expiresIn !== 0) {
            obj.expiresIn = Math.round(message.expiresIn);
        }
        return obj;
    },
    create(base) {
        return exports.LoginResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginResponse();
        message.accessToken = object.accessToken ?? "";
        message.refreshToken = object.refreshToken ?? "";
        message.expiresIn = object.expiresIn ?? 0;
        return message;
    },
};
function createBaseValidateTokenRequest() {
    return { accessToken: "" };
}
exports.ValidateTokenRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidateTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.accessToken = reader.string();
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
        return { accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.accessToken !== "") {
            obj.accessToken = message.accessToken;
        }
        return obj;
    },
    create(base) {
        return exports.ValidateTokenRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidateTokenRequest();
        message.accessToken = object.accessToken ?? "";
        return message;
    },
};
function createBaseValidateTokenResponse() {
    return { isValid: false, userId: "", role: "" };
}
exports.ValidateTokenResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.isValid !== false) {
            writer.uint32(8).bool(message.isValid);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        if (message.role !== "") {
            writer.uint32(26).string(message.role);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidateTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.isValid = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
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
            isValid: isSet(object.isValid) ? globalThis.Boolean(object.isValid) : false,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            role: isSet(object.role) ? globalThis.String(object.role) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.isValid !== false) {
            obj.isValid = message.isValid;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.role !== "") {
            obj.role = message.role;
        }
        return obj;
    },
    create(base) {
        return exports.ValidateTokenResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidateTokenResponse();
        message.isValid = object.isValid ?? false;
        message.userId = object.userId ?? "";
        message.role = object.role ?? "";
        return message;
    },
};
function createBaseRegisterRequest() {
    return { username: "", email: "", password: "" };
}
exports.RegisterRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.password !== "") {
            writer.uint32(26).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterRequest();
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
                    message.password = reader.string();
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            password: isSet(object.password) ? globalThis.String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.RegisterRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterRequest();
        message.username = object.username ?? "";
        message.email = object.email ?? "";
        message.password = object.password ?? "";
        return message;
    },
};
function createBaseRegisterResponse() {
    return { userId: "", accessToken: "", refreshToken: "", expiresIn: 0 };
}
exports.RegisterResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.accessToken !== "") {
            writer.uint32(18).string(message.accessToken);
        }
        if (message.refreshToken !== "") {
            writer.uint32(26).string(message.refreshToken);
        }
        if (message.expiresIn !== 0) {
            writer.uint32(32).int64(message.expiresIn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.accessToken = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.refreshToken = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.expiresIn = longToNumber(reader.int64());
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
            refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
            expiresIn: isSet(object.expiresIn) ? globalThis.Number(object.expiresIn) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.accessToken !== "") {
            obj.accessToken = message.accessToken;
        }
        if (message.refreshToken !== "") {
            obj.refreshToken = message.refreshToken;
        }
        if (message.expiresIn !== 0) {
            obj.expiresIn = Math.round(message.expiresIn);
        }
        return obj;
    },
    create(base) {
        return exports.RegisterResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterResponse();
        message.userId = object.userId ?? "";
        message.accessToken = object.accessToken ?? "";
        message.refreshToken = object.refreshToken ?? "";
        message.expiresIn = object.expiresIn ?? 0;
        return message;
    },
};
function createBaseRefreshTokenRequest() {
    return { refreshToken: "" };
}
exports.RefreshTokenRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.refreshToken !== "") {
            writer.uint32(10).string(message.refreshToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRefreshTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.refreshToken = reader.string();
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
        return { refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.refreshToken !== "") {
            obj.refreshToken = message.refreshToken;
        }
        return obj;
    },
    create(base) {
        return exports.RefreshTokenRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRefreshTokenRequest();
        message.refreshToken = object.refreshToken ?? "";
        return message;
    },
};
function createBaseRefreshTokenResponse() {
    return { accessToken: "", refreshToken: "", expiresIn: 0 };
}
exports.RefreshTokenResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        if (message.refreshToken !== "") {
            writer.uint32(18).string(message.refreshToken);
        }
        if (message.expiresIn !== 0) {
            writer.uint32(24).int64(message.expiresIn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRefreshTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.accessToken = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.refreshToken = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.expiresIn = longToNumber(reader.int64());
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
            accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
            refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
            expiresIn: isSet(object.expiresIn) ? globalThis.Number(object.expiresIn) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accessToken !== "") {
            obj.accessToken = message.accessToken;
        }
        if (message.refreshToken !== "") {
            obj.refreshToken = message.refreshToken;
        }
        if (message.expiresIn !== 0) {
            obj.expiresIn = Math.round(message.expiresIn);
        }
        return obj;
    },
    create(base) {
        return exports.RefreshTokenResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRefreshTokenResponse();
        message.accessToken = object.accessToken ?? "";
        message.refreshToken = object.refreshToken ?? "";
        message.expiresIn = object.expiresIn ?? 0;
        return message;
    },
};
exports.AuthServiceService = {
    /** / User login RPC to generate an access token */
    login: {
        path: "/v1.api.auth.AuthService/Login",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.LoginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.LoginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.LoginResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.LoginResponse.decode(value),
    },
    /** / User registration RPC to create a new user */
    register: {
        path: "/v1.api.auth.AuthService/Register",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RegisterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RegisterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.RegisterResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.RegisterResponse.decode(value),
    },
    /** / RPC to validate an existing token */
    validateToken: {
        path: "/v1.api.auth.AuthService/ValidateToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ValidateTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ValidateTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ValidateTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ValidateTokenResponse.decode(value),
    },
    /** / Twitch login RPC to generate an access token */
    twitchLogin: {
        path: "/v1.api.auth.AuthService/TwitchLogin",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.TwitchLoginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.TwitchLoginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.LoginResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.LoginResponse.decode(value),
    },
    /** / RPC to refresh an access token using a refresh token */
    refreshToken: {
        path: "/v1.api.auth.AuthService/RefreshToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RefreshTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RefreshTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.RefreshTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.RefreshTokenResponse.decode(value),
    },
};
exports.AuthServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AuthServiceService, "v1.api.auth.AuthService");
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
