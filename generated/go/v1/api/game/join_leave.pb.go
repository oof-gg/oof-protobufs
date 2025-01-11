// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.2
// 	protoc        v5.28.2
// source: v1/api/game/join_leave.proto

package game

import (
	std "github.com/oof-gg/oof-protobufs/generated/go/v1/std"
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

type JoinLeaveGame_Action int32

const (
	JoinLeaveGame_JOIN  JoinLeaveGame_Action = 0
	JoinLeaveGame_LEAVE JoinLeaveGame_Action = 1
)

// Enum value maps for JoinLeaveGame_Action.
var (
	JoinLeaveGame_Action_name = map[int32]string{
		0: "JOIN",
		1: "LEAVE",
	}
	JoinLeaveGame_Action_value = map[string]int32{
		"JOIN":  0,
		"LEAVE": 1,
	}
)

func (x JoinLeaveGame_Action) Enum() *JoinLeaveGame_Action {
	p := new(JoinLeaveGame_Action)
	*p = x
	return p
}

func (x JoinLeaveGame_Action) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (JoinLeaveGame_Action) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_api_game_join_leave_proto_enumTypes[0].Descriptor()
}

func (JoinLeaveGame_Action) Type() protoreflect.EnumType {
	return &file_v1_api_game_join_leave_proto_enumTypes[0]
}

func (x JoinLeaveGame_Action) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use JoinLeaveGame_Action.Descriptor instead.
func (JoinLeaveGame_Action) EnumDescriptor() ([]byte, []int) {
	return file_v1_api_game_join_leave_proto_rawDescGZIP(), []int{0, 0}
}

