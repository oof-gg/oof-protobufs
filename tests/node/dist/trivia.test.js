"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const player_1 = require("@protos/player/player");
const action_1 = require("@protos/player/action");
const event_1 = require("@protos/game/event");
const join_leave_1 = require("@protos/global/join_leave");
const session_1 = require("@protos/game/session");
(0, globals_1.describe)("trivia scenario", () => {
    // TODO: Test Trivia Data Structures with Player, Game, Global
    (0, globals_1.test)("should have the ability to join a game", () => {
        (0, globals_1.expect)(join_leave_1.JoinLeaveGame).toBeDefined();
        const joinLeaveGame = {
            playerId: 'player1',
            gameId: 'game1',
            sessionId: 'session1',
            teamId: 'red',
            action: join_leave_1.JoinLeaveGame_Action.JOIN
        };
        // encode
        const encodedJoinLeaveGame = join_leave_1.JoinLeaveGame.encode(joinLeaveGame).finish();
        (0, globals_1.expect)(encodedJoinLeaveGame).toBeInstanceOf(Uint8Array);
        // decode
        const decodedJoinLeaveGame = join_leave_1.JoinLeaveGame.decode(encodedJoinLeaveGame);
        (0, globals_1.expect)(decodedJoinLeaveGame).toEqual(joinLeaveGame);
        (0, globals_1.expect)(joinLeaveGame).toBeDefined();
        (0, globals_1.expect)(joinLeaveGame.playerId).toBe(decodedJoinLeaveGame.playerId);
        (0, globals_1.expect)(joinLeaveGame.gameId).toBe(decodedJoinLeaveGame.gameId);
        (0, globals_1.expect)(joinLeaveGame.sessionId).toBe(decodedJoinLeaveGame.sessionId);
        (0, globals_1.expect)(joinLeaveGame.teamId).toBe(decodedJoinLeaveGame.teamId);
    });
    (0, globals_1.test)("should have the ability to receive the game session state", () => {
        (0, globals_1.expect)(session_1.Session).toBeDefined();
        (0, globals_1.expect)(player_1.Player).toBeDefined();
        const player = {
            id: 'player1',
            username: 'John Doe',
            email: 'foo@bar.com',
            team: 'red',
            score: 100,
            type: player_1.Player_PlayerType.HUMAN,
            status: player_1.Player_PlayerStatus.ACTIVE,
            role: 'admin',
        };
        const gameAttribute = {
            key: 'difficulty',
            intValue: 1,
        };
        const session = {
            id: 'session1',
            gameId: 'game1',
            players: [player],
            state: session_1.Session_GameState.CREATED,
            attributes: {
                difficulty: gameAttribute,
            },
        };
        // encode
        const encodedSession = session_1.Session.encode(session).finish();
        (0, globals_1.expect)(encodedSession).toBeInstanceOf(Uint8Array);
        // decode
        const decodedSession = session_1.Session.decode(encodedSession);
        (0, globals_1.expect)(decodedSession).toEqual(session);
        (0, globals_1.expect)(session).toBeDefined();
        (0, globals_1.expect)(session.id).toBe(decodedSession.id);
        (0, globals_1.expect)(session.gameId).toBe(decodedSession.gameId);
        (0, globals_1.expect)(session.players).toEqual(decodedSession.players);
        (0, globals_1.expect)(session.state).toBe(decodedSession.state);
        (0, globals_1.expect)(session.attributes).toEqual(decodedSession.attributes);
    });
    (0, globals_1.test)("should have the ability to receive a game event", () => {
        (0, globals_1.expect)(event_1.GameEvent).toBeDefined();
        const gameEvent = {
            id: 'event1',
            eventName: 'question',
            timestamp: new Date().getTime(),
            gameId: 'game1',
            sessionId: 'session1',
            playerId: 'player1',
            teamId: 'red',
            data: JSON.stringify({ question: 'bar', choices: ['foo', 'bar', 'baz'] }),
            type: event_1.GameEvent_EventType.CUSTOM
        };
        // encode
        const encodedGameEvent = event_1.GameEvent.encode(gameEvent).finish();
        (0, globals_1.expect)(encodedGameEvent).toBeInstanceOf(Uint8Array);
        // decode
        const decodeGameEvent = event_1.GameEvent.decode(encodedGameEvent);
        (0, globals_1.expect)(decodeGameEvent).toEqual(gameEvent);
        (0, globals_1.expect)(gameEvent).toBeDefined();
        (0, globals_1.expect)(gameEvent.id).toBe(decodeGameEvent.id);
        (0, globals_1.expect)(gameEvent.eventName).toBe(decodeGameEvent.eventName);
        (0, globals_1.expect)(gameEvent.timestamp).toBe(decodeGameEvent.timestamp);
        (0, globals_1.expect)(gameEvent.gameId).toBe(decodeGameEvent.gameId);
        (0, globals_1.expect)(gameEvent.playerId).toBe(decodeGameEvent.playerId);
        (0, globals_1.expect)(gameEvent.teamId).toBe(decodeGameEvent.teamId);
        (0, globals_1.expect)(gameEvent.data).toBe(decodeGameEvent.data);
        (0, globals_1.expect)(gameEvent.type).toBe(decodeGameEvent.type);
    });
    (0, globals_1.test)("should have the ability to send a game action", () => {
        (0, globals_1.expect)(action_1.Action).toBeDefined();
        const playerAction = {
            key: 'answer',
            stringValue: 'The answer is 42',
        };
        const playerActionObj = {
            playerId: 'player1',
            sessionId: 'session1',
            gameId: 'game1',
            actionType: action_1.Action_ActionType.CUSTOM,
            action: {
                playerAction
            },
            // TODO: Add timestamp that comes from the server, not the client
            timestamp: new Date().getTime()
        };
        // encode
        const encodedAction = action_1.Action.encode(playerActionObj).finish();
        (0, globals_1.expect)(encodedAction).toBeInstanceOf(Uint8Array);
        // decode
        const decodedAction = action_1.Action.decode(encodedAction);
        (0, globals_1.expect)(decodedAction).toEqual(playerActionObj);
        (0, globals_1.expect)(playerActionObj).toBeDefined();
        (0, globals_1.expect)(playerActionObj.playerId).toBe(decodedAction.playerId);
        (0, globals_1.expect)(playerActionObj.sessionId).toBe(decodedAction.sessionId);
        (0, globals_1.expect)(playerActionObj.gameId).toBe(decodedAction.gameId);
        (0, globals_1.expect)(playerActionObj.actionType).toBe(decodedAction.actionType);
        (0, globals_1.expect)(playerActionObj.action).toEqual(decodedAction.action);
    });
    (0, globals_1.test)("should have the ability to leave a game", () => {
        (0, globals_1.expect)(join_leave_1.JoinLeaveGame).toBeDefined();
        const joinLeaveGame = {
            playerId: 'player1',
            gameId: 'game1',
            action: join_leave_1.JoinLeaveGame_Action.LEAVE
        };
        // encode
        const encodedJoinLeaveGame = join_leave_1.JoinLeaveGame.encode(joinLeaveGame).finish();
        (0, globals_1.expect)(encodedJoinLeaveGame).toBeInstanceOf(Uint8Array);
        // decode
        const decodedJoinLeaveGame = join_leave_1.JoinLeaveGame.decode(encodedJoinLeaveGame);
        (0, globals_1.expect)(decodedJoinLeaveGame).toEqual(joinLeaveGame);
        (0, globals_1.expect)(joinLeaveGame).toBeDefined();
        (0, globals_1.expect)(joinLeaveGame.playerId).toBe(decodedJoinLeaveGame.playerId);
        (0, globals_1.expect)(joinLeaveGame.gameId).toBe(decodedJoinLeaveGame.gameId);
        (0, globals_1.expect)(joinLeaveGame.sessionId).toBe(decodedJoinLeaveGame.sessionId);
        (0, globals_1.expect)(joinLeaveGame.teamId).toBe(decodedJoinLeaveGame.teamId);
    });
});
