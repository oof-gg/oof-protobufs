// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v5.28.2
// source: v1/api/global/join_leave.proto

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

type RegionEnum int32

const (
	RegionEnum_REGION_UNSPECIFIED RegionEnum = 0 // Default unspecified region
	// Americas
	RegionEnum_NA_EAST RegionEnum = 1 // North America East
	RegionEnum_NA_WEST RegionEnum = 2 // North America West
	RegionEnum_SA      RegionEnum = 3 // South America (all countries)
	// Europe
	RegionEnum_EU_WEST    RegionEnum = 4 // Western Europe
	RegionEnum_EU_CENTRAL RegionEnum = 5 // Central Europe
	RegionEnum_EU_NORTH   RegionEnum = 6 // Northern Europe
	// Asia
	RegionEnum_AS_EAST  RegionEnum = 7 // East Asia
	RegionEnum_AS_SE    RegionEnum = 8 // Southeast Asia
	RegionEnum_AS_SOUTH RegionEnum = 9 // South Asia
	// Oceania
	RegionEnum_OC RegionEnum = 10 // Oceania (e.g., Australia, New Zealand)
	// MENA (Middle East & North Africa)
	RegionEnum_MENA RegionEnum = 11 // Middle East and North Africa
	// Sub-Saharan Africa
	RegionEnum_AFRICA RegionEnum = 12 // Sub-Saharan Africa
	// Global
	RegionEnum_GLOBAL RegionEnum = 13 // Cross-region/global servers
)

// Enum value maps for RegionEnum.
var (
	RegionEnum_name = map[int32]string{
		0:  "REGION_UNSPECIFIED",
		1:  "NA_EAST",
		2:  "NA_WEST",
		3:  "SA",
		4:  "EU_WEST",
		5:  "EU_CENTRAL",
		6:  "EU_NORTH",
		7:  "AS_EAST",
		8:  "AS_SE",
		9:  "AS_SOUTH",
		10: "OC",
		11: "MENA",
		12: "AFRICA",
		13: "GLOBAL",
	}
	RegionEnum_value = map[string]int32{
		"REGION_UNSPECIFIED": 0,
		"NA_EAST":            1,
		"NA_WEST":            2,
		"SA":                 3,
		"EU_WEST":            4,
		"EU_CENTRAL":         5,
		"EU_NORTH":           6,
		"AS_EAST":            7,
		"AS_SE":              8,
		"AS_SOUTH":           9,
		"OC":                 10,
		"MENA":               11,
		"AFRICA":             12,
		"GLOBAL":             13,
	}
)

func (x RegionEnum) Enum() *RegionEnum {
	p := new(RegionEnum)
	*p = x
	return p
}

