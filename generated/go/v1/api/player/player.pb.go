// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.14.0
// source: v1/api/player/player.proto

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

type PlayerType int32

const (
	PlayerType_HUMAN PlayerType = 0 // default
	PlayerType_AI    PlayerType = 1
)

// Enum value maps for PlayerType.
var (
	PlayerType_name = map[int32]string{
		0: "HUMAN",
		1: "AI",
	}
	PlayerType_value = map[string]int32{
		"HUMAN": 0,
		"AI":    1,
	}
)

func (x PlayerType) Enum() *PlayerType {
	p := new(PlayerType)
	*p = x
	return p
}

func (x PlayerType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (PlayerType) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_api_player_player_proto_enumTypes[0].Descriptor()
}

func (PlayerType) Type() protoreflect.EnumType {
	return &file_v1_api_player_player_proto_enumTypes[0]
}

func (x PlayerType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use PlayerType.Descriptor instead.
func (PlayerType) EnumDescriptor() ([]byte, []int) {
	return file_v1_api_player_player_proto_rawDescGZIP(), []int{0}
}

type PlayerStatus int32

const (
	PlayerStatus_ACTIVE   PlayerStatus = 0 // default
	PlayerStatus_INACTIVE PlayerStatus = 1
)

// Enum value maps for PlayerStatus.
var (
	PlayerStatus_name = map[int32]string{
		0: "ACTIVE",
		1: "INACTIVE",
	}
	PlayerStatus_value = map[string]int32{
		"ACTIVE":   0,
		"INACTIVE": 1,
	}
)

func (x PlayerStatus) Enum() *PlayerStatus {
	p := new(PlayerStatus)
	*p = x
	return p
}

func (x PlayerStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (PlayerStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_api_player_player_proto_enumTypes[1].Descriptor()
}

func (PlayerStatus) Type() protoreflect.EnumType {
	return &file_v1_api_player_player_proto_enumTypes[1]
}

func (x PlayerStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use PlayerStatus.Descriptor instead.
func (PlayerStatus) EnumDescriptor() ([]byte, []int) {
	return file_v1_api_player_player_proto_rawDescGZIP(), []int{1}
}

type Player struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string       `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Username string       `protobuf:"bytes,2,opt,name=username,proto3" json:"username,omitempty"`
	Email    *string      `protobuf:"bytes,3,opt,name=email,proto3,oneof" json:"email,omitempty"`
	Team     *string      `protobuf:"bytes,4,opt,name=team,proto3,oneof" json:"team,omitempty"`
	Score    int32        `protobuf:"varint,5,opt,name=score,proto3" json:"score,omitempty"`
	Type     PlayerType   `protobuf:"varint,6,opt,name=type,proto3,enum=v1.api.player.PlayerType" json:"type,omitempty"`
	Status   PlayerStatus `protobuf:"varint,7,opt,name=status,proto3,enum=v1.api.player.PlayerStatus" json:"status,omitempty"`
	Role     *string      `protobuf:"bytes,8,opt,name=role,proto3,oneof" json:"role,omitempty"` // Role of the player in the game
}

func (x *Player) Reset() {
	*x = Player{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_api_player_player_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Player) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Player) ProtoMessage() {}

func (x *Player) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_player_player_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Player.ProtoReflect.Descriptor instead.
func (*Player) Descriptor() ([]byte, []int) {
	return file_v1_api_player_player_proto_rawDescGZIP(), []int{0}
}

func (x *Player) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Player) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *Player) GetEmail() string {
	if x != nil && x.Email != nil {
		return *x.Email
	}
	return ""
}

func (x *Player) GetTeam() string {
	if x != nil && x.Team != nil {
		return *x.Team
	}
	return ""
}

func (x *Player) GetScore() int32 {
	if x != nil {
		return x.Score
	}
	return 0
}

func (x *Player) GetType() PlayerType {
	if x != nil {
		return x.Type
	}
	return PlayerType_HUMAN
}

func (x *Player) GetStatus() PlayerStatus {
	if x != nil {
		return x.Status
	}
	return PlayerStatus_ACTIVE
}

func (x *Player) GetRole() string {
	if x != nil && x.Role != nil {
		return *x.Role
	}
	return ""
}

type PlayerCreate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Username string       `protobuf:"bytes,1,opt,name=username,proto3" json:"username,omitempty"`
	Email    *string      `protobuf:"bytes,2,opt,name=email,proto3,oneof" json:"email,omitempty"`
	Team     *string      `protobuf:"bytes,3,opt,name=team,proto3,oneof" json:"team,omitempty"`
	Score    int32        `protobuf:"varint,4,opt,name=score,proto3" json:"score,omitempty"`
	Type     PlayerType   `protobuf:"varint,5,opt,name=type,proto3,enum=v1.api.player.PlayerType" json:"type,omitempty"`
	Status   PlayerStatus `protobuf:"varint,6,opt,name=status,proto3,enum=v1.api.player.PlayerStatus" json:"status,omitempty"`
	Role     *string      `protobuf:"bytes,7,opt,name=role,proto3,oneof" json:"role,omitempty"`
}

func (x *PlayerCreate) Reset() {
	*x = PlayerCreate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_api_player_player_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlayerCreate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlayerCreate) ProtoMessage() {}

func (x *PlayerCreate) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_player_player_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlayerCreate.ProtoReflect.Descriptor instead.
func (*PlayerCreate) Descriptor() ([]byte, []int) {
	return file_v1_api_player_player_proto_rawDescGZIP(), []int{1}
}

func (x *PlayerCreate) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *PlayerCreate) GetEmail() string {
	if x != nil && x.Email != nil {
		return *x.Email
	}
	return ""
}

func (x *PlayerCreate) GetTeam() string {
	if x != nil && x.Team != nil {
		return *x.Team
	}
	return ""
}

func (x *PlayerCreate) GetScore() int32 {
	if x != nil {
		return x.Score
	}
	return 0
}

func (x *PlayerCreate) GetType() PlayerType {
	if x != nil {
		return x.Type
	}
	return PlayerType_HUMAN
}

func (x *PlayerCreate) GetStatus() PlayerStatus {
	if x != nil {
		return x.Status
	}
	return PlayerStatus_ACTIVE
}

func (x *PlayerCreate) GetRole() string {
	if x != nil && x.Role != nil {
		return *x.Role
	}
	return ""
}

type PlayerUpdate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     string        `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Team   *string       `protobuf:"bytes,4,opt,name=team,proto3,oneof" json:"team,omitempty"`
	Type   *PlayerType   `protobuf:"varint,6,opt,name=type,proto3,enum=v1.api.player.PlayerType,oneof" json:"type,omitempty"`
	Status *PlayerStatus `protobuf:"varint,7,opt,name=status,proto3,enum=v1.api.player.PlayerStatus,oneof" json:"status,omitempty"`
	Role   *string       `protobuf:"bytes,8,opt,name=role,proto3,oneof" json:"role,omitempty"`
}

func (x *PlayerUpdate) Reset() {
	*x = PlayerUpdate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_api_player_player_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlayerUpdate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlayerUpdate) ProtoMessage() {}

func (x *PlayerUpdate) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_player_player_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlayerUpdate.ProtoReflect.Descriptor instead.
func (*PlayerUpdate) Descriptor() ([]byte, []int) {
	return file_v1_api_player_player_proto_rawDescGZIP(), []int{2}
}

func (x *PlayerUpdate) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PlayerUpdate) GetTeam() string {
	if x != nil && x.Team != nil {
		return *x.Team
	}
	return ""
}

func (x *PlayerUpdate) GetType() PlayerType {
	if x != nil && x.Type != nil {
		return *x.Type
	}
	return PlayerType_HUMAN
}

func (x *PlayerUpdate) GetStatus() PlayerStatus {
	if x != nil && x.Status != nil {
		return *x.Status
	}
	return PlayerStatus_ACTIVE
}

func (x *PlayerUpdate) GetRole() string {
	if x != nil && x.Role != nil {
		return *x.Role
	}
	return ""
}

type PlayerGet struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id *string `protobuf:"bytes,1,opt,name=id,proto3,oneof" json:"id,omitempty"`
}

