// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v5.28.2
// source: game/entity.proto

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

type RegisterEntity_ControllerStateEnum int32

const (
	RegisterEntity_SERVER RegisterEntity_ControllerStateEnum = 0
	RegisterEntity_PLAYER RegisterEntity_ControllerStateEnum = 1
)

// Enum value maps for RegisterEntity_ControllerStateEnum.
var (
	RegisterEntity_ControllerStateEnum_name = map[int32]string{
		0: "SERVER",
		1: "PLAYER",
	}
	RegisterEntity_ControllerStateEnum_value = map[string]int32{
		"SERVER": 0,
		"PLAYER": 1,
	}
)

func (x RegisterEntity_ControllerStateEnum) Enum() *RegisterEntity_ControllerStateEnum {
	p := new(RegisterEntity_ControllerStateEnum)
	*p = x
	return p
}

func (x RegisterEntity_ControllerStateEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (RegisterEntity_ControllerStateEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_game_entity_proto_enumTypes[0].Descriptor()
}

func (RegisterEntity_ControllerStateEnum) Type() protoreflect.EnumType {
	return &file_game_entity_proto_enumTypes[0]
}

func (x RegisterEntity_ControllerStateEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use RegisterEntity_ControllerStateEnum.Descriptor instead.
func (RegisterEntity_ControllerStateEnum) EnumDescriptor() ([]byte, []int) {
	return file_game_entity_proto_rawDescGZIP(), []int{0, 0}
}

// / The RegisterEntity message
type RegisterEntity struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// / The name of the entity, e.g. "ball"
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// / The type of the entity, e.g. "object"
	Type string `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	// / The unique identifier of the entity
	Id string `protobuf:"bytes,3,opt,name=id,proto3" json:"id,omitempty"`
	// / The session id of the entity
	SessionId string `protobuf:"bytes,4,opt,name=session_id,json=sessionId,proto3" json:"session_id,omitempty"`
	// / The game id of the entity
	GameId string `protobuf:"bytes,5,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
	// / The attributes of the entity
	Attributes map[string]*RegisterEntity_EntityAttribute `protobuf:"bytes,6,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// / The controller of the entity
	ControllerState RegisterEntity_ControllerStateEnum `protobuf:"varint,7,opt,name=controller_state,json=controllerState,proto3,enum=game.RegisterEntity_ControllerStateEnum" json:"controller_state,omitempty"`
	// / The owner of the entity
	PlayerId *string `protobuf:"bytes,8,opt,name=player_id,json=playerId,proto3,oneof" json:"player_id,omitempty"`
	// / Can be any JSON data
	Data *string `protobuf:"bytes,9,opt,name=data,proto3,oneof" json:"data,omitempty"`
}

func (x *RegisterEntity) Reset() {
	*x = RegisterEntity{}
	mi := &file_game_entity_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *RegisterEntity) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterEntity) ProtoMessage() {}

func (x *RegisterEntity) ProtoReflect() protoreflect.Message {
	mi := &file_game_entity_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterEntity.ProtoReflect.Descriptor instead.
func (*RegisterEntity) Descriptor() ([]byte, []int) {
	return file_game_entity_proto_rawDescGZIP(), []int{0}
}

func (x *RegisterEntity) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *RegisterEntity) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *RegisterEntity) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *RegisterEntity) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

func (x *RegisterEntity) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

func (x *RegisterEntity) GetAttributes() map[string]*RegisterEntity_EntityAttribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

func (x *RegisterEntity) GetControllerState() RegisterEntity_ControllerStateEnum {
	if x != nil {
		return x.ControllerState
	}
	return RegisterEntity_SERVER
}

func (x *RegisterEntity) GetPlayerId() string {
	if x != nil && x.PlayerId != nil {
		return *x.PlayerId
	}
	return ""
}

func (x *RegisterEntity) GetData() string {
	if x != nil && x.Data != nil {
		return *x.Data
	}
	return ""
}

// / The EntityUpdate message
type EntityUpdate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// / The unique identifier of the entity
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// / The session id of the entity
	SessionId string `protobuf:"bytes,2,opt,name=session_id,json=sessionId,proto3" json:"session_id,omitempty"`
	// / The game id of the entity
	GameId string `protobuf:"bytes,3,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
	// / The attributes of the entity
	Attributes []*RegisterEntity_EntityAttribute `protobuf:"bytes,4,rep,name=attributes,proto3" json:"attributes,omitempty"`
}

func (x *EntityUpdate) Reset() {
	*x = EntityUpdate{}
	mi := &file_game_entity_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *EntityUpdate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EntityUpdate) ProtoMessage() {}

func (x *EntityUpdate) ProtoReflect() protoreflect.Message {
	mi := &file_game_entity_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EntityUpdate.ProtoReflect.Descriptor instead.
func (*EntityUpdate) Descriptor() ([]byte, []int) {
	return file_game_entity_proto_rawDescGZIP(), []int{1}
}

func (x *EntityUpdate) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *EntityUpdate) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

func (x *EntityUpdate) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

func (x *EntityUpdate) GetAttributes() []*RegisterEntity_EntityAttribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

// / The EntityAttribute message
type RegisterEntity_EntityAttribute struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// TODO: Do we need a key?
	// TODO: Can we simply have 1 value field and use a oneof that contains a string, int, float, bool?
	// / The value of the attribute (string, int, float, bool)
	//
	// Types that are assignable to Value:
	//
	//	*RegisterEntity_EntityAttribute_StringValue
	//	*RegisterEntity_EntityAttribute_IntValue
	//	*RegisterEntity_EntityAttribute_FloatValue
	//	*RegisterEntity_EntityAttribute_BoolValue
	Value isRegisterEntity_EntityAttribute_Value `protobuf_oneof:"value"`
}

