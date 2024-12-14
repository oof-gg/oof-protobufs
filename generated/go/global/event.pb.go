// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v5.28.2
// source: global/event.proto

package global

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

// / Enum for event types
type GlobalEvent_EventType int32

const (
	// / Custom events
	GlobalEvent_CUSTOM GlobalEvent_EventType = 0
	// / Announcements
	GlobalEvent_ANNOUNCEMENT GlobalEvent_EventType = 1
	// / Alerts
	GlobalEvent_ALERT GlobalEvent_EventType = 2
	// / Events
	GlobalEvent_EVENT GlobalEvent_EventType = 3
	// / Requests
	GlobalEvent_REQUEST GlobalEvent_EventType = 4
)

// Enum value maps for GlobalEvent_EventType.
var (
	GlobalEvent_EventType_name = map[int32]string{
		0: "CUSTOM",
		1: "ANNOUNCEMENT",
		2: "ALERT",
		3: "EVENT",
		4: "REQUEST",
	}
	GlobalEvent_EventType_value = map[string]int32{
		"CUSTOM":       0,
		"ANNOUNCEMENT": 1,
		"ALERT":        2,
		"EVENT":        3,
		"REQUEST":      4,
	}
)

func (x GlobalEvent_EventType) Enum() *GlobalEvent_EventType {
	p := new(GlobalEvent_EventType)
	*p = x
	return p
}

func (x GlobalEvent_EventType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (GlobalEvent_EventType) Descriptor() protoreflect.EnumDescriptor {
	return file_global_event_proto_enumTypes[0].Descriptor()
}

func (GlobalEvent_EventType) Type() protoreflect.EnumType {
	return &file_global_event_proto_enumTypes[0]
}

func (x GlobalEvent_EventType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use GlobalEvent_EventType.Descriptor instead.
func (GlobalEvent_EventType) EnumDescriptor() ([]byte, []int) {
	return file_global_event_proto_rawDescGZIP(), []int{0, 0}
}

// Global Events, message can trigger API calls or other events
type GlobalEvent struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// / Unique identifier for the event to prevent duplicates, and to be able to retrieve the event from the server if necessary
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// / Event name
	EventName string `protobuf:"bytes,2,opt,name=event_name,json=eventName,proto3" json:"event_name,omitempty"`
	// / Unix timestamp in milliseconds to synchronize time across clients
	Timestamp int64 `protobuf:"varint,3,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	// / Game ID
	GameId *string `protobuf:"bytes,4,opt,name=game_id,json=gameId,proto3,oneof" json:"game_id,omitempty"`
	// / Player ID
	PlayerId *string `protobuf:"bytes,5,opt,name=player_id,json=playerId,proto3,oneof" json:"player_id,omitempty"`
	// / Team ID
	TeamId *string `protobuf:"bytes,6,opt,name=team_id,json=teamId,proto3,oneof" json:"team_id,omitempty"`
	// / Can be a key-value pair and the values can be string, int, float, or bool
	Attributes map[string]*GlobalEvent_EventAttribute `protobuf:"bytes,7,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// / Enum for event types
	Type GlobalEvent_EventType `protobuf:"varint,8,opt,name=type,proto3,enum=global.GlobalEvent_EventType" json:"type,omitempty"`
}

func (x *GlobalEvent) Reset() {
	*x = GlobalEvent{}
	mi := &file_global_event_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GlobalEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GlobalEvent) ProtoMessage() {}

func (x *GlobalEvent) ProtoReflect() protoreflect.Message {
	mi := &file_global_event_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GlobalEvent.ProtoReflect.Descriptor instead.
func (*GlobalEvent) Descriptor() ([]byte, []int) {
	return file_global_event_proto_rawDescGZIP(), []int{0}
}

func (x *GlobalEvent) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GlobalEvent) GetEventName() string {
	if x != nil {
		return x.EventName
	}
	return ""
}

func (x *GlobalEvent) GetTimestamp() int64 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

func (x *GlobalEvent) GetGameId() string {
	if x != nil && x.GameId != nil {
		return *x.GameId
	}
	return ""
}

func (x *GlobalEvent) GetPlayerId() string {
	if x != nil && x.PlayerId != nil {
		return *x.PlayerId
	}
	return ""
}

func (x *GlobalEvent) GetTeamId() string {
	if x != nil && x.TeamId != nil {
		return *x.TeamId
	}
	return ""
}

func (x *GlobalEvent) GetAttributes() map[string]*GlobalEvent_EventAttribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

func (x *GlobalEvent) GetType() GlobalEvent_EventType {
	if x != nil {
		return x.Type
	}
	return GlobalEvent_CUSTOM
}

// / Message for event attributes
type GlobalEvent_EventAttribute struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Value:
	//
	//	*GlobalEvent_EventAttribute_StringValue
	//	*GlobalEvent_EventAttribute_IntValue
	//	*GlobalEvent_EventAttribute_FloatValue
	//	*GlobalEvent_EventAttribute_BoolValue
	Value isGlobalEvent_EventAttribute_Value `protobuf_oneof:"value"`
}

