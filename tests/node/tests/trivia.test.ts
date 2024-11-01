import {describe, expect, test} from '@jest/globals';
import { Player, Player_PlayerStatus, Player_PlayerType } from '../../../generated/typescript/player/player';
import { Action, Action_ActionType, Action_PlayerAction } from '../../../generated/typescript/player/action';
import { State, State_PlayerAttribute, State_PlayerState } from '../../../generated/typescript/player/state';
import { GlobalEvent, GlobalEvent_EventType } from '../../../generated/typescript/global/event';
import { GameEvent, GameEvent_EventType } from '../../../generated/typescript/game/event';
import { JoinLeaveGame, JoinLeaveGame_Action } from '../../../generated/typescript/global/join_leave';
import { GlobalTime } from '../../../generated/typescript/global/time';
import { Session, Session_GameAttribute, Session_GameState } from '../../../generated/typescript/game/session';

describe("trivia scenario", () => {
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
    expect(joinLeaveGame.playerId).toBe(decodedJoinLeaveGame.playerId);
    expect(joinLeaveGame.gameId).toBe(decodedJoinLeaveGame.gameId);
    expect(joinLeaveGame.sessionId).toBe(decodedJoinLeaveGame.sessionId);
    expect(joinLeaveGame.teamId).toBe(decodedJoinLeaveGame.teamId);
  });

  test("should have the ability to receive the game session state", () => {
    expect(Session).toBeDefined();
    expect(Player).toBeDefined();

    const player: Player = {
      id: 'player1',
      username: 'John Doe',
      email: 'foo@bar.com',
      team: 'red',
      score: 100,
      type: Player_PlayerType.HUMAN,
      status: Player_PlayerStatus.ACTIVE,
      role: 'admin',
    };

    const gameAttribute: Session_GameAttribute = {
      key: 'difficulty',
      intValue: 1,
    };

    const session: Session = {
      id: 'session1',
      gameId: 'game1',
      players: [player],
      state: Session_GameState.CREATED,
      attributes: {
        difficulty: gameAttribute,
      },
    };

    // encode
    const encodedSession = Session.encode(session).finish();
    expect(encodedSession).toBeInstanceOf(Uint8Array);

    // decode
    const decodedSession = Session.decode(encodedSession);
    expect(decodedSession).toEqual(session);

    expect(session).toBeDefined();
    expect(session.id).toBe(decodedSession.id);
    expect(session.gameId).toBe(decodedSession.gameId);
    expect(session.players).toEqual(decodedSession.players);
    expect(session.state).toBe(decodedSession.state);
    expect(session.attributes).toEqual(decodedSession.attributes);

  });

  test("should have the ability to receive a game event", () => {
    expect(GameEvent).toBeDefined();

    const gameEvent: GameEvent = {
      id: 'event1',
      eventName: 'question',
      timestamp: new Date().getTime(),
      gameId: 'game1',
      sessionId: 'session1',
      playerId: 'player1',
      teamId: 'red',
      data: JSON.stringify({question: 'bar', choices: ['foo', 'bar', 'baz']}),
      type: GameEvent_EventType.CUSTOM
    }

    // encode
    const encodedGameEvent = GameEvent.encode(gameEvent).finish();
    expect(encodedGameEvent).toBeInstanceOf(Uint8Array);

    // decode
    const decodeGameEvent = GameEvent.decode(encodedGameEvent);
    expect(decodeGameEvent).toEqual(gameEvent);

    expect(gameEvent).toBeDefined();
    expect(gameEvent.id).toBe(decodeGameEvent.id);
    expect(gameEvent.eventName).toBe(decodeGameEvent.eventName);
    expect(gameEvent.timestamp).toBe(decodeGameEvent.timestamp);
    expect(gameEvent.gameId).toBe(decodeGameEvent.gameId);
    expect(gameEvent.playerId).toBe(decodeGameEvent.playerId);
    expect(gameEvent.teamId).toBe(decodeGameEvent.teamId);
    expect(gameEvent.data).toBe(decodeGameEvent.data);
    expect(gameEvent.type).toBe(decodeGameEvent.type);
  });

  test("should have the ability to send a game action", () => {
    expect(Action).toBeDefined();

    const playerAction: Action_PlayerAction = {
      key: 'answer',
      stringValue: 'The answer is 42',
    };

    const playerActionObj: Action = {
      playerId: 'player1',
      sessionId: 'session1',
      gameId: 'game1',
      actionType: Action_ActionType.CUSTOM,
      action: {
        playerAction
      },
      // TODO: Add timestamp that comes from the server, not the client
      timestamp: new Date().getTime()
    };

    // encode
    const encodedAction = Action.encode(playerActionObj).finish();
    expect(encodedAction).toBeInstanceOf(Uint8Array);
    
    // decode
    const decodedAction = Action.decode(encodedAction);
    expect(decodedAction).toEqual(playerActionObj);

    expect(playerActionObj).toBeDefined();
    expect(playerActionObj.playerId).toBe(decodedAction.playerId);
    expect(playerActionObj.sessionId).toBe(decodedAction.sessionId);
    expect(playerActionObj.gameId).toBe(decodedAction.gameId);
    expect(playerActionObj.actionType).toBe(decodedAction.actionType);
    expect(playerActionObj.action).toEqual(decodedAction.action);
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
    expect(joinLeaveGame.playerId).toBe(decodedJoinLeaveGame.playerId);
    expect(joinLeaveGame.gameId).toBe(decodedJoinLeaveGame.gameId);
    expect(joinLeaveGame.sessionId).toBe(decodedJoinLeaveGame.sessionId);
    expect(joinLeaveGame.teamId).toBe(decodedJoinLeaveGame.teamId);
  });
});