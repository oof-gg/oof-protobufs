// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.2
// 	protoc        v5.28.2
// source: v1/api/game/game.proto

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

type Game struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name          string                 `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description   string                 `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	Data          string                 `protobuf:"bytes,4,opt,name=data,proto3" json:"data,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Game) Reset() {
	*x = Game{}
	mi := &file_v1_api_game_game_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Game) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Game) ProtoMessage() {}

func (x *Game) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Game.ProtoReflect.Descriptor instead.
func (*Game) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{0}
}

func (x *Game) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Game) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Game) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Game) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

type GameCreateRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Name          string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description   string                 `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	Data          string                 `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GameCreateRequest) Reset() {
	*x = GameCreateRequest{}
	mi := &file_v1_api_game_game_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GameCreateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameCreateRequest) ProtoMessage() {}

func (x *GameCreateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameCreateRequest.ProtoReflect.Descriptor instead.
func (*GameCreateRequest) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{1}
}

func (x *GameCreateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GameCreateRequest) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *GameCreateRequest) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

type GameCreateResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Game          *Game                  `protobuf:"bytes,1,opt,name=game,proto3" json:"game,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GameCreateResponse) Reset() {
	*x = GameCreateResponse{}
	mi := &file_v1_api_game_game_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GameCreateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameCreateResponse) ProtoMessage() {}

func (x *GameCreateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameCreateResponse.ProtoReflect.Descriptor instead.
func (*GameCreateResponse) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{2}
}

func (x *GameCreateResponse) GetGame() *Game {
	if x != nil {
		return x.Game
	}
	return nil
}

type GameGetRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            *string                `protobuf:"bytes,1,opt,name=id,proto3,oneof" json:"id,omitempty"`
	Limit         *string                `protobuf:"bytes,2,opt,name=limit,proto3,oneof" json:"limit,omitempty"`
	Cursor        *string                `protobuf:"bytes,3,opt,name=cursor,proto3,oneof" json:"cursor,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GameGetRequest) Reset() {
	*x = GameGetRequest{}
	mi := &file_v1_api_game_game_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GameGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameGetRequest) ProtoMessage() {}

func (x *GameGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameGetRequest.ProtoReflect.Descriptor instead.
func (*GameGetRequest) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{3}
}

func (x *GameGetRequest) GetId() string {
	if x != nil && x.Id != nil {
		return *x.Id
	}
	return ""
}

func (x *GameGetRequest) GetLimit() string {
	if x != nil && x.Limit != nil {
		return *x.Limit
	}
	return ""
}

func (x *GameGetRequest) GetCursor() string {
	if x != nil && x.Cursor != nil {
		return *x.Cursor
	}
	return ""
}

type GameGetResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Game          *Game                  `protobuf:"bytes,1,opt,name=game,proto3" json:"game,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GameGetResponse) Reset() {
	*x = GameGetResponse{}
	mi := &file_v1_api_game_game_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GameGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameGetResponse) ProtoMessage() {}

func (x *GameGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameGetResponse.ProtoReflect.Descriptor instead.
func (*GameGetResponse) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{4}
}

func (x *GameGetResponse) GetGame() *Game {
	if x != nil {
		return x.Game
	}
	return nil
}

type GameUpdateRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name          string                 `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description   string                 `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	Data          string                 `protobuf:"bytes,4,opt,name=data,proto3" json:"data,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GameUpdateRequest) Reset() {
	*x = GameUpdateRequest{}
	mi := &file_v1_api_game_game_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GameUpdateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameUpdateRequest) ProtoMessage() {}

func (x *GameUpdateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameUpdateRequest.ProtoReflect.Descriptor instead.
func (*GameUpdateRequest) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{5}
}

func (x *GameUpdateRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GameUpdateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GameUpdateRequest) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *GameUpdateRequest) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

type GameUpdateResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Game          *Game                  `protobuf:"bytes,1,opt,name=game,proto3" json:"game,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GameUpdateResponse) Reset() {
	*x = GameUpdateResponse{}
	mi := &file_v1_api_game_game_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GameUpdateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameUpdateResponse) ProtoMessage() {}

func (x *GameUpdateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameUpdateResponse.ProtoReflect.Descriptor instead.
func (*GameUpdateResponse) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{6}
}

