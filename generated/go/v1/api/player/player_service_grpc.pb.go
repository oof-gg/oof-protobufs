// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.28.2
// source: v1/api/player/player_service.proto

package player

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	PlayerService_CreatePlayer_FullMethodName = "/v1.api.player.PlayerService/CreatePlayer"
	PlayerService_GetPlayer_FullMethodName    = "/v1.api.player.PlayerService/GetPlayer"
	PlayerService_UpdatePlayer_FullMethodName = "/v1.api.player.PlayerService/UpdatePlayer"
	PlayerService_StreamEvents_FullMethodName = "/v1.api.player.PlayerService/StreamEvents"
)

// PlayerServiceClient is the client API for PlayerService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PlayerServiceClient interface {
	CreatePlayer(ctx context.Context, in *Player, opts ...grpc.CallOption) (*Player, error)
	GetPlayer(ctx context.Context, in *PlayerGet, opts ...grpc.CallOption) (*Players, error)
	UpdatePlayer(ctx context.Context, in *PlayerUpdate, opts ...grpc.CallOption) (*Player, error)
	StreamEvents(ctx context.Context, opts ...grpc.CallOption) (grpc.BidiStreamingClient[PlayerAction, PlayerAction], error)
}

type playerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPlayerServiceClient(cc grpc.ClientConnInterface) PlayerServiceClient {
	return &playerServiceClient{cc}
}

func (c *playerServiceClient) CreatePlayer(ctx context.Context, in *Player, opts ...grpc.CallOption) (*Player, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Player)
	err := c.cc.Invoke(ctx, PlayerService_CreatePlayer_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *playerServiceClient) GetPlayer(ctx context.Context, in *PlayerGet, opts ...grpc.CallOption) (*Players, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Players)
	err := c.cc.Invoke(ctx, PlayerService_GetPlayer_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *playerServiceClient) UpdatePlayer(ctx context.Context, in *PlayerUpdate, opts ...grpc.CallOption) (*Player, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Player)
	err := c.cc.Invoke(ctx, PlayerService_UpdatePlayer_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *playerServiceClient) StreamEvents(ctx context.Context, opts ...grpc.CallOption) (grpc.BidiStreamingClient[PlayerAction, PlayerAction], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &PlayerService_ServiceDesc.Streams[0], PlayerService_StreamEvents_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[PlayerAction, PlayerAction]{ClientStream: stream}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type PlayerService_StreamEventsClient = grpc.BidiStreamingClient[PlayerAction, PlayerAction]

// PlayerServiceServer is the server API for PlayerService service.
// All implementations must embed UnimplementedPlayerServiceServer
// for forward compatibility.
type PlayerServiceServer interface {
	CreatePlayer(context.Context, *Player) (*Player, error)
	GetPlayer(context.Context, *PlayerGet) (*Players, error)
	UpdatePlayer(context.Context, *PlayerUpdate) (*Player, error)
	StreamEvents(grpc.BidiStreamingServer[PlayerAction, PlayerAction]) error
	mustEmbedUnimplementedPlayerServiceServer()
}

// UnimplementedPlayerServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedPlayerServiceServer struct{}

func (UnimplementedPlayerServiceServer) CreatePlayer(context.Context, *Player) (*Player, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePlayer not implemented")
}
func (UnimplementedPlayerServiceServer) GetPlayer(context.Context, *PlayerGet) (*Players, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPlayer not implemented")
}
func (UnimplementedPlayerServiceServer) UpdatePlayer(context.Context, *PlayerUpdate) (*Player, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePlayer not implemented")
}
func (UnimplementedPlayerServiceServer) StreamEvents(grpc.BidiStreamingServer[PlayerAction, PlayerAction]) error {
	return status.Errorf(codes.Unimplemented, "method StreamEvents not implemented")
}
func (UnimplementedPlayerServiceServer) mustEmbedUnimplementedPlayerServiceServer() {}
func (UnimplementedPlayerServiceServer) testEmbeddedByValue()                       {}

// UnsafePlayerServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PlayerServiceServer will
// result in compilation errors.
type UnsafePlayerServiceServer interface {
	mustEmbedUnimplementedPlayerServiceServer()
}

func RegisterPlayerServiceServer(s grpc.ServiceRegistrar, srv PlayerServiceServer) {
	// If the following call pancis, it indicates UnimplementedPlayerServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&PlayerService_ServiceDesc, srv)
}

func _PlayerService_CreatePlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Player)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerServiceServer).CreatePlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PlayerService_CreatePlayer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerServiceServer).CreatePlayer(ctx, req.(*Player))
	}
	return interceptor(ctx, in, info, handler)
}

func _PlayerService_GetPlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PlayerGet)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerServiceServer).GetPlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PlayerService_GetPlayer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerServiceServer).GetPlayer(ctx, req.(*PlayerGet))
	}
	return interceptor(ctx, in, info, handler)
}

func _PlayerService_UpdatePlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PlayerUpdate)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerServiceServer).UpdatePlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PlayerService_UpdatePlayer_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerServiceServer).UpdatePlayer(ctx, req.(*PlayerUpdate))
	}
	return interceptor(ctx, in, info, handler)
}

func _PlayerService_StreamEvents_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(PlayerServiceServer).StreamEvents(&grpc.GenericServerStream[PlayerAction, PlayerAction]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type PlayerService_StreamEventsServer = grpc.BidiStreamingServer[PlayerAction, PlayerAction]

// PlayerService_ServiceDesc is the grpc.ServiceDesc for PlayerService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PlayerService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.api.player.PlayerService",
	HandlerType: (*PlayerServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePlayer",
			Handler:    _PlayerService_CreatePlayer_Handler,
		},
		{
			MethodName: "GetPlayer",
			Handler:    _PlayerService_GetPlayer_Handler,
		},
		{
			MethodName: "UpdatePlayer",
			Handler:    _PlayerService_UpdatePlayer_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StreamEvents",
			Handler:       _PlayerService_StreamEvents_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "v1/api/player/player_service.proto",
}
