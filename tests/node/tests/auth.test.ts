import { describe, expect, test } from '@jest/globals';
import { LoginRequest, LoginResponse } from '@protos/v1/api/auth/auth_service';

describe('auth_service module', () => {
  test('should encode and decode the AuthRequest object', () => {
    expect(LoginRequest).toBeDefined();

    const authRequest: LoginRequest = {
      username: 'testuser',
      password: 'password123',
    };

    const encodedAuthRequest = LoginRequest.encode(authRequest).finish();
    expect(encodedAuthRequest).toBeInstanceOf(Uint8Array);

    const decodedAuthRequest = LoginRequest.decode(encodedAuthRequest);
    expect(decodedAuthRequest).toEqual(authRequest);

    expect(decodedAuthRequest.username).toBe(authRequest.username);
    expect(decodedAuthRequest.password).toBe(authRequest.password);
  });

  test('should encode and decode the AuthResponse object', () => {
    expect(LoginResponse).toBeDefined();

    const authResponse: LoginResponse = {
      accessToken: '',
      refreshToken: '',
      expiresIn: 0,
    };

    const encodedAuthResponse = LoginResponse.encode(authResponse).finish();
    expect(encodedAuthResponse).toBeInstanceOf(Uint8Array);

    const decodedAuthResponse = LoginResponse.decode(encodedAuthResponse);
    expect(decodedAuthResponse).toEqual(authResponse);

    expect(decodedAuthResponse.accessToken).toBe(authResponse.accessToken);
    expect(decodedAuthResponse.refreshToken).toBe(authResponse.refreshToken);
    expect(decodedAuthResponse.expiresIn).toBe(authResponse.expiresIn);
  });

  test('should handle failed authentication in AuthResponse', () => {
    const authResponse: LoginResponse = {
      accessToken: '',
      refreshToken: '',
      expiresIn: 0,
    };

    const encodedAuthResponse = LoginResponse.encode(authResponse).finish();
    expect(encodedAuthResponse).toBeInstanceOf(Uint8Array);

    const decodedAuthResponse = LoginResponse.decode(encodedAuthResponse);
    expect(decodedAuthResponse).toEqual(authResponse);

    expect(decodedAuthResponse.accessToken).toBe(authResponse.accessToken);
    expect(decodedAuthResponse.refreshToken).toBe(authResponse.refreshToken);
    expect(decodedAuthResponse.expiresIn).toBe(authResponse.expiresIn);
  });
});