func (x *GameUpdateResponse) GetGame() *Game {
	if x != nil {
		return x.Game
	}
	return nil
}

var File_v1_api_game_game_proto protoreflect.FileDescriptor

var file_v1_api_game_game_proto_rawDesc = []byte{
	0x0a, 0x16, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x67, 0x61,
	0x6d, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x67, 0x61, 0x6d, 0x65, 0x22, 0x60, 0x0a, 0x04, 0x47, 0x61, 0x6d, 0x65, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x5d, 0x0a, 0x11, 0x47, 0x61, 0x6d, 0x65, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x3b, 0x0a, 0x12, 0x47, 0x61, 0x6d, 0x65, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x25, 0x0a, 0x04,
	0x67, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x52, 0x04, 0x67,
	0x61, 0x6d, 0x65, 0x22, 0x79, 0x0a, 0x0e, 0x47, 0x61, 0x6d, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x13, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x00, 0x52, 0x02, 0x69, 0x64, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05, 0x6c, 0x69,
	0x6d, 0x69, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x05, 0x6c, 0x69, 0x6d,
	0x69, 0x74, 0x88, 0x01, 0x01, 0x12, 0x1b, 0x0a, 0x06, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x06, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x88,
	0x01, 0x01, 0x42, 0x05, 0x0a, 0x03, 0x5f, 0x69, 0x64, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6c, 0x69,
	0x6d, 0x69, 0x74, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x22, 0x38,
	0x0a, 0x0f, 0x47, 0x61, 0x6d, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x25, 0x0a, 0x04, 0x67, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x11, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61,
	0x6d, 0x65, 0x52, 0x04, 0x67, 0x61, 0x6d, 0x65, 0x22, 0x6d, 0x0a, 0x11, 0x47, 0x61, 0x6d, 0x65,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x3b, 0x0a, 0x12, 0x47, 0x61, 0x6d, 0x65, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x25, 0x0a,
	0x04, 0x67, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x52, 0x04,
	0x67, 0x61, 0x6d, 0x65, 0x42, 0x3a, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65,
	0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_api_game_game_proto_rawDescOnce sync.Once
	file_v1_api_game_game_proto_rawDescData = file_v1_api_game_game_proto_rawDesc
)

func file_v1_api_game_game_proto_rawDescGZIP() []byte {
	file_v1_api_game_game_proto_rawDescOnce.Do(func() {
		file_v1_api_game_game_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_api_game_game_proto_rawDescData)
	})
	return file_v1_api_game_game_proto_rawDescData
}

var file_v1_api_game_game_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_v1_api_game_game_proto_goTypes = []any{
	(*Game)(nil),               // 0: v1.api.game.Game
	(*GameCreateRequest)(nil),  // 1: v1.api.game.GameCreateRequest
	(*GameCreateResponse)(nil), // 2: v1.api.game.GameCreateResponse
	(*GameGetRequest)(nil),     // 3: v1.api.game.GameGetRequest
	(*GameGetResponse)(nil),    // 4: v1.api.game.GameGetResponse
	(*GameUpdateRequest)(nil),  // 5: v1.api.game.GameUpdateRequest
	(*GameUpdateResponse)(nil), // 6: v1.api.game.GameUpdateResponse
}
var file_v1_api_game_game_proto_depIdxs = []int32{
	0, // 0: v1.api.game.GameCreateResponse.game:type_name -> v1.api.game.Game
	0, // 1: v1.api.game.GameGetResponse.game:type_name -> v1.api.game.Game
	0, // 2: v1.api.game.GameUpdateResponse.game:type_name -> v1.api.game.Game
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_v1_api_game_game_proto_init() }
func file_v1_api_game_game_proto_init() {
	if File_v1_api_game_game_proto != nil {
		return
	}
	file_v1_api_game_game_proto_msgTypes[3].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_game_game_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_api_game_game_proto_goTypes,
		DependencyIndexes: file_v1_api_game_game_proto_depIdxs,
		MessageInfos:      file_v1_api_game_game_proto_msgTypes,
	}.Build()
	File_v1_api_game_game_proto = out.File
	file_v1_api_game_game_proto_rawDesc = nil
	file_v1_api_game_game_proto_goTypes = nil
	file_v1_api_game_game_proto_depIdxs = nil
}
