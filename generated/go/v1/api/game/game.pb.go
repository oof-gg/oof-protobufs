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
	state                protoimpl.MessageState `protogen:"open.v1"`
	Id                   string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string                 `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	ShortDescription     string                 `protobuf:"bytes,3,opt,name=short_description,json=shortDescription,proto3" json:"short_description,omitempty"`
	Description          string                 `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	ImageUrl             string                 `protobuf:"bytes,5,opt,name=image_url,json=imageUrl,proto3" json:"image_url,omitempty"`
	MaxSessions          string                 `protobuf:"bytes,6,opt,name=max_sessions,json=maxSessions,proto3" json:"max_sessions,omitempty"`
	MaxPlayersPerSession string                 `protobuf:"bytes,7,opt,name=max_players_per_session,json=maxPlayersPerSession,proto3" json:"max_players_per_session,omitempty"`
	Data                 *string                `protobuf:"bytes,8,opt,name=data,proto3,oneof" json:"data,omitempty"` // Can be any JSON data
	unknownFields        protoimpl.UnknownFields
	sizeCache            protoimpl.SizeCache
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

func (x *Game) GetShortDescription() string {
	if x != nil {
		return x.ShortDescription
	}
	return ""
}

func (x *Game) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Game) GetImageUrl() string {
	if x != nil {
		return x.ImageUrl
	}
	return ""
}

func (x *Game) GetMaxSessions() string {
	if x != nil {
		return x.MaxSessions
	}
	return ""
}

func (x *Game) GetMaxPlayersPerSession() string {
	if x != nil {
		return x.MaxPlayersPerSession
	}
	return ""
}

func (x *Game) GetData() string {
	if x != nil && x.Data != nil {
		return *x.Data
	}
	return ""
}

type GameCreateRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Name          string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description   string                 `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	Data          *string                `protobuf:"bytes,3,opt,name=data,proto3,oneof" json:"data,omitempty"`
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
	if x != nil && x.Data != nil {
		return *x.Data
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
	Limit         *int32                 `protobuf:"varint,2,opt,name=limit,proto3,oneof" json:"limit,omitempty"`
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

func (x *GameGetRequest) GetLimit() int32 {
	if x != nil && x.Limit != nil {
		return *x.Limit
	}
	return 0
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
	Data          *string                `protobuf:"bytes,4,opt,name=data,proto3,oneof" json:"data,omitempty"`
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
	if x != nil && x.Data != nil {
		return *x.Data
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

type Games struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Games         []*Game                `protobuf:"bytes,1,rep,name=games,proto3" json:"games,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Games) Reset() {
	*x = Games{}
	mi := &file_v1_api_game_game_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Games) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Games) ProtoMessage() {}

func (x *Games) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Games.ProtoReflect.Descriptor instead.
func (*Games) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{7}
}

func (x *Games) GetGames() []*Game {
	if x != nil {
		return x.Games
	}
	return nil
}

type Status struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
	Code int32 `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	// A developer-facing error message, which should be in English. Any
	// user-facing error message should be localized and sent in the
	// [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	// A list of messages that carry the error details.  There will be a
	// common set of message types for APIs to use.
	Details       []string `protobuf:"bytes,3,rep,name=details,proto3" json:"details,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Status) Reset() {
	*x = Status{}
	mi := &file_v1_api_game_game_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Status) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Status) ProtoMessage() {}

func (x *Status) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[8]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Status.ProtoReflect.Descriptor instead.
func (*Status) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{8}
}

func (x *Status) GetCode() int32 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *Status) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *Status) GetDetails() []string {
	if x != nil {
		return x.Details
	}
	return nil
}

