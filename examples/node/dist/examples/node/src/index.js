"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = require("../../../generated/typescript/game/session");
const player_1 = require("../../../generated/typescript/player/player");
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
console.log(samplePlayer);
const difficultyAttribute = {
    key: 'difficulty',
    intValue: 1,
};
const maxScoreAttribute = {
    key: 'max_score',
    intValue: 100,
};
const session = {
    id: 'session1',
    gameId: 'game1',
    players: [samplePlayer],
    state: session_1.Session_GameState.CREATED,
    attributes: {
        difficulty: difficultyAttribute,
        max_score: maxScoreAttribute,
    },
};
console.log(session);
const encodedPlayer = player_1.Player.encode(samplePlayer).finish();
console.log(encodedPlayer);
const decodedPlayer = player_1.Player.decode(encodedPlayer);
console.log(decodedPlayer);
const encodedSession = session_1.Session.encode(session).finish();
console.log(encodedSession);
const decodedSession = session_1.Session.decode(encodedSession);
console.log(decodedSession);