func (x RegionEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (RegionEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_api_global_join_leave_proto_enumTypes[0].Descriptor()
}

func (RegionEnum) Type() protoreflect.EnumType {
	return &file_v1_api_global_join_leave_proto_enumTypes[0]
}

func (x RegionEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use RegionEnum.Descriptor instead.
func (RegionEnum) EnumDescriptor() ([]byte, []int) {
	return file_v1_api_global_join_leave_proto_rawDescGZIP(), []int{0}
}

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
	return file_v1_api_global_join_leave_proto_enumTypes[1].Descriptor()
}

func (JoinLeaveGame_Action) Type() protoreflect.EnumType {
	return &file_v1_api_global_join_leave_proto_enumTypes[1]
}

func (x JoinLeaveGame_Action) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use JoinLeaveGame_Action.Descriptor instead.
func (JoinLeaveGame_Action) EnumDescriptor() ([]byte, []int) {
	return file_v1_api_global_join_leave_proto_rawDescGZIP(), []int{0, 0}
}

// Message joining or leaving a game
type JoinLeaveGame struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PlayerId  string               `protobuf:"bytes,1,opt,name=player_id,json=playerId,proto3" json:"player_id,omitempty"`
	GameId    string               `protobuf:"bytes,2,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
	Action    JoinLeaveGame_Action `protobuf:"varint,3,opt,name=action,proto3,enum=v1.api.global.JoinLeaveGame_Action" json:"action,omitempty"`
	TeamId    *string              `protobuf:"bytes,4,opt,name=team_id,json=teamId,proto3,oneof" json:"team_id,omitempty"`
	SessionId *string              `protobuf:"bytes,5,opt,name=session_id,json=sessionId,proto3,oneof" json:"session_id,omitempty"`
	Region    *RegionEnum          `protobuf:"varint,6,opt,name=region,proto3,enum=v1.api.global.RegionEnum,oneof" json:"region,omitempty"`
}

func (x *JoinLeaveGame) Reset() {
	*x = JoinLeaveGame{}
	mi := &file_v1_api_global_join_leave_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *JoinLeaveGame) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*JoinLeaveGame) ProtoMessage() {}

func (x *JoinLeaveGame) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_global_join_leave_proto_msgTypes[0]
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
	return file_v1_api_global_join_leave_proto_rawDescGZIP(), []int{0}
}

func (x *JoinLeaveGame) GetPlayerId() string {
	if x != nil {
		return x.PlayerId
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

func (x *JoinLeaveGame) GetRegion() RegionEnum {
	if x != nil && x.Region != nil {
		return *x.Region
	}
	return RegionEnum_REGION_UNSPECIFIED
}

var File_v1_api_global_join_leave_proto protoreflect.FileDescriptor

var file_v1_api_global_join_leave_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2f,
	0x6a, 0x6f, 0x69, 0x6e, 0x5f, 0x6c, 0x65, 0x61, 0x76, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0d, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x22,
	0xc1, 0x02, 0x0a, 0x0d, 0x4a, 0x6f, 0x69, 0x6e, 0x4c, 0x65, 0x61, 0x76, 0x65, 0x47, 0x61, 0x6d,
	0x65, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x12, 0x17,
	0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x12, 0x3b, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x23, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2e, 0x4a, 0x6f, 0x69, 0x6e, 0x4c, 0x65, 0x61, 0x76,
	0x65, 0x47, 0x61, 0x6d, 0x65, 0x2e, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x06, 0x61, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x0a, 0x07, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x69, 0x64, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x06, 0x74, 0x65, 0x61, 0x6d, 0x49, 0x64, 0x88,
	0x01, 0x01, 0x12, 0x22, 0x0a, 0x0a, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x09, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x36, 0x0a, 0x06, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x45, 0x6e, 0x75,
	0x6d, 0x48, 0x02, 0x52, 0x06, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x88, 0x01, 0x01, 0x22, 0x1d,
	0x0a, 0x06, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x08, 0x0a, 0x04, 0x4a, 0x4f, 0x49, 0x4e,
	0x10, 0x00, 0x12, 0x09, 0x0a, 0x05, 0x4c, 0x45, 0x41, 0x56, 0x45, 0x10, 0x01, 0x42, 0x0a, 0x0a,
	0x08, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x5f, 0x69, 0x64, 0x42, 0x0d, 0x0a, 0x0b, 0x5f, 0x73, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x72, 0x65, 0x67,
	0x69, 0x6f, 0x6e, 0x2a, 0xc1, 0x01, 0x0a, 0x0a, 0x52, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x45, 0x6e,
	0x75, 0x6d, 0x12, 0x16, 0x0a, 0x12, 0x52, 0x45, 0x47, 0x49, 0x4f, 0x4e, 0x5f, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07, 0x4e, 0x41,
	0x5f, 0x45, 0x41, 0x53, 0x54, 0x10, 0x01, 0x12, 0x0b, 0x0a, 0x07, 0x4e, 0x41, 0x5f, 0x57, 0x45,
	0x53, 0x54, 0x10, 0x02, 0x12, 0x06, 0x0a, 0x02, 0x53, 0x41, 0x10, 0x03, 0x12, 0x0b, 0x0a, 0x07,
	0x45, 0x55, 0x5f, 0x57, 0x45, 0x53, 0x54, 0x10, 0x04, 0x12, 0x0e, 0x0a, 0x0a, 0x45, 0x55, 0x5f,
	0x43, 0x45, 0x4e, 0x54, 0x52, 0x41, 0x4c, 0x10, 0x05, 0x12, 0x0c, 0x0a, 0x08, 0x45, 0x55, 0x5f,
	0x4e, 0x4f, 0x52, 0x54, 0x48, 0x10, 0x06, 0x12, 0x0b, 0x0a, 0x07, 0x41, 0x53, 0x5f, 0x45, 0x41,
	0x53, 0x54, 0x10, 0x07, 0x12, 0x09, 0x0a, 0x05, 0x41, 0x53, 0x5f, 0x53, 0x45, 0x10, 0x08, 0x12,
	0x0c, 0x0a, 0x08, 0x41, 0x53, 0x5f, 0x53, 0x4f, 0x55, 0x54, 0x48, 0x10, 0x09, 0x12, 0x06, 0x0a,
	0x02, 0x4f, 0x43, 0x10, 0x0a, 0x12, 0x08, 0x0a, 0x04, 0x4d, 0x45, 0x4e, 0x41, 0x10, 0x0b, 0x12,
	0x0a, 0x0a, 0x06, 0x41, 0x46, 0x52, 0x49, 0x43, 0x41, 0x10, 0x0c, 0x12, 0x0a, 0x0a, 0x06, 0x47,
	0x4c, 0x4f, 0x42, 0x41, 0x4c, 0x10, 0x0d, 0x42, 0x3c, 0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66,
	0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72,
	0x61, 0x74, 0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67,
	0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_api_global_join_leave_proto_rawDescOnce sync.Once
	file_v1_api_global_join_leave_proto_rawDescData = file_v1_api_global_join_leave_proto_rawDesc
)

func file_v1_api_global_join_leave_proto_rawDescGZIP() []byte {
	file_v1_api_global_join_leave_proto_rawDescOnce.Do(func() {
		file_v1_api_global_join_leave_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_api_global_join_leave_proto_rawDescData)
	})
	return file_v1_api_global_join_leave_proto_rawDescData
}

var file_v1_api_global_join_leave_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_v1_api_global_join_leave_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_v1_api_global_join_leave_proto_goTypes = []any{
	(RegionEnum)(0),           // 0: v1.api.global.RegionEnum
	(JoinLeaveGame_Action)(0), // 1: v1.api.global.JoinLeaveGame.Action
	(*JoinLeaveGame)(nil),     // 2: v1.api.global.JoinLeaveGame
}
var file_v1_api_global_join_leave_proto_depIdxs = []int32{
	1, // 0: v1.api.global.JoinLeaveGame.action:type_name -> v1.api.global.JoinLeaveGame.Action
	0, // 1: v1.api.global.JoinLeaveGame.region:type_name -> v1.api.global.RegionEnum
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_v1_api_global_join_leave_proto_init() }
func file_v1_api_global_join_leave_proto_init() {
	if File_v1_api_global_join_leave_proto != nil {
		return
	}
	file_v1_api_global_join_leave_proto_msgTypes[0].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_global_join_leave_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_api_global_join_leave_proto_goTypes,
		DependencyIndexes: file_v1_api_global_join_leave_proto_depIdxs,
		EnumInfos:         file_v1_api_global_join_leave_proto_enumTypes,
		MessageInfos:      file_v1_api_global_join_leave_proto_msgTypes,
	}.Build()
	File_v1_api_global_join_leave_proto = out.File
	file_v1_api_global_join_leave_proto_rawDesc = nil
	file_v1_api_global_join_leave_proto_goTypes = nil
	file_v1_api_global_join_leave_proto_depIdxs = nil
}