// Unify everything into one response.
type StandardResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Status code (e.g., HTTP or custom).
	Code int32 `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	// This could be your success or error message.
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	// If there's an error, you could store it here or just use google.rpc.Status directly.
	Error *Status `protobuf:"bytes,3,opt,name=error,proto3" json:"error,omitempty"`
	// The actual payload.
	//
	// Types that are valid to be assigned to Data:
	//
	//	*StandardResponse_SingleGame
	//	*StandardResponse_Games
	Data          isStandardResponse_Data `protobuf_oneof:"data"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *StandardResponse) Reset() {
	*x = StandardResponse{}
	mi := &file_v1_api_game_game_proto_msgTypes[9]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *StandardResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StandardResponse) ProtoMessage() {}

func (x *StandardResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[9]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StandardResponse.ProtoReflect.Descriptor instead.
func (*StandardResponse) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{9}
}

func (x *StandardResponse) GetCode() int32 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *StandardResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *StandardResponse) GetError() *Status {
	if x != nil {
		return x.Error
	}
	return nil
}

func (x *StandardResponse) GetData() isStandardResponse_Data {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *StandardResponse) GetSingleGame() *Game {
	if x != nil {
		if x, ok := x.Data.(*StandardResponse_SingleGame); ok {
			return x.SingleGame
		}
	}
	return nil
}

func (x *StandardResponse) GetGames() *Games {
	if x != nil {
		if x, ok := x.Data.(*StandardResponse_Games); ok {
			return x.Games
		}
	}
	return nil
}

type isStandardResponse_Data interface {
	isStandardResponse_Data()
}

type StandardResponse_SingleGame struct {
	// For single items.
	SingleGame *Game `protobuf:"bytes,4,opt,name=single_game,json=singleGame,proto3,oneof"`
}

type StandardResponse_Games struct {
	Games *Games `protobuf:"bytes,5,opt,name=games,proto3,oneof"`
}

func (*StandardResponse_SingleGame) isStandardResponse_Data() {}

func (*StandardResponse_Games) isStandardResponse_Data() {}

// / Metadata for paginated responses.
type PaginationMetadata struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	PageSize      *int32                 `protobuf:"varint,1,opt,name=page_size,json=pageSize,proto3,oneof" json:"page_size,omitempty"`                 // Number of items per page
	PrevPageToken *string                `protobuf:"bytes,2,opt,name=prev_page_token,json=prevPageToken,proto3,oneof" json:"prev_page_token,omitempty"` // Token for the previous page
	NextPageToken *string                `protobuf:"bytes,3,opt,name=next_page_token,json=nextPageToken,proto3,oneof" json:"next_page_token,omitempty"` // Token for the next page
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *PaginationMetadata) Reset() {
	*x = PaginationMetadata{}
	mi := &file_v1_api_game_game_proto_msgTypes[10]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PaginationMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PaginationMetadata) ProtoMessage() {}

func (x *PaginationMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[10]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PaginationMetadata.ProtoReflect.Descriptor instead.
func (*PaginationMetadata) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{10}
}

func (x *PaginationMetadata) GetPageSize() int32 {
	if x != nil && x.PageSize != nil {
		return *x.PageSize
	}
	return 0
}

func (x *PaginationMetadata) GetPrevPageToken() string {
	if x != nil && x.PrevPageToken != nil {
		return *x.PrevPageToken
	}
	return ""
}

func (x *PaginationMetadata) GetNextPageToken() string {
	if x != nil && x.NextPageToken != nil {
		return *x.NextPageToken
	}
	return ""
}

// / A paginated response wrapper.
type PaginatedResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Status code (e.g., HTTP or custom).
	Code int32 `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	// This could be your success or error message.
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	// If there's an error, you could store it here or just use google.rpc.Status directly.
	Error      *Status             `protobuf:"bytes,3,opt,name=error,proto3" json:"error,omitempty"`
	Pagination *PaginationMetadata `protobuf:"bytes,4,opt,name=pagination,proto3" json:"pagination,omitempty"` // Pagination metadata
	// The actual payload.
	//
	// Types that are valid to be assigned to Data:
	//
	//	*PaginatedResponse_SingleGame
	//	*PaginatedResponse_Games
	Data          isPaginatedResponse_Data `protobuf_oneof:"data"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *PaginatedResponse) Reset() {
	*x = PaginatedResponse{}
	mi := &file_v1_api_game_game_proto_msgTypes[11]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PaginatedResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PaginatedResponse) ProtoMessage() {}

