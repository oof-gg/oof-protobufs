// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        v5.28.3
// source: api/player/state.proto

package player

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

type State_PlayerState int32

const (
	State_WAITING  State_PlayerState = 0
	State_PLAYING  State_PlayerState = 1
	State_FINISHED State_PlayerState = 2
)

// Enum value maps for State_PlayerState.
var (
	State_PlayerState_name = map[int32]string{
		0: "WAITING",
		1: "PLAYING",
		2: "FINISHED",
	}
	State_PlayerState_value = map[string]int32{
		"WAITING":  0,
		"PLAYING":  1,
		"FINISHED": 2,
	}
)

func (x State_PlayerState) Enum() *State_PlayerState {
	p := new(State_PlayerState)
	*p = x
	return p
}

func (x State_PlayerState) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (State_PlayerState) Descriptor() protoreflect.EnumDescriptor {
	return file_api_player_state_proto_enumTypes[0].Descriptor()
}

func (State_PlayerState) Type() protoreflect.EnumType {
	return &file_api_player_state_proto_enumTypes[0]
}

func (x State_PlayerState) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use State_PlayerState.Descriptor instead.
func (State_PlayerState) EnumDescriptor() ([]byte, []int) {
	return file_api_player_state_proto_rawDescGZIP(), []int{0, 0}
}

type State struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PlayerId   string                            `protobuf:"bytes,1,opt,name=player_id,json=playerId,proto3" json:"player_id,omitempty"`
	SessionId  string                            `protobuf:"bytes,2,opt,name=session_id,json=sessionId,proto3" json:"session_id,omitempty"`
	GameId     string                            `protobuf:"bytes,3,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
	State      State_PlayerState                 `protobuf:"varint,4,opt,name=state,proto3,enum=api.player.State_PlayerState" json:"state,omitempty"`
	Attributes map[string]*State_PlayerAttribute `protobuf:"bytes,5,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Timestamp  int64                             `protobuf:"varint,6,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *State) Reset() {
	*x = State{}
	mi := &file_api_player_state_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *State) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*State) ProtoMessage() {}

func (x *State) ProtoReflect() protoreflect.Message {
	mi := &file_api_player_state_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use State.ProtoReflect.Descriptor instead.
func (*State) Descriptor() ([]byte, []int) {
	return file_api_player_state_proto_rawDescGZIP(), []int{0}
}

func (x *State) GetPlayerId() string {
	if x != nil {
		return x.PlayerId
	}
	return ""
}

func (x *State) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

func (x *State) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

func (x *State) GetState() State_PlayerState {
	if x != nil {
		return x.State
	}
	return State_WAITING
}

func (x *State) GetAttributes() map[string]*State_PlayerAttribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

func (x *State) GetTimestamp() int64 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

type State_PlayerAttribute struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Value:
	//
	//	*State_PlayerAttribute_StringValue
	//	*State_PlayerAttribute_IntValue
	//	*State_PlayerAttribute_FloatValue
	//	*State_PlayerAttribute_BoolValue
	Value isState_PlayerAttribute_Value `protobuf_oneof:"value"`
}

func (x *State_PlayerAttribute) Reset() {
	*x = State_PlayerAttribute{}
	mi := &file_api_player_state_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *State_PlayerAttribute) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*State_PlayerAttribute) ProtoMessage() {}

func (x *State_PlayerAttribute) ProtoReflect() protoreflect.Message {
	mi := &file_api_player_state_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use State_PlayerAttribute.ProtoReflect.Descriptor instead.
func (*State_PlayerAttribute) Descriptor() ([]byte, []int) {
	return file_api_player_state_proto_rawDescGZIP(), []int{0, 1}
}

func (m *State_PlayerAttribute) GetValue() isState_PlayerAttribute_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *State_PlayerAttribute) GetStringValue() string {
	if x, ok := x.GetValue().(*State_PlayerAttribute_StringValue); ok {
		return x.StringValue
	}
	return ""
}

func (x *State_PlayerAttribute) GetIntValue() int32 {
	if x, ok := x.GetValue().(*State_PlayerAttribute_IntValue); ok {
		return x.IntValue
	}
	return 0
}

func (x *State_PlayerAttribute) GetFloatValue() float32 {
	if x, ok := x.GetValue().(*State_PlayerAttribute_FloatValue); ok {
		return x.FloatValue
	}
	return 0
}

func (x *State_PlayerAttribute) GetBoolValue() bool {
	if x, ok := x.GetValue().(*State_PlayerAttribute_BoolValue); ok {
		return x.BoolValue
	}
	return false
}

type isState_PlayerAttribute_Value interface {
	isState_PlayerAttribute_Value()
}

type State_PlayerAttribute_StringValue struct {
	StringValue string `protobuf:"bytes,2,opt,name=string_value,json=stringValue,proto3,oneof"`
}

type State_PlayerAttribute_IntValue struct {
	IntValue int32 `protobuf:"varint,3,opt,name=int_value,json=intValue,proto3,oneof"`
}

