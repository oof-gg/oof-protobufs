// source: v1/std/responses.proto
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

var v1_api_game_game_pb = require('../../v1/api/game/game_pb.js');
goog.object.extend(proto, v1_api_game_game_pb);
goog.exportSymbol('proto.v1.std.PaginatedResponse', null, global);
goog.exportSymbol('proto.v1.std.PaginatedResponse.DataCase', null, global);
goog.exportSymbol('proto.v1.std.PaginationMetadata', null, global);
goog.exportSymbol('proto.v1.std.StandardResponse', null, global);
goog.exportSymbol('proto.v1.std.StandardResponse.DataCase', null, global);
goog.exportSymbol('proto.v1.std.Status', null, global);
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
proto.v1.std.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.std.Status.repeatedFields_, null);
};
goog.inherits(proto.v1.std.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.std.Status.displayName = 'proto.v1.std.Status';
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
proto.v1.std.StandardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.std.StandardResponse.oneofGroups_);
};
goog.inherits(proto.v1.std.StandardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.std.StandardResponse.displayName = 'proto.v1.std.StandardResponse';
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
proto.v1.std.PaginationMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.std.PaginationMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.std.PaginationMetadata.displayName = 'proto.v1.std.PaginationMetadata';
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
proto.v1.std.PaginatedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.v1.std.PaginatedResponse.oneofGroups_);
};
goog.inherits(proto.v1.std.PaginatedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.std.PaginatedResponse.displayName = 'proto.v1.std.PaginatedResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.std.Status.repeatedFields_ = [3];



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
proto.v1.std.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.std.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.std.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.std.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
code: jspb.Message.getFieldWithDefault(msg, 1, 0),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
detailsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.v1.std.Status}
 */
proto.v1.std.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.std.Status;
  return proto.v1.std.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.std.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.std.Status}
 */
proto.v1.std.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDetails(value);
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
proto.v1.std.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.std.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.std.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.std.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.v1.std.Status.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.std.Status} returns this
 */
proto.v1.std.Status.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.v1.std.Status.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.std.Status} returns this
 */
proto.v1.std.Status.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string details = 3;
 * @return {!Array<string>}
 */
proto.v1.std.Status.prototype.getDetailsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.v1.std.Status} returns this
 */
proto.v1.std.Status.prototype.setDetailsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.v1.std.Status} returns this
 */
proto.v1.std.Status.prototype.addDetails = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.std.Status} returns this
 */
proto.v1.std.Status.prototype.clearDetailsList = function() {
  return this.setDetailsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.std.StandardResponse.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.v1.std.StandardResponse.DataCase = {
  DATA_NOT_SET: 0,
  SINGLE_GAME: 4,
  GAMES: 5
};

/**
 * @return {proto.v1.std.StandardResponse.DataCase}
 */
proto.v1.std.StandardResponse.prototype.getDataCase = function() {
  return /** @type {proto.v1.std.StandardResponse.DataCase} */(jspb.Message.computeOneofCase(this, proto.v1.std.StandardResponse.oneofGroups_[0]));
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
proto.v1.std.StandardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.std.StandardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.std.StandardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.std.StandardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
code: jspb.Message.getFieldWithDefault(msg, 1, 0),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
error: (f = msg.getError()) && proto.v1.std.Status.toObject(includeInstance, f),
singleGame: (f = msg.getSingleGame()) && v1_api_game_game_pb.Game.toObject(includeInstance, f),
games: (f = msg.getGames()) && v1_api_game_game_pb.Games.toObject(includeInstance, f)
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
 * @return {!proto.v1.std.StandardResponse}
 */
proto.v1.std.StandardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.std.StandardResponse;
  return proto.v1.std.StandardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.std.StandardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.std.StandardResponse}
 */
proto.v1.std.StandardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.v1.std.Status;
      reader.readMessage(value,proto.v1.std.Status.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 4:
      var value = new v1_api_game_game_pb.Game;
      reader.readMessage(value,v1_api_game_game_pb.Game.deserializeBinaryFromReader);
      msg.setSingleGame(value);
      break;
    case 5:
      var value = new v1_api_game_game_pb.Games;
      reader.readMessage(value,v1_api_game_game_pb.Games.deserializeBinaryFromReader);
      msg.setGames(value);
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
proto.v1.std.StandardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.std.StandardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.std.StandardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.std.StandardResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.std.Status.serializeBinaryToWriter
    );
  }
  f = message.getSingleGame();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      v1_api_game_game_pb.Game.serializeBinaryToWriter
    );
  }
  f = message.getGames();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      v1_api_game_game_pb.Games.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.v1.std.StandardResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.std.StandardResponse} returns this
 */
