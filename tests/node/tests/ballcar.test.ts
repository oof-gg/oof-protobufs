import { describe, expect, test } from "@jest/globals";
import { RegisterEntity, RegisterEntity_EntityAttribute, EntityUpdate, RegisterEntity_ControllerStateEnum } from '@protos/game/entity';

describe('ballcar module', () => {
  // TODO: Register new entities for ball and car (e.g. car, ball, etc.)
  test('should register new entities for ball and car', () => {
    // expect(Entity).toBeDefined();
    expect(RegisterEntity).toBeDefined();
    expect(RegisterEntity_EntityAttribute).toBeDefined();

    const velX: RegisterEntity_EntityAttribute = {
      floatValue: 1.0,
    };

    const velY: RegisterEntity_EntityAttribute = {
      floatValue: 1.0,
    };

    const posX: RegisterEntity_EntityAttribute = {
      floatValue: 0.0,
    };

    const posY: RegisterEntity_EntityAttribute = {
      floatValue: 0.0,
    };

    // Ball entity attributes controller by server
    const ballEntity: RegisterEntity = {
      id: 'ball',
      name: 'Ball',
      type: 'ball',
      sessionId: 'session1',
      gameId: 'game1',
      controllerState: RegisterEntity_ControllerStateEnum.SERVER,
      playerId: 'player1',
      attributes: {
        velX,
        velY,
        posX,
        posY,
      },
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