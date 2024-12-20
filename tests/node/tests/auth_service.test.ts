import * as grpc from '@grpc/grpc-js';
import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import * as protoLoader from '@grpc/proto-loader';
import { promisify } from 'util';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../../../protobuf/v1/api/auth/auth_service.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition) as any;
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
const authService = protoDescriptor.v1.api.auth.AuthService;

const client = new authService('localhost:50051', grpc.credentials.createInsecure());

const login = promisify(client.Login).bind(client);
const validateToken = promisify(client.ValidateToken).bind(client);
const refreshToken = promisify(client.RefreshToken).bind(client);

const server = new grpc.Server();

server.addService(authService.service, {
  Login: (call: any, callback: any) => {
    callback(null, {
      accessToken: 'test-access-token',
      expiresIn: 3600,
      refreshToken: 'test-refresh-token',
    });
  },
  ValidateToken: (call: any, callback: any) => {
    callback(null, {
      accessToken: 'test-access-token',
      refreshToken: 'test-refresh-token',
    });
  },
  RefreshToken: (call: any, callback: any) => {
    callback(null, {
      accessToken: 'test-access-token',
      expiresIn: 3600,
      refreshToken: 'test-refresh-token',
    });
  },
});

beforeAll((done) => {
  server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    done();
  });
});

afterAll((done) => {
  server.tryShutdown(done);
});

describe('AuthService', () => {
  test('Login RPC', async () => {
    const request = {
      username: 'testuser',
      password: 'password123',
    };

    const response = await login(request);
    expect(response).toHaveProperty('access_token');
    expect(response).toHaveProperty('expires_in');
    expect(response).toHaveProperty('refresh_token');
  });

  test('ValidateToken RPC', async () => {
    const request = {
      accessToken: 'test-token',
    };

    const response = await validateToken(request);
    expect(response).toHaveProperty('is_valid');
    expect(response).toHaveProperty('user_id');
    expect(response).toHaveProperty('role');
  });

  test('RefreshToken RPC', async () => {
    const request = {
      refreshToken: 'refresh-token',
    };

    const response = await refreshToken(request);
    expect(response).toHaveProperty('access_token');
    expect(response).toHaveProperty('expires_in');
  });
});