// / Message joining or leaving a game
type JoinLeaveGame struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	UserId        string                 `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	GameId        string                 `protobuf:"bytes,2,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
	Action        JoinLeaveGame_Action   `protobuf:"varint,3,opt,name=action,proto3,enum=v1.api.game.JoinLeaveGame_Action" json:"action,omitempty"`
	TeamId        *string                `protobuf:"bytes,4,opt,name=team_id,json=teamId,proto3,oneof" json:"team_id,omitempty"`
	SessionId     *string                `protobuf:"bytes,5,opt,name=session_id,json=sessionId,proto3,oneof" json:"session_id,omitempty"`
	Region        *std.RegionEnum        `protobuf:"varint,6,opt,name=region,proto3,enum=v1.api.common.RegionEnum,oneof" json:"region,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *JoinLeaveGame) Reset() {
	*x = JoinLeaveGame{}
	mi := &file_v1_api_game_join_leave_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *JoinLeaveGame) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*JoinLeaveGame) ProtoMessage() {}

func (x *JoinLeaveGame) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_join_leave_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use JoinLeaveGame.ProtoReflect.Descriptor instead.
func (*JoinLeaveGame) Descriptor() ([]byte, []int) {
	return file_v1_api_game_join_leave_proto_rawDescGZIP(), []int{0}
}

func (x *JoinLeaveGame) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *JoinLeaveGame) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

func (x *JoinLeaveGame) GetAction() JoinLeaveGame_Action {
	if x != nil {
		return x.Action
	}
	return JoinLeaveGame_JOIN
}

func (x *JoinLeaveGame) GetTeamId() string {
	if x != nil && x.TeamId != nil {
		return *x.TeamId
	}
	return ""
}

func (x *JoinLeaveGame) GetSessionId() string {
	if x != nil && x.SessionId != nil {
		return *x.SessionId
	}
	return ""
}

func (x *JoinLeaveGame) GetRegion() std.RegionEnum {
	if x != nil && x.Region != nil {
		return *x.Region
	}
	return std.RegionEnum(0)
}

var File_v1_api_game_join_leave_proto protoreflect.FileDescriptor

var file_v1_api_game_join_leave_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x6a, 0x6f,
	0x69, 0x6e, 0x5f, 0x6c, 0x65, 0x61, 0x76, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b,
	0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x1a, 0x1b, 0x76, 0x31, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x72, 0x65, 0x67, 0x69, 0x6f,
	0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xbb, 0x02, 0x0a, 0x0d, 0x4a, 0x6f, 0x69,
	0x6e, 0x4c, 0x65, 0x61, 0x76, 0x65, 0x47, 0x61, 0x6d, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73,
	0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65,
	0x72, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x12, 0x39, 0x0a, 0x06,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x21, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x4a, 0x6f, 0x69, 0x6e, 0x4c,
	0x65, 0x61, 0x76, 0x65, 0x47, 0x61, 0x6d, 0x65, 0x2e, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x0a, 0x07, 0x74, 0x65, 0x61, 0x6d, 0x5f,
	0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x06, 0x74, 0x65, 0x61, 0x6d,
	0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x22, 0x0a, 0x0a, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x09, 0x73, 0x65, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x36, 0x0a, 0x06, 0x72, 0x65, 0x67,
	0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x6f, 0x6e,
	0x45, 0x6e, 0x75, 0x6d, 0x48, 0x02, 0x52, 0x06, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x88, 0x01,
	0x01, 0x22, 0x1d, 0x0a, 0x06, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x08, 0x0a, 0x04, 0x4a,
	0x4f, 0x49, 0x4e, 0x10, 0x00, 0x12, 0x09, 0x0a, 0x05, 0x4c, 0x45, 0x41, 0x56, 0x45, 0x10, 0x01,
	0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x69, 0x64, 0x42, 0x0d, 0x0a, 0x0b,
	0x5f, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x42, 0x09, 0x0a, 0x07, 0x5f,
	0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x42, 0x3a, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61,
	0x74, 0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61,
	0x6d, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_api_game_join_leave_proto_rawDescOnce sync.Once
	file_v1_api_game_join_leave_proto_rawDescData = file_v1_api_game_join_leave_proto_rawDesc
)

func file_v1_api_game_join_leave_proto_rawDescGZIP() []byte {
	file_v1_api_game_join_leave_proto_rawDescOnce.Do(func() {
		file_v1_api_game_join_leave_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_api_game_join_leave_proto_rawDescData)
	})
	return file_v1_api_game_join_leave_proto_rawDescData
}

var file_v1_api_game_join_leave_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_v1_api_game_join_leave_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_v1_api_game_join_leave_proto_goTypes = []any{
	(JoinLeaveGame_Action)(0), // 0: v1.api.game.JoinLeaveGame.Action
	(*JoinLeaveGame)(nil),     // 1: v1.api.game.JoinLeaveGame
	(std.RegionEnum)(0),       // 2: v1.api.common.RegionEnum
}
var file_v1_api_game_join_leave_proto_depIdxs = []int32{
	0, // 0: v1.api.game.JoinLeaveGame.action:type_name -> v1.api.game.JoinLeaveGame.Action
	2, // 1: v1.api.game.JoinLeaveGame.region:type_name -> v1.api.common.RegionEnum
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_v1_api_game_join_leave_proto_init() }
func file_v1_api_game_join_leave_proto_init() {
	if File_v1_api_game_join_leave_proto != nil {
		return
	}
	file_v1_api_game_join_leave_proto_msgTypes[0].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_game_join_leave_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_api_game_join_leave_proto_goTypes,
		DependencyIndexes: file_v1_api_game_join_leave_proto_depIdxs,
		EnumInfos:         file_v1_api_game_join_leave_proto_enumTypes,
		MessageInfos:      file_v1_api_game_join_leave_proto_msgTypes,
	}.Build()
	File_v1_api_game_join_leave_proto = out.File
	file_v1_api_game_join_leave_proto_rawDesc = nil
	file_v1_api_game_join_leave_proto_goTypes = nil
	file_v1_api_game_join_leave_proto_depIdxs = nil
}
