import { describe, expect, test } from "@jest/globals";
import { Entity, Entity_AttributesEntry, EntityAttribute, Entity_ControllerStateEnum } from '@protos/v1/api/game/entity';

describe('ballcar module', () => {
  test('should register new entities for ball and car', () => {
    expect(Entity).toBeDefined();
    expect(Entity_AttributesEntry).toBeDefined();

    const velX: EntityAttribute = {
      floatValue: 1.0,
    };

    const velY: EntityAttribute = {
      floatValue: 1.0,
    };

    const posX: EntityAttribute = {
      floatValue: 0.0,
    };

    const posY: EntityAttribute = {
      floatValue: 0.0,
    };

    // Ball entity attributes controlled by server
    const ballEntity: Entity = {
      id: 'ball',
      name: 'Ball',
      type: 'ball',
      sessionId: 'session1',
      gameId: 'game1',
      controller: Entity_ControllerStateEnum.SERVER,
      playerId: 'player1',
      attributes: {
        velX: velX,
        velY: velY,
        posX: posX,
        posY: posY,
      },
    };

    const encodedBallEntity = Entity.encode(ballEntity).finish();
    expect(encodedBallEntity).toBeInstanceOf(Uint8Array);

    const decodedBallEntity = Entity.decode(encodedBallEntity);
    expect(decodedBallEntity).toEqual(ballEntity);

    expect(decodedBallEntity.id).toBe(ballEntity.id);
    expect(decodedBallEntity.name).toBe(ballEntity.name);
    expect(decodedBallEntity.attributes).toEqual(ballEntity.attributes);
  });

  test('should encode and decode the ball entity', () => {
    const velX: EntityAttribute = {
      floatValue: 1.0
    };

    const velY: EntityAttribute = {
      floatValue: 1.0
    };

    const posX: EntityAttribute = {
      floatValue: 0.0
    };

    const posY: EntityAttribute = {
      floatValue: 0.0
    };

    const ballEntity: Entity = {
      id: 'ball',
      name: 'Ball',
      type: 'ball',
      sessionId: 'session1',
      gameId: 'game1',
      controller: Entity_ControllerStateEnum.SERVER,
      playerId: 'player1',
      attributes: {
        velX, 
        velY, 
        posX, 
        posY
      },
    };

    const encodedBallEntity = Entity.encode(ballEntity).finish();
    expect(encodedBallEntity).toBeInstanceOf(Uint8Array);

    const decodedBallEntity = Entity.decode(encodedBallEntity);
    expect(decodedBallEntity).toEqual(ballEntity);
  });

  test('should encode and decode the ballcar state', () => {
    const velX: EntityAttribute = {
      floatValue: 1.0
    };

    const velY: EntityAttribute = {
      floatValue: 1.0
    };

    const posX: EntityAttribute = {
      floatValue: 0.0
    };

    const posY: EntityAttribute = {
      floatValue: 0.0
    };

    const ballcarEntity: Entity = {
      id: 'ballcar',
      name: 'BallCar',
      type: 'ballcar',
      sessionId: 'session2',
      gameId: 'game2',
      controller: Entity_ControllerStateEnum.SERVER,
      playerId: 'player2',
      attributes: {
        velX, 
        velY, 
        posX, 
        posY
      },
    };

    const encodedBallcarEntity = Entity.encode(ballcarEntity).finish();
    expect(encodedBallcarEntity).toBeInstanceOf(Uint8Array);

    const decodedBallcarEntity = Entity.decode(encodedBallcarEntity);
    expect(decodedBallcarEntity).toEqual(ballcarEntity);
  });
});