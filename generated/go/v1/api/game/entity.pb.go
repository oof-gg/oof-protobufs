// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        v5.28.3
// source: v1/api/game/entity.proto

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

type Entity_ControllerStateEnum int32

const (
	Entity_SERVER Entity_ControllerStateEnum = 0
	Entity_PLAYER Entity_ControllerStateEnum = 1
)

// Enum value maps for Entity_ControllerStateEnum.
var (
	Entity_ControllerStateEnum_name = map[int32]string{
		0: "SERVER",
		1: "PLAYER",
	}
	Entity_ControllerStateEnum_value = map[string]int32{
		"SERVER": 0,
		"PLAYER": 1,
	}
)

func (x Entity_ControllerStateEnum) Enum() *Entity_ControllerStateEnum {
	p := new(Entity_ControllerStateEnum)
	*p = x
	return p
}

func (x Entity_ControllerStateEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Entity_ControllerStateEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_api_game_entity_proto_enumTypes[0].Descriptor()
}

func (Entity_ControllerStateEnum) Type() protoreflect.EnumType {
	return &file_v1_api_game_entity_proto_enumTypes[0]
}

func (x Entity_ControllerStateEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Entity_ControllerStateEnum.Descriptor instead.
func (Entity_ControllerStateEnum) EnumDescriptor() ([]byte, []int) {
	return file_v1_api_game_entity_proto_rawDescGZIP(), []int{0, 0}
}

type EntityCreate_ControllerStateEnum int32

const (
	EntityCreate_SERVER EntityCreate_ControllerStateEnum = 0
	EntityCreate_PLAYER EntityCreate_ControllerStateEnum = 1
)

// Enum value maps for EntityCreate_ControllerStateEnum.
var (
	EntityCreate_ControllerStateEnum_name = map[int32]string{
		0: "SERVER",
		1: "PLAYER",
	}
	EntityCreate_ControllerStateEnum_value = map[string]int32{
		"SERVER": 0,
		"PLAYER": 1,
	}
)

func (x EntityCreate_ControllerStateEnum) Enum() *EntityCreate_ControllerStateEnum {
	p := new(EntityCreate_ControllerStateEnum)
	*p = x
	return p
}

func (x EntityCreate_ControllerStateEnum) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (EntityCreate_ControllerStateEnum) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_api_game_entity_proto_enumTypes[1].Descriptor()
}

func (EntityCreate_ControllerStateEnum) Type() protoreflect.EnumType {
	return &file_v1_api_game_entity_proto_enumTypes[1]
}

func (x EntityCreate_ControllerStateEnum) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use EntityCreate_ControllerStateEnum.Descriptor instead.
func (EntityCreate_ControllerStateEnum) EnumDescriptor() ([]byte, []int) {
	return file_v1_api_game_entity_proto_rawDescGZIP(), []int{4, 0}
}