func (x *GlobalEvent_EventAttribute) Reset() {
	*x = GlobalEvent_EventAttribute{}
	mi := &file_global_event_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GlobalEvent_EventAttribute) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GlobalEvent_EventAttribute) ProtoMessage() {}

func (x *GlobalEvent_EventAttribute) ProtoReflect() protoreflect.Message {
	mi := &file_global_event_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GlobalEvent_EventAttribute.ProtoReflect.Descriptor instead.
func (*GlobalEvent_EventAttribute) Descriptor() ([]byte, []int) {
	return file_global_event_proto_rawDescGZIP(), []int{0, 1}
}

func (m *GlobalEvent_EventAttribute) GetValue() isGlobalEvent_EventAttribute_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *GlobalEvent_EventAttribute) GetStringValue() string {
	if x, ok := x.GetValue().(*GlobalEvent_EventAttribute_StringValue); ok {
		return x.StringValue
	}
	return ""
}

func (x *GlobalEvent_EventAttribute) GetIntValue() int32 {
	if x, ok := x.GetValue().(*GlobalEvent_EventAttribute_IntValue); ok {
		return x.IntValue
	}
	return 0
}

func (x *GlobalEvent_EventAttribute) GetFloatValue() float32 {
	if x, ok := x.GetValue().(*GlobalEvent_EventAttribute_FloatValue); ok {
		return x.FloatValue
	}
	return 0
}

func (x *GlobalEvent_EventAttribute) GetBoolValue() bool {
	if x, ok := x.GetValue().(*GlobalEvent_EventAttribute_BoolValue); ok {
		return x.BoolValue
	}
	return false
}

type isGlobalEvent_EventAttribute_Value interface {
	isGlobalEvent_EventAttribute_Value()
}

type GlobalEvent_EventAttribute_StringValue struct {
	StringValue string `protobuf:"bytes,1,opt,name=string_value,json=stringValue,proto3,oneof"`
}

type GlobalEvent_EventAttribute_IntValue struct {
	IntValue int32 `protobuf:"varint,2,opt,name=int_value,json=intValue,proto3,oneof"`
}

type GlobalEvent_EventAttribute_FloatValue struct {
	FloatValue float32 `protobuf:"fixed32,3,opt,name=float_value,json=floatValue,proto3,oneof"`
}

type GlobalEvent_EventAttribute_BoolValue struct {
	BoolValue bool `protobuf:"varint,4,opt,name=bool_value,json=boolValue,proto3,oneof"`
}

func (*GlobalEvent_EventAttribute_StringValue) isGlobalEvent_EventAttribute_Value() {}

func (*GlobalEvent_EventAttribute_IntValue) isGlobalEvent_EventAttribute_Value() {}

func (*GlobalEvent_EventAttribute_FloatValue) isGlobalEvent_EventAttribute_Value() {}

func (*GlobalEvent_EventAttribute_BoolValue) isGlobalEvent_EventAttribute_Value() {}

var File_global_event_proto protoreflect.FileDescriptor

