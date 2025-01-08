// source: v1/api/player/state.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.v1.api.player.State', null, global);
goog.exportSymbol('proto.v1.api.player.State.PlayerAttribute', null, global);
goog.exportSymbol('proto.v1.api.player.State.PlayerAttribute.ValueCase', null, global);
goog.exportSymbol('proto.v1.api.player.State.PlayerState', null, global);
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
proto.v1.api.player.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.api.player.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.api.player.State.displayName = 'proto.v1.api.player.State';
}
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
proto.v1.api.player.State.PlayerAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.api.player.State.PlayerAttribute.oneofGroups_);
};
goog.inherits(proto.v1.api.player.State.PlayerAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.api.player.State.PlayerAttribute.displayName = 'proto.v1.api.player.State.PlayerAttribute';
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
proto.v1.api.player.State.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.api.player.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.api.player.State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.api.player.State.toObject = function(includeInstance, msg) {
  var f, obj = {
playerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
gameId: jspb.Message.getFieldWithDefault(msg, 3, ""),
state: jspb.Message.getFieldWithDefault(msg, 4, 0),
attributesMap: (f = msg.getAttributesMap()) ? f.toObject(includeInstance, proto.v1.api.player.State.PlayerAttribute.toObject) : [],
timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.v1.api.player.State}
 */
proto.v1.api.player.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.api.player.State;
  return proto.v1.api.player.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.api.player.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.api.player.State}
 */
proto.v1.api.player.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameId(value);
      break;
    case 4:
      var value = /** @type {!proto.v1.api.player.State.PlayerState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = msg.getAttributesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.v1.api.player.State.PlayerAttribute.deserializeBinaryFromReader, "", new proto.v1.api.player.State.PlayerAttribute());
         });
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
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
proto.v1.api.player.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.api.player.State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.api.player.State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.api.player.State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGameId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAttributesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.v1.api.player.State.PlayerAttribute.serializeBinaryToWriter);
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.v1.api.player.State.PlayerState = {
  WAITING: 0,
  PLAYING: 1,
  FINISHED: 2
};


/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.api.player.State.PlayerAttribute.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.v1.api.player.State.PlayerAttribute.ValueCase = {
  VALUE_NOT_SET: 0,
  STRING_VALUE: 2,
  INT_VALUE: 3,
  FLOAT_VALUE: 4,
  BOOL_VALUE: 5
};

/**
 * @return {proto.v1.api.player.State.PlayerAttribute.ValueCase}
 */
proto.v1.api.player.State.PlayerAttribute.prototype.getValueCase = function() {
  return /** @type {proto.v1.api.player.State.PlayerAttribute.ValueCase} */(jspb.Message.computeOneofCase(this, proto.v1.api.player.State.PlayerAttribute.oneofGroups_[0]));
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
proto.v1.api.player.State.PlayerAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.api.player.State.PlayerAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.api.player.State.PlayerAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.api.player.State.PlayerAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
stringValue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
intValue: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
floatValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
boolValue: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.v1.api.player.State.PlayerAttribute}
 */
proto.v1.api.player.State.PlayerAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.api.player.State.PlayerAttribute;
  return proto.v1.api.player.State.PlayerAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.api.player.State.PlayerAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.api.player.State.PlayerAttribute}
 */
proto.v1.api.player.State.PlayerAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloatValue(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
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
proto.v1.api.player.State.PlayerAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.api.player.State.PlayerAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.api.player.State.PlayerAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.api.player.State.PlayerAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string string_value = 2;
 * @return {string}
 */
proto.v1.api.player.State.PlayerAttribute.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.api.player.State.PlayerAttribute} returns this
 */
proto.v1.api.player.State.PlayerAttribute.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.v1.api.player.State.PlayerAttribute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.api.player.State.PlayerAttribute} returns this
 */
proto.v1.api.player.State.PlayerAttribute.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 2, proto.v1.api.player.State.PlayerAttribute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.player.State.PlayerAttribute.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 int_value = 3;
 * @return {number}
 */
proto.v1.api.player.State.PlayerAttribute.prototype.getIntValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.api.player.State.PlayerAttribute} returns this
 */
proto.v1.api.player.State.PlayerAttribute.prototype.setIntValue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.v1.api.player.State.PlayerAttribute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.api.player.State.PlayerAttribute} returns this
 */
proto.v1.api.player.State.PlayerAttribute.prototype.clearIntValue = function() {
  return jspb.Message.setOneofField(this, 3, proto.v1.api.player.State.PlayerAttribute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.player.State.PlayerAttribute.prototype.hasIntValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float float_value = 4;
 * @return {number}
 */
proto.v1.api.player.State.PlayerAttribute.prototype.getFloatValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.v1.api.player.State.PlayerAttribute} returns this
 */
proto.v1.api.player.State.PlayerAttribute.prototype.setFloatValue = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.v1.api.player.State.PlayerAttribute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.api.player.State.PlayerAttribute} returns this
 */
proto.v1.api.player.State.PlayerAttribute.prototype.clearFloatValue = function() {
  return jspb.Message.setOneofField(this, 4, proto.v1.api.player.State.PlayerAttribute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.player.State.PlayerAttribute.prototype.hasFloatValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool bool_value = 5;
 * @return {boolean}
 */
proto.v1.api.player.State.PlayerAttribute.prototype.getBoolValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.api.player.State.PlayerAttribute} returns this
 */
proto.v1.api.player.State.PlayerAttribute.prototype.setBoolValue = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.v1.api.player.State.PlayerAttribute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.api.player.State.PlayerAttribute} returns this
 */
proto.v1.api.player.State.PlayerAttribute.prototype.clearBoolValue = function() {
  return jspb.Message.setOneofField(this, 5, proto.v1.api.player.State.PlayerAttribute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.api.player.State.PlayerAttribute.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string player_id = 1;
 * @return {string}
 */
proto.v1.api.player.State.prototype.getPlayerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.api.player.State} returns this
 */
proto.v1.api.player.State.prototype.setPlayerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.v1.api.player.State.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.api.player.State} returns this
 */
proto.v1.api.player.State.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string game_id = 3;
 * @return {string}
 */
proto.v1.api.player.State.prototype.getGameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.api.player.State} returns this
 */
proto.v1.api.player.State.prototype.setGameId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional PlayerState state = 4;
 * @return {!proto.v1.api.player.State.PlayerState}
 */
proto.v1.api.player.State.prototype.getState = function() {
  return /** @type {!proto.v1.api.player.State.PlayerState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.v1.api.player.State.PlayerState} value
 * @return {!proto.v1.api.player.State} returns this
 */
proto.v1.api.player.State.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * map<string, PlayerAttribute> attributes = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.v1.api.player.State.PlayerAttribute>}
 */
proto.v1.api.player.State.prototype.getAttributesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.v1.api.player.State.PlayerAttribute>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.v1.api.player.State.PlayerAttribute));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.v1.api.player.State} returns this
 */
proto.v1.api.player.State.prototype.clearAttributesMap = function() {
  this.getAttributesMap().clear();
  return this;
};


/**
 * optional int64 timestamp = 6;
 * @return {number}
 */
proto.v1.api.player.State.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.api.player.State} returns this
 */
proto.v1.api.player.State.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.v1.api.player);