proto.v1.std.StandardResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.v1.std.StandardResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.std.StandardResponse} returns this
 */
proto.v1.std.StandardResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Status error = 3;
 * @return {?proto.v1.std.Status}
 */
proto.v1.std.StandardResponse.prototype.getError = function() {
  return /** @type{?proto.v1.std.Status} */ (
    jspb.Message.getWrapperField(this, proto.v1.std.Status, 3));
};


/**
 * @param {?proto.v1.std.Status|undefined} value
 * @return {!proto.v1.std.StandardResponse} returns this
*/
proto.v1.std.StandardResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.std.StandardResponse} returns this
 */
proto.v1.std.StandardResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.StandardResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional v1.api.game.Game single_game = 4;
 * @return {?proto.v1.api.game.Game}
 */
proto.v1.std.StandardResponse.prototype.getSingleGame = function() {
  return /** @type{?proto.v1.api.game.Game} */ (
    jspb.Message.getWrapperField(this, v1_api_game_game_pb.Game, 4));
};


/**
 * @param {?proto.v1.api.game.Game|undefined} value
 * @return {!proto.v1.std.StandardResponse} returns this
*/
proto.v1.std.StandardResponse.prototype.setSingleGame = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.v1.std.StandardResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.std.StandardResponse} returns this
 */
proto.v1.std.StandardResponse.prototype.clearSingleGame = function() {
  return this.setSingleGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.StandardResponse.prototype.hasSingleGame = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional v1.api.game.Games games = 5;
 * @return {?proto.v1.api.game.Games}
 */
proto.v1.std.StandardResponse.prototype.getGames = function() {
  return /** @type{?proto.v1.api.game.Games} */ (
    jspb.Message.getWrapperField(this, v1_api_game_game_pb.Games, 5));
};


/**
 * @param {?proto.v1.api.game.Games|undefined} value
 * @return {!proto.v1.std.StandardResponse} returns this
*/
proto.v1.std.StandardResponse.prototype.setGames = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.v1.std.StandardResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.std.StandardResponse} returns this
 */
proto.v1.std.StandardResponse.prototype.clearGames = function() {
  return this.setGames(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.StandardResponse.prototype.hasGames = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.v1.std.PaginationMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.std.PaginationMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.std.PaginationMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.std.PaginationMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
pageSize: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
prevPageToken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
nextPageToken: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.v1.std.PaginationMetadata}
 */
proto.v1.std.PaginationMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.std.PaginationMetadata;
  return proto.v1.std.PaginationMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.std.PaginationMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.std.PaginationMetadata}
 */
proto.v1.std.PaginationMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrevPageToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.v1.std.PaginationMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.std.PaginationMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.std.PaginationMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.std.PaginationMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.v1.std.PaginationMetadata.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.std.PaginationMetadata} returns this
 */
proto.v1.std.PaginationMetadata.prototype.setPageSize = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.std.PaginationMetadata} returns this
 */
proto.v1.std.PaginationMetadata.prototype.clearPageSize = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.PaginationMetadata.prototype.hasPageSize = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string prev_page_token = 2;
 * @return {string}
 */
proto.v1.std.PaginationMetadata.prototype.getPrevPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.std.PaginationMetadata} returns this
 */
proto.v1.std.PaginationMetadata.prototype.setPrevPageToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.std.PaginationMetadata} returns this
 */
proto.v1.std.PaginationMetadata.prototype.clearPrevPageToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.PaginationMetadata.prototype.hasPrevPageToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.v1.std.PaginationMetadata.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.std.PaginationMetadata} returns this
 */
proto.v1.std.PaginationMetadata.prototype.setNextPageToken = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.v1.std.PaginationMetadata} returns this
 */
proto.v1.std.PaginationMetadata.prototype.clearNextPageToken = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.PaginationMetadata.prototype.hasNextPageToken = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.v1.std.PaginatedResponse.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.v1.std.PaginatedResponse.DataCase = {
  DATA_NOT_SET: 0,
  SINGLE_GAME: 5,
  GAMES: 6
};

/**
 * @return {proto.v1.std.PaginatedResponse.DataCase}
 */