func (x *PaginatedResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_api_game_game_proto_msgTypes[11]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PaginatedResponse.ProtoReflect.Descriptor instead.
func (*PaginatedResponse) Descriptor() ([]byte, []int) {
	return file_v1_api_game_game_proto_rawDescGZIP(), []int{11}
}

func (x *PaginatedResponse) GetCode() int32 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *PaginatedResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *PaginatedResponse) GetError() *Status {
	if x != nil {
		return x.Error
	}
	return nil
}

func (x *PaginatedResponse) GetPagination() *PaginationMetadata {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *PaginatedResponse) GetData() isPaginatedResponse_Data {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *PaginatedResponse) GetSingleGame() *Game {
	if x != nil {
		if x, ok := x.Data.(*PaginatedResponse_SingleGame); ok {
			return x.SingleGame
		}
	}
	return nil
}

func (x *PaginatedResponse) GetGames() *Games {
	if x != nil {
		if x, ok := x.Data.(*PaginatedResponse_Games); ok {
			return x.Games
		}
	}
	return nil
}

type isPaginatedResponse_Data interface {
	isPaginatedResponse_Data()
}

type PaginatedResponse_SingleGame struct {
	// For single items.
	SingleGame *Game `protobuf:"bytes,5,opt,name=single_game,json=singleGame,proto3,oneof"`
}

type PaginatedResponse_Games struct {
	Games *Games `protobuf:"bytes,6,opt,name=games,proto3,oneof"`
}

func (*PaginatedResponse_SingleGame) isPaginatedResponse_Data() {}

func (*PaginatedResponse_Games) isPaginatedResponse_Data() {}

var File_v1_api_game_game_proto protoreflect.FileDescriptor

