// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        v5.28.3
// source: v1/api/game/session.proto

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

type Session_GameState int32

const (
	Session_CREATED  Session_GameState = 0
	Session_WAITING  Session_GameState = 1
	Session_STARTED  Session_GameState = 2
	Session_FINISHED Session_GameState = 3
)

// Enum value maps for Session_GameState.
var (
	Session_GameState_name = map[int32]string{
		0: "CREATED",
		1: "WAITING",
		2: "STARTED",
		3: "FINISHED",
	}
	Session_GameState_value = map[string]int32{
		"CREATED":  0,
		"WAITING":  1,
		"STARTED":  2,
		"FINISHED": 3,
	}
)

func (x Session_GameState) Enum() *Session_GameState {
	p := new(Session_GameState)
	*p = x
	return p
}

func (x Session_GameState) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Session_GameState) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_api_game_session_proto_enumTypes[0].Descriptor()
}

func (Session_GameState) Type() protoreflect.EnumType {
	return &file_v1_api_game_session_proto_enumTypes[0]
}

func (x Session_GameState) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Session_GameState.Descriptor instead.
func (Session_GameState) EnumDescriptor() ([]byte, []int) {
	return file_v1_api_game_session_proto_rawDescGZIP(), []int{0, 0}
}

// / Represents a game session, can be used to store game state and attributes such as scores, times, players, and active in-game configurations.
type Session struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	GameId string `protobuf:"bytes,2,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
	// / Players in the session (can be used to store player state and attributes)
	// / Optional: This can be used to store player state and attributes, but not recommended for large player counts.
	PlayerIds []string `protobuf:"bytes,3,rep,name=player_ids,json=playerIds,proto3" json:"player_ids,omitempty"`
	// / Game state as defined by the GameState enum
	State Session_GameState `protobuf:"varint,4,opt,name=state,proto3,enum=v1.api.game.Session_GameState" json:"state,omitempty"`
	// / Game attributes as a map of string to GameAttribute
	Attributes map[string]*Session_GameAttribute `protobuf:"bytes,5,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"` // Game attributes
}

func (x *Session) Reset() {
	*x = Session{}
	mi := &file_v1_api_game_session_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Session) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Session) ProtoMessage() {}

func (x *Session) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_session_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Session.ProtoReflect.Descriptor instead.
func (*Session) Descriptor() ([]byte, []int) {
	return file_v1_api_game_session_proto_rawDescGZIP(), []int{0}
}

func (x *Session) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Session) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

func (x *Session) GetPlayerIds() []string {
	if x != nil {
		return x.PlayerIds
	}
	return nil
}

func (x *Session) GetState() Session_GameState {
	if x != nil {
		return x.State
	}
	return Session_CREATED
}

func (x *Session) GetAttributes() map[string]*Session_GameAttribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

type SessionGet struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     *string `protobuf:"bytes,1,opt,name=id,proto3,oneof" json:"id,omitempty"`
	GameId *string `protobuf:"bytes,2,opt,name=game_id,json=gameId,proto3,oneof" json:"game_id,omitempty"`
}

func (x *SessionGet) Reset() {
	*x = SessionGet{}
	mi := &file_v1_api_game_session_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SessionGet) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SessionGet) ProtoMessage() {}

func (x *SessionGet) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_session_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SessionGet.ProtoReflect.Descriptor instead.
func (*SessionGet) Descriptor() ([]byte, []int) {
	return file_v1_api_game_session_proto_rawDescGZIP(), []int{1}
}

func (x *SessionGet) GetId() string {
	if x != nil && x.Id != nil {
		return *x.Id
	}
	return ""
}

func (x *SessionGet) GetGameId() string {
	if x != nil && x.GameId != nil {
		return *x.GameId
	}
	return ""
}

type SessionDelete struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	GameId string `protobuf:"bytes,2,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
}

func (x *SessionDelete) Reset() {
	*x = SessionDelete{}
	mi := &file_v1_api_game_session_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SessionDelete) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SessionDelete) ProtoMessage() {}

func (x *SessionDelete) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_session_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SessionDelete.ProtoReflect.Descriptor instead.
func (*SessionDelete) Descriptor() ([]byte, []int) {
	return file_v1_api_game_session_proto_rawDescGZIP(), []int{2}
}

func (x *SessionDelete) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SessionDelete) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

type Sessions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Sessions []*Session `protobuf:"bytes,1,rep,name=sessions,proto3" json:"sessions,omitempty"`
}

