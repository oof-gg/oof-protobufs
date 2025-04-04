// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package common

import (
	context "context"
	player "github.com/oof-gg/oof-protobufs/generated/go/v1/api/player"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// PlayerServiceClient is the client API for PlayerService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PlayerServiceClient interface {
	CreatePlayer(ctx context.Context, in *player.Player, opts ...grpc.CallOption) (*player.StandardResponse, error)
	GetPlayer(ctx context.Context, in *player.PlayerGet, opts ...grpc.CallOption) (*player.StandardResponse, error)
	UpdatePlayer(ctx context.Context, in *player.PlayerUpdate, opts ...grpc.CallOption) (*player.StandardResponse, error)
	StreamEvents(ctx context.Context, opts ...grpc.CallOption) (PlayerService_StreamEventsClient, error)
}

type playerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPlayerServiceClient(cc grpc.ClientConnInterface) PlayerServiceClient {
	return &playerServiceClient{cc}
}

func (c *playerServiceClient) CreatePlayer(ctx context.Context, in *player.Player, opts ...grpc.CallOption) (*player.StandardResponse, error) {
	out := new(player.StandardResponse)
	err := c.cc.Invoke(ctx, "/v1.api.common.PlayerService/CreatePlayer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *playerServiceClient) GetPlayer(ctx context.Context, in *player.PlayerGet, opts ...grpc.CallOption) (*player.StandardResponse, error) {
	out := new(player.StandardResponse)
	err := c.cc.Invoke(ctx, "/v1.api.common.PlayerService/GetPlayer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *playerServiceClient) UpdatePlayer(ctx context.Context, in *player.PlayerUpdate, opts ...grpc.CallOption) (*player.StandardResponse, error) {
	out := new(player.StandardResponse)
	err := c.cc.Invoke(ctx, "/v1.api.common.PlayerService/UpdatePlayer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *playerServiceClient) StreamEvents(ctx context.Context, opts ...grpc.CallOption) (PlayerService_StreamEventsClient, error) {
	stream, err := c.cc.NewStream(ctx, &PlayerService_ServiceDesc.Streams[0], "/v1.api.common.PlayerService/StreamEvents", opts...)
	if err != nil {
		return nil, err
	}
	x := &playerServiceStreamEventsClient{stream}
	return x, nil
}

type PlayerService_StreamEventsClient interface {
	Send(*player.PlayerAction) error
	Recv() (*player.PlayerAction, error)
	grpc.ClientStream
}

type playerServiceStreamEventsClient struct {
	grpc.ClientStream
}

func (x *playerServiceStreamEventsClient) Send(m *player.PlayerAction) error {
	return x.ClientStream.SendMsg(m)
}

func (x *playerServiceStreamEventsClient) Recv() (*player.PlayerAction, error) {
	m := new(player.PlayerAction)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// PlayerServiceServer is the server API for PlayerService service.
// All implementations must embed UnimplementedPlayerServiceServer
// for forward compatibility
type PlayerServiceServer interface {
	CreatePlayer(context.Context, *player.Player) (*player.StandardResponse, error)
	GetPlayer(context.Context, *player.PlayerGet) (*player.StandardResponse, error)
	UpdatePlayer(context.Context, *player.PlayerUpdate) (*player.StandardResponse, error)
	StreamEvents(PlayerService_StreamEventsServer) error
	mustEmbedUnimplementedPlayerServiceServer()
}

// UnimplementedPlayerServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPlayerServiceServer struct {
}

func (UnimplementedPlayerServiceServer) CreatePlayer(context.Context, *player.Player) (*player.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePlayer not implemented")
}
func (UnimplementedPlayerServiceServer) GetPlayer(context.Context, *player.PlayerGet) (*player.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPlayer not implemented")
}
func (UnimplementedPlayerServiceServer) UpdatePlayer(context.Context, *player.PlayerUpdate) (*player.StandardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePlayer not implemented")
}
func (UnimplementedPlayerServiceServer) StreamEvents(PlayerService_StreamEventsServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamEvents not implemented")
}
func (UnimplementedPlayerServiceServer) mustEmbedUnimplementedPlayerServiceServer() {}

// UnsafePlayerServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PlayerServiceServer will
// result in compilation errors.
type UnsafePlayerServiceServer interface {
	mustEmbedUnimplementedPlayerServiceServer()
}

func RegisterPlayerServiceServer(s grpc.ServiceRegistrar, srv PlayerServiceServer) {
	s.RegisterService(&PlayerService_ServiceDesc, srv)
}

func _PlayerService_CreatePlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(player.Player)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerServiceServer).CreatePlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.api.common.PlayerService/CreatePlayer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerServiceServer).CreatePlayer(ctx, req.(*player.Player))
	}
	return interceptor(ctx, in, info, handler)
}

func _PlayerService_GetPlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(player.PlayerGet)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerServiceServer).GetPlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.api.common.PlayerService/GetPlayer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerServiceServer).GetPlayer(ctx, req.(*player.PlayerGet))
	}
	return interceptor(ctx, in, info, handler)
}

func _PlayerService_UpdatePlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(player.PlayerUpdate)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlayerServiceServer).UpdatePlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.api.common.PlayerService/UpdatePlayer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlayerServiceServer).UpdatePlayer(ctx, req.(*player.PlayerUpdate))
	}
	return interceptor(ctx, in, info, handler)
}

func _PlayerService_StreamEvents_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(PlayerServiceServer).StreamEvents(&playerServiceStreamEventsServer{stream})
}

type PlayerService_StreamEventsServer interface {
	Send(*player.PlayerAction) error
	Recv() (*player.PlayerAction, error)
	grpc.ServerStream
}

type playerServiceStreamEventsServer struct {
	grpc.ServerStream
}

func (x *playerServiceStreamEventsServer) Send(m *player.PlayerAction) error {
	return x.ServerStream.SendMsg(m)
}

func (x *playerServiceStreamEventsServer) Recv() (*player.PlayerAction, error) {
	m := new(player.PlayerAction)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// PlayerService_ServiceDesc is the grpc.ServiceDesc for PlayerService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PlayerService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.api.common.PlayerService",
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
	Metadata: "v1/api/common/player_service.proto",
}
