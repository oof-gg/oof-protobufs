# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [game/entity.proto](#game_entity-proto)
    - [EntityUpdate](#game-EntityUpdate)
    - [RegisterEntity](#game-RegisterEntity)
    - [RegisterEntity.AttributesEntry](#game-RegisterEntity-AttributesEntry)
    - [RegisterEntity.EntityAttribute](#game-RegisterEntity-EntityAttribute)
  
    - [RegisterEntity.ControllerStateEnum](#game-RegisterEntity-ControllerStateEnum)
  
- [game/event.proto](#game_event-proto)
    - [GameEvent](#game-GameEvent)
    - [GameEvent.AttributesEntry](#game-GameEvent-AttributesEntry)
    - [GameEvent.EventAttribute](#game-GameEvent-EventAttribute)
  
    - [GameEvent.EventType](#game-GameEvent-EventType)
  
- [game/session.proto](#game_session-proto)
    - [Session](#game-Session)
    - [Session.AttributesEntry](#game-Session-AttributesEntry)
    - [Session.GameAttribute](#game-Session-GameAttribute)
  
    - [Session.GameState](#game-Session-GameState)
  
- [global/event.proto](#global_event-proto)
    - [GlobalEvent](#global-GlobalEvent)
    - [GlobalEvent.AttributesEntry](#global-GlobalEvent-AttributesEntry)
    - [GlobalEvent.EventAttribute](#global-GlobalEvent-EventAttribute)
  
    - [GlobalEvent.EventType](#global-GlobalEvent-EventType)
  
- [global/join_leave.proto](#global_join_leave-proto)
    - [JoinLeaveGame](#global-JoinLeaveGame)
  
    - [JoinLeaveGame.Action](#global-JoinLeaveGame-Action)
  
- [global/time.proto](#global_time-proto)
    - [GlobalTime](#global-GlobalTime)
  
- [player/action.proto](#player_action-proto)
    - [Action](#player-Action)
    - [Action.ActionEntry](#player-Action-ActionEntry)
    - [Action.PlayerAction](#player-Action-PlayerAction)
    - [Action.Position](#player-Action-Position)
    - [Action.Velocity](#player-Action-Velocity)
  
    - [Action.ActionType](#player-Action-ActionType)
  
- [player/player.proto](#player_player-proto)
    - [Player](#player-Player)
  
    - [Player.PlayerStatus](#player-Player-PlayerStatus)
    - [Player.PlayerType](#player-Player-PlayerType)
  
- [player/state.proto](#player_state-proto)
    - [State](#player-State)
    - [State.AttributesEntry](#player-State-AttributesEntry)
    - [State.PlayerAttribute](#player-State-PlayerAttribute)
  
    - [State.PlayerState](#player-State-PlayerState)
  
- [Scalar Value Types](#scalar-value-types)



<a name="game_entity-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## game/entity.proto



<a name="game-EntityUpdate"></a>

### EntityUpdate
The EntityUpdate message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |
| attributes | [RegisterEntity.EntityAttribute](#game-RegisterEntity-EntityAttribute) | repeated | The attributes of the entity |






<a name="game-RegisterEntity"></a>

### RegisterEntity
The RegisterEntity message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The name of the entity, e.g. &#34;ball&#34; |
| type | [string](#string) |  | The type of the entity, e.g. &#34;object&#34; |
| id | [string](#string) |  | The unique identifier of the entity |
| session_id | [string](#string) |  | The session id of the entity |
| game_id | [string](#string) |  | The game id of the entity |
| attributes | [RegisterEntity.AttributesEntry](#game-RegisterEntity-AttributesEntry) | repeated | The attributes of the entity |
| controller_state | [RegisterEntity.ControllerStateEnum](#game-RegisterEntity-ControllerStateEnum) |  | The controller of the entity |
| player_id | [string](#string) | optional | The owner of the entity |
| data | [string](#string) | optional | Can be any JSON data |






<a name="game-RegisterEntity-AttributesEntry"></a>

### RegisterEntity.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [RegisterEntity.EntityAttribute](#game-RegisterEntity-EntityAttribute) |  |  |






<a name="game-RegisterEntity-EntityAttribute"></a>

### RegisterEntity.EntityAttribute
The EntityAttribute message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="game-RegisterEntity-ControllerStateEnum"></a>

### RegisterEntity.ControllerStateEnum


| Name | Number | Description |
| ---- | ------ | ----------- |
| SERVER | 0 |  |
| PLAYER | 1 |  |


 

 

 



<a name="game_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## game/event.proto



<a name="game-GameEvent"></a>

### GameEvent
Global Events, message can trigger API calls or other events


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Unique identifier for the event to prevent duplicates, and to be able to retrieve the event from the server if necessary |
| event_name | [string](#string) |  |  |
| timestamp | [int64](#int64) |  |  |
| game_id | [string](#string) | optional |  |
| player_id | [string](#string) | optional |  |
| session_id | [string](#string) | optional |  |
| team_id | [string](#string) | optional |  |
| attributes | [GameEvent.AttributesEntry](#game-GameEvent-AttributesEntry) | repeated |  |
| type | [GameEvent.EventType](#game-GameEvent-EventType) |  |  |






<a name="game-GameEvent-AttributesEntry"></a>

### GameEvent.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [GameEvent.EventAttribute](#game-GameEvent-EventAttribute) |  |  |






<a name="game-GameEvent-EventAttribute"></a>

### GameEvent.EventAttribute



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="game-GameEvent-EventType"></a>

### GameEvent.EventType
CUSTOM - Custom events

| Name | Number | Description |
| ---- | ------ | ----------- |
| CUSTOM | 0 |  |


 

 

 



<a name="game_session-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## game/session.proto



<a name="game-Session"></a>

### Session
Represents a game session, can be used to store game state and attributes such as scores, times, players, and active in-game configurations.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| player_ids | [string](#string) | repeated | Players in the session (can be used to store player state and attributes) / Optional: This can be used to store player state and attributes, but not recommended for large player counts. |
| state | [Session.GameState](#game-Session-GameState) |  | Game state as defined by the GameState enum |
| attributes | [Session.AttributesEntry](#game-Session-AttributesEntry) | repeated | Game attributes as a map of string to GameAttribute

Game attributes |






<a name="game-Session-AttributesEntry"></a>

### Session.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [Session.GameAttribute](#game-Session-GameAttribute) |  |  |






<a name="game-Session-GameAttribute"></a>

### Session.GameAttribute
TODO: Check if this is the best way to represent game attributes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="game-Session-GameState"></a>

### Session.GameState


| Name | Number | Description |
| ---- | ------ | ----------- |
| CREATED | 0 |  |
| WAITING | 1 |  |
| STARTED | 2 |  |
| FINISHED | 3 |  |


 

 

 



<a name="global_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## global/event.proto



<a name="global-GlobalEvent"></a>

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
| attributes | [GlobalEvent.AttributesEntry](#global-GlobalEvent-AttributesEntry) | repeated | Can be a key-value pair and the values can be string, int, float, or bool |
| type | [GlobalEvent.EventType](#global-GlobalEvent-EventType) |  | Enum for event types |






<a name="global-GlobalEvent-AttributesEntry"></a>

### GlobalEvent.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [GlobalEvent.EventAttribute](#global-GlobalEvent-EventAttribute) |  |  |






<a name="global-GlobalEvent-EventAttribute"></a>

### GlobalEvent.EventAttribute
Message for event attributes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="global-GlobalEvent-EventType"></a>

### GlobalEvent.EventType
Enum for event types

| Name | Number | Description |
| ---- | ------ | ----------- |
| CUSTOM | 0 | Custom events |
| ANNOUNCEMENT | 1 | Announcements |
| ALERT | 2 | Alerts |
| EVENT | 3 | Events |
| REQUEST | 4 | Requests |


 

 

 



<a name="global_join_leave-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## global/join_leave.proto



<a name="global-JoinLeaveGame"></a>

### JoinLeaveGame
Message joining or leaving a game


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| action | [JoinLeaveGame.Action](#global-JoinLeaveGame-Action) |  |  |
| team_id | [string](#string) | optional |  |
| session_id | [string](#string) | optional |  |





 


<a name="global-JoinLeaveGame-Action"></a>

### JoinLeaveGame.Action


| Name | Number | Description |
| ---- | ------ | ----------- |
| JOIN | 0 |  |
| LEAVE | 1 |  |


 

 

 



<a name="global_time-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## global/time.proto



<a name="global-GlobalTime"></a>

### GlobalTime
Message to synchronize time across clients


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [int64](#int64) |  | Unix timestamp in milliseconds to synchronize time across clients |
| hash | [string](#string) |  | Hash of the timestamp to pass to the server |





 

 

 

 



<a name="player_action-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## player/action.proto



<a name="player-Action"></a>

### Action



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  | Unique identifier of the player |
| session_id | [string](#string) |  | Unique identifier of the session |
| game_id | [string](#string) |  | Unique identifier of the game |
| type | [Action.ActionType](#player-Action-ActionType) |  | Type of action |
| position | [Action.Position](#player-Action-Position) | optional | Position of the player (optional) |
| velocity | [Action.Velocity](#player-Action-Velocity) | optional | Velocity of the player (optional) |
| action | [Action.ActionEntry](#player-Action-ActionEntry) | repeated | Custom actions the player can take

Flexible data structure for custom actions |
| timestamp | [int64](#int64) |  |  |






<a name="player-Action-ActionEntry"></a>

### Action.ActionEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [Action.PlayerAction](#player-Action-PlayerAction) |  |  |






<a name="player-Action-PlayerAction"></a>

### Action.PlayerAction
Custom actions the player can take


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |






<a name="player-Action-Position"></a>

### Action.Position
Position of the player


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) |  |  |
| y | [float](#float) |  |  |
| z | [float](#float) |  |  |






<a name="player-Action-Velocity"></a>

### Action.Velocity
Velocity of the player


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) |  |  |
| y | [float](#float) |  |  |
| z | [float](#float) |  |  |





 


<a name="player-Action-ActionType"></a>

### Action.ActionType
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


 

 

 



<a name="player_player-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## player/player.proto



<a name="player-Player"></a>

### Player



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) | optional |  |
| team | [string](#string) | optional |  |
| score | [int32](#int32) |  |  |
| type | [Player.PlayerType](#player-Player-PlayerType) |  |  |
| status | [Player.PlayerStatus](#player-Player-PlayerStatus) |  |  |
| role | [string](#string) | optional | Role of the player in the game |





 


<a name="player-Player-PlayerStatus"></a>

### Player.PlayerStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| ACTIVE | 0 | default |
| INACTIVE | 1 |  |



<a name="player-Player-PlayerType"></a>

### Player.PlayerType


| Name | Number | Description |
| ---- | ------ | ----------- |
| HUMAN | 0 | default |
| AI | 1 |  |


 

 

 



<a name="player_state-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## player/state.proto



<a name="player-State"></a>

### State



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  |  |
| session_id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| state | [State.PlayerState](#player-State-PlayerState) |  |  |
| attributes | [State.AttributesEntry](#player-State-AttributesEntry) | repeated |  |
| timestamp | [int64](#int64) |  |  |






<a name="player-State-AttributesEntry"></a>

### State.AttributesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [State.PlayerAttribute](#player-State-PlayerAttribute) |  |  |






<a name="player-State-PlayerAttribute"></a>

### State.PlayerAttribute



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |





 


<a name="player-State-PlayerState"></a>

### State.PlayerState


| Name | Number | Description |
| ---- | ------ | ----------- |
| WAITING | 0 |  |
| PLAYING | 1 |  |
| FINISHED | 2 |  |


 

 

 



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

