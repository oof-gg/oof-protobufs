// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.2
// 	protoc        v5.28.2
// source: v1/api/game/event.proto

package game

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// *
// CUSTOM - Custom events
type GameEvent_EventType int32

const (
	GameEvent_TYPE_UNSPECIFIED GameEvent_EventType = 0
	GameEvent_TYPE_ACTION      GameEvent_EventType = 1
	GameEvent_TYPE_GAME_EVENT  GameEvent_EventType = 2
	GameEvent_TYPE_SYSTEM      GameEvent_EventType = 3
	GameEvent_TYPE_COMPLETION  GameEvent_EventType = 4
)

// Enum value maps for GameEvent_EventType.
var (
	GameEvent_EventType_name = map[int32]string{
		0: "TYPE_UNSPECIFIED",
		1: "TYPE_ACTION",
		2: "TYPE_GAME_EVENT",
		3: "TYPE_SYSTEM",
		4: "TYPE_COMPLETION",
	}
	GameEvent_EventType_value = map[string]int32{
		"TYPE_UNSPECIFIED": 0,
		"TYPE_ACTION":      1,
		"TYPE_GAME_EVENT":  2,
		"TYPE_SYSTEM":      3,
		"TYPE_COMPLETION":  4,
	}
)

func (x GameEvent_EventType) Enum() *GameEvent_EventType {
	p := new(GameEvent_EventType)
	*p = x
	return p
}

func (x GameEvent_EventType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (GameEvent_EventType) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_api_game_event_proto_enumTypes[0].Descriptor()
}

func (GameEvent_EventType) Type() protoreflect.EnumType {
	return &file_v1_api_game_event_proto_enumTypes[0]
}

func (x GameEvent_EventType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use GameEvent_EventType.Descriptor instead.
func (GameEvent_EventType) EnumDescriptor() ([]byte, []int) {
	return file_v1_api_game_event_proto_rawDescGZIP(), []int{0, 0}
}

// / Game Events, message can trigger API calls or other events
type GameEvent struct {
	state         protoimpl.MessageState               `protogen:"open.v1"`
	Id            *string                              `protobuf:"bytes,1,opt,name=id,proto3,oneof" json:"id,omitempty"` /// Unique identifier for the event to prevent duplicates, and to be able to retrieve the event from the server if necessary
	EventName     *string                              `protobuf:"bytes,2,opt,name=event_name,json=eventName,proto3,oneof" json:"event_name,omitempty"`
	Timestamp     int64                                `protobuf:"varint,3,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	GameId        *string                              `protobuf:"bytes,4,opt,name=game_id,json=gameId,proto3,oneof" json:"game_id,omitempty"`
	PlayerId      *string                              `protobuf:"bytes,5,opt,name=player_id,json=playerId,proto3,oneof" json:"player_id,omitempty"`
	SessionId     *string                              `protobuf:"bytes,7,opt,name=session_id,json=sessionId,proto3,oneof" json:"session_id,omitempty"`
	TeamId        *string                              `protobuf:"bytes,8,opt,name=team_id,json=teamId,proto3,oneof" json:"team_id,omitempty"`
	Attributes    map[string]*GameEvent_EventAttribute `protobuf:"bytes,9,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	Type          GameEvent_EventType                  `protobuf:"varint,10,opt,name=type,proto3,enum=v1.api.game.GameEvent_EventType" json:"type,omitempty"`
	Data          *string                              `protobuf:"bytes,11,opt,name=data,proto3,oneof" json:"data,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GameEvent) Reset() {
	*x = GameEvent{}
	mi := &file_v1_api_game_event_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GameEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameEvent) ProtoMessage() {}

func (x *GameEvent) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_event_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameEvent.ProtoReflect.Descriptor instead.
func (*GameEvent) Descriptor() ([]byte, []int) {
	return file_v1_api_game_event_proto_rawDescGZIP(), []int{0}
}

func (x *GameEvent) GetId() string {
	if x != nil && x.Id != nil {
		return *x.Id
	}
	return ""
}

func (x *GameEvent) GetEventName() string {
	if x != nil && x.EventName != nil {
		return *x.EventName
	}
	return ""
}

func (x *GameEvent) GetTimestamp() int64 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

func (x *GameEvent) GetGameId() string {
	if x != nil && x.GameId != nil {
		return *x.GameId
	}
	return ""
}

func (x *GameEvent) GetPlayerId() string {
	if x != nil && x.PlayerId != nil {
		return *x.PlayerId
	}
	return ""
}

func (x *GameEvent) GetSessionId() string {
	if x != nil && x.SessionId != nil {
		return *x.SessionId
	}
	return ""
}

func (x *GameEvent) GetTeamId() string {
	if x != nil && x.TeamId != nil {
		return *x.TeamId
	}
	return ""
}

func (x *GameEvent) GetAttributes() map[string]*GameEvent_EventAttribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

func (x *GameEvent) GetType() GameEvent_EventType {
	if x != nil {
		return x.Type
	}
	return GameEvent_TYPE_UNSPECIFIED
}

func (x *GameEvent) GetData() string {
	if x != nil && x.Data != nil {
		return *x.Data
	}
	return ""
}

type GameEvent_EventAttribute struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Types that are valid to be assigned to Value:
	//
	//	*GameEvent_EventAttribute_StringValue
	//	*GameEvent_EventAttribute_IntValue
	//	*GameEvent_EventAttribute_FloatValue
	//	*GameEvent_EventAttribute_BoolValue
	Value         isGameEvent_EventAttribute_Value `protobuf_oneof:"value"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GameEvent_EventAttribute) Reset() {
	*x = GameEvent_EventAttribute{}
	mi := &file_v1_api_game_event_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GameEvent_EventAttribute) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameEvent_EventAttribute) ProtoMessage() {}

