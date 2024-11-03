"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = require("@oof.gg/protobuf-ts/game/session");
const player_1 = require("@oof.gg/protobuf-ts/player/player");
const action_1 = require("@oof.gg/protobuf-ts/player/action");
const playerType = player_1.Player_PlayerType.HUMAN;
const playerStatus = player_1.Player_PlayerStatus.ACTIVE;
const samplePlayer = {
    id: 'player1',
    username: 'John Doe',
    email: 'foo@baz.com',
    team: 'red',
    score: 100,
    type: playerType,
    status: playerStatus,
    role: 'admin',
};
const difficultyAttribute = {
    intValue: 1,
};
const maxScoreAttribute = {
    intValue: 100,
};
const session = {
    id: 'session1',
    gameId: 'game1',
    playerIds: ['player1'],
    state: session_1.Session_GameState.CREATED,
    attributes: {
        difficultyAttribute,
        maxScoreAttribute,
    },
};
const encodedPlayer = player_1.Player.encode(samplePlayer).finish();
console.log(encodedPlayer);
const decodedPlayer = player_1.Player.decode(encodedPlayer);
console.log(decodedPlayer);
const encodedSession = session_1.Session.encode(session).finish();
console.log(encodedSession);
const decodedSession = session_1.Session.decode(encodedSession);
console.log(decodedSession);
const playerAction = {
    stringValue: 'high',
};
const action = {
    playerId: 'player1',
    sessionId: 'session1',
    gameId: 'game1',
    type: action_1.Action_ActionType.CUSTOM,
    action: {
        playerAction: playerAction,
    },
    // send NTP timestamp provided by the server
    timestamp: Date.now(),
};
const encodedAction = action_1.Action.encode(action).finish();
console.log(encodedAction);
const decodedAction = action_1.Action.decode(encodedAction);
console.log(decodedAction);
