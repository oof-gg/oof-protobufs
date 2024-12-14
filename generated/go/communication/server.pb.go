// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v5.28.2
// source: communication/server.proto

package communication

import (
	player "generated/go/player"
	game "github.com/oof-gg/oof-protobufs/generated/go/game"
	global "github.com/oof-gg/oof-protobufs/generated/go/global"
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

type Event struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Event:
	//
	//	*Event_GameEvent
	//	*Event_PlayerEvent
	//	*Event_GlobalEvent
	//	*Event_GlobalTime
	Event isEvent_Event `protobuf_oneof:"event"`
}

func (x *Event) Reset() {
	*x = Event{}
	mi := &file_communication_server_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Event) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Event) ProtoMessage() {}

func (x *Event) ProtoReflect() protoreflect.Message {
	mi := &file_communication_server_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Event.ProtoReflect.Descriptor instead.
func (*Event) Descriptor() ([]byte, []int) {
	return file_communication_server_proto_rawDescGZIP(), []int{0}
}

func (m *Event) GetEvent() isEvent_Event {
	if m != nil {
		return m.Event
	}
	return nil
}

func (x *Event) GetGameEvent() *game.GameEvent {
	if x, ok := x.GetEvent().(*Event_GameEvent); ok {
		return x.GameEvent
	}
	return nil
}

func (x *Event) GetPlayerEvent() *player.Action {
	if x, ok := x.GetEvent().(*Event_PlayerEvent); ok {
		return x.PlayerEvent
	}
	return nil
}

func (x *Event) GetGlobalEvent() *global.GlobalEvent {
	if x, ok := x.GetEvent().(*Event_GlobalEvent); ok {
		return x.GlobalEvent
	}
	return nil
}

func (x *Event) GetGlobalTime() *global.GlobalTime {
	if x, ok := x.GetEvent().(*Event_GlobalTime); ok {
		return x.GlobalTime
	}
	return nil
}

type isEvent_Event interface {
	isEvent_Event()
}

type Event_GameEvent struct {
	GameEvent *game.GameEvent `protobuf:"bytes,1,opt,name=game_event,json=gameEvent,proto3,oneof"`
}

type Event_PlayerEvent struct {
	PlayerEvent *player.Action `protobuf:"bytes,2,opt,name=player_event,json=playerEvent,proto3,oneof"`
}

type Event_GlobalEvent struct {
	GlobalEvent *global.GlobalEvent `protobuf:"bytes,3,opt,name=global_event,json=globalEvent,proto3,oneof"`
}

type Event_GlobalTime struct {
	GlobalTime *global.GlobalTime `protobuf:"bytes,4,opt,name=global_time,json=globalTime,proto3,oneof"`
}

func (*Event_GameEvent) isEvent_Event() {}

func (*Event_PlayerEvent) isEvent_Event() {}

func (*Event_GlobalEvent) isEvent_Event() {}

func (*Event_GlobalTime) isEvent_Event() {}

var File_communication_server_proto protoreflect.FileDescriptor

var file_communication_server_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x63, 0x6f, 0x6d, 0x6d, 0x75, 0x6e, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x63, 0x6f,
	0x6d, 0x6d, 0x75, 0x6e, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x10, 0x67, 0x61, 0x6d,
	0x65, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x67,
	0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x11, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2f, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe8, 0x01, 0x0a, 0x05, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x12, 0x30, 0x0a, 0x0a, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x65, 0x76, 0x65, 0x6e,
	0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47,
	0x61, 0x6d, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x48, 0x00, 0x52, 0x09, 0x67, 0x61, 0x6d, 0x65,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x33, 0x0a, 0x0c, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x70, 0x6c,
	0x61, 0x79, 0x65, 0x72, 0x2e, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x48, 0x00, 0x52, 0x0b, 0x70,
	0x6c, 0x61, 0x79, 0x65, 0x72, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x38, 0x0a, 0x0c, 0x67, 0x6c,
	0x6f, 0x62, 0x61, 0x6c, 0x5f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x13, 0x2e, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2e, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x48, 0x00, 0x52, 0x0b, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x12, 0x35, 0x0a, 0x0b, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x5f, 0x74,
	0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x67, 0x6c, 0x6f, 0x62,
	0x61, 0x6c, 0x2e, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x54, 0x69, 0x6d, 0x65, 0x48, 0x00, 0x52,
	0x0a, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x54, 0x69, 0x6d, 0x65, 0x42, 0x07, 0x0a, 0x05, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x32, 0x4f, 0x0a, 0x0d, 0x43, 0x6f, 0x6d, 0x6d, 0x75, 0x6e, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3e, 0x0a, 0x0c, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x14, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x75, 0x6e, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x1a, 0x14, 0x2e, 0x63, 0x6f,
	0x6d, 0x6d, 0x75, 0x6e, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x45, 0x76, 0x65, 0x6e,
	0x74, 0x28, 0x01, 0x30, 0x01, 0x42, 0x3c, 0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74,
	0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x75, 0x6e, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_communication_server_proto_rawDescOnce sync.Once
	file_communication_server_proto_rawDescData = file_communication_server_proto_rawDesc
)

func file_communication_server_proto_rawDescGZIP() []byte {
	file_communication_server_proto_rawDescOnce.Do(func() {
		file_communication_server_proto_rawDescData = protoimpl.X.CompressGZIP(file_communication_server_proto_rawDescData)
	})
	return file_communication_server_proto_rawDescData
}

var file_communication_server_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_communication_server_proto_goTypes = []any{
	(*Event)(nil),              // 0: communication.Event
	(*game.GameEvent)(nil),     // 1: game.GameEvent
	(*player.Action)(nil),      // 2: player.Action
	(*global.GlobalEvent)(nil), // 3: global.GlobalEvent
	(*global.GlobalTime)(nil),  // 4: global.GlobalTime
}
var file_communication_server_proto_depIdxs = []int32{
	1, // 0: communication.Event.game_event:type_name -> game.GameEvent
	2, // 1: communication.Event.player_event:type_name -> player.Action
	3, // 2: communication.Event.global_event:type_name -> global.GlobalEvent
	4, // 3: communication.Event.global_time:type_name -> global.GlobalTime
	0, // 4: communication.Communication.StreamEvents:input_type -> communication.Event
	0, // 5: communication.Communication.StreamEvents:output_type -> communication.Event
	5, // [5:6] is the sub-list for method output_type
	4, // [4:5] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_communication_server_proto_init() }
func file_communication_server_proto_init() {
	if File_communication_server_proto != nil {
		return
	}
	file_communication_server_proto_msgTypes[0].OneofWrappers = []any{
		(*Event_GameEvent)(nil),
		(*Event_PlayerEvent)(nil),
		(*Event_GlobalEvent)(nil),
		(*Event_GlobalTime)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_communication_server_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_communication_server_proto_goTypes,
		DependencyIndexes: file_communication_server_proto_depIdxs,
		MessageInfos:      file_communication_server_proto_msgTypes,
	}.Build()
	File_communication_server_proto = out.File
	file_communication_server_proto_rawDesc = nil
	file_communication_server_proto_goTypes = nil
	file_communication_server_proto_depIdxs = nil
}