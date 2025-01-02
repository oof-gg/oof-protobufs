import { describe, expect, test } from '@jest/globals';
import { Instance, InstanceStateEnum, InstanceCommandMessage, AuthConfig, InstanceCommandEnum } from '@protos/v1/api/game/instance';
import { JoinLeaveGame, JoinLeaveGame_Action } from '@protos/v1/api/game/join_leave';

describe('Instance proto', () => {
  test('should create an Instance with default values', () => {
    expect(Instance).toBeDefined();
    expect(InstanceStateEnum).toBeDefined();

    const instance: Instance = {
      state: InstanceStateEnum.INITIALIZING,
      gameId: '',
      playerId: '',
      data: '',
    };

    const encodeInstance = Instance.encode(instance).finish();
    expect(encodeInstance).toBeInstanceOf(Uint8Array);
    const decodeInstance = Instance.decode(encodeInstance);

    expect(decodeInstance.state).toBe(instance.state);
    expect(decodeInstance.gameId).toBe(instance.gameId);
    expect(decodeInstance.playerId).toBe(instance.playerId);
    expect(decodeInstance.data).toBe(instance.data);
  });

  test('should set and get state', () => {
    const instance: Instance = {
      state: InstanceStateEnum.RUNNING,
      gameId: '',
      playerId: '',
      data: '',
    };

    const encodeInstance = Instance.encode(instance).finish();
    expect(encodeInstance).toBeInstanceOf(Uint8Array);

    const decodeInstance = Instance.decode(encodeInstance);
    expect(decodeInstance.state).toBe(instance.state);
  });

  test('should create an instance message with a game id and auth config', () => {
    const authConfig: AuthConfig = {
      token: 'test-token',
      config: {
        key1: 'value1',
        key2: 'value2',
      },
    };

    const instanceCommandMessage: InstanceCommandMessage = {
      state: InstanceCommandEnum.START,
      gameId: 'game123',
      playerId: 'player123',
      data: 'some data',
      authConfig: authConfig,
    };

    const encodeInstanceCommandMessage = InstanceCommandMessage.encode(instanceCommandMessage).finish();
    expect(encodeInstanceCommandMessage).toBeInstanceOf(Uint8Array);

    const decodeInstanceCommandMessage = InstanceCommandMessage.decode(encodeInstanceCommandMessage);
    expect(decodeInstanceCommandMessage.state).toBe(instanceCommandMessage.state);
    expect(decodeInstanceCommandMessage.gameId).toBe(instanceCommandMessage.gameId);
    expect(decodeInstanceCommandMessage.playerId).toBe(instanceCommandMessage.playerId);
    expect(decodeInstanceCommandMessage.data).toBe(instanceCommandMessage.data);
    expect(decodeInstanceCommandMessage.authConfig?.token).toBe(authConfig.token);
    expect(decodeInstanceCommandMessage.authConfig?.config).toEqual(authConfig.config);
  });

  test('should encode and decode the join leave game object', () => {
    expect(JoinLeaveGame).toBeDefined();

    const joinLeaveGame: JoinLeaveGame = {
      userId: 'player1',
      gameId: 'game1',
      sessionId: 'session1',
      teamId: 'red',
      action: JoinLeaveGame_Action.JOIN,
    };

    const encodedJoinLeaveGame = JoinLeaveGame.encode(joinLeaveGame).finish();
    expect(encodedJoinLeaveGame).toBeInstanceOf(Uint8Array);

    const decodedJoinLeaveGame = JoinLeaveGame.decode(encodedJoinLeaveGame);
    expect(decodedJoinLeaveGame).toEqual(joinLeaveGame);

    expect(decodedJoinLeaveGame.userId).toBe(joinLeaveGame.userId);
    expect(decodedJoinLeaveGame.gameId).toBe(joinLeaveGame.gameId);
    expect(decodedJoinLeaveGame.sessionId).toBe(joinLeaveGame.sessionId);
    expect(decodedJoinLeaveGame.teamId).toBe(joinLeaveGame.teamId);
    expect(decodedJoinLeaveGame.action).toBe(joinLeaveGame.action);
  });
});