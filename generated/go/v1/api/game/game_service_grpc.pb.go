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
	Game_CreateSession_FullMethodName = "/v1.api.game.Game/CreateSession"
	Game_GetSession_FullMethodName    = "/v1.api.game.Game/GetSession"
	Game_UpdateSession_FullMethodName = "/v1.api.game.Game/UpdateSession"
	Game_DeleteSession_FullMethodName = "/v1.api.game.Game/DeleteSession"
	Game_CreateEntity_FullMethodName  = "/v1.api.game.Game/CreateEntity"
	Game_GetEntity_FullMethodName     = "/v1.api.game.Game/GetEntity"
	Game_UpdateEntity_FullMethodName  = "/v1.api.game.Game/UpdateEntity"
	Game_DeleteEntity_FullMethodName  = "/v1.api.game.Game/DeleteEntity"
	Game_StreamEvents_FullMethodName  = "/v1.api.game.Game/StreamEvents"
)

// GameClient is the client API for Game service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GameClient interface {
	CreateSession(ctx context.Context, in *Session, opts ...grpc.CallOption) (*std.StandardResponse, error)
	GetSession(ctx context.Context, in *SessionGet, opts ...grpc.CallOption) (*Sessions, error)
	UpdateSession(ctx context.Context, in *Session, opts ...grpc.CallOption) (*std.StandardResponse, error)
	DeleteSession(ctx context.Context, in *SessionDelete, opts ...grpc.CallOption) (*std.StandardResponse, error)
	// TODO: Adjust payloads for protos
	CreateEntity(ctx context.Context, in *EntityCreate, opts ...grpc.CallOption) (*std.StandardResponse, error)
	GetEntity(ctx context.Context, in *EntityGet, opts ...grpc.CallOption) (*Entities, error)
	UpdateEntity(ctx context.Context, in *EntityUpdate, opts ...grpc.CallOption) (*std.StandardResponse, error)
	DeleteEntity(ctx context.Context, in *EntityDelete, opts ...grpc.CallOption) (*std.StandardResponse, error)
	// Stream events from the game
	StreamEvents(ctx context.Context, opts ...grpc.CallOption) (grpc.BidiStreamingClient[GameEvent, GameEvent], error)
}

type gameClient struct {
	cc grpc.ClientConnInterface
}

func NewGameClient(cc grpc.ClientConnInterface) GameClient {
	return &gameClient{cc}
}

func (c *gameClient) CreateSession(ctx context.Context, in *Session, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, Game_CreateSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) GetSession(ctx context.Context, in *SessionGet, opts ...grpc.CallOption) (*Sessions, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Sessions)
	err := c.cc.Invoke(ctx, Game_GetSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) UpdateSession(ctx context.Context, in *Session, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, Game_UpdateSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) DeleteSession(ctx context.Context, in *SessionDelete, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, Game_DeleteSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) CreateEntity(ctx context.Context, in *EntityCreate, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, Game_CreateEntity_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) GetEntity(ctx context.Context, in *EntityGet, opts ...grpc.CallOption) (*Entities, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Entities)
	err := c.cc.Invoke(ctx, Game_GetEntity_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) UpdateEntity(ctx context.Context, in *EntityUpdate, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, Game_UpdateEntity_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) DeleteEntity(ctx context.Context, in *EntityDelete, opts ...grpc.CallOption) (*std.StandardResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(std.StandardResponse)
	err := c.cc.Invoke(ctx, Game_DeleteEntity_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) StreamEvents(ctx context.Context, opts ...grpc.CallOption) (grpc.BidiStreamingClient[GameEvent, GameEvent], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &Game_ServiceDesc.Streams[0], Game_StreamEvents_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[GameEvent, GameEvent]{ClientStream: stream}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type Game_StreamEventsClient = grpc.BidiStreamingClient[GameEvent, GameEvent]

// GameServer is the server API for Game service.
// All implementations must embed UnimplementedGameServer
// for forward compatibility.
type GameServer interface {
	CreateSession(context.Context, *Session) (*std.StandardResponse, error)
	GetSession(context.Context, *SessionGet) (*Sessions, error)
	UpdateSession(context.Context, *Session) (*std.StandardResponse, error)
	DeleteSession(context.Context, *SessionDelete) (*std.StandardResponse, error)
	// TODO: Adjust payloads for protos
	CreateEntity(context.Context, *EntityCreate) (*std.StandardResponse, error)
	GetEntity(context.Context, *EntityGet) (*Entities, error)
	UpdateEntity(context.Context, *EntityUpdate) (*std.StandardResponse, error)
	DeleteEntity(context.Context, *EntityDelete) (*std.StandardResponse, error)
	// Stream events from the game
	StreamEvents(grpc.BidiStreamingServer[GameEvent, GameEvent]) error
	mustEmbedUnimplementedGameServer()
}

// UnimplementedGameServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedGameServer struct{}

func (UnimplementedGameServer) CreateSession(context.Context, *Session) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSession not implemented")
}
func (UnimplementedGameServer) GetSession(context.Context, *SessionGet) (*Sessions, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSession not implemented")
}
func (UnimplementedGameServer) UpdateSession(context.Context, *Session) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateSession not implemented")
}
func (UnimplementedGameServer) DeleteSession(context.Context, *SessionDelete) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteSession not implemented")
}
func (UnimplementedGameServer) CreateEntity(context.Context, *EntityCreate) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateEntity not implemented")
}
func (UnimplementedGameServer) GetEntity(context.Context, *EntityGet) (*Entities, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEntity not implemented")
}
func (UnimplementedGameServer) UpdateEntity(context.Context, *EntityUpdate) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateEntity not implemented")
}
func (UnimplementedGameServer) DeleteEntity(context.Context, *EntityDelete) (*std.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteEntity not implemented")
}
func (UnimplementedGameServer) StreamEvents(grpc.BidiStreamingServer[GameEvent, GameEvent]) error {
	return status.Errorf(codes.Unimplemented, "method StreamEvents not implemented")
}
func (UnimplementedGameServer) mustEmbedUnimplementedGameServer() {}
func (UnimplementedGameServer) testEmbeddedByValue()              {}

// UnsafeGameServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GameServer will
// result in compilation errors.
type UnsafeGameServer interface {
	mustEmbedUnimplementedGameServer()
}

func RegisterGameServer(s grpc.ServiceRegistrar, srv GameServer) {
	// If the following call pancis, it indicates UnimplementedGameServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&Game_ServiceDesc, srv)
}

func _Game_CreateSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Session)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).CreateSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_CreateSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).CreateSession(ctx, req.(*Session))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_GetSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SessionGet)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).GetSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_GetSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).GetSession(ctx, req.(*SessionGet))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_UpdateSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Session)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).UpdateSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_UpdateSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).UpdateSession(ctx, req.(*Session))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_DeleteSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SessionDelete)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).DeleteSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_DeleteSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).DeleteSession(ctx, req.(*SessionDelete))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_CreateEntity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EntityCreate)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).CreateEntity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_CreateEntity_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).CreateEntity(ctx, req.(*EntityCreate))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_GetEntity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EntityGet)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).GetEntity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_GetEntity_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).GetEntity(ctx, req.(*EntityGet))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_UpdateEntity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EntityUpdate)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).UpdateEntity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_UpdateEntity_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).UpdateEntity(ctx, req.(*EntityUpdate))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_DeleteEntity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EntityDelete)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServer).DeleteEntity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Game_DeleteEntity_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServer).DeleteEntity(ctx, req.(*EntityDelete))
	}
	return interceptor(ctx, in, info, handler)
}

func _Game_StreamEvents_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(GameServer).StreamEvents(&grpc.GenericServerStream[GameEvent, GameEvent]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type Game_StreamEventsServer = grpc.BidiStreamingServer[GameEvent, GameEvent]

// Game_ServiceDesc is the grpc.ServiceDesc for Game service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Game_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.api.game.Game",
	HandlerType: (*GameServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateSession",
			Handler:    _Game_CreateSession_Handler,
		},
		{
			MethodName: "GetSession",
			Handler:    _Game_GetSession_Handler,
		},
		{
			MethodName: "UpdateSession",
			Handler:    _Game_UpdateSession_Handler,
		},
		{
			MethodName: "DeleteSession",
			Handler:    _Game_DeleteSession_Handler,
		},
		{
			MethodName: "CreateEntity",
			Handler:    _Game_CreateEntity_Handler,
		},
		{
			MethodName: "GetEntity",
			Handler:    _Game_GetEntity_Handler,
		},
		{
			MethodName: "UpdateEntity",
			Handler:    _Game_UpdateEntity_Handler,
		},
		{
			MethodName: "DeleteEntity",
			Handler:    _Game_DeleteEntity_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StreamEvents",
			Handler:       _Game_StreamEvents_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "v1/api/game/game_service.proto",
}
