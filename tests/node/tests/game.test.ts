import {describe, expect, test} from '@jest/globals';
import {Instance, InstanceState} from '@protos/game/instance';

describe('Instance proto', () => {
  test('should create an Instance with default values', () => {
    expect(Instance).toBeDefined();
    expect(InstanceState).toBeDefined();

    const instance: Instance = {
      state: InstanceState.INITIALIZING,
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
      state: InstanceState.RUNNING,
      gameId: '',
      playerId: '',
      data: '',
    };

    const encodeInstance = Instance.encode(instance).finish();
    expect(encodeInstance).toBeInstanceOf(Uint8Array);

    const decodeInstance = Instance.decode(encodeInstance);
    expect(decodeInstance.state).toBe(instance.state);
  });
});