func (x *RegisterEntity_EntityAttribute) Reset() {
	*x = RegisterEntity_EntityAttribute{}
	mi := &file_game_entity_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *RegisterEntity_EntityAttribute) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterEntity_EntityAttribute) ProtoMessage() {}

func (x *RegisterEntity_EntityAttribute) ProtoReflect() protoreflect.Message {
	mi := &file_game_entity_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterEntity_EntityAttribute.ProtoReflect.Descriptor instead.
func (*RegisterEntity_EntityAttribute) Descriptor() ([]byte, []int) {
	return file_game_entity_proto_rawDescGZIP(), []int{0, 1}
}

func (m *RegisterEntity_EntityAttribute) GetValue() isRegisterEntity_EntityAttribute_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *RegisterEntity_EntityAttribute) GetStringValue() string {
	if x, ok := x.GetValue().(*RegisterEntity_EntityAttribute_StringValue); ok {
		return x.StringValue
	}
	return ""
}

func (x *RegisterEntity_EntityAttribute) GetIntValue() int32 {
	if x, ok := x.GetValue().(*RegisterEntity_EntityAttribute_IntValue); ok {
		return x.IntValue
	}
	return 0
}

func (x *RegisterEntity_EntityAttribute) GetFloatValue() float32 {
	if x, ok := x.GetValue().(*RegisterEntity_EntityAttribute_FloatValue); ok {
		return x.FloatValue
	}
	return 0
}

func (x *RegisterEntity_EntityAttribute) GetBoolValue() bool {
	if x, ok := x.GetValue().(*RegisterEntity_EntityAttribute_BoolValue); ok {
		return x.BoolValue
	}
	return false
}

type isRegisterEntity_EntityAttribute_Value interface {
	isRegisterEntity_EntityAttribute_Value()
}

type RegisterEntity_EntityAttribute_StringValue struct {
	StringValue string `protobuf:"bytes,2,opt,name=string_value,json=stringValue,proto3,oneof"`
}

type RegisterEntity_EntityAttribute_IntValue struct {
	IntValue int32 `protobuf:"varint,3,opt,name=int_value,json=intValue,proto3,oneof"`
}

type RegisterEntity_EntityAttribute_FloatValue struct {
	FloatValue float32 `protobuf:"fixed32,4,opt,name=float_value,json=floatValue,proto3,oneof"`
}

type RegisterEntity_EntityAttribute_BoolValue struct {
	BoolValue bool `protobuf:"varint,5,opt,name=bool_value,json=boolValue,proto3,oneof"`
}

func (*RegisterEntity_EntityAttribute_StringValue) isRegisterEntity_EntityAttribute_Value() {}

func (*RegisterEntity_EntityAttribute_IntValue) isRegisterEntity_EntityAttribute_Value() {}

func (*RegisterEntity_EntityAttribute_FloatValue) isRegisterEntity_EntityAttribute_Value() {}

func (*RegisterEntity_EntityAttribute_BoolValue) isRegisterEntity_EntityAttribute_Value() {}

var File_game_entity_proto protoreflect.FileDescriptor

