// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.28.2
// source: api/game/game_service.proto

package game

import (
	context "context"
	api_game "github.com/oof-gg/oof-protobufs/generated/go/api.game"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	Game_CreateSession_FullMethodName = "/api.game.Game/CreateSession"
	Game_UpdateSession_FullMethodName = "/api.game.Game/UpdateSession"
	Game_StreamEvents_FullMethodName  = "/api.game.Game/StreamEvents"
)

// GameClient is the client API for Game service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GameClient interface {
	CreateSession(ctx context.Context, in *Session, opts ...grpc.CallOption) (*Session, error)
	UpdateSession(ctx context.Context, in *Session, opts ...grpc.CallOption) (*Session, error)
	StreamEvents(ctx context.Context, opts ...grpc.CallOption) (grpc.BidiStreamingClient[api_game.GameEvent, api_game.GameEvent], error)
}

type gameClient struct {
	cc grpc.ClientConnInterface
}

func NewGameClient(cc grpc.ClientConnInterface) GameClient {
	return &gameClient{cc}
}

func (c *gameClient) CreateSession(ctx context.Context, in *Session, opts ...grpc.CallOption) (*Session, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Session)
	err := c.cc.Invoke(ctx, Game_CreateSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) UpdateSession(ctx context.Context, in *Session, opts ...grpc.CallOption) (*Session, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Session)
	err := c.cc.Invoke(ctx, Game_UpdateSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameClient) StreamEvents(ctx context.Context, opts ...grpc.CallOption) (grpc.BidiStreamingClient[api_game.GameEvent, api_game.GameEvent], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &Game_ServiceDesc.Streams[0], Game_StreamEvents_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[api_game.GameEvent, api_game.GameEvent]{ClientStream: stream}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type Game_StreamEventsClient = grpc.BidiStreamingClient[api_game.GameEvent, api_game.GameEvent]

// GameServer is the server API for Game service.
// All implementations must embed UnimplementedGameServer
// for forward compatibility.
type GameServer interface {
	CreateSession(context.Context, *Session) (*Session, error)
	UpdateSession(context.Context, *Session) (*Session, error)
	StreamEvents(grpc.BidiStreamingServer[api_game.GameEvent, api_game.GameEvent]) error
	mustEmbedUnimplementedGameServer()
}

// UnimplementedGameServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedGameServer struct{}

func (UnimplementedGameServer) CreateSession(context.Context, *Session) (*Session, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSession not implemented")
}
func (UnimplementedGameServer) UpdateSession(context.Context, *Session) (*Session, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateSession not implemented")
}
func (UnimplementedGameServer) StreamEvents(grpc.BidiStreamingServer[api_game.GameEvent, api_game.GameEvent]) error {
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

func _Game_StreamEvents_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(GameServer).StreamEvents(&grpc.GenericServerStream[api_game.GameEvent, api_game.GameEvent]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type Game_StreamEventsServer = grpc.BidiStreamingServer[api_game.GameEvent, api_game.GameEvent]

// Game_ServiceDesc is the grpc.ServiceDesc for Game service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Game_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "api.game.Game",
	HandlerType: (*GameServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateSession",
			Handler:    _Game_CreateSession_Handler,
		},
		{
			MethodName: "UpdateSession",
			Handler:    _Game_UpdateSession_Handler,
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
	Metadata: "api/game/game_service.proto",
}