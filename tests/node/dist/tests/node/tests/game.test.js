"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const instance_1 = require("@protos/game/instance");
(0, globals_1.describe)('Instance proto', () => {
    (0, globals_1.test)('should create an Instance with default values', () => {
        (0, globals_1.expect)(instance_1.Instance).toBeDefined();
        (0, globals_1.expect)(instance_1.InstanceState).toBeDefined();
        const instance = {
            state: instance_1.InstanceState.INITIALIZING,
            gameId: '',
            playerId: '',
            data: '',
        };
        const encodeInstance = instance_1.Instance.encode(instance).finish();
        (0, globals_1.expect)(encodeInstance).toBeInstanceOf(Uint8Array);
        const decodeInstance = instance_1.Instance.decode(encodeInstance);
        (0, globals_1.expect)(decodeInstance.state).toBe(instance.state);
        (0, globals_1.expect)(decodeInstance.gameId).toBe(instance.gameId);
        (0, globals_1.expect)(decodeInstance.playerId).toBe(instance.playerId);
        (0, globals_1.expect)(decodeInstance.data).toBe(instance.data);
    });
    (0, globals_1.test)('should set and get state', () => {
        const instance = {
            state: instance_1.InstanceState.RUNNING,
            gameId: '',
            playerId: '',
            data: '',
        };
        const encodeInstance = instance_1.Instance.encode(instance).finish();
        (0, globals_1.expect)(encodeInstance).toBeInstanceOf(Uint8Array);
        const decodeInstance = instance_1.Instance.decode(encodeInstance);
        (0, globals_1.expect)(decodeInstance.state).toBe(instance.state);
    });
});
