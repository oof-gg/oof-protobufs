// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.28.2
// source: v1/api/game/game_service.proto

package game

import (
	context "context"
	std "github.com/oof-gg/oof-protobufs/generated/go/v1/std"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	GameService_JoinLeave_FullMethodName     = "/v1.api.game.GameService/JoinLeave"
	GameService_CreateSession_FullMethodName = "/v1.api.game.GameService/CreateSession"
	GameService_GetSession_FullMethodName    = "/v1.api.game.GameService/GetSession"
	GameService_UpdateSession_FullMethodName = "/v1.api.game.GameService/UpdateSession"
	GameService_DeleteSession_FullMethodName = "/v1.api.game.GameService/DeleteSession"
	GameService_CreateEntity_FullMethodName  = "/v1.api.game.GameService/CreateEntity"
	GameService_GetEntity_FullMethodName     = "/v1.api.game.GameService/GetEntity"
	GameService_UpdateEntity_FullMethodName  = "/v1.api.game.GameService/UpdateEntity"
	GameService_DeleteEntity_FullMethodName  = "/v1.api.game.GameService/DeleteEntity"
	GameService_CreateGame_FullMethodName    = "/v1.api.game.GameService/CreateGame"
	GameService_GetGame_FullMethodName       = "/v1.api.game.GameService/GetGame"
	GameService_UpdateGame_FullMethodName    = "/v1.api.game.GameService/UpdateGame"
	GameService_StreamEvents_FullMethodName  = "/v1.api.game.GameService/StreamEvents"
	GameService_WatchQueue_FullMethodName    = "/v1.api.game.GameService/WatchQueue"
)

// GameServiceClient is the client API for GameService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GameServiceClient interface {
	// / Join or leave a game, returns the queued session if not joined
	JoinLeave(ctx context.Context, in *JoinLeaveGame, opts ...grpc.CallOption) (*std.StandardResponse, error)
	CreateSession(ctx context.Context, in *SessionCreate, opts ...grpc.CallOption) (*std.StandardResponse, error)
	GetSession(ctx context.Context, in *SessionGet, opts ...grpc.CallOption) (*std.StandardResponse, error)
	UpdateSession(ctx context.Context, in *SessionUpdate, opts ...grpc.CallOption) (*std.StandardResponse, error)
	DeleteSession(ctx context.Context, in *SessionDelete, opts ...grpc.CallOption) (*std.StandardResponse, error)
	// TODO: Adjust payloads for protos
	// / Create a new entity
	CreateEntity(ctx context.Context, in *EntityCreateRequest, opts ...grpc.CallOption) (*std.StandardResponse, error)
	// / Get an entity by ID
	GetEntity(ctx context.Context, in *EntityGetRequest, opts ...grpc.CallOption) (*std.PaginatedResponse, error)
	// / Update an entity by ID
	UpdateEntity(ctx context.Context, in *EntityUpdateRequest, opts ...grpc.CallOption) (*std.StandardResponse, error)
	// / Delete an entity by ID
	DeleteEntity(ctx context.Context, in *EntityDeleteRequest, opts ...grpc.CallOption) (*std.StandardResponse, error)
	// / Create a new game
	CreateGame(ctx context.Context, in *GameCreateRequest, opts ...grpc.CallOption) (*std.StandardResponse, error)
	// / Get a game by ID
	GetGame(ctx context.Context, in *GameGetRequest, opts ...grpc.CallOption) (*std.PaginatedResponse, error)
	// / Update a game by ID
	UpdateGame(ctx context.Context, in *GameUpdateRequest, opts ...grpc.CallOption) (*std.StandardResponse, error)
	// / Wait for queue updates
	StreamEvents(ctx context.Context, opts ...grpc.CallOption) (grpc.ClientStreamingClient[GameEvent, GameEvent], error)
	// / Stream events from the game
	WatchQueue(ctx context.Context, in *Session, opts ...grpc.CallOption) (grpc.ServerStreamingClient[Session], error)
}

type gameServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewGameServiceClient(cc grpc.ClientConnInterface) GameServiceClient {
	return &gameServiceClient{cc}
}

