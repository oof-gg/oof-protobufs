import * as jspb from 'google-protobuf'
import { v1_api_player_action_pb } from 'index'



export class PlayerAction extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): PlayerAction;

  getSessionId(): string;
  setSessionId(value: string): PlayerAction;

  getGameId(): string;
  setGameId(value: string): PlayerAction;

  getType(): PlayerAction.ActionType;
  setType(value: PlayerAction.ActionType): PlayerAction;

  getPosition(): PlayerAction.Position | undefined;
  setPosition(value?: PlayerAction.Position): PlayerAction;
  hasPosition(): boolean;
  clearPosition(): PlayerAction;

  getVelocity(): PlayerAction.Velocity | undefined;
  setVelocity(value?: PlayerAction.Velocity): PlayerAction;
  hasVelocity(): boolean;
  clearVelocity(): PlayerAction;

  getActionMap(): jspb.Map<string, PlayerAction.PlayerAction>;
  clearActionMap(): PlayerAction;

  getTimestamp(): number;
  setTimestamp(value: number): PlayerAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerAction.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerAction): PlayerAction.AsObject;
  static serializeBinaryToWriter(message: PlayerAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerAction;
  static deserializeBinaryFromReader(message: PlayerAction, reader: jspb.BinaryReader): PlayerAction;
}

export namespace PlayerAction {
  export type AsObject = {
    playerId: string,
    sessionId: string,
    gameId: string,
    type: v1_api_player_action_pb.PlayerAction.ActionType,
    position?: v1_api_player_action_pb.PlayerAction.Position.AsObject,
    velocity?: v1_api_player_action_pb.PlayerAction.Velocity.AsObject,
    actionMap: Array<[string, v1_api_player_action_pb.PlayerAction.PlayerAction.AsObject]>,
    timestamp: number,
  }

  export class Position extends jspb.Message {
    getX(): number;
    setX(value: number): Position;

    getY(): number;
    setY(value: number): Position;

    getZ(): number;
    setZ(value: number): Position;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
  }

  export namespace Position {
    export type AsObject = {
      x: number,
      y: number,
      z: number,
    }
  }


  export class Velocity extends jspb.Message {
    getX(): number;
    setX(value: number): Velocity;

    getY(): number;
    setY(value: number): Velocity;

    getZ(): number;
    setZ(value: number): Velocity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Velocity.AsObject;
    static toObject(includeInstance: boolean, msg: Velocity): Velocity.AsObject;
    static serializeBinaryToWriter(message: Velocity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Velocity;
    static deserializeBinaryFromReader(message: Velocity, reader: jspb.BinaryReader): Velocity;
  }

  export namespace Velocity {
    export type AsObject = {
      x: number,
      y: number,
      z: number,
    }
  }


  export class PlayerAction extends jspb.Message {
    getStringValue(): string;
    setStringValue(value: string): PlayerAction;

    getIntValue(): number;
    setIntValue(value: number): PlayerAction;

    getFloatValue(): number;
    setFloatValue(value: number): PlayerAction;

    getBoolValue(): boolean;
    setBoolValue(value: boolean): PlayerAction;

    getValueCase(): PlayerAction.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerAction.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerAction): PlayerAction.AsObject;
    static serializeBinaryToWriter(message: PlayerAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerAction;
    static deserializeBinaryFromReader(message: PlayerAction, reader: jspb.BinaryReader): PlayerAction;
  }

  export namespace PlayerAction {
    export type AsObject = {
      stringValue: string,
      intValue: number,
      floatValue: number,
      boolValue: boolean,
    }

    export enum ValueCase { 
      VALUE_NOT_SET = 0,
      STRING_VALUE = 2,
      INT_VALUE = 3,
      FLOAT_VALUE = 4,
      BOOL_VALUE = 5,
    }
  }


  export enum ActionType { 
    CUSTOM = 0,
    MOVE = 1,
    JUMP = 2,
    SHOOT = 3,
    PICKUP = 4,
    DROP = 5,
    USE = 6,
    INTERACT = 7,
  }

  export enum PositionCase { 
    _POSITION_NOT_SET = 0,
    POSITION = 5,
  }

  export enum VelocityCase { 
    _VELOCITY_NOT_SET = 0,
    VELOCITY = 6,
  }
}

