// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: api/auth/auth_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

export const protobufPackage = "api.auth";

/** Request for Login RPC */
export interface LoginRequest {
  /** Username or email */
  username: string;
  /** User's password */
  password: string;
}

/** Response for Login RPC */
export interface LoginResponse {
  /** JWT Access Token */
  accessToken: string;
  /** Refresh Token */
  refreshToken: string;
  /** Token expiration time in seconds */
  expiresIn: number;
}

/** Request for ValidateToken RPC */
export interface ValidateTokenRequest {
  /** JWT to validate */
  accessToken: string;
}

/** Response for ValidateToken RPC */
export interface ValidateTokenResponse {
  /** Indicates if the token is valid */
  isValid: boolean;
  /** ID of the authenticated user */
  userId: string;
  /** Role of the user (e.g., admin, user) */
  role: string;
}

/** Request for RefreshToken RPC */
export interface RefreshTokenRequest {
  /** Refresh Token */
  refreshToken: string;
}

/** Response for RefreshToken RPC */
export interface RefreshTokenResponse {
  /** New JWT Access Token */
  accessToken: string;
  /** Token expiration time in seconds */
  expiresIn: number;
}

function createBaseLoginRequest(): LoginRequest {
  return { username: "", password: "" };
}

export const LoginRequest: MessageFns<LoginRequest> = {
  encode(message: LoginRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

  fromJSON(object: any): LoginRequest {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { accessToken: "", refreshToken: "", expiresIn: 0 };
}

export const LoginResponse: MessageFns<LoginResponse> = {
  encode(message: LoginResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

  fromJSON(object: any): LoginResponse {
    return {
      accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
      refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
      expiresIn: isSet(object.expiresIn) ? globalThis.Number(object.expiresIn) : 0,
    };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse {
    return LoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.accessToken = object.accessToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.expiresIn = object.expiresIn ?? 0;
    return message;
  },
};

function createBaseValidateTokenRequest(): ValidateTokenRequest {
  return { accessToken: "" };
}

export const ValidateTokenRequest: MessageFns<ValidateTokenRequest> = {
  encode(message: ValidateTokenRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ValidateTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

  fromJSON(object: any): ValidateTokenRequest {
    return { accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "" };
  },

  toJSON(message: ValidateTokenRequest): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateTokenRequest>, I>>(base?: I): ValidateTokenRequest {
    return ValidateTokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateTokenRequest>, I>>(object: I): ValidateTokenRequest {
    const message = createBaseValidateTokenRequest();
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

function createBaseValidateTokenResponse(): ValidateTokenResponse {
  return { isValid: false, userId: "", role: "" };
}

export const ValidateTokenResponse: MessageFns<ValidateTokenResponse> = {
  encode(message: ValidateTokenResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): ValidateTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

  fromJSON(object: any): ValidateTokenResponse {
    return {
      isValid: isSet(object.isValid) ? globalThis.Boolean(object.isValid) : false,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      role: isSet(object.role) ? globalThis.String(object.role) : "",
    };
  },

  toJSON(message: ValidateTokenResponse): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<ValidateTokenResponse>, I>>(base?: I): ValidateTokenResponse {
    return ValidateTokenResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateTokenResponse>, I>>(object: I): ValidateTokenResponse {
    const message = createBaseValidateTokenResponse();
    message.isValid = object.isValid ?? false;
    message.userId = object.userId ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseRefreshTokenRequest(): RefreshTokenRequest {
  return { refreshToken: "" };
}

export const RefreshTokenRequest: MessageFns<RefreshTokenRequest> = {
  encode(message: RefreshTokenRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.refreshToken !== "") {
      writer.uint32(10).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RefreshTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

  fromJSON(object: any): RefreshTokenRequest {
    return { refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "" };
  },

  toJSON(message: RefreshTokenRequest): unknown {
    const obj: any = {};
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshTokenRequest>, I>>(base?: I): RefreshTokenRequest {
    return RefreshTokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshTokenRequest>, I>>(object: I): RefreshTokenRequest {
    const message = createBaseRefreshTokenRequest();
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

function createBaseRefreshTokenResponse(): RefreshTokenResponse {
  return { accessToken: "", expiresIn: 0 };
}

export const RefreshTokenResponse: MessageFns<RefreshTokenResponse> = {
  encode(message: RefreshTokenResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.expiresIn !== 0) {
      writer.uint32(16).int64(message.expiresIn);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RefreshTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          if (tag !== 16) {
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

  fromJSON(object: any): RefreshTokenResponse {
    return {
      accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
      expiresIn: isSet(object.expiresIn) ? globalThis.Number(object.expiresIn) : 0,
    };
  },

  toJSON(message: RefreshTokenResponse): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    if (message.expiresIn !== 0) {
      obj.expiresIn = Math.round(message.expiresIn);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshTokenResponse>, I>>(base?: I): RefreshTokenResponse {
    return RefreshTokenResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshTokenResponse>, I>>(object: I): RefreshTokenResponse {
    const message = createBaseRefreshTokenResponse();
    message.accessToken = object.accessToken ?? "";
    message.expiresIn = object.expiresIn ?? 0;
    return message;
  },
};

/** Service definition for authentication */
export type AuthServiceService = typeof AuthServiceService;
export const AuthServiceService = {
  /** User login RPC to generate an access token */
  login: {
    path: "/api.auth.AuthService/Login",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LoginRequest) => Buffer.from(LoginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LoginRequest.decode(value),
    responseSerialize: (value: LoginResponse) => Buffer.from(LoginResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LoginResponse.decode(value),
  },
  /** RPC to validate an existing token */
  validateToken: {
    path: "/api.auth.AuthService/ValidateToken",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ValidateTokenRequest) => Buffer.from(ValidateTokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ValidateTokenRequest.decode(value),
    responseSerialize: (value: ValidateTokenResponse) => Buffer.from(ValidateTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ValidateTokenResponse.decode(value),
  },
  /** RPC to refresh an access token using a refresh token */
  refreshToken: {
    path: "/api.auth.AuthService/RefreshToken",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RefreshTokenRequest) => Buffer.from(RefreshTokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RefreshTokenRequest.decode(value),
    responseSerialize: (value: RefreshTokenResponse) => Buffer.from(RefreshTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RefreshTokenResponse.decode(value),
  },
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  /** User login RPC to generate an access token */
  login: handleUnaryCall<LoginRequest, LoginResponse>;
  /** RPC to validate an existing token */
  validateToken: handleUnaryCall<ValidateTokenRequest, ValidateTokenResponse>;
  /** RPC to refresh an access token using a refresh token */
  refreshToken: handleUnaryCall<RefreshTokenRequest, RefreshTokenResponse>;
}

export interface AuthServiceClient extends Client {
  /** User login RPC to generate an access token */
  login(
    request: LoginRequest,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  /** RPC to validate an existing token */
  validateToken(
    request: ValidateTokenRequest,
    callback: (error: ServiceError | null, response: ValidateTokenResponse) => void,
  ): ClientUnaryCall;
  validateToken(
    request: ValidateTokenRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ValidateTokenResponse) => void,
  ): ClientUnaryCall;
  validateToken(
    request: ValidateTokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ValidateTokenResponse) => void,
  ): ClientUnaryCall;
  /** RPC to refresh an access token using a refresh token */
  refreshToken(
    request: RefreshTokenRequest,
    callback: (error: ServiceError | null, response: RefreshTokenResponse) => void,
  ): ClientUnaryCall;
  refreshToken(
    request: RefreshTokenRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RefreshTokenResponse) => void,
  ): ClientUnaryCall;
  refreshToken(
    request: RefreshTokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RefreshTokenResponse) => void,
  ): ClientUnaryCall;
}

export const AuthServiceClient = makeGenericClientConstructor(
  AuthServiceService,
  "api.auth.AuthService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
