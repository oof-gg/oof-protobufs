import { describe, expect, test } from '@jest/globals';
import { Player, PlayerStatus, PlayerType } from '@protos/v1/api/player/player';
import { PlayerAction, PlayerAction_ActionType } from '@protos/v1/api/player/action';
import { State, State_PlayerAttribute, State_PlayerState } from '@protos/v1/api/player/state';

describe('player module', () => {
  test('should encode and decode the player object', () => {
    expect(Player).toBeDefined();

    const playerType = PlayerType.HUMAN;
    const playerStatus = PlayerStatus.ACTIVE;

    const samplePlayer: Player = {
      id: 'player1',
      username: 'John Doe',
      email: 'foo@bar.com',
      team: 'red',
      score: 100,
      type: playerType,
      status: playerStatus,
      role: 'admin',
    };

    const encodedPlayer = Player.encode(samplePlayer).finish();
    expect(encodedPlayer).toBeInstanceOf(Uint8Array);

    const decodedPlayer = Player.decode(encodedPlayer);
    expect(decodedPlayer).toEqual(samplePlayer);

    expect(decodedPlayer.id).toBe(samplePlayer.id);
    expect(decodedPlayer.username).toBe(samplePlayer.username);
    expect(decodedPlayer.email).toBe(samplePlayer.email);
    expect(decodedPlayer.team).toBe(samplePlayer.team);
    expect(decodedPlayer.score).toBe(samplePlayer.score);
    expect(decodedPlayer.type).toBe(samplePlayer.type);
    expect(decodedPlayer.status).toBe(samplePlayer.status);
    expect(decodedPlayer.role).toBe(samplePlayer.role);
  });

  test('should encode and decode the player state', () => {
    expect(State).toBeDefined();

    const playerAttributes: { [key: string]: State_PlayerAttribute } = {
      score: { intValue: 100 },
    };

    const playerState: State = {
      playerId: 'player1',
      sessionId: 'session1',
      gameId: 'game1',
      state: State_PlayerState.WAITING,
      attributes: playerAttributes,
      timestamp: new Date().getTime(),
    };

    const encodedState = State.encode(playerState).finish();
    expect(encodedState).toBeInstanceOf(Uint8Array);

    const decodedState = State.decode(encodedState);
    expect(decodedState).toEqual(playerState);

    expect(decodedState.playerId).toBe(playerState.playerId);
    expect(decodedState.sessionId).toBe(playerState.sessionId);
    expect(decodedState.gameId).toBe(playerState.gameId);
    expect(decodedState.state).toEqual(playerState.state);
  });

  test('should encode and decode the player actions', () => {
    const playerAction = {
      stringValue: 'high',
    };

    const action: PlayerAction = {
      playerId: 'player1',
      sessionId: 'session1',
      gameId: 'game1',
      type: PlayerAction_ActionType.CUSTOM,
      action: {
        playerAction,
      },
      timestamp: new Date().getTime(),
    };

    const encodedAction = PlayerAction.encode(action).finish();
    expect(encodedAction).toBeInstanceOf(Uint8Array);

    const decodedAction = PlayerAction.decode(encodedAction);
    expect(decodedAction).toEqual(action);

    expect(decodedAction.playerId).toBe(action.playerId);
    expect(decodedAction.sessionId).toBe(action.sessionId);
    expect(decodedAction.gameId).toBe(action.gameId);
    expect(decodedAction.type).toBe(action.type);
    expect(decodedAction.action).toEqual(action.action);
  });
});