// / The Entity message
type Entity struct {
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
	Attributes map[string]*EntityAttribute `protobuf:"bytes,6,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// / The controller of the entity
	Controller Entity_ControllerStateEnum `protobuf:"varint,7,opt,name=controller,proto3,enum=v1.api.game.Entity_ControllerStateEnum" json:"controller,omitempty"`
	// / The owner of the entity
	PlayerId *string `protobuf:"bytes,8,opt,name=player_id,json=playerId,proto3,oneof" json:"player_id,omitempty"`
	// / Can be any JSON data
	Data *string `protobuf:"bytes,9,opt,name=data,proto3,oneof" json:"data,omitempty"`
}

func (x *Entity) Reset() {
	*x = Entity{}
	mi := &file_v1_api_game_entity_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Entity) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Entity) ProtoMessage() {}

func (x *Entity) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_entity_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Entity.ProtoReflect.Descriptor instead.
func (*Entity) Descriptor() ([]byte, []int) {
	return file_v1_api_game_entity_proto_rawDescGZIP(), []int{0}
}

func (x *Entity) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Entity) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *Entity) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Entity) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

func (x *Entity) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

func (x *Entity) GetAttributes() map[string]*EntityAttribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

func (x *Entity) GetController() Entity_ControllerStateEnum {
	if x != nil {
		return x.Controller
	}
	return Entity_SERVER
}

func (x *Entity) GetPlayerId() string {
	if x != nil && x.PlayerId != nil {
		return *x.PlayerId
	}
	return ""
}

func (x *Entity) GetData() string {
	if x != nil && x.Data != nil {
		return *x.Data
	}
	return ""
}

// / The Entities message
type Entities struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// / The entities
	Entities []*Entity `protobuf:"bytes,1,rep,name=entities,proto3" json:"entities,omitempty"`
}

func (x *Entities) Reset() {
	*x = Entities{}
	mi := &file_v1_api_game_entity_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Entities) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Entities) ProtoMessage() {}

func (x *Entities) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_entity_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Entities.ProtoReflect.Descriptor instead.
func (*Entities) Descriptor() ([]byte, []int) {
	return file_v1_api_game_entity_proto_rawDescGZIP(), []int{1}
}

func (x *Entities) GetEntities() []*Entity {
	if x != nil {
		return x.Entities
	}
	return nil
}

// / The EntityAttribute message
type EntityAttribute struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// TODO: Do we need a key?
	// TODO: Can we simply have 1 value field and use a oneof that contains a string, int, float, bool?
	// / The value of the attribute (string, int, float, bool)
	//
	// Types that are assignable to Value:
	//
	//	*EntityAttribute_StringValue
	//	*EntityAttribute_IntValue
	//	*EntityAttribute_FloatValue
	//	*EntityAttribute_BoolValue
	Value isEntityAttribute_Value `protobuf_oneof:"value"`
}

func (x *EntityAttribute) Reset() {
	*x = EntityAttribute{}
	mi := &file_v1_api_game_entity_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *EntityAttribute) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EntityAttribute) ProtoMessage() {}

func (x *EntityAttribute) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_entity_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EntityAttribute.ProtoReflect.Descriptor instead.
func (*EntityAttribute) Descriptor() ([]byte, []int) {
	return file_v1_api_game_entity_proto_rawDescGZIP(), []int{2}
}

func (m *EntityAttribute) GetValue() isEntityAttribute_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *EntityAttribute) GetStringValue() string {
	if x, ok := x.GetValue().(*EntityAttribute_StringValue); ok {
		return x.StringValue
	}
	return ""
}

func (x *EntityAttribute) GetIntValue() int32 {
	if x, ok := x.GetValue().(*EntityAttribute_IntValue); ok {
		return x.IntValue
	}
	return 0
}

func (x *EntityAttribute) GetFloatValue() float32 {
	if x, ok := x.GetValue().(*EntityAttribute_FloatValue); ok {
		return x.FloatValue
	}
	return 0
}

func (x *EntityAttribute) GetBoolValue() bool {
	if x, ok := x.GetValue().(*EntityAttribute_BoolValue); ok {
		return x.BoolValue
	}
	return false
}

type isEntityAttribute_Value interface {
	isEntityAttribute_Value()
}

type EntityAttribute_StringValue struct {
	StringValue string `protobuf:"bytes,2,opt,name=string_value,json=stringValue,proto3,oneof"`
}

type EntityAttribute_IntValue struct {
	IntValue int32 `protobuf:"varint,3,opt,name=int_value,json=intValue,proto3,oneof"`
}

type EntityAttribute_FloatValue struct {
	FloatValue float32 `protobuf:"fixed32,4,opt,name=float_value,json=floatValue,proto3,oneof"`
}

type EntityAttribute_BoolValue struct {
	BoolValue bool `protobuf:"varint,5,opt,name=bool_value,json=boolValue,proto3,oneof"`
}

func (*EntityAttribute_StringValue) isEntityAttribute_Value() {}

func (*EntityAttribute_IntValue) isEntityAttribute_Value() {}

func (*EntityAttribute_FloatValue) isEntityAttribute_Value() {}

func (*EntityAttribute_BoolValue) isEntityAttribute_Value() {}

// / The EntityCreate message
type EntityGet struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// / The unique identifier of the entity
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// / The session id of the entity
	SessionId string `protobuf:"bytes,2,opt,name=session_id,json=sessionId,proto3" json:"session_id,omitempty"`
	// / The game id of the entity
	GameId string `protobuf:"bytes,3,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
}

