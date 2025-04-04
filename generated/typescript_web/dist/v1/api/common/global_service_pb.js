// source: v1/api/common/global_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var v1_api_global_event_pb = require('../../../v1/api/global/event_pb.js');
goog.object.extend(proto, v1_api_global_event_pb);
var v1_api_game_event_pb = require('../../../v1/api/game/event_pb.js');
goog.object.extend(proto, v1_api_game_event_pb);
var v1_api_player_action_pb = require('../../../v1/api/player/action_pb.js');
goog.object.extend(proto, v1_api_player_action_pb);
var v1_std_responses_pb = require('../../../v1/std/responses_pb.js');
goog.object.extend(proto, v1_std_responses_pb);
goog.exportSymbol('proto.v1.api.common.WebSocketMessage', null, global);
goog.exportSymbol('proto.v1.api.common.WebSocketMessage.PayloadCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.api.common.WebSocketMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.api.common.WebSocketMessage.oneofGroups_);
};
goog.inherits(proto.v1.api.common.WebSocketMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.api.common.WebSocketMessage.displayName = 'proto.v1.api.common.WebSocketMessage';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.api.common.WebSocketMessage.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.v1.api.common.WebSocketMessage.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  GLOBAL_EVENT: 1,
  GAME_EVENT: 2,
  PLAYER_ACTION: 3,
  RESPONSE: 4
};

/**
 * @return {proto.v1.api.common.WebSocketMessage.PayloadCase}
 */
proto.v1.api.common.WebSocketMessage.prototype.getPayloadCase = function() {
  return /** @type {proto.v1.api.common.WebSocketMessage.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.v1.api.common.WebSocketMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.api.common.WebSocketMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.api.common.WebSocketMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.api.common.WebSocketMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.api.common.WebSocketMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    globalEvent: (f = msg.getGlobalEvent()) && v1_api_global_event_pb.GlobalEvent.toObject(includeInstance, f),
    gameEvent: (f = msg.getGameEvent()) && v1_api_game_event_pb.GameEvent.toObject(includeInstance, f),
    playerAction: (f = msg.getPlayerAction()) && v1_api_player_action_pb.PlayerAction.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && v1_std_responses_pb.StandardResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.api.common.WebSocketMessage}
 */
proto.v1.api.common.WebSocketMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.api.common.WebSocketMessage;
  return proto.v1.api.common.WebSocketMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.api.common.WebSocketMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.api.common.WebSocketMessage}
 */
proto.v1.api.common.WebSocketMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new v1_api_global_event_pb.GlobalEvent;
      reader.readMessage(value,v1_api_global_event_pb.GlobalEvent.deserializeBinaryFromReader);
      msg.setGlobalEvent(value);
      break;
    case 2:
      var value = new v1_api_game_event_pb.GameEvent;
      reader.readMessage(value,v1_api_game_event_pb.GameEvent.deserializeBinaryFromReader);
      msg.setGameEvent(value);
      break;
    case 3:
      var value = new v1_api_player_action_pb.PlayerAction;
      reader.readMessage(value,v1_api_player_action_pb.PlayerAction.deserializeBinaryFromReader);
      msg.setPlayerAction(value);
      break;
    case 4:
      var value = new v1_std_responses_pb.StandardResponse;
      reader.readMessage(value,v1_std_responses_pb.StandardResponse.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.api.common.WebSocketMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.api.common.WebSocketMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.api.common.WebSocketMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.api.common.WebSocketMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGlobalEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      v1_api_global_event_pb.GlobalEvent.serializeBinaryToWriter
    );
  }
  f = message.getGameEvent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      v1_api_game_event_pb.GameEvent.serializeBinaryToWriter
    );
  }
  f = message.getPlayerAction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      v1_api_player_action_pb.PlayerAction.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      v1_std_responses_pb.StandardResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional v1.api.global.GlobalEvent global_event = 1;
 * @return {?proto.v1.api.global.GlobalEvent}
 */
proto.v1.api.common.WebSocketMessage.prototype.getGlobalEvent = function() {
  return /** @type{?proto.v1.api.global.GlobalEvent} */ (
    jspb.Message.getWrapperField(this, v1_api_global_event_pb.GlobalEvent, 1));
};


/**
 * @param {?proto.v1.api.global.GlobalEvent|undefined} value
 * @return {!proto.v1.api.common.WebSocketMessage} returns this
*/
proto.v1.api.common.WebSocketMessage.prototype.setGlobalEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.v1.api.common.WebSocketMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.api.common.WebSocketMessage} returns this
 */
proto.v1.api.common.WebSocketMessage.prototype.clearGlobalEvent = function() {
  return this.setGlobalEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.common.WebSocketMessage.prototype.hasGlobalEvent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional v1.api.game.GameEvent game_event = 2;
 * @return {?proto.v1.api.game.GameEvent}
 */
proto.v1.api.common.WebSocketMessage.prototype.getGameEvent = function() {
  return /** @type{?proto.v1.api.game.GameEvent} */ (
    jspb.Message.getWrapperField(this, v1_api_game_event_pb.GameEvent, 2));
};


/**
 * @param {?proto.v1.api.game.GameEvent|undefined} value
 * @return {!proto.v1.api.common.WebSocketMessage} returns this
*/
proto.v1.api.common.WebSocketMessage.prototype.setGameEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.v1.api.common.WebSocketMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.api.common.WebSocketMessage} returns this
 */
proto.v1.api.common.WebSocketMessage.prototype.clearGameEvent = function() {
  return this.setGameEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.common.WebSocketMessage.prototype.hasGameEvent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional v1.api.player.PlayerAction player_action = 3;
 * @return {?proto.v1.api.player.PlayerAction}
 */
proto.v1.api.common.WebSocketMessage.prototype.getPlayerAction = function() {
  return /** @type{?proto.v1.api.player.PlayerAction} */ (
    jspb.Message.getWrapperField(this, v1_api_player_action_pb.PlayerAction, 3));
};


/**
 * @param {?proto.v1.api.player.PlayerAction|undefined} value
 * @return {!proto.v1.api.common.WebSocketMessage} returns this
*/
proto.v1.api.common.WebSocketMessage.prototype.setPlayerAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.v1.api.common.WebSocketMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.api.common.WebSocketMessage} returns this
 */
proto.v1.api.common.WebSocketMessage.prototype.clearPlayerAction = function() {
  return this.setPlayerAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.common.WebSocketMessage.prototype.hasPlayerAction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional v1.std.StandardResponse response = 4;
 * @return {?proto.v1.std.StandardResponse}
 */
proto.v1.api.common.WebSocketMessage.prototype.getResponse = function() {
  return /** @type{?proto.v1.std.StandardResponse} */ (
    jspb.Message.getWrapperField(this, v1_std_responses_pb.StandardResponse, 4));
};


/**
 * @param {?proto.v1.std.StandardResponse|undefined} value
 * @return {!proto.v1.api.common.WebSocketMessage} returns this
*/
proto.v1.api.common.WebSocketMessage.prototype.setResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.v1.api.common.WebSocketMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.api.common.WebSocketMessage} returns this
 */
proto.v1.api.common.WebSocketMessage.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.common.WebSocketMessage.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.v1.api.common);
