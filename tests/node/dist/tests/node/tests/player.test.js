"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const player_1 = require("@protos/player/player");
const action_1 = require("@protos/player/action");
const state_1 = require("@protos/player/state");
(0, globals_1.describe)('player module', () => {
    (0, globals_1.test)('should encode and decode the player object', () => {
        (0, globals_1.expect)(player_1.Player).toBeDefined();
        const playerType = player_1.Player_PlayerType.HUMAN;
        const playerStatus = player_1.Player_PlayerStatus.ACTIVE;
        const samplePlayer = {
            id: 'player1',
            username: 'John Doe',
            email: 'foo@bar.com',
            team: 'red',
            score: 100,
            type: playerType,
            status: playerStatus,
            role: 'admin'
        };
        const encodedPlayer = player_1.Player.encode(samplePlayer).finish();
        (0, globals_1.expect)(encodedPlayer).toBeInstanceOf(Uint8Array);
        const decodedPlayer = player_1.Player.decode(encodedPlayer);
        (0, globals_1.expect)(decodedPlayer).toEqual(samplePlayer);
        (0, globals_1.expect)(decodedPlayer.id).toBe(samplePlayer.id);
        (0, globals_1.expect)(decodedPlayer.username).toBe(samplePlayer.username);
        (0, globals_1.expect)(decodedPlayer.email).toBe(samplePlayer.email);
        (0, globals_1.expect)(decodedPlayer.team).toBe(samplePlayer.team);
        (0, globals_1.expect)(decodedPlayer.score).toBe(samplePlayer.score);
        (0, globals_1.expect)(decodedPlayer.type).toBe(samplePlayer.type);
        (0, globals_1.expect)(decodedPlayer.status).toBe(samplePlayer.status);
        (0, globals_1.expect)(decodedPlayer.role).toBe(samplePlayer.role);
    });
    (0, globals_1.test)('should encode and decode the player state', () => {
        (0, globals_1.expect)(state_1.State).toBeDefined();
        const playerAttribute = {
            intValue: 100
        };
        const playerState = {
            playerId: 'player1',
            sessionId: 'session1',
            gameId: 'game1',
            state: state_1.State_PlayerState.WAITING,
            attributes: {
                playerAttribute
            },
            timestamp: new Date().getTime()
        };
        const encodedState = state_1.State.encode(playerState).finish();
        (0, globals_1.expect)(encodedState).toBeInstanceOf(Uint8Array);
        const decodedState = state_1.State.decode(encodedState);
        (0, globals_1.expect)(decodedState).toEqual(playerState);
        (0, globals_1.expect)(decodedState.playerId).toBe(playerState.playerId);
        (0, globals_1.expect)(decodedState.sessionId).toBe(playerState.sessionId);
        (0, globals_1.expect)(decodedState.gameId).toBe(playerState.gameId);
        (0, globals_1.expect)(decodedState.state).toEqual(playerState.state);
    });
    (0, globals_1.test)('should encode and decode the player actions', () => {
        const playerAction = {
            stringValue: 'high'
        };
        const action = {
            playerId: 'player1',
            sessionId: 'session1',
            gameId: 'game1',
            type: action_1.Action_ActionType.CUSTOM,
            action: {
                playerAction
            },
            timestamp: new Date().getTime()
        };
        const encodedAction = action_1.Action.encode(action).finish();
        (0, globals_1.expect)(encodedAction).toBeInstanceOf(Uint8Array);
        const decodedAction = action_1.Action.decode(encodedAction);
        (0, globals_1.expect)(decodedAction).toEqual(action);
        (0, globals_1.expect)(decodedAction.playerId).toBe(action.playerId);
        (0, globals_1.expect)(decodedAction.sessionId).toBe(action.sessionId);
        (0, globals_1.expect)(decodedAction.gameId).toBe(action.gameId);
        (0, globals_1.expect)(decodedAction.type).toBe(action.type);
        (0, globals_1.expect)(decodedAction.action).toEqual(action.action);
    });
});
