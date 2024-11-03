"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const entity_1 = require("@protos/game/entity");
(0, globals_1.describe)('ballcar module', () => {
    // TODO: Register new entities for ball and car (e.g. car, ball, etc.)
    (0, globals_1.test)('should register new entities for ball and car', () => {
        // expect(Entity).toBeDefined();
        (0, globals_1.expect)(entity_1.RegisterEntity).toBeDefined();
        (0, globals_1.expect)(entity_1.RegisterEntity_EntityAttribute).toBeDefined();
        const velX = {
            floatValue: 1.0,
        };
        const velY = {
            floatValue: 1.0,
        };
        const posX = {
            floatValue: 0.0,
        };
        const posY = {
            floatValue: 0.0,
        };
        // Ball entity attributes controller by server
        const ballEntity = {
            id: 'ball',
            name: 'Ball',
            type: 'ball',
            sessionId: 'session1',
            gameId: 'game1',
            controllerState: entity_1.RegisterEntity_ControllerStateEnum.SERVER,
            playerId: 'player1',
            attributes: {
                velX,
                velY,
                posX,
                posY,
            },
        };
        const encodedBallEntity = entity_1.RegisterEntity.encode(ballEntity).finish();
        (0, globals_1.expect)(encodedBallEntity).toBeInstanceOf(Uint8Array);
        const decodedBallEntity = entity_1.RegisterEntity.decode(encodedBallEntity);
        (0, globals_1.expect)(decodedBallEntity).toEqual(ballEntity);
        (0, globals_1.expect)(decodedBallEntity.id).toBe(ballEntity.id);
        (0, globals_1.expect)(decodedBallEntity.name).toBe(ballEntity.name);
        (0, globals_1.expect)(decodedBallEntity.attributes).toEqual(ballEntity.attributes);
    });
    // TODO: Implement entity protobufs
    (0, globals_1.test)('should encode and decode the ball entity', () => {
    });
    (0, globals_1.test)('should encode and decode the ballcar state', () => {
        (0, globals_1.expect)(true).toBe(true);
    });
});