func (x *GameEvent_EventAttribute) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_event_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameEvent_EventAttribute.ProtoReflect.Descriptor instead.
func (*GameEvent_EventAttribute) Descriptor() ([]byte, []int) {
	return file_v1_api_game_event_proto_rawDescGZIP(), []int{0, 1}
}

func (x *GameEvent_EventAttribute) GetValue() isGameEvent_EventAttribute_Value {
	if x != nil {
		return x.Value
	}
	return nil
}

func (x *GameEvent_EventAttribute) GetStringValue() string {
	if x != nil {
		if x, ok := x.Value.(*GameEvent_EventAttribute_StringValue); ok {
			return x.StringValue
		}
	}
	return ""
}

func (x *GameEvent_EventAttribute) GetIntValue() int32 {
	if x != nil {
		if x, ok := x.Value.(*GameEvent_EventAttribute_IntValue); ok {
			return x.IntValue
		}
	}
	return 0
}

func (x *GameEvent_EventAttribute) GetFloatValue() float32 {
	if x != nil {
		if x, ok := x.Value.(*GameEvent_EventAttribute_FloatValue); ok {
			return x.FloatValue
		}
	}
	return 0
}

func (x *GameEvent_EventAttribute) GetBoolValue() bool {
	if x != nil {
		if x, ok := x.Value.(*GameEvent_EventAttribute_BoolValue); ok {
			return x.BoolValue
		}
	}
	return false
}

type isGameEvent_EventAttribute_Value interface {
	isGameEvent_EventAttribute_Value()
}

type GameEvent_EventAttribute_StringValue struct {
	StringValue string `protobuf:"bytes,1,opt,name=string_value,json=stringValue,proto3,oneof"`
}

type GameEvent_EventAttribute_IntValue struct {
	IntValue int32 `protobuf:"varint,2,opt,name=int_value,json=intValue,proto3,oneof"`
}

type GameEvent_EventAttribute_FloatValue struct {
	FloatValue float32 `protobuf:"fixed32,3,opt,name=float_value,json=floatValue,proto3,oneof"`
}

type GameEvent_EventAttribute_BoolValue struct {
	BoolValue bool `protobuf:"varint,4,opt,name=bool_value,json=boolValue,proto3,oneof"`
}

func (*GameEvent_EventAttribute_StringValue) isGameEvent_EventAttribute_Value() {}

func (*GameEvent_EventAttribute_IntValue) isGameEvent_EventAttribute_Value() {}

func (*GameEvent_EventAttribute_FloatValue) isGameEvent_EventAttribute_Value() {}

func (*GameEvent_EventAttribute_BoolValue) isGameEvent_EventAttribute_Value() {}

var File_v1_api_game_event_proto protoreflect.FileDescriptor

