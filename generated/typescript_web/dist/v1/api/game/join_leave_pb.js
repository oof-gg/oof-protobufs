// source: v1/api/game/join_leave.proto
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

var v1_std_regions_pb = require('../../../v1/std/regions_pb.js');
goog.object.extend(proto, v1_std_regions_pb);
goog.exportSymbol('proto.v1.api.game.JoinLeaveGame', null, global);
goog.exportSymbol('proto.v1.api.game.JoinLeaveGame.Action', null, global);
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
proto.v1.api.game.JoinLeaveGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.api.game.JoinLeaveGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.api.game.JoinLeaveGame.displayName = 'proto.v1.api.game.JoinLeaveGame';
}



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
proto.v1.api.game.JoinLeaveGame.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.api.game.JoinLeaveGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.api.game.JoinLeaveGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.api.game.JoinLeaveGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gameId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    action: jspb.Message.getFieldWithDefault(msg, 3, 0),
    teamId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sessionId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    region: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.v1.api.game.JoinLeaveGame}
 */
proto.v1.api.game.JoinLeaveGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.api.game.JoinLeaveGame;
  return proto.v1.api.game.JoinLeaveGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.api.game.JoinLeaveGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.api.game.JoinLeaveGame}
 */
proto.v1.api.game.JoinLeaveGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameId(value);
      break;
    case 3:
      var value = /** @type {!proto.v1.api.game.JoinLeaveGame.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 6:
      var value = /** @type {!proto.v1.std.RegionEnum} */ (reader.readEnum());
      msg.setRegion(value);
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
proto.v1.api.game.JoinLeaveGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.api.game.JoinLeaveGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.api.game.JoinLeaveGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.api.game.JoinLeaveGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGameId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {!proto.v1.std.RegionEnum} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.v1.api.game.JoinLeaveGame.Action = {
  JOIN: 0,
  LEAVE: 1
};

/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.v1.api.game.JoinLeaveGame.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.api.game.JoinLeaveGame} returns this
 */
proto.v1.api.game.JoinLeaveGame.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string game_id = 2;
 * @return {string}
 */
proto.v1.api.game.JoinLeaveGame.prototype.getGameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.api.game.JoinLeaveGame} returns this
 */
proto.v1.api.game.JoinLeaveGame.prototype.setGameId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Action action = 3;
 * @return {!proto.v1.api.game.JoinLeaveGame.Action}
 */
proto.v1.api.game.JoinLeaveGame.prototype.getAction = function() {
  return /** @type {!proto.v1.api.game.JoinLeaveGame.Action} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.v1.api.game.JoinLeaveGame.Action} value
 * @return {!proto.v1.api.game.JoinLeaveGame} returns this
 */
proto.v1.api.game.JoinLeaveGame.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string team_id = 4;
 * @return {string}
 */
proto.v1.api.game.JoinLeaveGame.prototype.getTeamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.api.game.JoinLeaveGame} returns this
 */
proto.v1.api.game.JoinLeaveGame.prototype.setTeamId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.api.game.JoinLeaveGame} returns this
 */
proto.v1.api.game.JoinLeaveGame.prototype.clearTeamId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.game.JoinLeaveGame.prototype.hasTeamId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string session_id = 5;
 * @return {string}
 */
proto.v1.api.game.JoinLeaveGame.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.api.game.JoinLeaveGame} returns this
 */
proto.v1.api.game.JoinLeaveGame.prototype.setSessionId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.api.game.JoinLeaveGame} returns this
 */
proto.v1.api.game.JoinLeaveGame.prototype.clearSessionId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.game.JoinLeaveGame.prototype.hasSessionId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional v1.std.RegionEnum region = 6;
 * @return {!proto.v1.std.RegionEnum}
 */
proto.v1.api.game.JoinLeaveGame.prototype.getRegion = function() {
  return /** @type {!proto.v1.std.RegionEnum} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.v1.std.RegionEnum} value
 * @return {!proto.v1.api.game.JoinLeaveGame} returns this
 */
proto.v1.api.game.JoinLeaveGame.prototype.setRegion = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.api.game.JoinLeaveGame} returns this
 */
proto.v1.api.game.JoinLeaveGame.prototype.clearRegion = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.game.JoinLeaveGame.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.v1.api.game);
