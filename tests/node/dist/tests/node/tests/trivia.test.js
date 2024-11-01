"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const action_1 = require("../../../generated/typescript/player/action");
const state_1 = require("../../../generated/typescript/player/state");
const join_leave_1 = require("../../../generated/typescript/global/join_leave");
(0, globals_1.describe)("trivia module", () => {
    // TODO: Test Trivia Data Structures with Player, Game, Global
    (0, globals_1.test)("should have the ability to join a game", () => {
        (0, globals_1.expect)(join_leave_1.JoinLeaveGame).toBeDefined();
        const joinLeaveGame = {
            playerId: 'player1',
            gameId: 'game1',
            action: join_leave_1.JoinLeaveGame_Action.JOIN
        };
    });
    (0, globals_1.test)("should have the ability to leave a game", () => {
        (0, globals_1.expect)(join_leave_1.JoinLeaveGame).toBeDefined();
        const joinLeaveGame = {
            playerId: 'player1',
            gameId: 'game1',
            action: join_leave_1.JoinLeaveGame_Action.LEAVE
        };
    });
    (0, globals_1.test)("should have the ability to receive the game session state", () => {
        (0, globals_1.expect)(state_1.State).toBeDefined();
    });
    (0, globals_1.test)("should have the ability for player to pass player action", () => {
        (0, globals_1.expect)(action_1.Action).toBeDefined();
    });
});