proto.v1.std.PaginatedResponse.prototype.getDataCase = function() {
  return /** @type {proto.v1.std.PaginatedResponse.DataCase} */(jspb.Message.computeOneofCase(this, proto.v1.std.PaginatedResponse.oneofGroups_[0]));
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
proto.v1.std.PaginatedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.std.PaginatedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.std.PaginatedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.std.PaginatedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
code: jspb.Message.getFieldWithDefault(msg, 1, 0),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
error: (f = msg.getError()) && proto.v1.std.Status.toObject(includeInstance, f),
pagination: (f = msg.getPagination()) && proto.v1.std.PaginationMetadata.toObject(includeInstance, f),
singleGame: (f = msg.getSingleGame()) && v1_api_game_game_pb.Game.toObject(includeInstance, f),
games: (f = msg.getGames()) && v1_api_game_game_pb.Games.toObject(includeInstance, f)
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
 * @return {!proto.v1.std.PaginatedResponse}
 */
proto.v1.std.PaginatedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.std.PaginatedResponse;
  return proto.v1.std.PaginatedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.std.PaginatedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.std.PaginatedResponse}
 */
proto.v1.std.PaginatedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.v1.std.Status;
      reader.readMessage(value,proto.v1.std.Status.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 4:
      var value = new proto.v1.std.PaginationMetadata;
      reader.readMessage(value,proto.v1.std.PaginationMetadata.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 5:
      var value = new v1_api_game_game_pb.Game;
      reader.readMessage(value,v1_api_game_game_pb.Game.deserializeBinaryFromReader);
      msg.setSingleGame(value);
      break;
    case 6:
      var value = new v1_api_game_game_pb.Games;
      reader.readMessage(value,v1_api_game_game_pb.Games.deserializeBinaryFromReader);
      msg.setGames(value);
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
proto.v1.std.PaginatedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.std.PaginatedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.std.PaginatedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.std.PaginatedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.std.Status.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.std.PaginationMetadata.serializeBinaryToWriter
    );
  }
  f = message.getSingleGame();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      v1_api_game_game_pb.Game.serializeBinaryToWriter
    );
  }
  f = message.getGames();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      v1_api_game_game_pb.Games.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.v1.std.PaginatedResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.std.PaginatedResponse} returns this
 */
proto.v1.std.PaginatedResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.v1.std.PaginatedResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.std.PaginatedResponse} returns this
 */
proto.v1.std.PaginatedResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Status error = 3;
 * @return {?proto.v1.std.Status}
 */
proto.v1.std.PaginatedResponse.prototype.getError = function() {
  return /** @type{?proto.v1.std.Status} */ (
    jspb.Message.getWrapperField(this, proto.v1.std.Status, 3));
};


/**
 * @param {?proto.v1.std.Status|undefined} value
 * @return {!proto.v1.std.PaginatedResponse} returns this
*/
proto.v1.std.PaginatedResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.std.PaginatedResponse} returns this
 */
proto.v1.std.PaginatedResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.PaginatedResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PaginationMetadata pagination = 4;
 * @return {?proto.v1.std.PaginationMetadata}
 */
proto.v1.std.PaginatedResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.std.PaginationMetadata} */ (
    jspb.Message.getWrapperField(this, proto.v1.std.PaginationMetadata, 4));
};


/**
 * @param {?proto.v1.std.PaginationMetadata|undefined} value
 * @return {!proto.v1.std.PaginatedResponse} returns this
*/
proto.v1.std.PaginatedResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.std.PaginatedResponse} returns this
 */
proto.v1.std.PaginatedResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.PaginatedResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional v1.api.game.Game single_game = 5;
 * @return {?proto.v1.api.game.Game}
 */
proto.v1.std.PaginatedResponse.prototype.getSingleGame = function() {
  return /** @type{?proto.v1.api.game.Game} */ (
    jspb.Message.getWrapperField(this, v1_api_game_game_pb.Game, 5));
};


/**
 * @param {?proto.v1.api.game.Game|undefined} value
 * @return {!proto.v1.std.PaginatedResponse} returns this
*/
proto.v1.std.PaginatedResponse.prototype.setSingleGame = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.v1.std.PaginatedResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.std.PaginatedResponse} returns this
 */
proto.v1.std.PaginatedResponse.prototype.clearSingleGame = function() {
  return this.setSingleGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.PaginatedResponse.prototype.hasSingleGame = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional v1.api.game.Games games = 6;
 * @return {?proto.v1.api.game.Games}
 */
proto.v1.std.PaginatedResponse.prototype.getGames = function() {
  return /** @type{?proto.v1.api.game.Games} */ (
    jspb.Message.getWrapperField(this, v1_api_game_game_pb.Games, 6));
};


/**
 * @param {?proto.v1.api.game.Games|undefined} value
 * @return {!proto.v1.std.PaginatedResponse} returns this
*/
proto.v1.std.PaginatedResponse.prototype.setGames = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.v1.std.PaginatedResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.std.PaginatedResponse} returns this
 */
proto.v1.std.PaginatedResponse.prototype.clearGames = function() {
  return this.setGames(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.std.PaginatedResponse.prototype.hasGames = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.v1.std);