func (x *PlayerGet) Reset() {
	*x = PlayerGet{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_api_player_player_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlayerGet) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlayerGet) ProtoMessage() {}

func (x *PlayerGet) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_player_player_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlayerGet.ProtoReflect.Descriptor instead.
func (*PlayerGet) Descriptor() ([]byte, []int) {
	return file_v1_api_player_player_proto_rawDescGZIP(), []int{3}
}

func (x *PlayerGet) GetId() string {
	if x != nil && x.Id != nil {
		return *x.Id
	}
	return ""
}

type Players struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Players []*Player `protobuf:"bytes,1,rep,name=players,proto3" json:"players,omitempty"`
}

func (x *Players) Reset() {
	*x = Players{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_api_player_player_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Players) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Players) ProtoMessage() {}

func (x *Players) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_player_player_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Players.ProtoReflect.Descriptor instead.
func (*Players) Descriptor() ([]byte, []int) {
	return file_v1_api_player_player_proto_rawDescGZIP(), []int{4}
}

func (x *Players) GetPlayers() []*Player {
	if x != nil {
		return x.Players
	}
	return nil
}

var File_v1_api_player_player_proto protoreflect.FileDescriptor

var file_v1_api_player_player_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2f,
	0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x22, 0x97, 0x02, 0x0a, 0x06,
	0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x19, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x00, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a,
	0x04, 0x74, 0x65, 0x61, 0x6d, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x04, 0x74,
	0x65, 0x61, 0x6d, 0x88, 0x01, 0x01, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x12, 0x2d, 0x0a, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65,
	0x72, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x33, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1b, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x50, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x17, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02,
	0x52, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x88, 0x01, 0x01, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x65, 0x6d,
	0x61, 0x69, 0x6c, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x42, 0x07, 0x0a, 0x05,
	0x5f, 0x72, 0x6f, 0x6c, 0x65, 0x22, 0x8d, 0x02, 0x0a, 0x0c, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x19, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x00, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a,
	0x04, 0x74, 0x65, 0x61, 0x6d, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x04, 0x74,
	0x65, 0x61, 0x6d, 0x88, 0x01, 0x01, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x12, 0x2d, 0x0a, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65,
	0x72, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x33, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1b, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x50, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x17, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02,
	0x52, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x88, 0x01, 0x01, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x65, 0x6d,
	0x61, 0x69, 0x6c, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x42, 0x07, 0x0a, 0x05,
	0x5f, 0x72, 0x6f, 0x6c, 0x65, 0x22, 0xe4, 0x01, 0x0a, 0x0c, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x17, 0x0a, 0x04, 0x74, 0x65, 0x61, 0x6d, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x04, 0x74, 0x65, 0x61, 0x6d, 0x88, 0x01, 0x01, 0x12,
	0x32, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x2e, 0x50, 0x6c,
	0x61, 0x79, 0x65, 0x72, 0x54, 0x79, 0x70, 0x65, 0x48, 0x01, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x88, 0x01, 0x01, 0x12, 0x38, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x1b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61,
	0x79, 0x65, 0x72, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x48, 0x02, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a,
	0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x03, 0x52, 0x04, 0x72,
	0x6f, 0x6c, 0x65, 0x88, 0x01, 0x01, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x74, 0x65, 0x61, 0x6d, 0x42,
	0x07, 0x0a, 0x05, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x72, 0x6f, 0x6c, 0x65, 0x22, 0x27, 0x0a, 0x09,
	0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x47, 0x65, 0x74, 0x12, 0x13, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x02, 0x69, 0x64, 0x88, 0x01, 0x01, 0x42, 0x05,
	0x0a, 0x03, 0x5f, 0x69, 0x64, 0x22, 0x3a, 0x0a, 0x07, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73,
	0x12, 0x2f, 0x0a, 0x07, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x15, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6c, 0x61, 0x79, 0x65,
	0x72, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x07, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x73, 0x2a, 0x1f, 0x0a, 0x0a, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x54, 0x79, 0x70, 0x65, 0x12,
	0x09, 0x0a, 0x05, 0x48, 0x55, 0x4d, 0x41, 0x4e, 0x10, 0x00, 0x12, 0x06, 0x0a, 0x02, 0x41, 0x49,
	0x10, 0x01, 0x2a, 0x28, 0x0a, 0x0c, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x0a, 0x0a, 0x06, 0x41, 0x43, 0x54, 0x49, 0x56, 0x45, 0x10, 0x00, 0x12, 0x0c,
	0x0a, 0x08, 0x49, 0x4e, 0x41, 0x43, 0x54, 0x49, 0x56, 0x45, 0x10, 0x01, 0x42, 0x3c, 0x5a, 0x3a,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67,
	0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f,
	0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_v1_api_player_player_proto_rawDescOnce sync.Once
	file_v1_api_player_player_proto_rawDescData = file_v1_api_player_player_proto_rawDesc
)