var file_global_event_proto_rawDesc = []byte{
	0x0a, 0x12, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x22, 0xab, 0x05, 0x0a,
	0x0b, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x74,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x1c, 0x0a, 0x07, 0x67, 0x61, 0x6d,
	0x65, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x06, 0x67, 0x61,
	0x6d, 0x65, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x20, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x79, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x08, 0x70, 0x6c,
	0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x1c, 0x0a, 0x07, 0x74, 0x65, 0x61,
	0x6d, 0x5f, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x06, 0x74, 0x65,
	0x61, 0x6d, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x43, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69,
	0x62, 0x75, 0x74, 0x65, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x67, 0x6c,
	0x6f, 0x62, 0x61, 0x6c, 0x2e, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x45, 0x76, 0x65, 0x6e, 0x74,
	0x2e, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x31, 0x0a, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1d, 0x2e, 0x67, 0x6c, 0x6f,
	0x62, 0x61, 0x6c, 0x2e, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x2e,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x1a,
	0x61, 0x0a, 0x0f, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x03, 0x6b, 0x65, 0x79, 0x12, 0x38, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2e, 0x47, 0x6c, 0x6f,
	0x62, 0x61, 0x6c, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x41, 0x74,
	0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x1a, 0xa1, 0x01, 0x0a, 0x0e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x41, 0x74, 0x74, 0x72,
	0x69, 0x62, 0x75, 0x74, 0x65, 0x12, 0x23, 0x0a, 0x0c, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x5f,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x0b, 0x73,
	0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x1d, 0x0a, 0x09, 0x69, 0x6e,
	0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52,
	0x08, 0x69, 0x6e, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x21, 0x0a, 0x0b, 0x66, 0x6c, 0x6f,
	0x61, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x02, 0x48, 0x00,
	0x52, 0x0a, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x1f, 0x0a, 0x0a,
	0x62, 0x6f, 0x6f, 0x6c, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08,
	0x48, 0x00, 0x52, 0x09, 0x62, 0x6f, 0x6f, 0x6c, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x07, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x4c, 0x0a, 0x09, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x54,
	0x79, 0x70, 0x65, 0x12, 0x0a, 0x0a, 0x06, 0x43, 0x55, 0x53, 0x54, 0x4f, 0x4d, 0x10, 0x00, 0x12,
	0x10, 0x0a, 0x0c, 0x41, 0x4e, 0x4e, 0x4f, 0x55, 0x4e, 0x43, 0x45, 0x4d, 0x45, 0x4e, 0x54, 0x10,
	0x01, 0x12, 0x09, 0x0a, 0x05, 0x41, 0x4c, 0x45, 0x52, 0x54, 0x10, 0x02, 0x12, 0x09, 0x0a, 0x05,
	0x45, 0x56, 0x45, 0x4e, 0x54, 0x10, 0x03, 0x12, 0x0b, 0x0a, 0x07, 0x52, 0x45, 0x51, 0x55, 0x45,
	0x53, 0x54, 0x10, 0x04, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64,
	0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x42, 0x0a,
	0x0a, 0x08, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x69, 0x64, 0x42, 0x35, 0x5a, 0x33, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f,
	0x6f, 0x6f, 0x66, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65,
	0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x67, 0x6c, 0x6f, 0x62, 0x61,
	0x6c, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_global_event_proto_rawDescOnce sync.Once
	file_global_event_proto_rawDescData = file_global_event_proto_rawDesc
)

func file_global_event_proto_rawDescGZIP() []byte {
	file_global_event_proto_rawDescOnce.Do(func() {
		file_global_event_proto_rawDescData = protoimpl.X.CompressGZIP(file_global_event_proto_rawDescData)
	})
	return file_global_event_proto_rawDescData
}

var file_global_event_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_global_event_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_global_event_proto_goTypes = []any{
	(GlobalEvent_EventType)(0),         // 0: global.GlobalEvent.EventType
	(*GlobalEvent)(nil),                // 1: global.GlobalEvent
	nil,                                // 2: global.GlobalEvent.AttributesEntry
	(*GlobalEvent_EventAttribute)(nil), // 3: global.GlobalEvent.EventAttribute
}
var file_global_event_proto_depIdxs = []int32{
	2, // 0: global.GlobalEvent.attributes:type_name -> global.GlobalEvent.AttributesEntry
	0, // 1: global.GlobalEvent.type:type_name -> global.GlobalEvent.EventType
	3, // 2: global.GlobalEvent.AttributesEntry.value:type_name -> global.GlobalEvent.EventAttribute
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_global_event_proto_init() }
func file_global_event_proto_init() {
	if File_global_event_proto != nil {
		return
	}
	file_global_event_proto_msgTypes[0].OneofWrappers = []any{}
	file_global_event_proto_msgTypes[2].OneofWrappers = []any{
		(*GlobalEvent_EventAttribute_StringValue)(nil),
		(*GlobalEvent_EventAttribute_IntValue)(nil),
		(*GlobalEvent_EventAttribute_FloatValue)(nil),
		(*GlobalEvent_EventAttribute_BoolValue)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_global_event_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_global_event_proto_goTypes,
		DependencyIndexes: file_global_event_proto_depIdxs,
		EnumInfos:         file_global_event_proto_enumTypes,
		MessageInfos:      file_global_event_proto_msgTypes,
	}.Build()
	File_global_event_proto = out.File
	file_global_event_proto_rawDesc = nil
	file_global_event_proto_goTypes = nil
	file_global_event_proto_depIdxs = nil
}
