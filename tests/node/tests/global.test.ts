import { describe, expect, test } from '@jest/globals';
import { GlobalEvent, GlobalEvent_EventType, GlobalEvent_AttributesEntry } from '@protos/v1/api/global/event';
import { GlobalTime } from '@protos/v1/api/global/time';

describe('global module', () => {
  test('should encode and decode the global event object', () => {
    expect(GlobalEvent).toBeDefined();

    const globalAttribute = {
      stringValue: 'value',
    };

    const globalEvent: GlobalEvent = {
      id: 'event1',
      eventName: 'event1',
      timestamp: new Date().getTime(),
      gameId: 'game1',
      playerId: 'player1',
      teamId: 'red',
      attributes: { key: globalAttribute },
      type: GlobalEvent_EventType.CUSTOM,
    };

    const encodedGlobalEvent = GlobalEvent.encode(globalEvent).finish();
    expect(encodedGlobalEvent).toBeInstanceOf(Uint8Array);

    const decodedGlobalEvent = GlobalEvent.decode(encodedGlobalEvent);
    expect(decodedGlobalEvent).toEqual(globalEvent);

    expect(decodedGlobalEvent.id).toBe(globalEvent.id);
    expect(decodedGlobalEvent.eventName).toBe(globalEvent.eventName);
    expect(decodedGlobalEvent.timestamp).toBe(globalEvent.timestamp);
    expect(decodedGlobalEvent.gameId).toBe(globalEvent.gameId);
    expect(decodedGlobalEvent.playerId).toBe(globalEvent.playerId);
    expect(decodedGlobalEvent.teamId).toBe(globalEvent.teamId);
    expect(decodedGlobalEvent.attributes).toEqual(globalEvent.attributes);
    expect(decodedGlobalEvent.type).toBe(globalEvent.type);
  });

  test('should encode and decode the global time object', () => {
    expect(GlobalTime).toBeDefined();

    const globalTime: GlobalTime = {
      timestamp: new Date().getTime(),
      hash: 'someHashValue', // Add a valid hash value here
    };

    const encodedGlobalTime = GlobalTime.encode(globalTime).finish();
    expect(encodedGlobalTime).toBeInstanceOf(Uint8Array);

    const decodedGlobalTime = GlobalTime.decode(encodedGlobalTime);
    expect(decodedGlobalTime).toEqual(globalTime);

    expect(decodedGlobalTime.timestamp).toBe(globalTime.timestamp);
  });
});