func (x *EntityGet) Reset() {
	*x = EntityGet{}
	mi := &file_v1_api_game_entity_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *EntityGet) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EntityGet) ProtoMessage() {}

func (x *EntityGet) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_entity_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EntityGet.ProtoReflect.Descriptor instead.
func (*EntityGet) Descriptor() ([]byte, []int) {
	return file_v1_api_game_entity_proto_rawDescGZIP(), []int{3}
}

func (x *EntityGet) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *EntityGet) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

func (x *EntityGet) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

// / The RegisterEntity message
type EntityCreate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// / The name of the entity, e.g. "ball"
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// / The type of the entity, e.g. "object"
	Type string `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	// / The session id of the entity
	SessionId string `protobuf:"bytes,4,opt,name=session_id,json=sessionId,proto3" json:"session_id,omitempty"`
	// / The game id of the entity
	GameId string `protobuf:"bytes,5,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
	// / The attributes of the entity
	Attributes map[string]*EntityAttribute `protobuf:"bytes,6,rep,name=attributes,proto3" json:"attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// / The controller of the entity
	Controller EntityCreate_ControllerStateEnum `protobuf:"varint,7,opt,name=controller,proto3,enum=v1.api.game.EntityCreate_ControllerStateEnum" json:"controller,omitempty"`
	// / The owner of the entity
	PlayerId *string `protobuf:"bytes,8,opt,name=player_id,json=playerId,proto3,oneof" json:"player_id,omitempty"`
	// / Can be any JSON data
	Data *string `protobuf:"bytes,9,opt,name=data,proto3,oneof" json:"data,omitempty"`
}

func (x *EntityCreate) Reset() {
	*x = EntityCreate{}
	mi := &file_v1_api_game_entity_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *EntityCreate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EntityCreate) ProtoMessage() {}

func (x *EntityCreate) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_entity_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EntityCreate.ProtoReflect.Descriptor instead.
func (*EntityCreate) Descriptor() ([]byte, []int) {
	return file_v1_api_game_entity_proto_rawDescGZIP(), []int{4}
}

func (x *EntityCreate) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *EntityCreate) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *EntityCreate) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

func (x *EntityCreate) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

func (x *EntityCreate) GetAttributes() map[string]*EntityAttribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

func (x *EntityCreate) GetController() EntityCreate_ControllerStateEnum {
	if x != nil {
		return x.Controller
	}
	return EntityCreate_SERVER
}

func (x *EntityCreate) GetPlayerId() string {
	if x != nil && x.PlayerId != nil {
		return *x.PlayerId
	}
	return ""
}

func (x *EntityCreate) GetData() string {
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
	Attributes []*EntityAttribute `protobuf:"bytes,4,rep,name=attributes,proto3" json:"attributes,omitempty"`
}

func (x *EntityUpdate) Reset() {
	*x = EntityUpdate{}
	mi := &file_v1_api_game_entity_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *EntityUpdate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EntityUpdate) ProtoMessage() {}

func (x *EntityUpdate) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_entity_proto_msgTypes[5]
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
	return file_v1_api_game_entity_proto_rawDescGZIP(), []int{5}
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

func (x *EntityUpdate) GetAttributes() []*EntityAttribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

// / The EntityDelete message
type EntityDelete struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// / The unique identifier of the entity
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// / The session id of the entity
	SessionId string `protobuf:"bytes,2,opt,name=session_id,json=sessionId,proto3" json:"session_id,omitempty"`
	// / The game id of the entity
	GameId string `protobuf:"bytes,3,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
}

func (x *EntityDelete) Reset() {
	*x = EntityDelete{}
	mi := &file_v1_api_game_entity_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *EntityDelete) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EntityDelete) ProtoMessage() {}

func (x *EntityDelete) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_entity_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EntityDelete.ProtoReflect.Descriptor instead.
func (*EntityDelete) Descriptor() ([]byte, []int) {
	return file_v1_api_game_entity_proto_rawDescGZIP(), []int{6}
}