var file_v1_api_game_game_proto_rawDesc = []byte{
	0x0a, 0x16, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x67, 0x61,
	0x6d, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x67, 0x61, 0x6d, 0x65, 0x22, 0x92, 0x02, 0x0a, 0x04, 0x47, 0x61, 0x6d, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x2b, 0x0a, 0x11, 0x73, 0x68, 0x6f, 0x72, 0x74, 0x5f, 0x64, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x73,
	0x68, 0x6f, 0x72, 0x74, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12,
	0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x55, 0x72, 0x6c, 0x12, 0x21,
	0x0a, 0x0c, 0x6d, 0x61, 0x78, 0x5f, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x06,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6d, 0x61, 0x78, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x73, 0x12, 0x35, 0x0a, 0x17, 0x6d, 0x61, 0x78, 0x5f, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73,
	0x5f, 0x70, 0x65, 0x72, 0x5f, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x14, 0x6d, 0x61, 0x78, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x50, 0x65,
	0x72, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x17, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x88, 0x01,
	0x01, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x22, 0x6b, 0x0a, 0x11, 0x47, 0x61,
	0x6d, 0x65, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x17, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x88, 0x01, 0x01, 0x42, 0x07,
	0x0a, 0x05, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x22, 0x3b, 0x0a, 0x12, 0x47, 0x61, 0x6d, 0x65, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x25, 0x0a,
	0x04, 0x67, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x52, 0x04,
	0x67, 0x61, 0x6d, 0x65, 0x22, 0x79, 0x0a, 0x0e, 0x47, 0x61, 0x6d, 0x65, 0x47, 0x65, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x13, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x48, 0x00, 0x52, 0x02, 0x69, 0x64, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05, 0x6c,
	0x69, 0x6d, 0x69, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x48, 0x01, 0x52, 0x05, 0x6c, 0x69,
	0x6d, 0x69, 0x74, 0x88, 0x01, 0x01, 0x12, 0x1b, 0x0a, 0x06, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x06, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72,
	0x88, 0x01, 0x01, 0x42, 0x05, 0x0a, 0x03, 0x5f, 0x69, 0x64, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6c,
	0x69, 0x6d, 0x69, 0x74, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x63, 0x75, 0x72, 0x73, 0x6f, 0x72, 0x22,
	0x38, 0x0a, 0x0f, 0x47, 0x61, 0x6d, 0x65, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x25, 0x0a, 0x04, 0x67, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x11, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47,
	0x61, 0x6d, 0x65, 0x52, 0x04, 0x67, 0x61, 0x6d, 0x65, 0x22, 0x7b, 0x0a, 0x11, 0x47, 0x61, 0x6d,
	0x65, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x17, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x48, 0x00, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x88, 0x01, 0x01, 0x42, 0x07, 0x0a,
	0x05, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x22, 0x3b, 0x0a, 0x12, 0x47, 0x61, 0x6d, 0x65, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x25, 0x0a, 0x04,
	0x67, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x52, 0x04, 0x67,
	0x61, 0x6d, 0x65, 0x22, 0x30, 0x0a, 0x05, 0x47, 0x61, 0x6d, 0x65, 0x73, 0x12, 0x27, 0x0a, 0x05,
	0x67, 0x61, 0x6d, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x52, 0x05,
	0x67, 0x61, 0x6d, 0x65, 0x73, 0x22, 0x50, 0x0a, 0x06, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12,
	0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x63,
	0x6f, 0x64, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x18, 0x0a,
	0x07, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07,
	0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x22, 0xd5, 0x01, 0x0a, 0x10, 0x53, 0x74, 0x61, 0x6e,
	0x64, 0x61, 0x72, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x12, 0x0a, 0x04,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65,
	0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x29, 0x0a, 0x05, 0x65, 0x72,
	0x72, 0x6f, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x05,
	0x65, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x34, 0x0a, 0x0b, 0x73, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x5f,
	0x67, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x48, 0x00, 0x52,
	0x0a, 0x73, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x47, 0x61, 0x6d, 0x65, 0x12, 0x2a, 0x0a, 0x05, 0x67,
	0x61, 0x6d, 0x65, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x73, 0x48, 0x00,
	0x52, 0x05, 0x67, 0x61, 0x6d, 0x65, 0x73, 0x42, 0x06, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22,
	0xc6, 0x01, 0x0a, 0x12, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x20, 0x0a, 0x09, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x73,
	0x69, 0x7a, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x08, 0x70, 0x61, 0x67,
	0x65, 0x53, 0x69, 0x7a, 0x65, 0x88, 0x01, 0x01, 0x12, 0x2b, 0x0a, 0x0f, 0x70, 0x72, 0x65, 0x76,
	0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x01, 0x52, 0x0d, 0x70, 0x72, 0x65, 0x76, 0x50, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x88, 0x01, 0x01, 0x12, 0x2b, 0x0a, 0x0f, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61,
	0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02,
	0x52, 0x0d, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x88,
	0x01, 0x01, 0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65,
	0x42, 0x12, 0x0a, 0x10, 0x5f, 0x70, 0x72, 0x65, 0x76, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x42, 0x12, 0x0a, 0x10, 0x5f, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61,
	0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x97, 0x02, 0x0a, 0x11, 0x50, 0x61, 0x67,
	0x69, 0x6e, 0x61, 0x74, 0x65, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x12,
	0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x63, 0x6f,
	0x64, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x29, 0x0a, 0x05,
	0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x3f, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x0a, 0x70, 0x61,
	0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x34, 0x0a, 0x0b, 0x73, 0x69, 0x6e, 0x67,
	0x6c, 0x65, 0x5f, 0x67, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65,
	0x48, 0x00, 0x52, 0x0a, 0x73, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x47, 0x61, 0x6d, 0x65, 0x12, 0x2a,
	0x0a, 0x05, 0x67, 0x61, 0x6d, 0x65, 0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65,
	0x73, 0x48, 0x00, 0x52, 0x05, 0x67, 0x61, 0x6d, 0x65, 0x73, 0x42, 0x06, 0x0a, 0x04, 0x64, 0x61,
	0x74, 0x61, 0x42, 0x3a, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f,
	0x67, 0x6f, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
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

var file_v1_api_game_game_proto_msgTypes = make([]protoimpl.MessageInfo, 12)
var file_v1_api_game_game_proto_goTypes = []any{
	(*Game)(nil),               // 0: v1.api.game.Game
	(*GameCreateRequest)(nil),  // 1: v1.api.game.GameCreateRequest
	(*GameCreateResponse)(nil), // 2: v1.api.game.GameCreateResponse
	(*GameGetRequest)(nil),     // 3: v1.api.game.GameGetRequest
	(*GameGetResponse)(nil),    // 4: v1.api.game.GameGetResponse
	(*GameUpdateRequest)(nil),  // 5: v1.api.game.GameUpdateRequest
	(*GameUpdateResponse)(nil), // 6: v1.api.game.GameUpdateResponse
	(*Games)(nil),              // 7: v1.api.game.Games
	(*Status)(nil),             // 8: v1.api.game.Status
	(*StandardResponse)(nil),   // 9: v1.api.game.StandardResponse
	(*PaginationMetadata)(nil), // 10: v1.api.game.PaginationMetadata
	(*PaginatedResponse)(nil),  // 11: v1.api.game.PaginatedResponse
}
var file_v1_api_game_game_proto_depIdxs = []int32{
	0,  // 0: v1.api.game.GameCreateResponse.game:type_name -> v1.api.game.Game
	0,  // 1: v1.api.game.GameGetResponse.game:type_name -> v1.api.game.Game
	0,  // 2: v1.api.game.GameUpdateResponse.game:type_name -> v1.api.game.Game
	0,  // 3: v1.api.game.Games.games:type_name -> v1.api.game.Game
	8,  // 4: v1.api.game.StandardResponse.error:type_name -> v1.api.game.Status
	0,  // 5: v1.api.game.StandardResponse.single_game:type_name -> v1.api.game.Game
	7,  // 6: v1.api.game.StandardResponse.games:type_name -> v1.api.game.Games
	8,  // 7: v1.api.game.PaginatedResponse.error:type_name -> v1.api.game.Status
	10, // 8: v1.api.game.PaginatedResponse.pagination:type_name -> v1.api.game.PaginationMetadata
	0,  // 9: v1.api.game.PaginatedResponse.single_game:type_name -> v1.api.game.Game
	7,  // 10: v1.api.game.PaginatedResponse.games:type_name -> v1.api.game.Games
	11, // [11:11] is the sub-list for method output_type
	11, // [11:11] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_v1_api_game_game_proto_init() }
func file_v1_api_game_game_proto_init() {
	if File_v1_api_game_game_proto != nil {
		return
	}
	file_v1_api_game_game_proto_msgTypes[0].OneofWrappers = []any{}
	file_v1_api_game_game_proto_msgTypes[1].OneofWrappers = []any{}
	file_v1_api_game_game_proto_msgTypes[3].OneofWrappers = []any{}
	file_v1_api_game_game_proto_msgTypes[5].OneofWrappers = []any{}
	file_v1_api_game_game_proto_msgTypes[9].OneofWrappers = []any{
		(*StandardResponse_SingleGame)(nil),
		(*StandardResponse_Games)(nil),
	}
	file_v1_api_game_game_proto_msgTypes[10].OneofWrappers = []any{}
	file_v1_api_game_game_proto_msgTypes[11].OneofWrappers = []any{
		(*PaginatedResponse_SingleGame)(nil),
		(*PaginatedResponse_Games)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_game_game_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   12,
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
