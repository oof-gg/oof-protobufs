# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [api/auth/auth_service.proto](#api_auth_auth_service-proto)
    - [LoginRequest](#api-auth-LoginRequest)
    - [LoginResponse](#api-auth-LoginResponse)
    - [RefreshTokenRequest](#api-auth-RefreshTokenRequest)
    - [RefreshTokenResponse](#api-auth-RefreshTokenResponse)
    - [ValidateTokenRequest](#api-auth-ValidateTokenRequest)
    - [ValidateTokenResponse](#api-auth-ValidateTokenResponse)
  
    - [AuthService](#api-auth-AuthService)
  
- [api/game/entity.proto](#api_game_entity-proto)
    - [Entities](#api-game-Entities)
    - [Entity](#api-game-Entity)
    - [Entity.AttributesEntry](#api-game-Entity-AttributesEntry)
    - [EntityAttribute](#api-game-EntityAttribute)
    - [EntityCreate](#api-game-EntityCreate)
    - [EntityCreate.AttributesEntry](#api-game-EntityCreate-AttributesEntry)
    - [EntityDelete](#api-game-EntityDelete)
    - [EntityGet](#api-game-EntityGet)
    - [EntityUpdate](#api-game-EntityUpdate)
  
    - [Entity.ControllerStateEnum](#api-game-Entity-ControllerStateEnum)
    - [EntityCreate.ControllerStateEnum](#api-game-EntityCreate-ControllerStateEnum)
  
- [api/game/event.proto](#api_game_event-proto)
    - [GameEvent](#api-game-GameEvent)
    - [GameEvent.AttributesEntry](#api-game-GameEvent-AttributesEntry)
    - [GameEvent.EventAttribute](#api-game-GameEvent-EventAttribute)
  
    - [GameEvent.EventType](#api-game-GameEvent-EventType)
  
- [api/game/game_service.proto](#api_game_game_service-proto)
    - [Game](#api-game-Game)
  
- [api/game/instance.proto](#api_game_instance-proto)
    - [AuthConfig](#api-game-AuthConfig)
    - [AuthConfig.ConfigEntry](#api-game-AuthConfig-ConfigEntry)
    - [Instance](#api-game-Instance)
    - [InstanceCommandMessage](#api-game-InstanceCommandMessage)
    - [InstanceNotification](#api-game-InstanceNotification)
  
    - [InstanceCommandEnum](#api-game-InstanceCommandEnum)
    - [InstanceStateEnum](#api-game-InstanceStateEnum)
  
- [api/game/session.proto](#api_game_session-proto)
    - [Session](#api-game-Session)
    - [Session.AttributesEntry](#api-game-Session-AttributesEntry)
    - [Session.GameAttribute](#api-game-Session-GameAttribute)
    - [SessionDelete](#api-game-SessionDelete)
    - [SessionGet](#api-game-SessionGet)
    - [Sessions](#api-game-Sessions)
  
    - [Session.GameState](#api-game-Session-GameState)
  
- [api/global/event.proto](#api_global_event-proto)
    - [GlobalEvent](#api-global-GlobalEvent)
    - [GlobalEvent.AttributesEntry](#api-global-GlobalEvent-AttributesEntry)
    - [GlobalEvent.EventAttribute](#api-global-GlobalEvent-EventAttribute)
  
    - [GlobalEvent.EventType](#api-global-GlobalEvent-EventType)
  
- [api/global/global_service.proto](#api_global_global_service-proto)
    - [GlobalService](#api-global-GlobalService)
  
- [api/global/join_leave.proto](#api_global_join_leave-proto)
    - [JoinLeaveGame](#api-global-JoinLeaveGame)
  
    - [JoinLeaveGame.Action](#api-global-JoinLeaveGame-Action)
    - [RegionEnum](#api-global-RegionEnum)
  
- [api/global/time.proto](#api_global_time-proto)
    - [GlobalTime](#api-global-GlobalTime)
  
- [api/player/action.proto](#api_player_action-proto)
    - [PlayerAction](#api-player-PlayerAction)
    - [PlayerAction.ActionEntry](#api-player-PlayerAction-ActionEntry)
    - [PlayerAction.PlayerAction](#api-player-PlayerAction-PlayerAction)
    - [PlayerAction.Position](#api-player-PlayerAction-Position)
    - [PlayerAction.Velocity](#api-player-PlayerAction-Velocity)
  
    - [PlayerAction.ActionType](#api-player-PlayerAction-ActionType)
  
- [api/player/player.proto](#api_player_player-proto)
    - [Player](#api-player-Player)
    - [PlayerCreate](#api-player-PlayerCreate)
    - [PlayerGet](#api-player-PlayerGet)
    - [PlayerUpdate](#api-player-PlayerUpdate)
    - [Players](#api-player-Players)
  
    - [PlayerStatus](#api-player-PlayerStatus)
    - [PlayerType](#api-player-PlayerType)
  
- [api/player/player_service.proto](#api_player_player_service-proto)
    - [PlayerService](#api-player-PlayerService)
  
- [api/player/state.proto](#api_player_state-proto)
    - [State](#api-player-State)
    - [State.AttributesEntry](#api-player-State-AttributesEntry)
    - [State.PlayerAttribute](#api-player-State-PlayerAttribute)
  
    - [State.PlayerState](#api-player-State-PlayerState)
  
- [std/responses.proto](#std_responses-proto)
    - [Error](#std-Error)
    - [PaginatedResponse](#std-PaginatedResponse)
    - [PaginationMetadata](#std-PaginationMetadata)
    - [StandardResponse](#std-StandardResponse)
    - [Success](#std-Success)
  
- [Scalar Value Types](#scalar-value-types)



<a name="api_auth_auth_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/auth/auth_service.proto



<a name="api-auth-LoginRequest"></a>

### LoginRequest
Request for Login RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  | Username or email |
| password | [string](#string) |  | User&#39;s password |






<a name="api-auth-LoginResponse"></a>

### LoginResponse
Response for Login RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  | JWT Access Token |
| refresh_token | [string](#string) |  | Refresh Token |
| expires_in | [int64](#int64) |  | Token expiration time in seconds |






<a name="api-auth-RefreshTokenRequest"></a>

### RefreshTokenRequest
Request for RefreshToken RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refresh_token | [string](#string) |  | Refresh Token |






<a name="api-auth-RefreshTokenResponse"></a>

### RefreshTokenResponse
Response for RefreshToken RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  | New JWT Access Token |
| expires_in | [int64](#int64) |  | Token expiration time in seconds |






<a name="api-auth-ValidateTokenRequest"></a>

### ValidateTokenRequest
Request for ValidateToken RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  | JWT to validate |






<a name="api-auth-ValidateTokenResponse"></a>

### ValidateTokenResponse
Response for ValidateToken RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| is_valid | [bool](#bool) |  | Indicates if the token is valid |
| user_id | [string](#string) |  | ID of the authenticated user |
| role | [string](#string) |  | Role of the user (e.g., admin, user) |





 

 

 


<a name="api-auth-AuthService"></a>

### AuthService
Service definition for authentication

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#api-auth-LoginRequest) | [LoginResponse](#api-auth-LoginResponse) | User login RPC to generate an access token |
| ValidateToken | [ValidateTokenRequest](#api-auth-ValidateTokenRequest) | [ValidateTokenResponse](#api-auth-ValidateTokenResponse) | RPC to validate an existing token |
| RefreshToken | [RefreshTokenRequest](#api-auth-RefreshTokenRequest) | [RefreshTokenResponse](#api-auth-RefreshTokenResponse) | RPC to refresh an access token using a refresh token |

 



<a name="api_game_entity-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/game/entity.proto



<a name="api-game-Entities"></a>

### Entities
The Entities message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| entities | [Entity](#api-game-Entity) | repeated | The entities |






<a name="api-game-Entity"></a>

### Entity
The Entity message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The name of the entity, e.g. &#34;ball&#34; |
| type | [string](#string) |  | The type of the entity, e.g. &#34;object&#34; |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |
| attributes | [Entity.AttributesEntry](#api-game-Entity-AttributesEntry) | repeated | The attributes of the entity |
| controller | [Entity.ControllerStateEnum](#api-game-Entity-ControllerStateEnum) |  | The controller of the entity |
| player_id | [string](#string) | optional | The owner of the entity |
| data | [string](#string) | optional | Can be any JSON data |






<a name="api-game-Entity-AttributesEntry"></a>

### Entity.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [EntityAttribute](#api-game-EntityAttribute) |  |  |






<a name="api-game-EntityAttribute"></a>

### EntityAttribute
The EntityAttribute message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |






<a name="api-game-EntityCreate"></a>

### EntityCreate
The RegisterEntity message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The name of the entity, e.g. &#34;ball&#34; |
| type | [string](#string) |  | The type of the entity, e.g. &#34;object&#34; |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |
| attributes | [EntityCreate.AttributesEntry](#api-game-EntityCreate-AttributesEntry) | repeated | The attributes of the entity |
| controller | [EntityCreate.ControllerStateEnum](#api-game-EntityCreate-ControllerStateEnum) |  | The controller of the entity |
| player_id | [string](#string) | optional | The owner of the entity |
| data | [string](#string) | optional | Can be any JSON data |






<a name="api-game-EntityCreate-AttributesEntry"></a>

### EntityCreate.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [EntityAttribute](#api-game-EntityAttribute) |  |  |






<a name="api-game-EntityDelete"></a>

### EntityDelete
The EntityDelete message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |






<a name="api-game-EntityGet"></a>

### EntityGet
The EntityCreate message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |






<a name="api-game-EntityUpdate"></a>

### EntityUpdate
The EntityUpdate message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |
| attributes | [EntityAttribute](#api-game-EntityAttribute) | repeated | The attributes of the entity |





 


<a name="api-game-Entity-ControllerStateEnum"></a>

### Entity.ControllerStateEnum


| Name | Number | Description |
| ---- | ------ | ----------- |
| SERVER | 0 |  |
| PLAYER | 1 |  |



<a name="api-game-EntityCreate-ControllerStateEnum"></a>

### EntityCreate.ControllerStateEnum


| Name | Number | Description |
| ---- | ------ | ----------- |
| SERVER | 0 |  |
| PLAYER | 1 |  |


 

 

 



<a name="api_game_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/game/event.proto



<a name="api-game-GameEvent"></a>

### GameEvent
Game Events, message can trigger API calls or other events


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Unique identifier for the event to prevent duplicates, and to be able to retrieve the event from the server if necessary |
| event_name | [string](#string) |  |  |
| timestamp | [int64](#int64) |  |  |
| game_id | [string](#string) | optional |  |
| player_id | [string](#string) | optional |  |
| session_id | [string](#string) | optional |  |
| team_id | [string](#string) | optional |  |
| attributes | [GameEvent.AttributesEntry](#api-game-GameEvent-AttributesEntry) | repeated |  |
| type | [GameEvent.EventType](#api-game-GameEvent-EventType) |  |  |






<a name="api-game-GameEvent-AttributesEntry"></a>

### GameEvent.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [GameEvent.EventAttribute](#api-game-GameEvent-EventAttribute) |  |  |






<a name="api-game-GameEvent-EventAttribute"></a>

### GameEvent.EventAttribute



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="api-game-GameEvent-EventType"></a>

### GameEvent.EventType
CUSTOM - Custom events

| Name | Number | Description |
| ---- | ------ | ----------- |
| CUSTOM | 0 |  |


 

 

 



<a name="api_game_game_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/game/game_service.proto


 

 

 


<a name="api-game-Game"></a>

### Game


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSession | [Session](#api-game-Session) | [.std.StandardResponse](#std-StandardResponse) |  |
| GetSession | [SessionGet](#api-game-SessionGet) | [Sessions](#api-game-Sessions) |  |
| UpdateSession | [Session](#api-game-Session) | [.std.StandardResponse](#std-StandardResponse) |  |
| DeleteSession | [SessionDelete](#api-game-SessionDelete) | [.std.StandardResponse](#std-StandardResponse) |  |
| CreateEntity | [EntityCreate](#api-game-EntityCreate) | [.std.StandardResponse](#std-StandardResponse) | TODO: Adjust payloads for protos |
| GetEntity | [EntityGet](#api-game-EntityGet) | [Entities](#api-game-Entities) |  |
| UpdateEntity | [EntityUpdate](#api-game-EntityUpdate) | [.std.StandardResponse](#std-StandardResponse) |  |
| DeleteEntity | [EntityDelete](#api-game-EntityDelete) | [.std.StandardResponse](#std-StandardResponse) |  |
| StreamEvents | [GameEvent](#api-game-GameEvent) stream | [GameEvent](#api-game-GameEvent) stream | Stream events from the game |

 



<a name="api_game_instance-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/game/instance.proto



<a name="api-game-AuthConfig"></a>

### AuthConfig
Represents the authentication and configuration for the game instance


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [string](#string) |  |  |
| config | [AuthConfig.ConfigEntry](#api-game-AuthConfig-ConfigEntry) | repeated |  |






<a name="api-game-AuthConfig-ConfigEntry"></a>

### AuthConfig.ConfigEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="api-game-Instance"></a>

### Instance
Represents the game instance (between App and Game), can be used to trigger operations to run in parent App from child Game container over messages. This would be the local state of the game instance last received.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [InstanceStateEnum](#api-game-InstanceStateEnum) |  |  |
| game_id | [string](#string) | optional |  |
| player_id | [string](#string) | optional |  |
| data | [string](#string) | optional |  |






<a name="api-game-InstanceCommandMessage"></a>

### InstanceCommandMessage
Represents the command to be sent to the game instance that is currently running (not the game state data itself)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [InstanceCommandEnum](#api-game-InstanceCommandEnum) |  |  |
| game_id | [string](#string) | optional |  |
| player_id | [string](#string) | optional |  |
| data | [string](#string) | optional |  |
| auth_config | [AuthConfig](#api-game-AuthConfig) | optional |  |






<a name="api-game-InstanceNotification"></a>

### InstanceNotification
Incoming message from the game instance to the app instance (between Game and App)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [InstanceStateEnum](#api-game-InstanceStateEnum) |  |  |
| game_id | [string](#string) | optional |  |
| player_id | [string](#string) | optional |  |
| data | [string](#string) | optional |  |





 


<a name="api-game-InstanceCommandEnum"></a>

### InstanceCommandEnum
Available commands to be sent to the game instance

| Name | Number | Description |
| ---- | ------ | ----------- |
| START | 0 |  |
| PAUSE | 1 |  |
| RESUME | 2 |  |
| STOP | 3 |  |
| ABORT | 4 |  |
| SHUTDOWN | 5 |  |



<a name="api-game-InstanceStateEnum"></a>

### InstanceStateEnum
Represents the state of the game instance that is currently running

| Name | Number | Description |
| ---- | ------ | ----------- |
| INITIALIZING | 0 |  |
| RUNNING | 1 |  |
| PAUSED | 2 |  |
| CRASHED | 3 |  |
| ABORTED | 4 |  |
| SHUTTING_DOWN | 5 |  |
| STOPPED | 6 |  |


 

 

 



<a name="api_game_session-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/game/session.proto



<a name="api-game-Session"></a>

### Session
Represents a game session, can be used to store game state and attributes such as scores, times, players, and active in-game configurations.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| player_ids | [string](#string) | repeated | Players in the session (can be used to store player state and attributes) / Optional: This can be used to store player state and attributes, but not recommended for large player counts. |
| state | [Session.GameState](#api-game-Session-GameState) |  | Game state as defined by the GameState enum |
| attributes | [Session.AttributesEntry](#api-game-Session-AttributesEntry) | repeated | Game attributes as a map of string to GameAttribute

Game attributes |






<a name="api-game-Session-AttributesEntry"></a>

### Session.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [Session.GameAttribute](#api-game-Session-GameAttribute) |  |  |






<a name="api-game-Session-GameAttribute"></a>

### Session.GameAttribute
TODO: Check if this is the best way to represent game attributes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |






<a name="api-game-SessionDelete"></a>

### SessionDelete



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |






<a name="api-game-SessionGet"></a>

### SessionGet



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| game_id | [string](#string) | optional |  |






<a name="api-game-Sessions"></a>

### Sessions



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sessions | [Session](#api-game-Session) | repeated |  |





 


<a name="api-game-Session-GameState"></a>

### Session.GameState


| Name | Number | Description |
| ---- | ------ | ----------- |
| CREATED | 0 |  |
| WAITING | 1 |  |
| STARTED | 2 |  |
| FINISHED | 3 |  |


 

 

 



<a name="api_global_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/global/event.proto



<a name="api-global-GlobalEvent"></a>

### GlobalEvent
Global Events, message can trigger API calls or other events


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Unique identifier for the event to prevent duplicates, and to be able to retrieve the event from the server if necessary |
| event_name | [string](#string) |  | Event name |
| timestamp | [int64](#int64) |  | Unix timestamp in milliseconds to synchronize time across clients |
| game_id | [string](#string) | optional | Game ID |
| player_id | [string](#string) | optional | Player ID |
| team_id | [string](#string) | optional | Team ID |
| attributes | [GlobalEvent.AttributesEntry](#api-global-GlobalEvent-AttributesEntry) | repeated | Can be a key-value pair and the values can be string, int, float, or bool |
| type | [GlobalEvent.EventType](#api-global-GlobalEvent-EventType) |  | Enum for event types |






<a name="api-global-GlobalEvent-AttributesEntry"></a>

### GlobalEvent.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [GlobalEvent.EventAttribute](#api-global-GlobalEvent-EventAttribute) |  |  |






<a name="api-global-GlobalEvent-EventAttribute"></a>

### GlobalEvent.EventAttribute
Message for event attributes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="api-global-GlobalEvent-EventType"></a>

### GlobalEvent.EventType
Enum for event types

| Name | Number | Description |
| ---- | ------ | ----------- |
| CUSTOM | 0 | Custom events |
| ANNOUNCEMENT | 1 | Announcements |
| ALERT | 2 | Alerts |
| EVENT | 3 | Events |
| REQUEST | 4 | Requests |


 

 

 



<a name="api_global_global_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/global/global_service.proto


 

 

 


<a name="api-global-GlobalService"></a>

### GlobalService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| JoinLeave | [JoinLeaveGame](#api-global-JoinLeaveGame) | [.std.StandardResponse](#std-StandardResponse) |  |
| StreamEvents | [GlobalEvent](#api-global-GlobalEvent) stream | [GlobalEvent](#api-global-GlobalEvent) stream |  |

 



<a name="api_global_join_leave-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/global/join_leave.proto



<a name="api-global-JoinLeaveGame"></a>

### JoinLeaveGame
Message joining or leaving a game


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| action | [JoinLeaveGame.Action](#api-global-JoinLeaveGame-Action) |  |  |
| team_id | [string](#string) | optional |  |
| session_id | [string](#string) | optional |  |
| region | [RegionEnum](#api-global-RegionEnum) | optional |  |





 


<a name="api-global-JoinLeaveGame-Action"></a>

### JoinLeaveGame.Action


| Name | Number | Description |
| ---- | ------ | ----------- |
| JOIN | 0 |  |
| LEAVE | 1 |  |



<a name="api-global-RegionEnum"></a>

### RegionEnum


| Name | Number | Description |
| ---- | ------ | ----------- |
| REGION_UNSPECIFIED | 0 | Default unspecified region |
| NA_EAST | 1 | Americas

North America East |
| NA_WEST | 2 | North America West |
| SA | 3 | South America (all countries) |
| EU_WEST | 4 | Europe

Western Europe |
| EU_CENTRAL | 5 | Central Europe |
| EU_NORTH | 6 | Northern Europe |
| AS_EAST | 7 | Asia

East Asia |
| AS_SE | 8 | Southeast Asia |
| AS_SOUTH | 9 | South Asia |
| OC | 10 | Oceania

Oceania (e.g., Australia, New Zealand) |
| MENA | 11 | MENA (Middle East &amp; North Africa)

Middle East and North Africa |
| AFRICA | 12 | Sub-Saharan Africa

Sub-Saharan Africa |
| GLOBAL | 13 | Global

Cross-region/global servers |


 

 

 



<a name="api_global_time-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/global/time.proto



<a name="api-global-GlobalTime"></a>

### GlobalTime
Message to synchronize time across clients


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [int64](#int64) |  | Unix timestamp in milliseconds to synchronize time across clients |
| hash | [string](#string) |  | Hash of the timestamp to pass to the server |





 

 

 

 



<a name="api_player_action-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/player/action.proto



<a name="api-player-PlayerAction"></a>

### PlayerAction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  | Unique identifier of the player |
| session_id | [string](#string) |  | Unique identifier of the session |
| game_id | [string](#string) |  | Unique identifier of the game |
| type | [PlayerAction.ActionType](#api-player-PlayerAction-ActionType) |  | Type of action |
| position | [PlayerAction.Position](#api-player-PlayerAction-Position) | optional | Position of the player (optional) |
| velocity | [PlayerAction.Velocity](#api-player-PlayerAction-Velocity) | optional | Velocity of the player (optional) |
| action | [PlayerAction.ActionEntry](#api-player-PlayerAction-ActionEntry) | repeated | Custom actions the player can take

Flexible data structure for custom actions |
| timestamp | [int64](#int64) |  |  |






<a name="api-player-PlayerAction-ActionEntry"></a>

### PlayerAction.ActionEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [PlayerAction.PlayerAction](#api-player-PlayerAction-PlayerAction) |  |  |






<a name="api-player-PlayerAction-PlayerAction"></a>

### PlayerAction.PlayerAction
Custom actions the player can take


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |






<a name="api-player-PlayerAction-Position"></a>

### PlayerAction.Position
Position of the player


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) |  |  |
| y | [float](#float) |  |  |
| z | [float](#float) |  |  |






<a name="api-player-PlayerAction-Velocity"></a>

### PlayerAction.Velocity
Velocity of the player


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) |  |  |
| y | [float](#float) |  |  |
| z | [float](#float) |  |  |





 


<a name="api-player-PlayerAction-ActionType"></a>

### PlayerAction.ActionType
Type of action

| Name | Number | Description |
| ---- | ------ | ----------- |
| CUSTOM | 0 | Custom action |
| MOVE | 1 | Move action |
| JUMP | 2 | Jump action |
| SHOOT | 3 | Shoot action |
| PICKUP | 4 | Pickup action |
| DROP | 5 | Drop action |
| USE | 6 | Use action |
| INTERACT | 7 | Interact action |


 

 

 



<a name="api_player_player-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/player/player.proto



<a name="api-player-Player"></a>

### Player



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) | optional |  |
| team | [string](#string) | optional |  |
| score | [int32](#int32) |  |  |
| type | [PlayerType](#api-player-PlayerType) |  |  |
| status | [PlayerStatus](#api-player-PlayerStatus) |  |  |
| role | [string](#string) | optional | Role of the player in the game |






<a name="api-player-PlayerCreate"></a>

### PlayerCreate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  |  |
| email | [string](#string) | optional |  |
| team | [string](#string) | optional |  |
| score | [int32](#int32) |  |  |
| type | [PlayerType](#api-player-PlayerType) |  |  |
| status | [PlayerStatus](#api-player-PlayerStatus) |  |  |
| role | [string](#string) | optional |  |






<a name="api-player-PlayerGet"></a>

### PlayerGet



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |






<a name="api-player-PlayerUpdate"></a>

### PlayerUpdate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| team | [string](#string) | optional |  |
| type | [PlayerType](#api-player-PlayerType) | optional |  |
| status | [PlayerStatus](#api-player-PlayerStatus) | optional |  |
| role | [string](#string) | optional |  |






<a name="api-player-Players"></a>

### Players



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| players | [Player](#api-player-Player) | repeated |  |





 


<a name="api-player-PlayerStatus"></a>

### PlayerStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| ACTIVE | 0 | default |
| INACTIVE | 1 |  |



<a name="api-player-PlayerType"></a>

### PlayerType


| Name | Number | Description |
| ---- | ------ | ----------- |
| HUMAN | 0 | default |
| AI | 1 |  |


 

 

 



<a name="api_player_player_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/player/player_service.proto


 

 

 


<a name="api-player-PlayerService"></a>

### PlayerService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreatePlayer | [Player](#api-player-Player) | [Player](#api-player-Player) |  |
| GetPlayer | [PlayerGet](#api-player-PlayerGet) | [Players](#api-player-Players) |  |
| UpdatePlayer | [PlayerUpdate](#api-player-PlayerUpdate) | [Player](#api-player-Player) |  |
| StreamEvents | [PlayerAction](#api-player-PlayerAction) stream | [PlayerAction](#api-player-PlayerAction) stream |  |

 



<a name="api_player_state-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/player/state.proto



<a name="api-player-State"></a>

### State



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  |  |
| session_id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| state | [State.PlayerState](#api-player-State-PlayerState) |  |  |
| attributes | [State.AttributesEntry](#api-player-State-AttributesEntry) | repeated |  |
| timestamp | [int64](#int64) |  |  |






<a name="api-player-State-AttributesEntry"></a>

### State.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [State.PlayerAttribute](#api-player-State-PlayerAttribute) |  |  |






<a name="api-player-State-PlayerAttribute"></a>

### State.PlayerAttribute



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="api-player-State-PlayerState"></a>

### State.PlayerState


| Name | Number | Description |
| ---- | ------ | ----------- |
| WAITING | 0 |  |
| PLAYING | 1 |  |
| FINISHED | 2 |  |


 

 

 



<a name="std_responses-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## std/responses.proto



<a name="std-Error"></a>

### Error
A standard error message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [int32](#int32) |  | Error code (e.g., HTTP status code or custom code) |
| message | [string](#string) |  | Human-readable error message |
| details | [string](#string) |  | Optional details about the error |






<a name="std-PaginatedResponse"></a>

### PaginatedResponse
A paginated response wrapper.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [PaginationMetadata](#std-PaginationMetadata) |  | Pagination metadata |
| items | [google.protobuf.Any](#google-protobuf-Any) | repeated | List of items in this page |






<a name="std-PaginationMetadata"></a>

### PaginationMetadata
Metadata for paginated responses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  | Current page number |
| page_size | [int32](#int32) |  | Number of items per page |
| total_items | [int64](#int64) |  | Total number of items |
| total_pages | [int32](#int32) |  | Total number of pages |






<a name="std-StandardResponse"></a>

### StandardResponse
A standardized response wrapper for any data.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [Success](#std-Success) |  | Success message |
| error | [Error](#std-Error) |  | Error message |






<a name="std-Success"></a>

### Success
A standard success response.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | Human-readable success message |
| details | [string](#string) |  | Optional details about the success |





 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