func (x *EntityDelete) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *EntityDelete) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

func (x *EntityDelete) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

var File_v1_api_game_entity_proto protoreflect.FileDescriptor

var file_v1_api_game_entity_proto_rawDesc = []byte{
	0x0a, 0x18, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x65, 0x6e,
	0x74, 0x69, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x76, 0x31, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x22, 0xe4, 0x03, 0x0a, 0x06, 0x45, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61, 0x6d,
	0x65, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65,
	0x49, 0x64, 0x12, 0x43, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73,
	0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x41, 0x74, 0x74, 0x72,
	0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0a, 0x61, 0x74, 0x74,
	0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x12, 0x47, 0x0a, 0x0a, 0x63, 0x6f, 0x6e, 0x74, 0x72,
	0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x27, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x2e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65,
	0x45, 0x6e, 0x75, 0x6d, 0x52, 0x0a, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72,
	0x12, 0x20, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x08, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x88,
	0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x01, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x88, 0x01, 0x01, 0x1a, 0x5b, 0x0a, 0x0f, 0x41,
	0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10,
	0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79,
	0x12, 0x32, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e,
	0x74, 0x69, 0x74, 0x79, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x2d, 0x0a, 0x13, 0x43, 0x6f, 0x6e, 0x74,
	0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x75, 0x6d, 0x12,
	0x0a, 0x0a, 0x06, 0x53, 0x45, 0x52, 0x56, 0x45, 0x52, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x50,
	0x4c, 0x41, 0x59, 0x45, 0x52, 0x10, 0x01, 0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x70, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x5f, 0x69, 0x64, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x22, 0x3b,
	0x0a, 0x08, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x12, 0x2f, 0x0a, 0x08, 0x65, 0x6e,
	0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x52, 0x08, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x22, 0xa2, 0x01, 0x0a, 0x0f,
	0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x12,
	0x23, 0x0a, 0x0c, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x0b, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x12, 0x1d, 0x0a, 0x09, 0x69, 0x6e, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x08, 0x69, 0x6e, 0x74, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x12, 0x21, 0x0a, 0x0b, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x5f, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x02, 0x48, 0x00, 0x52, 0x0a, 0x66, 0x6c, 0x6f, 0x61,
	0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x1f, 0x0a, 0x0a, 0x62, 0x6f, 0x6f, 0x6c, 0x5f, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x48, 0x00, 0x52, 0x09, 0x62, 0x6f,
	0x6f, 0x6c, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x07, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x22, 0x53, 0x0a, 0x09, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x47, 0x65, 0x74, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a,
	0x0a, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07,
	0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67,
	0x61, 0x6d, 0x65, 0x49, 0x64, 0x22, 0xe6, 0x03, 0x0a, 0x0c, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79,
	0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x1d,
	0x0a, 0x0a, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x09, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x17, 0x0a,
	0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x12, 0x49, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62,
	0x75, 0x74, 0x65, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x29, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x2e, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65,
	0x73, 0x12, 0x4d, 0x0a, 0x0a, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x18,
	0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2d, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67,
	0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x2e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65,
	0x45, 0x6e, 0x75, 0x6d, 0x52, 0x0a, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72,
	0x12, 0x20, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x08, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x64, 0x88,
	0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x01, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x88, 0x01, 0x01, 0x1a, 0x5b, 0x0a, 0x0f, 0x41,
	0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10,
	0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79,
	0x12, 0x32, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e,
	0x74, 0x69, 0x74, 0x79, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x2d, 0x0a, 0x13, 0x43, 0x6f, 0x6e, 0x74,
	0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x75, 0x6d, 0x12,
	0x0a, 0x0a, 0x06, 0x53, 0x45, 0x52, 0x56, 0x45, 0x52, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x50,
	0x4c, 0x41, 0x59, 0x45, 0x52, 0x10, 0x01, 0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x70, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x5f, 0x69, 0x64, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x22, 0x94,
	0x01, 0x0a, 0x0c, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x1d, 0x0a, 0x0a, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x17,
	0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x12, 0x3c, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69,
	0x62, 0x75, 0x74, 0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69,
	0x62, 0x75, 0x74, 0x65, 0x73, 0x22, 0x56, 0x0a, 0x0c, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x73, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x42, 0x37, 0x5a,
	0x35, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d,
	0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73,
	0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_api_game_entity_proto_rawDescOnce sync.Once
	file_v1_api_game_entity_proto_rawDescData = file_v1_api_game_entity_proto_rawDesc
)

