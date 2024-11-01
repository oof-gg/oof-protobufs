import {describe, expect, test} from '@jest/globals';
import { Player, Player_PlayerStatus, Player_PlayerType } from '../../../generated/typescript/player/player';
import { Action, Action_ActionType, Action_PlayerAction } from '../../../generated/typescript/player/action';
import { State, State_PlayerAttribute, State_PlayerState } from '../../../generated/typescript/player/state';
import { GlobalEvent, GlobalEvent_EventType } from '../../../generated/typescript/global/event';
import { JoinLeaveGame, JoinLeaveGame_Action } from '../../../generated/typescript/global/join_leave';
import { GlobalTime } from '../../../generated/typescript/global/time';

describe("trivia module", () => {
  // TODO: Test Trivia Data Structures with Player, Game, Global
  test("should have the ability to join a game", () => {
    expect(JoinLeaveGame).toBeDefined();
    const joinLeaveGame: JoinLeaveGame = {
      playerId: 'player1',
      gameId: 'game1',
      sessionId: 'session1',
      teamId: 'red',
      action: JoinLeaveGame_Action.JOIN
    }

    // encode
    const encodedJoinLeaveGame = JoinLeaveGame.encode(joinLeaveGame).finish();
    expect(encodedJoinLeaveGame).toBeInstanceOf(Uint8Array);

    // decode
    const decodedJoinLeaveGame = JoinLeaveGame.decode(encodedJoinLeaveGame);
    expect(decodedJoinLeaveGame).toEqual(joinLeaveGame);

    expect(joinLeaveGame).toBeDefined();
    expect(joinLeaveGame.playerId).toBe('player1');
    expect(joinLeaveGame.gameId).toBe('game1');
    expect(joinLeaveGame.sessionId).toBe('session1');
    expect(joinLeaveGame.teamId).toBe('red');
  });

  test("should have the ability to leave a game", () => {
    expect(JoinLeaveGame).toBeDefined();
    const joinLeaveGame: JoinLeaveGame = {
      playerId: 'player1',
      gameId: 'game1',
      action: JoinLeaveGame_Action.LEAVE
    }

        // encode
    const encodedJoinLeaveGame = JoinLeaveGame.encode(joinLeaveGame).finish();
    expect(encodedJoinLeaveGame).toBeInstanceOf(Uint8Array);

    // decode
    const decodedJoinLeaveGame = JoinLeaveGame.decode(encodedJoinLeaveGame);
    expect(decodedJoinLeaveGame).toEqual(joinLeaveGame);

    expect(joinLeaveGame).toBeDefined();
    expect(joinLeaveGame.playerId).toBe('player1');
    expect(joinLeaveGame.gameId).toBe('game1');
    expect(joinLeaveGame.sessionId).toBe('session1');
    expect(joinLeaveGame.teamId).toBe('red');
  });

  test("should have the ability to receive the game session state", () => {
    expect(State).toBeDefined();
  });

  test("should have the ability for player to pass player action", () => {
      expect(Action).toBeDefined();
  });


});