type State_PlayerAttribute_FloatValue struct {
	FloatValue float32 `protobuf:"fixed32,4,opt,name=float_value,json=floatValue,proto3,oneof"`
}

type State_PlayerAttribute_BoolValue struct {
	BoolValue bool `protobuf:"varint,5,opt,name=bool_value,json=boolValue,proto3,oneof"`
}

func (*State_PlayerAttribute_StringValue) isState_PlayerAttribute_Value() {}

func (*State_PlayerAttribute_IntValue) isState_PlayerAttribute_Value() {}

func (*State_PlayerAttribute_FloatValue) isState_PlayerAttribute_Value() {}

func (*State_PlayerAttribute_BoolValue) isState_PlayerAttribute_Value() {}

var File_api_player_state_proto protoreflect.FileDescriptor

var file_api_player_state_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2f, 0x73, 0x74, 0x61,
	0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c,
	0x61, 0x79, 0x65, 0x72, 0x22, 0xb0, 0x04, 0x0a, 0x05, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x1b,
	0x0a, 0x09, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x73,
	0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61,
	0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d,
	0x65, 0x49, 0x64, 0x12, 0x33, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x1d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e,
	0x53, 0x74, 0x61, 0x74, 0x65, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74,
	0x65, 0x52, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x12, 0x41, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72,
	0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x65, 0x2e,
	0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52,
	0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x1c, 0x0a, 0x09, 0x74,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x1a, 0x60, 0x0a, 0x0f, 0x41, 0x74, 0x74,
	0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03,
	0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x37,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x65,
	0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65,
	0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0xa2, 0x01, 0x0a, 0x0f,
	0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x12,
	0x23, 0x0a, 0x0c, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x0b, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x12, 0x1d, 0x0a, 0x09, 0x69, 0x6e, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x08, 0x69, 0x6e, 0x74, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x12, 0x21, 0x0a, 0x0b, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x5f, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x02, 0x48, 0x00, 0x52, 0x0a, 0x66, 0x6c, 0x6f, 0x61,
	0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x1f, 0x0a, 0x0a, 0x62, 0x6f, 0x6f, 0x6c, 0x5f, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x48, 0x00, 0x52, 0x09, 0x62, 0x6f,
	0x6f, 0x6c, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x07, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x22, 0x35, 0x0a, 0x0b, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12,
	0x0b, 0x0a, 0x07, 0x57, 0x41, 0x49, 0x54, 0x49, 0x4e, 0x47, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07,
	0x50, 0x4c, 0x41, 0x59, 0x49, 0x4e, 0x47, 0x10, 0x01, 0x12, 0x0c, 0x0a, 0x08, 0x46, 0x49, 0x4e,
	0x49, 0x53, 0x48, 0x45, 0x44, 0x10, 0x02, 0x42, 0x39, 0x5a, 0x37, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66,
	0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72,
	0x61, 0x74, 0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_player_state_proto_rawDescOnce sync.Once
	file_api_player_state_proto_rawDescData = file_api_player_state_proto_rawDesc
)

func file_api_player_state_proto_rawDescGZIP() []byte {
	file_api_player_state_proto_rawDescOnce.Do(func() {
		file_api_player_state_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_player_state_proto_rawDescData)
	})
	return file_api_player_state_proto_rawDescData
}

var file_api_player_state_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_api_player_state_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_api_player_state_proto_goTypes = []any{
	(State_PlayerState)(0),        // 0: api.player.State.PlayerState
	(*State)(nil),                 // 1: api.player.State
	nil,                           // 2: api.player.State.AttributesEntry
	(*State_PlayerAttribute)(nil), // 3: api.player.State.PlayerAttribute
}
var file_api_player_state_proto_depIdxs = []int32{
	0, // 0: api.player.State.state:type_name -> api.player.State.PlayerState
	2, // 1: api.player.State.attributes:type_name -> api.player.State.AttributesEntry
	3, // 2: api.player.State.AttributesEntry.value:type_name -> api.player.State.PlayerAttribute
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_api_player_state_proto_init() }
func file_api_player_state_proto_init() {
	if File_api_player_state_proto != nil {
		return
	}
	file_api_player_state_proto_msgTypes[2].OneofWrappers = []any{
		(*State_PlayerAttribute_StringValue)(nil),
		(*State_PlayerAttribute_IntValue)(nil),
		(*State_PlayerAttribute_FloatValue)(nil),
		(*State_PlayerAttribute_BoolValue)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_player_state_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_api_player_state_proto_goTypes,
		DependencyIndexes: file_api_player_state_proto_depIdxs,
		EnumInfos:         file_api_player_state_proto_enumTypes,
		MessageInfos:      file_api_player_state_proto_msgTypes,
	}.Build()
	File_api_player_state_proto = out.File
	file_api_player_state_proto_rawDesc = nil
	file_api_player_state_proto_goTypes = nil
	file_api_player_state_proto_depIdxs = nil
}