func file_v1_api_game_entity_proto_rawDescGZIP() []byte {
	file_v1_api_game_entity_proto_rawDescOnce.Do(func() {
		file_v1_api_game_entity_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_api_game_entity_proto_rawDescData)
	})
	return file_v1_api_game_entity_proto_rawDescData
}

var file_v1_api_game_entity_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_v1_api_game_entity_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_v1_api_game_entity_proto_goTypes = []any{
	(Entity_ControllerStateEnum)(0),       // 0: v1.api.game.Entity.ControllerStateEnum
	(EntityCreate_ControllerStateEnum)(0), // 1: v1.api.game.EntityCreate.ControllerStateEnum
	(*Entity)(nil),                        // 2: v1.api.game.Entity
	(*Entities)(nil),                      // 3: v1.api.game.Entities
	(*EntityAttribute)(nil),               // 4: v1.api.game.EntityAttribute
	(*EntityGet)(nil),                     // 5: v1.api.game.EntityGet
	(*EntityCreate)(nil),                  // 6: v1.api.game.EntityCreate
	(*EntityUpdate)(nil),                  // 7: v1.api.game.EntityUpdate
	(*EntityDelete)(nil),                  // 8: v1.api.game.EntityDelete
	nil,                                   // 9: v1.api.game.Entity.AttributesEntry
	nil,                                   // 10: v1.api.game.EntityCreate.AttributesEntry
}
var file_v1_api_game_entity_proto_depIdxs = []int32{
	9,  // 0: v1.api.game.Entity.attributes:type_name -> v1.api.game.Entity.AttributesEntry
	0,  // 1: v1.api.game.Entity.controller:type_name -> v1.api.game.Entity.ControllerStateEnum
	2,  // 2: v1.api.game.Entities.entities:type_name -> v1.api.game.Entity
	10, // 3: v1.api.game.EntityCreate.attributes:type_name -> v1.api.game.EntityCreate.AttributesEntry
	1,  // 4: v1.api.game.EntityCreate.controller:type_name -> v1.api.game.EntityCreate.ControllerStateEnum
	4,  // 5: v1.api.game.EntityUpdate.attributes:type_name -> v1.api.game.EntityAttribute
	4,  // 6: v1.api.game.Entity.AttributesEntry.value:type_name -> v1.api.game.EntityAttribute
	4,  // 7: v1.api.game.EntityCreate.AttributesEntry.value:type_name -> v1.api.game.EntityAttribute
	8,  // [8:8] is the sub-list for method output_type
	8,  // [8:8] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_v1_api_game_entity_proto_init() }
func file_v1_api_game_entity_proto_init() {
	if File_v1_api_game_entity_proto != nil {
		return
	}
	file_v1_api_game_entity_proto_msgTypes[0].OneofWrappers = []any{}
	file_v1_api_game_entity_proto_msgTypes[2].OneofWrappers = []any{
		(*EntityAttribute_StringValue)(nil),
		(*EntityAttribute_IntValue)(nil),
		(*EntityAttribute_FloatValue)(nil),
		(*EntityAttribute_BoolValue)(nil),
	}
	file_v1_api_game_entity_proto_msgTypes[4].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_game_entity_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_api_game_entity_proto_goTypes,
		DependencyIndexes: file_v1_api_game_entity_proto_depIdxs,
		EnumInfos:         file_v1_api_game_entity_proto_enumTypes,
		MessageInfos:      file_v1_api_game_entity_proto_msgTypes,
	}.Build()
	File_v1_api_game_entity_proto = out.File
	file_v1_api_game_entity_proto_rawDesc = nil
	file_v1_api_game_entity_proto_goTypes = nil
	file_v1_api_game_entity_proto_depIdxs = nil
}