var file_v1_api_game_event_proto_rawDesc = []byte{
	0x0a, 0x17, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x65, 0x76,
	0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x76, 0x31, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x22, 0xc8, 0x06, 0x0a, 0x09, 0x47, 0x61, 0x6d, 0x65, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x12, 0x13, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x00, 0x52, 0x02, 0x69, 0x64, 0x88, 0x01, 0x01, 0x12, 0x22, 0x0a, 0x0a, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52,
	0x09, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x1c, 0x0a,
	0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x1c, 0x0a, 0x07, 0x67,
	0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x06,
	0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x20, 0x0a, 0x09, 0x70, 0x6c, 0x61,
	0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x03, 0x52, 0x08,
	0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x22, 0x0a, 0x0a, 0x73,
	0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x48,
	0x04, 0x52, 0x09, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12,
	0x1c, 0x0a, 0x07, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x05, 0x52, 0x06, 0x74, 0x65, 0x61, 0x6d, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x46, 0x0a,
	0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x18, 0x09, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x26, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e,
	0x47, 0x61, 0x6d, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62,
	0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69,
	0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x34, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x20, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d,
	0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x45, 0x76, 0x65, 0x6e,
	0x74, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x17, 0x0a, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x48, 0x06, 0x52, 0x04, 0x64, 0x61, 0x74,
	0x61, 0x88, 0x01, 0x01, 0x1a, 0x64, 0x0a, 0x0f, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74,
	0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x3b, 0x0a, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74,
	0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x52,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0xa1, 0x01, 0x0a, 0x0e, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x12, 0x23, 0x0a,
	0x0c, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x0b, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c,
	0x75, 0x65, 0x12, 0x1d, 0x0a, 0x09, 0x69, 0x6e, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x08, 0x69, 0x6e, 0x74, 0x56, 0x61, 0x6c, 0x75,
	0x65, 0x12, 0x21, 0x0a, 0x0b, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x02, 0x48, 0x00, 0x52, 0x0a, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x12, 0x1f, 0x0a, 0x0a, 0x62, 0x6f, 0x6f, 0x6c, 0x5f, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x48, 0x00, 0x52, 0x09, 0x62, 0x6f, 0x6f, 0x6c,
	0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x07, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x6d,
	0x0a, 0x09, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x10, 0x54,
	0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10,
	0x00, 0x12, 0x0f, 0x0a, 0x0b, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e,
	0x10, 0x01, 0x12, 0x13, 0x0a, 0x0f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x47, 0x41, 0x4d, 0x45, 0x5f,
	0x45, 0x56, 0x45, 0x4e, 0x54, 0x10, 0x02, 0x12, 0x0f, 0x0a, 0x0b, 0x54, 0x59, 0x50, 0x45, 0x5f,
	0x53, 0x59, 0x53, 0x54, 0x45, 0x4d, 0x10, 0x03, 0x12, 0x13, 0x0a, 0x0f, 0x54, 0x59, 0x50, 0x45,
	0x5f, 0x43, 0x4f, 0x4d, 0x50, 0x4c, 0x45, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x04, 0x42, 0x05, 0x0a,
	0x03, 0x5f, 0x69, 0x64, 0x42, 0x0d, 0x0a, 0x0b, 0x5f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x5f, 0x6e,
	0x61, 0x6d, 0x65, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x42,
	0x0c, 0x0a, 0x0a, 0x5f, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x42, 0x0d, 0x0a,
	0x0b, 0x5f, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x42, 0x0a, 0x0a, 0x08,
	0x5f, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x69, 0x64, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x64, 0x61, 0x74,
	0x61, 0x42, 0x3a, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x67,
	0x6f, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_api_game_event_proto_rawDescOnce sync.Once
	file_v1_api_game_event_proto_rawDescData = file_v1_api_game_event_proto_rawDesc
)

func file_v1_api_game_event_proto_rawDescGZIP() []byte {
	file_v1_api_game_event_proto_rawDescOnce.Do(func() {
		file_v1_api_game_event_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_api_game_event_proto_rawDescData)
	})
	return file_v1_api_game_event_proto_rawDescData
}

var file_v1_api_game_event_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_v1_api_game_event_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_v1_api_game_event_proto_goTypes = []any{
	(GameEvent_EventType)(0),         // 0: v1.api.game.GameEvent.EventType
	(*GameEvent)(nil),                // 1: v1.api.game.GameEvent
	nil,                              // 2: v1.api.game.GameEvent.AttributesEntry
	(*GameEvent_EventAttribute)(nil), // 3: v1.api.game.GameEvent.EventAttribute
}
var file_v1_api_game_event_proto_depIdxs = []int32{
	2, // 0: v1.api.game.GameEvent.attributes:type_name -> v1.api.game.GameEvent.AttributesEntry
	0, // 1: v1.api.game.GameEvent.type:type_name -> v1.api.game.GameEvent.EventType
	3, // 2: v1.api.game.GameEvent.AttributesEntry.value:type_name -> v1.api.game.GameEvent.EventAttribute
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_v1_api_game_event_proto_init() }
func file_v1_api_game_event_proto_init() {
	if File_v1_api_game_event_proto != nil {
		return
	}
	file_v1_api_game_event_proto_msgTypes[0].OneofWrappers = []any{}
	file_v1_api_game_event_proto_msgTypes[2].OneofWrappers = []any{
		(*GameEvent_EventAttribute_StringValue)(nil),
		(*GameEvent_EventAttribute_IntValue)(nil),
		(*GameEvent_EventAttribute_FloatValue)(nil),
		(*GameEvent_EventAttribute_BoolValue)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_game_event_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_api_game_event_proto_goTypes,
		DependencyIndexes: file_v1_api_game_event_proto_depIdxs,
		EnumInfos:         file_v1_api_game_event_proto_enumTypes,
		MessageInfos:      file_v1_api_game_event_proto_msgTypes,
	}.Build()
	File_v1_api_game_event_proto = out.File
	file_v1_api_game_event_proto_rawDesc = nil
	file_v1_api_game_event_proto_goTypes = nil
	file_v1_api_game_event_proto_depIdxs = nil
}
