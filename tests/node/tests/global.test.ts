import {describe, expect, test} from '@jest/globals';
import { GlobalEvent, GlobalEvent_EventType } from '@protos/global/event';
import { JoinLeaveGame } from '@protos/global/join_leave';
import { GlobalTime } from '@protos/global/time';

describe('global module', () => {
  test('should encode and decode the global event object', () => {

    expect(GlobalEvent).toBeDefined();

    const globalEvent: GlobalEvent = {
      id: 'event1',
      eventName: 'event1',
      timestamp: new Date().getTime(),
      gameId: 'game1',
      playerId: 'player1',
      teamId: 'red',
      data: JSON.stringify({foo: 'bar'}),
      type: GlobalEvent_EventType.CUSTOM
    }

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
    expect(decodedGlobalEvent.data).toBe(globalEvent.data);
    expect(decodedGlobalEvent.type).toBe(globalEvent.type);
  });

  test('should encode and decode the join leave game object', () => {
    expect(JoinLeaveGame).toBeDefined();
  });

  test('should encode and decode the global time object', () => {
    expect(GlobalTime).toBeDefined();
  });
});