func (x *Sessions) Reset() {
	*x = Sessions{}
	mi := &file_v1_api_game_session_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Sessions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Sessions) ProtoMessage() {}

func (x *Sessions) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_session_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Sessions.ProtoReflect.Descriptor instead.
func (*Sessions) Descriptor() ([]byte, []int) {
	return file_v1_api_game_session_proto_rawDescGZIP(), []int{3}
}

func (x *Sessions) GetSessions() []*Session {
	if x != nil {
		return x.Sessions
	}
	return nil
}

// TODO: Check if this is the best way to represent game attributes
type Session_GameAttribute struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// / Value of the attribute
	//
	// Types that are assignable to Value:
	//
	//	*Session_GameAttribute_StringValue
	//	*Session_GameAttribute_IntValue
	//	*Session_GameAttribute_FloatValue
	//	*Session_GameAttribute_BoolValue
	Value isSession_GameAttribute_Value `protobuf_oneof:"value"`
}

func (x *Session_GameAttribute) Reset() {
	*x = Session_GameAttribute{}
	mi := &file_v1_api_game_session_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Session_GameAttribute) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Session_GameAttribute) ProtoMessage() {}

func (x *Session_GameAttribute) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_session_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Session_GameAttribute.ProtoReflect.Descriptor instead.
func (*Session_GameAttribute) Descriptor() ([]byte, []int) {
	return file_v1_api_game_session_proto_rawDescGZIP(), []int{0, 1}
}

func (m *Session_GameAttribute) GetValue() isSession_GameAttribute_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *Session_GameAttribute) GetStringValue() string {
	if x, ok := x.GetValue().(*Session_GameAttribute_StringValue); ok {
		return x.StringValue
	}
	return ""
}

func (x *Session_GameAttribute) GetIntValue() int32 {
	if x, ok := x.GetValue().(*Session_GameAttribute_IntValue); ok {
		return x.IntValue
	}
	return 0
}

func (x *Session_GameAttribute) GetFloatValue() float32 {
	if x, ok := x.GetValue().(*Session_GameAttribute_FloatValue); ok {
		return x.FloatValue
	}
	return 0
}

func (x *Session_GameAttribute) GetBoolValue() bool {
	if x, ok := x.GetValue().(*Session_GameAttribute_BoolValue); ok {
		return x.BoolValue
	}
	return false
}

type isSession_GameAttribute_Value interface {
	isSession_GameAttribute_Value()
}

type Session_GameAttribute_StringValue struct {
	StringValue string `protobuf:"bytes,2,opt,name=string_value,json=stringValue,proto3,oneof"`
}

type Session_GameAttribute_IntValue struct {
	IntValue int32 `protobuf:"varint,3,opt,name=int_value,json=intValue,proto3,oneof"`
}

type Session_GameAttribute_FloatValue struct {
	FloatValue float32 `protobuf:"fixed32,4,opt,name=float_value,json=floatValue,proto3,oneof"`
}

type Session_GameAttribute_BoolValue struct {
	BoolValue bool `protobuf:"varint,5,opt,name=bool_value,json=boolValue,proto3,oneof"`
}

func (*Session_GameAttribute_StringValue) isSession_GameAttribute_Value() {}

func (*Session_GameAttribute_IntValue) isSession_GameAttribute_Value() {}

func (*Session_GameAttribute_FloatValue) isSession_GameAttribute_Value() {}

func (*Session_GameAttribute_BoolValue) isSession_GameAttribute_Value() {}

var File_v1_api_game_session_proto protoreflect.FileDescriptor

