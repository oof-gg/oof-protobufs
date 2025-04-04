import * as jspb from 'google-protobuf'

import * as v1_api_global_event_pb from '../../../v1/api/global/event_pb'; // proto import: "v1/api/global/event.proto"
import * as v1_api_game_event_pb from '../../../v1/api/game/event_pb'; // proto import: "v1/api/game/event.proto"
import * as v1_api_player_action_pb from '../../../v1/api/player/action_pb'; // proto import: "v1/api/player/action.proto"
import * as v1_std_responses_pb from '../../../v1/std/responses_pb'; // proto import: "v1/std/responses.proto"


export class WebSocketMessage extends jspb.Message {
  getGlobalEvent(): v1_api_global_event_pb.GlobalEvent | undefined;
  setGlobalEvent(value?: v1_api_global_event_pb.GlobalEvent): WebSocketMessage;
  hasGlobalEvent(): boolean;
  clearGlobalEvent(): WebSocketMessage;

  getGameEvent(): v1_api_game_event_pb.GameEvent | undefined;
  setGameEvent(value?: v1_api_game_event_pb.GameEvent): WebSocketMessage;
  hasGameEvent(): boolean;
  clearGameEvent(): WebSocketMessage;

  getPlayerAction(): v1_api_player_action_pb.PlayerAction | undefined;
  setPlayerAction(value?: v1_api_player_action_pb.PlayerAction): WebSocketMessage;
  hasPlayerAction(): boolean;
  clearPlayerAction(): WebSocketMessage;

  getResponse(): v1_std_responses_pb.StandardResponse | undefined;
  setResponse(value?: v1_std_responses_pb.StandardResponse): WebSocketMessage;
  hasResponse(): boolean;
  clearResponse(): WebSocketMessage;

  getPayloadCase(): WebSocketMessage.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebSocketMessage.AsObject;
  static toObject(includeInstance: boolean, msg: WebSocketMessage): WebSocketMessage.AsObject;
  static serializeBinaryToWriter(message: WebSocketMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebSocketMessage;
  static deserializeBinaryFromReader(message: WebSocketMessage, reader: jspb.BinaryReader): WebSocketMessage;
}

export namespace WebSocketMessage {
  export type AsObject = {
    globalEvent?: v1_api_global_event_pb.GlobalEvent.AsObject,
    gameEvent?: v1_api_game_event_pb.GameEvent.AsObject,
    playerAction?: v1_api_player_action_pb.PlayerAction.AsObject,
    response?: v1_std_responses_pb.StandardResponse.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    GLOBAL_EVENT = 1,
    GAME_EVENT = 2,
    PLAYER_ACTION = 3,
    RESPONSE = 4,
  }
}

