# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [game/event.proto](#game_event-proto)
    - [GameEvent](#game-GameEvent)
  
    - [GameEvent.EventType](#game-GameEvent-EventType)
  
- [game/session.proto](#game_session-proto)
    - [Session](#game-Session)
    - [Session.AttributesEntry](#game-Session-AttributesEntry)
    - [Session.GameAttribute](#game-Session-GameAttribute)
  
    - [Session.GameState](#game-Session-GameState)
  
- [global/event.proto](#global_event-proto)
    - [GlobalEvent](#global-GlobalEvent)
  
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
| data | [string](#string) | optional | Can be any JSON data |
| type | [GameEvent.EventType](#game-GameEvent-EventType) |  |  |





 


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
TODO: Game Score?


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| players | [player.Player](#player-Player) | repeated | Players in the session |
| state | [Session.GameState](#game-Session-GameState) |  |  |
| attributes | [Session.AttributesEntry](#game-Session-AttributesEntry) | repeated | Game attributes |






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
| key | [string](#string) |  |  |
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
| event_name | [string](#string) |  |  |
| timestamp | [int64](#int64) |  |  |
| game_id | [string](#string) | optional |  |
| player_id | [string](#string) | optional |  |
| team_id | [string](#string) | optional |  |
| data | [string](#string) | optional | Can be any JSON data |
| type | [GlobalEvent.EventType](#global-GlobalEvent-EventType) |  |  |





 


<a name="global-GlobalEvent-EventType"></a>

### GlobalEvent.EventType
Global Channel Types of Events
CUSTOM - Custom events
ANNOUNCEMENT - Announcements
ALERT - Alerts
EVENT - Events
REQUEST - Requests

| Name | Number | Description |
| ---- | ------ | ----------- |
| CUSTOM | 0 |  |
| ANNOUNCEMENT | 1 |  |
| ALERT | 2 |  |
| EVENT | 3 |  |
| REQUEST | 4 |  |


 

 

 



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



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [int64](#int64) |  | Unix timestamp in milliseconds to synchronize time across clients |





 

 

 

 



<a name="player_action-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## player/action.proto



<a name="player-Action"></a>

### Action



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| player_id | [string](#string) |  |  |
| session_id | [string](#string) |  |  |
| game_id | [string](#string) |  |  |
| action_type | [Action.ActionType](#player-Action-ActionType) |  |  |
| position | [Action.Position](#player-Action-Position) | optional |  |
| velocity | [Action.Velocity](#player-Action-Velocity) | optional |  |
| action | [Action.ActionEntry](#player-Action-ActionEntry) | repeated | Flexible data structure for custom actions |
| timestamp | [int64](#int64) |  |  |






<a name="player-Action-ActionEntry"></a>

### Action.ActionEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [Action.PlayerAction](#player-Action-PlayerAction) |  |  |






<a name="player-Action-PlayerAction"></a>

### Action.PlayerAction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| string_value | [string](#string) |  |  |
| int_value | [int32](#int32) |  |  |
| float_value | [float](#float) |  |  |
| bool_value | [bool](#bool) |  |  |






<a name="player-Action-Position"></a>

### Action.Position



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) |  |  |
| y | [float](#float) |  |  |
| z | [float](#float) |  |  |






<a name="player-Action-Velocity"></a>

### Action.Velocity



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) |  |  |
| y | [float](#float) |  |  |
| z | [float](#float) |  |  |





 


<a name="player-Action-ActionType"></a>

### Action.ActionType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CUSTOM | 0 |  |
| MOVE | 1 |  |
| JUMP | 2 |  |
| SHOOT | 3 |  |
| PICKUP | 4 |  |
| DROP | 5 |  |
| USE | 6 |  |
| INTERACT | 7 |  |


 

 

 



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
| key | [string](#string) |  |  |
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

