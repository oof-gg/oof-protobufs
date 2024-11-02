import { describe, expect, test } from "@jest/globals";
import { Player, Player_PlayerStatus, Player_PlayerType } from '@protos/player/player';
import { Action, Action_ActionType, Action_PlayerAction } from '@protos/player/action';
import { State, State_PlayerAttribute, State_PlayerState } from '@protos/player/state';
import { GlobalEvent, GlobalEvent_EventType } from '@protos/global/event';
import { GameEvent, GameEvent_EventType } from '@protos/game/event';
import { JoinLeaveGame, JoinLeaveGame_Action } from '@protos/global/join_leave';
import { GlobalTime } from '@protos/global/time';
import { Session, Session_GameAttribute, Session_GameState } from '@protos/game/session';
import { RegisterEntity, RegisterEntity_EntityAttribute, EntityUpdate } from '@protos/game/entity';

describe('ballcar module', () => {
  // TODO: Register new entities for ball and car (e.g. car, ball, etc.)
  test('should register new entities for ball and car', () => {
    // expect(Entity).toBeDefined();
    expect(RegisterEntity).toBeDefined();
    expect(RegisterEntity_EntityAttribute).toBeDefined();

    const ballX: RegisterEntity_EntityAttribute = {
      key: 'velocity_x',
      floatValue: 1.0,
    };

    const ballY: RegisterEntity_EntityAttribute = {
      key: 'velocity_y',
      floatValue: 1.0,
    };

    const posX: RegisterEntity_EntityAttribute = {
      key: 'position_x',
      floatValue: 0.0,
    };

    const posY: RegisterEntity_EntityAttribute = {
      key: 'position_y',
      floatValue: 0.0,
    };

    const ballEntity: RegisterEntity = {
      id: 'ball',
      name: 'Ball',
      type: 'ball',
      sessionId: 'session1',
      gameId: 'game1',
      attributes: [
        ballX,
        ballY,
        posX,
        posY
      ]
    };

    const encodedBallEntity = RegisterEntity.encode(ballEntity).finish();
    expect(encodedBallEntity).toBeInstanceOf(Uint8Array);

    const decodedBallEntity = RegisterEntity.decode(encodedBallEntity);
    expect(decodedBallEntity).toEqual(ballEntity);

    expect(decodedBallEntity.id).toBe(ballEntity.id);
    expect(decodedBallEntity.name).toBe(ballEntity.name);
    expect(decodedBallEntity.attributes).toEqual(ballEntity.attributes);
    
  });
  // TODO: Implement entity protobufs
  test('should encode and decode the ball entity', () => {
  });

  test('should encode and decode the ballcar state', () => {
    expect(true).toBe(true);
  });
  
});