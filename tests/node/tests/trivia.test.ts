import {describe, expect, test} from '@jest/globals';
import { Player } from '@protos/v1/api/player/player';
import { GameEvent, GameEvent_EventType, GameEvent_EventAttribute } from '@protos/v1/api/game/event';
import { JoinLeaveGame, JoinLeaveGame_Action } from '@protos/v1/api/game/join_leave';
import { Session, GameAttribute, GameState } from '@protos/v1/api/game/session';
import { PlayerAction, PlayerAction_ActionType, PlayerAction_PlayerAction } from '@protos/v1/api/player/action';

describe("trivia scenario", () => {
  // TODO: Test Trivia Data Structures with Player, Game, Global
  test("should have the ability to join a game", () => {
    expect(JoinLeaveGame).toBeDefined();
    const joinLeaveGame: JoinLeaveGame = {
      userId: 'player1',
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
    expect(joinLeaveGame.userId).toBe(decodedJoinLeaveGame.userId);
    expect(joinLeaveGame.gameId).toBe(decodedJoinLeaveGame.gameId);
    expect(joinLeaveGame.sessionId).toBe(decodedJoinLeaveGame.sessionId);
    expect(joinLeaveGame.teamId).toBe(decodedJoinLeaveGame.teamId);
  });

  test("should have the ability to receive the game session state", () => {
    expect(Session).toBeDefined();
    expect(Player).toBeDefined();

    const players = ['player1', 'player2', 'player3'];

    const difficulty: GameAttribute = {
      intValue: 1,
    };

    const session: Session = {
      id: 'session1',
      gameId: 'game1',
      userIds: players,
      state: GameState.STATE_CREATED,
      attributes: {
        difficulty
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
    expect(session.userIds).toEqual(decodedSession.userIds);
    expect(session.state).toBe(decodedSession.state);
    expect(session.attributes).toEqual(decodedSession.attributes);

  });

  test("should have the ability to receive a game event", () => {
    expect(GameEvent).toBeDefined();

    const question: GameEvent_EventAttribute = {
      stringValue: 'What is the answer to life, the universe, and everything?',
    };

    const possibleAnswers: GameEvent_EventAttribute = {
      stringValue: '["42", "24", "12", "21"]',
    };

    // Server-side game event (e.g. in response to a player action OR something like new Trivia question)
    const gameEvent: GameEvent = {
      id: 'event1',
      eventName: 'question',
      timestamp: new Date().getTime(),
      gameId: 'game1',
      sessionId: 'session1',
      playerId: 'player1',
      teamId: 'red',
      attributes: {
        question,
        possibleAnswers
      },
      type: GameEvent_EventType.TYPE_UNSPECIFIED
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
    expect(gameEvent.attributes.question?.stringValue).toBe(decodeGameEvent.attributes.question?.stringValue);
    expect(gameEvent.attributes.possibleAnswers?.stringValue).toBe(decodeGameEvent.attributes.possibleAnswers?.stringValue);
    expect(gameEvent.type).toBe(decodeGameEvent.type);
  });

  test.skip("should have the ability to receive a score update from the game", () => {});

  test("should have the ability to send a game action", () => {
    expect(PlayerAction).toBeDefined();

    const playerAction: PlayerAction_PlayerAction = {
      stringValue: 'The answer is 42',
    };

    const playerActionObj: PlayerAction = {
      playerId: 'player1',
      sessionId: 'session1',
      gameId: 'game1',
      type: PlayerAction_ActionType.CUSTOM,
      action: {
        playerAction
      },
      // TODO: Add timestamp that comes from the server, not the client
      timestamp: new Date().getTime()
    };

    // encode
    const encodedAction = PlayerAction.encode(playerActionObj).finish();
    expect(encodedAction).toBeInstanceOf(Uint8Array);
    
    // decode
    const decodedAction = PlayerAction.decode(encodedAction);
    expect(decodedAction).toEqual(playerActionObj);

    expect(playerActionObj).toBeDefined();
    expect(playerActionObj.playerId).toBe(decodedAction.playerId);
    expect(playerActionObj.sessionId).toBe(decodedAction.sessionId);
    expect(playerActionObj.gameId).toBe(decodedAction.gameId);
    expect(playerActionObj.type).toBe(decodedAction.type);
    expect(playerActionObj.action).toEqual(decodedAction.action);
  });

  test("should have the ability to leave a game", () => {

    expect(JoinLeaveGame).toBeDefined();
    const joinLeaveGame: JoinLeaveGame = {
      userId: 'player1',
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
    expect(joinLeaveGame.userId).toBe(decodedJoinLeaveGame.userId);
    expect(joinLeaveGame.gameId).toBe(decodedJoinLeaveGame.gameId);
    expect(joinLeaveGame.sessionId).toBe(decodedJoinLeaveGame.sessionId);
    expect(joinLeaveGame.teamId).toBe(decodedJoinLeaveGame.teamId);
  });
});