func (c *gameServiceClient) JoinLeave(ctx context.Context, in *JoinLeaveGame, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_JoinLeave_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) CreateSession(ctx context.Context, in *SessionCreate, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_CreateSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) GetSession(ctx context.Context, in *SessionGet, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_GetSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) UpdateSession(ctx context.Context, in *SessionUpdate, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_UpdateSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) DeleteSession(ctx context.Context, in *SessionDelete, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_DeleteSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) CreateEntity(ctx context.Context, in *EntityCreateRequest, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_CreateEntity_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) GetEntity(ctx context.Context, in *EntityGetRequest, opts ...grpc.CallOption) (*std.PaginatedResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.PaginatedResponse)
	err := c.cc.Invoke(ctx, GameService_GetEntity_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) UpdateEntity(ctx context.Context, in *EntityUpdateRequest, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_UpdateEntity_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) DeleteEntity(ctx context.Context, in *EntityDeleteRequest, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_DeleteEntity_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) CreateGame(ctx context.Context, in *GameCreateRequest, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_CreateGame_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) GetGame(ctx context.Context, in *GameGetRequest, opts ...grpc.CallOption) (*std.PaginatedResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.PaginatedResponse)
	err := c.cc.Invoke(ctx, GameService_GetGame_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) UpdateGame(ctx context.Context, in *GameUpdateRequest, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, GameService_UpdateGame_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServiceClient) StreamEvents(ctx context.Context, opts ...grpc.CallOption) (grpc.ClientStreamingClient[GameEvent, GameEvent], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &GameService_ServiceDesc.Streams[0], GameService_StreamEvents_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[GameEvent, GameEvent]{ClientStream: stream}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type GameService_StreamEventsClient = grpc.ClientStreamingClient[GameEvent, GameEvent]

func (c *gameServiceClient) WatchQueue(ctx context.Context, in *Session, opts ...grpc.CallOption) (grpc.ServerStreamingClient[Session], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &GameService_ServiceDesc.Streams[1], GameService_WatchQueue_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[Session, Session]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type GameService_WatchQueueClient = grpc.ServerStreamingClient[Session]

// GameServiceServer is the server API for GameService service.
// All implementations must embed UnimplementedGameServiceServer
// for forward compatibility.
type GameServiceServer interface {
	// / Join or leave a game, returns the queued session if not joined
	JoinLeave(context.Context, *JoinLeaveGame) (*std.StandardResponse, error)
	CreateSession(context.Context, *SessionCreate) (*std.StandardResponse, error)
	GetSession(context.Context, *SessionGet) (*std.StandardResponse, error)
	UpdateSession(context.Context, *SessionUpdate) (*std.StandardResponse, error)
	DeleteSession(context.Context, *SessionDelete) (*std.StandardResponse, error)
	// TODO: Adjust payloads for protos
	// / Create a new entity
	CreateEntity(context.Context, *EntityCreateRequest) (*std.StandardResponse, error)
	// / Get an entity by ID
	GetEntity(context.Context, *EntityGetRequest) (*std.PaginatedResponse, error)
	// / Update an entity by ID
	UpdateEntity(context.Context, *EntityUpdateRequest) (*std.StandardResponse, error)
	// / Delete an entity by ID
	DeleteEntity(context.Context, *EntityDeleteRequest) (*std.StandardResponse, error)
	// / Create a new game
	CreateGame(context.Context, *GameCreateRequest) (*std.StandardResponse, error)
	// / Get a game by ID
	GetGame(context.Context, *GameGetRequest) (*std.PaginatedResponse, error)
	// / Update a game by ID
	UpdateGame(context.Context, *GameUpdateRequest) (*std.StandardResponse, error)
	// / Wait for queue updates
	StreamEvents(grpc.ClientStreamingServer[GameEvent, GameEvent]) error
	// / Stream events from the game
	WatchQueue(*Session, grpc.ServerStreamingServer[Session]) error
	mustEmbedUnimplementedGameServiceServer()
}

// UnimplementedGameServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedGameServiceServer struct{}

func (UnimplementedGameServiceServer) JoinLeave(context.Context, *JoinLeaveGame) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method JoinLeave not implemented")
}
func (UnimplementedGameServiceServer) CreateSession(context.Context, *SessionCreate) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSession not implemented")
}
func (UnimplementedGameServiceServer) GetSession(context.Context, *SessionGet) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSession not implemented")
}
func (UnimplementedGameServiceServer) UpdateSession(context.Context, *SessionUpdate) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateSession not implemented")
}
func (UnimplementedGameServiceServer) DeleteSession(context.Context, *SessionDelete) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteSession not implemented")
}
func (UnimplementedGameServiceServer) CreateEntity(context.Context, *EntityCreateRequest) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateEntity not implemented")
}
func (UnimplementedGameServiceServer) GetEntity(context.Context, *EntityGetRequest) (*std.PaginatedResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEntity not implemented")
}
func (UnimplementedGameServiceServer) UpdateEntity(context.Context, *EntityUpdateRequest) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateEntity not implemented")
}
func (UnimplementedGameServiceServer) DeleteEntity(context.Context, *EntityDeleteRequest) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteEntity not implemented")
}
func (UnimplementedGameServiceServer) CreateGame(context.Context, *GameCreateRequest) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateGame not implemented")
}
func (UnimplementedGameServiceServer) GetGame(context.Context, *GameGetRequest) (*std.PaginatedResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetGame not implemented")
}
func (UnimplementedGameServiceServer) UpdateGame(context.Context, *GameUpdateRequest) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateGame not implemented")
}
func (UnimplementedGameServiceServer) StreamEvents(grpc.ClientStreamingServer[GameEvent, GameEvent]) error {
	return status.Errorf(codes.Unimplemented, "method StreamEvents not implemented")
}
func (UnimplementedGameServiceServer) WatchQueue(*Session, grpc.ServerStreamingServer[Session]) error {
	return status.Errorf(codes.Unimplemented, "method WatchQueue not implemented")
}
func (UnimplementedGameServiceServer) mustEmbedUnimplementedGameServiceServer() {}
func (UnimplementedGameServiceServer) testEmbeddedByValue()                     {}

// UnsafeGameServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GameServiceServer will
// result in compilation errors.
type UnsafeGameServiceServer interface {
	mustEmbedUnimplementedGameServiceServer()
}

func RegisterGameServiceServer(s grpc.ServiceRegistrar, srv GameServiceServer) {
	// If the following call pancis, it indicates UnimplementedGameServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&GameService_ServiceDesc, srv)
}

func _GameService_JoinLeave_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(JoinLeaveGame)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).JoinLeave(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_JoinLeave_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).JoinLeave(ctx, req.(*JoinLeaveGame))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_CreateSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SessionCreate)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).CreateSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_CreateSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).CreateSession(ctx, req.(*SessionCreate))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_GetSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SessionGet)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).GetSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_GetSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).GetSession(ctx, req.(*SessionGet))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_UpdateSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SessionUpdate)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).UpdateSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_UpdateSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).UpdateSession(ctx, req.(*SessionUpdate))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_DeleteSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SessionDelete)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).DeleteSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_DeleteSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).DeleteSession(ctx, req.(*SessionDelete))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_CreateEntity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EntityCreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).CreateEntity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_CreateEntity_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).CreateEntity(ctx, req.(*EntityCreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_GetEntity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EntityGetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).GetEntity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_GetEntity_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).GetEntity(ctx, req.(*EntityGetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_UpdateEntity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EntityUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).UpdateEntity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_UpdateEntity_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).UpdateEntity(ctx, req.(*EntityUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_DeleteEntity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EntityDeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).DeleteEntity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_DeleteEntity_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).DeleteEntity(ctx, req.(*EntityDeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_CreateGame_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GameCreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).CreateGame(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_CreateGame_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).CreateGame(ctx, req.(*GameCreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_GetGame_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GameGetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).GetGame(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_GetGame_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).GetGame(ctx, req.(*GameGetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_UpdateGame_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GameUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServiceServer).UpdateGame(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GameService_UpdateGame_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServiceServer).UpdateGame(ctx, req.(*GameUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameService_StreamEvents_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(GameServiceServer).StreamEvents(&grpc.GenericServerStream[GameEvent, GameEvent]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type GameService_StreamEventsServer = grpc.ClientStreamingServer[GameEvent, GameEvent]

func _GameService_WatchQueue_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(Session)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(GameServiceServer).WatchQueue(m, &grpc.GenericServerStream[Session, Session]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type GameService_WatchQueueServer = grpc.ServerStreamingServer[Session]

// GameService_ServiceDesc is the grpc.ServiceDesc for GameService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var GameService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.api.game.GameService",
	HandlerType: (*GameServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "JoinLeave",
			Handler:    _GameService_JoinLeave_Handler,
		},
		{
			MethodName: "CreateSession",
			Handler:    _GameService_CreateSession_Handler,
		},
		{
			MethodName: "GetSession",
			Handler:    _GameService_GetSession_Handler,
		},
		{
			MethodName: "UpdateSession",
			Handler:    _GameService_UpdateSession_Handler,
		},
		{
			MethodName: "DeleteSession",
			Handler:    _GameService_DeleteSession_Handler,
		},
		{
			MethodName: "CreateEntity",
			Handler:    _GameService_CreateEntity_Handler,
		},
		{
			MethodName: "GetEntity",
			Handler:    _GameService_GetEntity_Handler,
		},
		{
			MethodName: "UpdateEntity",
			Handler:    _GameService_UpdateEntity_Handler,
		},
		{
			MethodName: "DeleteEntity",
			Handler:    _GameService_DeleteEntity_Handler,
		},
		{
			MethodName: "CreateGame",
			Handler:    _GameService_CreateGame_Handler,
		},
		{
			MethodName: "GetGame",
			Handler:    _GameService_GetGame_Handler,
		},
		{
			MethodName: "UpdateGame",
			Handler:    _GameService_UpdateGame_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StreamEvents",
			Handler:       _GameService_StreamEvents_Handler,
			ClientStreams: true,
		},
		{
			StreamName:    "WatchQueue",
			Handler:       _GameService_WatchQueue_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "v1/api/game/game_service.proto",
}