var file_v1_api_game_session_proto_rawDesc = []byte{
	0x0a, 0x19, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x73, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x22, 0x95, 0x04, 0x0a, 0x07, 0x53, 0x65, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x12, 0x1d, 0x0a,
	0x0a, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28,
	0x09, 0x52, 0x09, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x73, 0x12, 0x34, 0x0a, 0x05,
	0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1e, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x05, 0x73, 0x74, 0x61,
	0x74, 0x65, 0x12, 0x44, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73,
	0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x41, 0x74, 0x74,
	0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0a, 0x61, 0x74,
	0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x1a, 0x61, 0x0a, 0x0f, 0x41, 0x74, 0x74, 0x72,
	0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x38, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65,
	0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0xa0, 0x01, 0x0a, 0x0d,
	0x47, 0x61, 0x6d, 0x65, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x12, 0x23, 0x0a,
	0x0c, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x0b, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c,
	0x75, 0x65, 0x12, 0x1d, 0x0a, 0x09, 0x69, 0x6e, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x08, 0x69, 0x6e, 0x74, 0x56, 0x61, 0x6c, 0x75,
	0x65, 0x12, 0x21, 0x0a, 0x0b, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x02, 0x48, 0x00, 0x52, 0x0a, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x12, 0x1f, 0x0a, 0x0a, 0x62, 0x6f, 0x6f, 0x6c, 0x5f, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x48, 0x00, 0x52, 0x09, 0x62, 0x6f, 0x6f, 0x6c,
	0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x07, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x40,
	0x0a, 0x09, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x0b, 0x0a, 0x07, 0x43,
	0x52, 0x45, 0x41, 0x54, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07, 0x57, 0x41, 0x49, 0x54,
	0x49, 0x4e, 0x47, 0x10, 0x01, 0x12, 0x0b, 0x0a, 0x07, 0x53, 0x54, 0x41, 0x52, 0x54, 0x45, 0x44,
	0x10, 0x02, 0x12, 0x0c, 0x0a, 0x08, 0x46, 0x49, 0x4e, 0x49, 0x53, 0x48, 0x45, 0x44, 0x10, 0x03,
	0x22, 0x52, 0x0a, 0x0a, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x47, 0x65, 0x74, 0x12, 0x13,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x02, 0x69, 0x64,
	0x88, 0x01, 0x01, 0x12, 0x1c, 0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x88, 0x01,
	0x01, 0x42, 0x05, 0x0a, 0x03, 0x5f, 0x69, 0x64, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x67, 0x61, 0x6d,
	0x65, 0x5f, 0x69, 0x64, 0x22, 0x38, 0x0a, 0x0d, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x22, 0x3c,
	0x0a, 0x08, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x30, 0x0a, 0x08, 0x73, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x52, 0x08, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x42, 0x37, 0x5a, 0x35,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67,
	0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f,
	0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x67, 0x61, 0x6d, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_api_game_session_proto_rawDescOnce sync.Once
	file_v1_api_game_session_proto_rawDescData = file_v1_api_game_session_proto_rawDesc
)

func file_v1_api_game_session_proto_rawDescGZIP() []byte {
	file_v1_api_game_session_proto_rawDescOnce.Do(func() {
		file_v1_api_game_session_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_api_game_session_proto_rawDescData)
	})
	return file_v1_api_game_session_proto_rawDescData
}

var file_v1_api_game_session_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_v1_api_game_session_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_v1_api_game_session_proto_goTypes = []any{
	(Session_GameState)(0),        // 0: v1.api.game.Session.GameState
	(*Session)(nil),               // 1: v1.api.game.Session
	(*SessionGet)(nil),            // 2: v1.api.game.SessionGet
	(*SessionDelete)(nil),         // 3: v1.api.game.SessionDelete
	(*Sessions)(nil),              // 4: v1.api.game.Sessions
	nil,                           // 5: v1.api.game.Session.AttributesEntry
	(*Session_GameAttribute)(nil), // 6: v1.api.game.Session.GameAttribute
}
var file_v1_api_game_session_proto_depIdxs = []int32{
	0, // 0: v1.api.game.Session.state:type_name -> v1.api.game.Session.GameState
	5, // 1: v1.api.game.Session.attributes:type_name -> v1.api.game.Session.AttributesEntry
	1, // 2: v1.api.game.Sessions.sessions:type_name -> v1.api.game.Session
	6, // 3: v1.api.game.Session.AttributesEntry.value:type_name -> v1.api.game.Session.GameAttribute
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_v1_api_game_session_proto_init() }
func file_v1_api_game_session_proto_init() {
	if File_v1_api_game_session_proto != nil {
		return
	}
	file_v1_api_game_session_proto_msgTypes[1].OneofWrappers = []any{}
	file_v1_api_game_session_proto_msgTypes[5].OneofWrappers = []any{
		(*Session_GameAttribute_StringValue)(nil),
		(*Session_GameAttribute_IntValue)(nil),
		(*Session_GameAttribute_FloatValue)(nil),
		(*Session_GameAttribute_BoolValue)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_game_session_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_api_game_session_proto_goTypes,
		DependencyIndexes: file_v1_api_game_session_proto_depIdxs,
		EnumInfos:         file_v1_api_game_session_proto_enumTypes,
		MessageInfos:      file_v1_api_game_session_proto_msgTypes,
	}.Build()
	File_v1_api_game_session_proto = out.File
	file_v1_api_game_session_proto_rawDesc = nil
	file_v1_api_game_session_proto_goTypes = nil
	file_v1_api_game_session_proto_depIdxs = nil
}