func file_v1_api_player_player_proto_rawDescGZIP() []byte {
	file_v1_api_player_player_proto_rawDescOnce.Do(func() {
		file_v1_api_player_player_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_api_player_player_proto_rawDescData)
	})
	return file_v1_api_player_player_proto_rawDescData
}

var file_v1_api_player_player_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_v1_api_player_player_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_v1_api_player_player_proto_goTypes = []interface{}{
	(PlayerType)(0),      // 0: v1.api.player.PlayerType
	(PlayerStatus)(0),    // 1: v1.api.player.PlayerStatus
	(*Player)(nil),       // 2: v1.api.player.Player
	(*PlayerCreate)(nil), // 3: v1.api.player.PlayerCreate
	(*PlayerUpdate)(nil), // 4: v1.api.player.PlayerUpdate
	(*PlayerGet)(nil),    // 5: v1.api.player.PlayerGet
	(*Players)(nil),      // 6: v1.api.player.Players
}
var file_v1_api_player_player_proto_depIdxs = []int32{
	0, // 0: v1.api.player.Player.type:type_name -> v1.api.player.PlayerType
	1, // 1: v1.api.player.Player.status:type_name -> v1.api.player.PlayerStatus
	0, // 2: v1.api.player.PlayerCreate.type:type_name -> v1.api.player.PlayerType
	1, // 3: v1.api.player.PlayerCreate.status:type_name -> v1.api.player.PlayerStatus
	0, // 4: v1.api.player.PlayerUpdate.type:type_name -> v1.api.player.PlayerType
	1, // 5: v1.api.player.PlayerUpdate.status:type_name -> v1.api.player.PlayerStatus
	2, // 6: v1.api.player.Players.players:type_name -> v1.api.player.Player
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_v1_api_player_player_proto_init() }
func file_v1_api_player_player_proto_init() {
	if File_v1_api_player_player_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_v1_api_player_player_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Player); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_api_player_player_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlayerCreate); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_api_player_player_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlayerUpdate); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_api_player_player_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlayerGet); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_api_player_player_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Players); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_v1_api_player_player_proto_msgTypes[0].OneofWrappers = []interface{}{}
	file_v1_api_player_player_proto_msgTypes[1].OneofWrappers = []interface{}{}
	file_v1_api_player_player_proto_msgTypes[2].OneofWrappers = []interface{}{}
	file_v1_api_player_player_proto_msgTypes[3].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_player_player_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_api_player_player_proto_goTypes,
		DependencyIndexes: file_v1_api_player_player_proto_depIdxs,
		EnumInfos:         file_v1_api_player_player_proto_enumTypes,
		MessageInfos:      file_v1_api_player_player_proto_msgTypes,
	}.Build()
	File_v1_api_player_player_proto = out.File
	file_v1_api_player_player_proto_rawDesc = nil
	file_v1_api_player_player_proto_goTypes = nil
	file_v1_api_player_player_proto_depIdxs = nil
}
