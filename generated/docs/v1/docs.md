# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [v1/api/auth/auth_service.proto](#v1_api_auth_auth_service-proto)
    - [LoginRequest](#v1-api-auth-LoginRequest)
    - [LoginResponse](#v1-api-auth-LoginResponse)
    - [RefreshTokenRequest](#v1-api-auth-RefreshTokenRequest)
    - [RefreshTokenResponse](#v1-api-auth-RefreshTokenResponse)
    - [RegisterRequest](#v1-api-auth-RegisterRequest)
    - [RegisterResponse](#v1-api-auth-RegisterResponse)
    - [ValidateTokenRequest](#v1-api-auth-ValidateTokenRequest)
    - [ValidateTokenResponse](#v1-api-auth-ValidateTokenResponse)
  
    - [AuthService](#v1-api-auth-AuthService)
  
- [v1/api/game/entity.proto](#v1_api_game_entity-proto)
    - [Entities](#v1-api-game-Entities)
    - [Entity](#v1-api-game-Entity)
    - [Entity.AttributesEntry](#v1-api-game-Entity-AttributesEntry)
    - [EntityAttribute](#v1-api-game-EntityAttribute)
    - [EntityCreate](#v1-api-game-EntityCreate)
    - [EntityCreate.AttributesEntry](#v1-api-game-EntityCreate-AttributesEntry)
    - [EntityDelete](#v1-api-game-EntityDelete)
    - [EntityGet](#v1-api-game-EntityGet)
    - [EntityUpdate](#v1-api-game-EntityUpdate)
  
    - [Entity.ControllerStateEnum](#v1-api-game-Entity-ControllerStateEnum)
    - [EntityCreate.ControllerStateEnum](#v1-api-game-EntityCreate-ControllerStateEnum)
  
- [v1/api/game/event.proto](#v1_api_game_event-proto)
    - [GameEvent](#v1-api-game-GameEvent)
    - [GameEvent.AttributesEntry](#v1-api-game-GameEvent-AttributesEntry)
    - [GameEvent.EventAttribute](#v1-api-game-GameEvent-EventAttribute)
  
    - [GameEvent.EventType](#v1-api-game-GameEvent-EventType)
  
- [v1/api/game/game_service.proto](#v1_api_game_game_service-proto)
    - [Game](#v1-api-game-Game)
  
- [v1/api/game/instance.proto](#v1_api_game_instance-proto)
    - [AuthConfig](#v1-api-game-AuthConfig)
    - [AuthConfig.ConfigEntry](#v1-api-game-AuthConfig-ConfigEntry)
    - [Instance](#v1-api-game-Instance)
    - [InstanceCommandMessage](#v1-api-game-InstanceCommandMessage)
    - [InstanceNotification](#v1-api-game-InstanceNotification)
  
    - [InstanceCommandEnum](#v1-api-game-InstanceCommandEnum)
    - [InstanceStateEnum](#v1-api-game-InstanceStateEnum)
  
- [v1/api/game/session.proto](#v1_api_game_session-proto)
    - [GameAttribute](#v1-api-game-GameAttribute)
    - [Session](#v1-api-game-Session)
    - [Session.AttributesEntry](#v1-api-game-Session-AttributesEntry)
    - [SessionCreate](#v1-api-game-SessionCreate)
    - [SessionCreate.AttributesEntry](#v1-api-game-SessionCreate-AttributesEntry)
    - [SessionDelete](#v1-api-game-SessionDelete)
    - [SessionGet](#v1-api-game-SessionGet)
    - [SessionUpdate](#v1-api-game-SessionUpdate)
    - [SessionUpdate.AttributesEntry](#v1-api-game-SessionUpdate-AttributesEntry)
    - [Sessions](#v1-api-game-Sessions)
  
    - [GameState](#v1-api-game-GameState)
  
- [v1/api/global/event.proto](#v1_api_global_event-proto)
    - [GlobalEvent](#v1-api-global-GlobalEvent)
    - [GlobalEvent.AttributesEntry](#v1-api-global-GlobalEvent-AttributesEntry)
    - [GlobalEvent.EventAttribute](#v1-api-global-GlobalEvent-EventAttribute)
  
    - [GlobalEvent.EventType](#v1-api-global-GlobalEvent-EventType)
  
- [v1/api/global/global_service.proto](#v1_api_global_global_service-proto)
    - [GlobalService](#v1-api-global-GlobalService)
  
- [v1/api/global/join_leave.proto](#v1_api_global_join_leave-proto)
    - [JoinLeaveGame](#v1-api-global-JoinLeaveGame)
  
    - [JoinLeaveGame.Action](#v1-api-global-JoinLeaveGame-Action)
    - [RegionEnum](#v1-api-global-RegionEnum)
  
- [v1/api/global/time.proto](#v1_api_global_time-proto)
    - [GlobalTime](#v1-api-global-GlobalTime)
  
- [v1/api/player/action.proto](#v1_api_player_action-proto)
    - [PlayerAction](#v1-api-player-PlayerAction)
    - [PlayerAction.ActionEntry](#v1-api-player-PlayerAction-ActionEntry)
    - [PlayerAction.PlayerAction](#v1-api-player-PlayerAction-PlayerAction)
    - [PlayerAction.Position](#v1-api-player-PlayerAction-Position)
    - [PlayerAction.Velocity](#v1-api-player-PlayerAction-Velocity)
  
    - [PlayerAction.ActionType](#v1-api-player-PlayerAction-ActionType)
  
- [v1/api/player/player.proto](#v1_api_player_player-proto)
    - [Player](#v1-api-player-Player)
    - [PlayerCreate](#v1-api-player-PlayerCreate)
    - [PlayerGet](#v1-api-player-PlayerGet)
    - [PlayerUpdate](#v1-api-player-PlayerUpdate)
    - [Players](#v1-api-player-Players)
  
    - [PlayerStatus](#v1-api-player-PlayerStatus)
    - [PlayerType](#v1-api-player-PlayerType)
  
- [v1/api/player/player_service.proto](#v1_api_player_player_service-proto)
    - [PlayerService](#v1-api-player-PlayerService)
  
- [v1/api/player/state.proto](#v1_api_player_state-proto)
    - [State](#v1-api-player-State)
    - [State.AttributesEntry](#v1-api-player-State-AttributesEntry)
    - [State.PlayerAttribute](#v1-api-player-State-PlayerAttribute)
  
    - [State.PlayerState](#v1-api-player-State-PlayerState)
  
- [v1/std/responses.proto](#v1_std_responses-proto)
    - [Error](#v1-std-Error)
    - [PaginatedResponse](#v1-std-PaginatedResponse)
    - [PaginationMetadata](#v1-std-PaginationMetadata)
    - [StandardResponse](#v1-std-StandardResponse)
    - [Success](#v1-std-Success)
  
- [Scalar Value Types](#scalar-value-types)



<a name="v1_api_auth_auth_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/auth/auth_service.proto



<a name="v1-api-auth-LoginRequest"></a>

### LoginRequest
Request for Login RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  | Username or email |
| password | [string](#string) |  | User&#39;s password |






<a name="v1-api-auth-LoginResponse"></a>

### LoginResponse
Response for Login RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  | JWT Access Token |
| refresh_token | [string](#string) |  | Refresh Token |
| expires_in | [int64](#int64) |  | Token expiration time in seconds |






<a name="v1-api-auth-RefreshTokenRequest"></a>

### RefreshTokenRequest
Request for RefreshToken RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refresh_token | [string](#string) |  | Refresh Token |






<a name="v1-api-auth-RefreshTokenResponse"></a>

### RefreshTokenResponse
Response for RefreshToken RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  | New JWT Access Token |
| refresh_token | [string](#string) |  | New Refresh Token |
| expires_in | [int64](#int64) |  | Token expiration time in seconds |






<a name="v1-api-auth-RegisterRequest"></a>

### RegisterRequest
Request for Register RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  | Username |
| email | [string](#string) |  | Email |
| password | [string](#string) |  | User&#39;s password |






<a name="v1-api-auth-RegisterResponse"></a>

### RegisterResponse
Response for Register RPC with the user ID, access token, refresh token, and expiration time


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  | ID of the registered user |
| access_token | [string](#string) |  | JWT Access Token |
| refresh_token | [string](#string) |  | Refresh Token |
| expires_in | [int64](#int64) |  | Token expiration time in seconds |






<a name="v1-api-auth-ValidateTokenRequest"></a>

### ValidateTokenRequest
Request for ValidateToken RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  | JWT to validate |






<a name="v1-api-auth-ValidateTokenResponse"></a>

### ValidateTokenResponse
Response for ValidateToken RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| is_valid | [bool](#bool) |  | Indicates if the token is valid |
| user_id | [string](#string) |  | ID of the authenticated user |
| role | [string](#string) |  | Role of the user (e.g., admin, user) |





 

 

 


<a name="v1-api-auth-AuthService"></a>

### AuthService
Service definition for authentication

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#v1-api-auth-LoginRequest) | [LoginResponse](#v1-api-auth-LoginResponse) | User login RPC to generate an access token |
| Register | [RegisterRequest](#v1-api-auth-RegisterRequest) | [RegisterResponse](#v1-api-auth-RegisterResponse) | User registration RPC to create a new user |
| ValidateToken | [ValidateTokenRequest](#v1-api-auth-ValidateTokenRequest) | [ValidateTokenResponse](#v1-api-auth-ValidateTokenResponse) | RPC to validate an existing token |
| RefreshToken | [RefreshTokenRequest](#v1-api-auth-RefreshTokenRequest) | [RefreshTokenResponse](#v1-api-auth-RefreshTokenResponse) | RPC to refresh an access token using a refresh token |

 



<a name="v1_api_game_entity-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/game/entity.proto



<a name="v1-api-game-Entities"></a>

### Entities
The Entities message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| entities | [Entity](#v1-api-game-Entity) | repeated | The entities |






<a name="v1-api-game-Entity"></a>

### Entity
The Entity message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The name of the entity, e.g. &#34;ball&#34; |
| type | [string](#string) |  | The type of the entity, e.g. &#34;object&#34; |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |
| attributes | [Entity.AttributesEntry](#v1-api-game-Entity-AttributesEntry) | repeated | The attributes of the entity |
| controller | [Entity.ControllerStateEnum](#v1-api-game-Entity-ControllerStateEnum) |  | The controller of the entity |
| player_id | [string](#string) | optional | The owner of the entity |
| data | [string](#string) | optional | Can be any JSON data |






<a name="v1-api-game-Entity-AttributesEntry"></a>

### Entity.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [EntityAttribute](#v1-api-game-EntityAttribute) |  |  |






<a name="v1-api-game-EntityAttribute"></a>

### EntityAttribute
The EntityAttribute message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |






<a name="v1-api-game-EntityCreate"></a>

### EntityCreate
The RegisterEntity message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The name of the entity, e.g. &#34;ball&#34; |
| type | [string](#string) |  | The type of the entity, e.g. &#34;object&#34; |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |
| attributes | [EntityCreate.AttributesEntry](#v1-api-game-EntityCreate-AttributesEntry) | repeated | The attributes of the entity |
| controller | [EntityCreate.ControllerStateEnum](#v1-api-game-EntityCreate-ControllerStateEnum) |  | The controller of the entity |
| player_id | [string](#string) | optional | The owner of the entity |
| data | [string](#string) | optional | Can be any JSON data |






<a name="v1-api-game-EntityCreate-AttributesEntry"></a>

### EntityCreate.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [EntityAttribute](#v1-api-game-EntityAttribute) |  |  |






<a name="v1-api-game-EntityDelete"></a>

### EntityDelete
The EntityDelete message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |






<a name="v1-api-game-EntityGet"></a>

### EntityGet
The EntityCreate message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |






<a name="v1-api-game-EntityUpdate"></a>

### EntityUpdate
The EntityUpdate message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |
| attributes | [EntityAttribute](#v1-api-game-EntityAttribute) | repeated | The attributes of the entity |





 


<a name="v1-api-game-Entity-ControllerStateEnum"></a>

### Entity.ControllerStateEnum


| Name | Number | Description |
| ---- | ------ | ----------- |
| SERVER | 0 |  |
| PLAYER | 1 |  |



<a name="v1-api-game-EntityCreate-ControllerStateEnum"></a>

### EntityCreate.ControllerStateEnum


| Name | Number | Description |
| ---- | ------ | ----------- |
| SERVER | 0 |  |
| PLAYER | 1 |  |


 

 

 



<a name="v1_api_game_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/game/event.proto



<a name="v1-api-game-GameEvent"></a>

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
| attributes | [GameEvent.AttributesEntry](#v1-api-game-GameEvent-AttributesEntry) | repeated |  |
| type | [GameEvent.EventType](#v1-api-game-GameEvent-EventType) |  |  |






<a name="v1-api-game-GameEvent-AttributesEntry"></a>

### GameEvent.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [GameEvent.EventAttribute](#v1-api-game-GameEvent-EventAttribute) |  |  |






<a name="v1-api-game-GameEvent-EventAttribute"></a>

### GameEvent.EventAttribute



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="v1-api-game-GameEvent-EventType"></a>

### GameEvent.EventType
CUSTOM - Custom events

| Name | Number | Description |
| ---- | ------ | ----------- |
| CUSTOM | 0 |  |


 

 

 



<a name="v1_api_game_game_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/game/game_service.proto


 

 

 


<a name="v1-api-game-Game"></a>

### Game


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSession | [SessionCreate](#v1-api-game-SessionCreate) | [Session](#v1-api-game-Session) |  |
| GetSession | [SessionGet](#v1-api-game-SessionGet) | [Sessions](#v1-api-game-Sessions) |  |
| UpdateSession | [SessionUpdate](#v1-api-game-SessionUpdate) | [Session](#v1-api-game-Session) |  |
| DeleteSession | [SessionDelete](#v1-api-game-SessionDelete) | [.v1.std.StandardResponse](#v1-std-StandardResponse) |  |
| CreateEntity | [EntityCreate](#v1-api-game-EntityCreate) | [Entity](#v1-api-game-Entity) | TODO: Adjust payloads for protos |
| GetEntity | [EntityGet](#v1-api-game-EntityGet) | [Entities](#v1-api-game-Entities) |  |
| UpdateEntity | [EntityUpdate](#v1-api-game-EntityUpdate) | [Entity](#v1-api-game-Entity) |  |
| DeleteEntity | [EntityDelete](#v1-api-game-EntityDelete) | [.v1.std.StandardResponse](#v1-std-StandardResponse) |  |
| StreamEvents | [GameEvent](#v1-api-game-GameEvent) stream | [GameEvent](#v1-api-game-GameEvent) stream | Stream events from the game |

 



<a name="v1_api_game_instance-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/game/instance.proto



<a name="v1-api-game-AuthConfig"></a>

### AuthConfig
Represents the authentication and configuration for the game instance


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [string](#string) |  |  |
| config | [AuthConfig.ConfigEntry](#v1-api-game-AuthConfig-ConfigEntry) | repeated |  |






<a name="v1-api-game-AuthConfig-ConfigEntry"></a>

### AuthConfig.ConfigEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="v1-api-game-Instance"></a>

### Instance
Represents the game instance (between App and Game), can be used to trigger operations to run in parent App from child Game container over messages. This would be the local state of the game instance last received.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [InstanceStateEnum](#v1-api-game-InstanceStateEnum) |  |  |
| game_id | [string](#string) | optional |  |
| player_id | [string](#string) | optional |  |
| data | [string](#string) | optional |  |






<a name="v1-api-game-InstanceCommandMessage"></a>

### InstanceCommandMessage
Represents the command to be sent to the game instance that is currently running (not the game state data itself)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [InstanceCommandEnum](#v1-api-game-InstanceCommandEnum) |  |  |
| game_id | [string](#string) | optional |  |
| player_id | [string](#string) | optional |  |
| data | [string](#string) | optional |  |
| auth_config | [AuthConfig](#v1-api-game-AuthConfig) | optional |  |






<a name="v1-api-game-InstanceNotification"></a>

### InstanceNotification
Incoming message from the game instance to the app instance (between Game and App)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [InstanceStateEnum](#v1-api-game-InstanceStateEnum) |  |  |
| game_id | [string](#string) | optional |  |
| player_id | [string](#string) | optional |  |
| data | [string](#string) | optional |  |





 


<a name="v1-api-game-InstanceCommandEnum"></a>

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



<a name="v1-api-game-InstanceStateEnum"></a>

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


 

 

 



<a name="v1_api_game_session-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/game/session.proto



<a name="v1-api-game-GameAttribute"></a>

### GameAttribute
TODO: Check if this is the best way to represent game attributes
/ Represents a game attribute


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |






<a name="v1-api-game-Session"></a>

### Session
Represents a game session, can be used to store game state and attributes such as scores, times, players, and active in-game configurations.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| player_ids | [string](#string) | repeated | Players in the session (can be used to store player state and attributes) / Optional: This can be used to store player state and attributes, but not recommended for large player counts. |
| state | [GameState](#v1-api-game-GameState) |  | Game state as defined by the GameState enum |
| attributes | [Session.AttributesEntry](#v1-api-game-Session-AttributesEntry) | repeated | Game attributes as a map of string to GameAttribute

Game attributes |






<a name="v1-api-game-Session-AttributesEntry"></a>

### Session.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [GameAttribute](#v1-api-game-GameAttribute) |  |  |






<a name="v1-api-game-SessionCreate"></a>

### SessionCreate
Represents a game session creation request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| game_id | [string](#string) |  |  |
| player_ids | [string](#string) | repeated |  |
| state | [GameState](#v1-api-game-GameState) |  |  |
| attributes | [SessionCreate.AttributesEntry](#v1-api-game-SessionCreate-AttributesEntry) | repeated |  |






<a name="v1-api-game-SessionCreate-AttributesEntry"></a>

### SessionCreate.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [GameAttribute](#v1-api-game-GameAttribute) |  |  |






<a name="v1-api-game-SessionDelete"></a>

### SessionDelete
Represents a game session deletion request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |






<a name="v1-api-game-SessionGet"></a>

### SessionGet
Represents a game session update request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| game_id | [string](#string) | optional |  |






<a name="v1-api-game-SessionUpdate"></a>

### SessionUpdate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| player_ids | [string](#string) | repeated |  |
| state | [GameState](#v1-api-game-GameState) |  |  |
| attributes | [SessionUpdate.AttributesEntry](#v1-api-game-SessionUpdate-AttributesEntry) | repeated |  |






<a name="v1-api-game-SessionUpdate-AttributesEntry"></a>

### SessionUpdate.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [GameAttribute](#v1-api-game-GameAttribute) |  |  |






<a name="v1-api-game-Sessions"></a>

### Sessions
Represents a list of game sessions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sessions | [Session](#v1-api-game-Session) | repeated |  |





 


<a name="v1-api-game-GameState"></a>

### GameState
Represents the state of a game session

| Name | Number | Description |
| ---- | ------ | ----------- |
| CREATED | 0 | The session has been created |
| WAITING | 1 | The session is waiting for players to join |
| STARTED | 2 | The session has started |
| FINISHED | 3 | The session has finished |


 

 

 



<a name="v1_api_global_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/global/event.proto



<a name="v1-api-global-GlobalEvent"></a>

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
| attributes | [GlobalEvent.AttributesEntry](#v1-api-global-GlobalEvent-AttributesEntry) | repeated | Can be a key-value pair and the values can be string, int, float, or bool |
| type | [GlobalEvent.EventType](#v1-api-global-GlobalEvent-EventType) |  | Enum for event types |






<a name="v1-api-global-GlobalEvent-AttributesEntry"></a>

### GlobalEvent.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [GlobalEvent.EventAttribute](#v1-api-global-GlobalEvent-EventAttribute) |  |  |






<a name="v1-api-global-GlobalEvent-EventAttribute"></a>

### GlobalEvent.EventAttribute
Message for event attributes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="v1-api-global-GlobalEvent-EventType"></a>

### GlobalEvent.EventType
Enum for event types

| Name | Number | Description |
| ---- | ------ | ----------- |
| CUSTOM | 0 | Custom events |
| ANNOUNCEMENT | 1 | Announcements |
| ALERT | 2 | Alerts |
| EVENT | 3 | Events |
| REQUEST | 4 | Requests |


 

 

 



<a name="v1_api_global_global_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/global/global_service.proto


 

 

 


<a name="v1-api-global-GlobalService"></a>

### GlobalService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| JoinLeave | [JoinLeaveGame](#v1-api-global-JoinLeaveGame) | [.v1.std.StandardResponse](#v1-std-StandardResponse) |  |
| StreamEvents | [GlobalEvent](#v1-api-global-GlobalEvent) stream | [GlobalEvent](#v1-api-global-GlobalEvent) stream |  |

 



<a name="v1_api_global_join_leave-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/global/join_leave.proto



<a name="v1-api-global-JoinLeaveGame"></a>

### JoinLeaveGame
Message joining or leaving a game


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| action | [JoinLeaveGame.Action](#v1-api-global-JoinLeaveGame-Action) |  |  |
| team_id | [string](#string) | optional |  |
| session_id | [string](#string) | optional |  |
| region | [RegionEnum](#v1-api-global-RegionEnum) | optional |  |





 


<a name="v1-api-global-JoinLeaveGame-Action"></a>

### JoinLeaveGame.Action


| Name | Number | Description |
| ---- | ------ | ----------- |
| JOIN | 0 |  |
| LEAVE | 1 |  |



<a name="v1-api-global-RegionEnum"></a>

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


 

 

 



<a name="v1_api_global_time-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/global/time.proto



<a name="v1-api-global-GlobalTime"></a>

### GlobalTime
Message to synchronize time across clients


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [int64](#int64) |  | Unix timestamp in milliseconds to synchronize time across clients |
| hash | [string](#string) |  | Hash of the timestamp to pass to the server |





 

 

 

 



<a name="v1_api_player_action-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/player/action.proto



<a name="v1-api-player-PlayerAction"></a>

### PlayerAction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  | Unique identifier of the player |
| session_id | [string](#string) |  | Unique identifier of the session |
| game_id | [string](#string) |  | Unique identifier of the game |
| type | [PlayerAction.ActionType](#v1-api-player-PlayerAction-ActionType) |  | Type of action |
| position | [PlayerAction.Position](#v1-api-player-PlayerAction-Position) | optional | Position of the player (optional) |
| velocity | [PlayerAction.Velocity](#v1-api-player-PlayerAction-Velocity) | optional | Velocity of the player (optional) |
| action | [PlayerAction.ActionEntry](#v1-api-player-PlayerAction-ActionEntry) | repeated | Custom actions the player can take

Flexible data structure for custom actions |
| timestamp | [int64](#int64) |  |  |






<a name="v1-api-player-PlayerAction-ActionEntry"></a>

### PlayerAction.ActionEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [PlayerAction.PlayerAction](#v1-api-player-PlayerAction-PlayerAction) |  |  |






<a name="v1-api-player-PlayerAction-PlayerAction"></a>

### PlayerAction.PlayerAction
Custom actions the player can take


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |






<a name="v1-api-player-PlayerAction-Position"></a>

### PlayerAction.Position
Position of the player


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) |  |  |
| y | [float](#float) |  |  |
| z | [float](#float) |  |  |






<a name="v1-api-player-PlayerAction-Velocity"></a>

### PlayerAction.Velocity
Velocity of the player


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) |  |  |
| y | [float](#float) |  |  |
| z | [float](#float) |  |  |





 


<a name="v1-api-player-PlayerAction-ActionType"></a>

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


 

 

 



<a name="v1_api_player_player-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/player/player.proto



<a name="v1-api-player-Player"></a>

### Player



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) | optional |  |
| team | [string](#string) | optional |  |
| score | [int32](#int32) |  |  |
| type | [PlayerType](#v1-api-player-PlayerType) |  |  |
| status | [PlayerStatus](#v1-api-player-PlayerStatus) |  |  |
| role | [string](#string) | optional | Role of the player in the game |






<a name="v1-api-player-PlayerCreate"></a>

### PlayerCreate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  |  |
| email | [string](#string) | optional |  |
| team | [string](#string) | optional |  |
| score | [int32](#int32) |  |  |
| type | [PlayerType](#v1-api-player-PlayerType) |  |  |
| status | [PlayerStatus](#v1-api-player-PlayerStatus) |  |  |
| role | [string](#string) | optional |  |






<a name="v1-api-player-PlayerGet"></a>

### PlayerGet



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |






<a name="v1-api-player-PlayerUpdate"></a>

### PlayerUpdate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| team | [string](#string) | optional |  |
| type | [PlayerType](#v1-api-player-PlayerType) | optional |  |
| status | [PlayerStatus](#v1-api-player-PlayerStatus) | optional |  |
| role | [string](#string) | optional |  |






<a name="v1-api-player-Players"></a>

### Players



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| players | [Player](#v1-api-player-Player) | repeated |  |





 


<a name="v1-api-player-PlayerStatus"></a>

### PlayerStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| ACTIVE | 0 | default |
| INACTIVE | 1 |  |



<a name="v1-api-player-PlayerType"></a>

### PlayerType


| Name | Number | Description |
| ---- | ------ | ----------- |
| HUMAN | 0 | default |
| AI | 1 |  |


 

 

 



<a name="v1_api_player_player_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/player/player_service.proto


 

 

 


<a name="v1-api-player-PlayerService"></a>

### PlayerService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreatePlayer | [Player](#v1-api-player-Player) | [Player](#v1-api-player-Player) |  |
| GetPlayer | [PlayerGet](#v1-api-player-PlayerGet) | [Players](#v1-api-player-Players) |  |
| UpdatePlayer | [PlayerUpdate](#v1-api-player-PlayerUpdate) | [Player](#v1-api-player-Player) |  |
| StreamEvents | [PlayerAction](#v1-api-player-PlayerAction) stream | [PlayerAction](#v1-api-player-PlayerAction) stream |  |

 



<a name="v1_api_player_state-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/api/player/state.proto



<a name="v1-api-player-State"></a>

### State



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  |  |
| session_id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| state | [State.PlayerState](#v1-api-player-State-PlayerState) |  |  |
| attributes | [State.AttributesEntry](#v1-api-player-State-AttributesEntry) | repeated |  |
| timestamp | [int64](#int64) |  |  |






<a name="v1-api-player-State-AttributesEntry"></a>

### State.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [State.PlayerAttribute](#v1-api-player-State-PlayerAttribute) |  |  |






<a name="v1-api-player-State-PlayerAttribute"></a>

### State.PlayerAttribute



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="v1-api-player-State-PlayerState"></a>

### State.PlayerState


| Name | Number | Description |
| ---- | ------ | ----------- |
| WAITING | 0 |  |
| PLAYING | 1 |  |
| FINISHED | 2 |  |


 

 

 



<a name="v1_std_responses-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## v1/std/responses.proto



<a name="v1-std-Error"></a>

### Error
A standard error message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [int32](#int32) |  | Error code (e.g., HTTP status code or custom code) |
| message | [string](#string) |  | Human-readable error message |
| details | [string](#string) |  | Optional details about the error |






<a name="v1-std-PaginatedResponse"></a>

### PaginatedResponse
A paginated response wrapper.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [PaginationMetadata](#v1-std-PaginationMetadata) |  | Pagination metadata |
| items | [google.protobuf.Any](#google-protobuf-Any) | repeated | List of items in this page |






<a name="v1-std-PaginationMetadata"></a>

### PaginationMetadata
Metadata for paginated responses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  | Current page number |
| page_size | [int32](#int32) |  | Number of items per page |
| total_items | [int64](#int64) |  | Total number of items |
| total_pages | [int32](#int32) |  | Total number of pages |






<a name="v1-std-StandardResponse"></a>

### StandardResponse
A standardized response wrapper for any data.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [Success](#v1-std-Success) |  | Success message |
| error | [Error](#v1-std-Error) |  | Error message |






<a name="v1-std-Success"></a>

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

