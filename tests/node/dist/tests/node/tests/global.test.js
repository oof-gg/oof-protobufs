"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const event_1 = require("@protos/global/event");
const join_leave_1 = require("@protos/global/join_leave");
const time_1 = require("@protos/global/time");
(0, globals_1.describe)('global module', () => {
    (0, globals_1.test)('should encode and decode the global event object', () => {
        var _a, _b;
        (0, globals_1.expect)(event_1.GlobalEvent).toBeDefined();
        const globalAttribute = {
            stringValue: 'value'
        };
        const globalEvent = {
            id: 'event1',
            eventName: 'event1',
            timestamp: new Date().getTime(),
            gameId: 'game1',
            playerId: 'player1',
            teamId: 'red',
            attributes: {
                globalAttribute
            },
            type: event_1.GlobalEvent_EventType.CUSTOM
        };
        const encodedGlobalEvent = event_1.GlobalEvent.encode(globalEvent).finish();
        (0, globals_1.expect)(encodedGlobalEvent).toBeInstanceOf(Uint8Array);
        const decodedGlobalEvent = event_1.GlobalEvent.decode(encodedGlobalEvent);
        (0, globals_1.expect)(decodedGlobalEvent).toEqual(globalEvent);
        (0, globals_1.expect)(decodedGlobalEvent.id).toBe(globalEvent.id);
        (0, globals_1.expect)(decodedGlobalEvent.eventName).toBe(globalEvent.eventName);
        (0, globals_1.expect)(decodedGlobalEvent.timestamp).toBe(globalEvent.timestamp);
        (0, globals_1.expect)(decodedGlobalEvent.gameId).toBe(globalEvent.gameId);
        (0, globals_1.expect)(decodedGlobalEvent.playerId).toBe(globalEvent.playerId);
        (0, globals_1.expect)(decodedGlobalEvent.teamId).toBe(globalEvent.teamId);
        (0, globals_1.expect)((_a = decodedGlobalEvent.attributes.attribute) === null || _a === void 0 ? void 0 : _a.stringValue).toBe((_b = globalEvent.attributes.attribute) === null || _b === void 0 ? void 0 : _b.stringValue);
        (0, globals_1.expect)(decodedGlobalEvent.type).toBe(globalEvent.type);
    });
    (0, globals_1.test)('should encode and decode the join leave game object', () => {
        (0, globals_1.expect)(join_leave_1.JoinLeaveGame).toBeDefined();
    });
    (0, globals_1.test)('should encode and decode the global time object', () => {
        (0, globals_1.expect)(time_1.GlobalTime).toBeDefined();
    });
});