var file_game_entity_proto_rawDesc = []byte{
	0x0a, 0x11, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x04, 0x67, 0x61, 0x6d, 0x65, 0x22, 0xa6, 0x05, 0x0a, 0x0e, 0x52, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f,
	0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x12, 0x44, 0x0a, 0x0a,
	0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x24, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72,
	0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65,
	0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74,
	0x65, 0x73, 0x12, 0x53, 0x0a, 0x10, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72,
	0x5f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x28, 0x2e, 0x67,
	0x61, 0x6d, 0x65, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x45, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x2e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x53, 0x74, 0x61,
	0x74, 0x65, 0x45, 0x6e, 0x75, 0x6d, 0x52, 0x0f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c,
	0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x20, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x79, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x08, 0x70, 0x6c,
	0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x64, 0x61, 0x74,
	0x61, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x88,
	0x01, 0x01, 0x1a, 0x63, 0x0a, 0x0f, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x3a, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x52, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x45, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x52, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0xa2, 0x01, 0x0a, 0x0f, 0x45, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x12, 0x23, 0x0a, 0x0c, 0x73,
	0x74, 0x72, 0x69, 0x6e, 0x67, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x00, 0x52, 0x0b, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65,
	0x12, 0x1d, 0x0a, 0x09, 0x69, 0x6e, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x08, 0x69, 0x6e, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12,
	0x21, 0x0a, 0x0b, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x02, 0x48, 0x00, 0x52, 0x0a, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c,
	0x75, 0x65, 0x12, 0x1f, 0x0a, 0x0a, 0x62, 0x6f, 0x6f, 0x6c, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x48, 0x00, 0x52, 0x09, 0x62, 0x6f, 0x6f, 0x6c, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x42, 0x07, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x2d, 0x0a, 0x13,
	0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65, 0x45,
	0x6e, 0x75, 0x6d, 0x12, 0x0a, 0x0a, 0x06, 0x53, 0x45, 0x52, 0x56, 0x45, 0x52, 0x10, 0x00, 0x12,
	0x0a, 0x0a, 0x06, 0x50, 0x4c, 0x41, 0x59, 0x45, 0x52, 0x10, 0x01, 0x42, 0x0c, 0x0a, 0x0a, 0x5f,
	0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x64, 0x61,
	0x74, 0x61, 0x22, 0x9c, 0x01, 0x0a, 0x0c, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x12, 0x44, 0x0a, 0x0a, 0x61,
	0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x24, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x45,
	0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x41, 0x74, 0x74, 0x72,
	0x69, 0x62, 0x75, 0x74, 0x65, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65,
	0x73, 0x42, 0x33, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x67,
	0x6f, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_game_entity_proto_rawDescOnce sync.Once
	file_game_entity_proto_rawDescData = file_game_entity_proto_rawDesc
)

func file_game_entity_proto_rawDescGZIP() []byte {
	file_game_entity_proto_rawDescOnce.Do(func() {
		file_game_entity_proto_rawDescData = protoimpl.X.CompressGZIP(file_game_entity_proto_rawDescData)
	})
	return file_game_entity_proto_rawDescData
}

var file_game_entity_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_game_entity_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_game_entity_proto_goTypes = []any{
	(RegisterEntity_ControllerStateEnum)(0), // 0: game.RegisterEntity.ControllerStateEnum
	(*RegisterEntity)(nil),                  // 1: game.RegisterEntity
	(*EntityUpdate)(nil),                    // 2: game.EntityUpdate
	nil,                                     // 3: game.RegisterEntity.AttributesEntry
	(*RegisterEntity_EntityAttribute)(nil),  // 4: game.RegisterEntity.EntityAttribute
}
var file_game_entity_proto_depIdxs = []int32{
	3, // 0: game.RegisterEntity.attributes:type_name -> game.RegisterEntity.AttributesEntry
	0, // 1: game.RegisterEntity.controller_state:type_name -> game.RegisterEntity.ControllerStateEnum
	4, // 2: game.EntityUpdate.attributes:type_name -> game.RegisterEntity.EntityAttribute
	4, // 3: game.RegisterEntity.AttributesEntry.value:type_name -> game.RegisterEntity.EntityAttribute
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_game_entity_proto_init() }
func file_game_entity_proto_init() {
	if File_game_entity_proto != nil {
		return
	}
	file_game_entity_proto_msgTypes[0].OneofWrappers = []any{}
	file_game_entity_proto_msgTypes[3].OneofWrappers = []any{
		(*RegisterEntity_EntityAttribute_StringValue)(nil),
		(*RegisterEntity_EntityAttribute_IntValue)(nil),
		(*RegisterEntity_EntityAttribute_FloatValue)(nil),
		(*RegisterEntity_EntityAttribute_BoolValue)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_game_entity_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_game_entity_proto_goTypes,
		DependencyIndexes: file_game_entity_proto_depIdxs,
		EnumInfos:         file_game_entity_proto_enumTypes,
		MessageInfos:      file_game_entity_proto_msgTypes,
	}.Build()
	File_game_entity_proto = out.File
	file_game_entity_proto_rawDesc = nil
	file_game_entity_proto_goTypes = nil
	file_game_entity_proto_depIdxs = nil
}
