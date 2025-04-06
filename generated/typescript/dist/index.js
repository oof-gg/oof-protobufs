"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.std_responses = exports.api_common_instance_service = exports.api_common_regions = exports.api_player_state = exports.api_player_player_service = exports.api_player_player = exports.api_player_action = exports.api_global_time = exports.api_global_global_service = exports.api_global_event = exports.api_game_session = exports.api_game_join_leave = exports.api_game_instance = exports.api_game_game_service = exports.api_game_event = exports.api_game_entity = exports.api_auth_auth_service = void 0;
const api_auth_auth_service = require("./v1/api/auth/auth_service");
exports.api_auth_auth_service = api_auth_auth_service;
const api_game_entity = require("./v1/api/game/entity");
exports.api_game_entity = api_game_entity;
const api_game_event = require("./v1/api/game/event");
exports.api_game_event = api_game_event;
const api_game_game_service = require("./v1/api/common/game_service");
exports.api_game_game_service = api_game_game_service;
const api_game_instance = require("./v1/api/game/instance");
exports.api_game_instance = api_game_instance;
const api_game_join_leave = require("./v1/api/game/join_leave");
exports.api_game_join_leave = api_game_join_leave;
const api_game_session = require("./v1/api/game/session");
exports.api_game_session = api_game_session;
const api_global_event = require("./v1/api/global/event");
exports.api_global_event = api_global_event;
const api_global_global_service = require("./v1/api/common/global_service");
exports.api_global_global_service = api_global_global_service;
const api_global_time = require("./v1/api/global/time");
exports.api_global_time = api_global_time;
const api_player_action = require("./v1/api/player/action");
exports.api_player_action = api_player_action;
const api_player_player = require("./v1/api/player/player");
exports.api_player_player = api_player_player;
const api_player_player_service = require("./v1/api/common/player_service");
exports.api_player_player_service = api_player_player_service;
const api_player_state = require("./v1/api/player/state");
exports.api_player_state = api_player_state;
const api_common_regions = require("./v1/api/common/regions");
exports.api_common_regions = api_common_regions;
const std_responses = require("./v1/std/responses");
exports.std_responses = std_responses;
const api_common_instance_service = require("./v1/api/common/instance_service");
exports.api_common_instance_service = api_common_instance_service;
