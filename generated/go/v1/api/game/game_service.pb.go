// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        v5.28.3
// source: v1/api/game/game_service.proto

package game

import (
	std "github.com/oof-gg/oof-protobufs/generated/go/v1/std"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_v1_api_game_game_service_proto protoreflect.FileDescriptor

var file_v1_api_game_game_service_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x67, 0x61,
	0x6d, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0b, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x1a, 0x19, 0x76,
	0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x73, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x17, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x76, 0x31, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x2f, 0x6a, 0x6f, 0x69, 0x6e, 0x5f, 0x6c, 0x65,
	0x61, 0x76, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x16, 0x76, 0x31, 0x2f, 0x73, 0x74,
	0x64, 0x2f, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x32, 0xa0, 0x06, 0x0a, 0x0b, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x12, 0x3d, 0x0a, 0x09, 0x4a, 0x6f, 0x69, 0x6e, 0x4c, 0x65, 0x61, 0x76, 0x65, 0x12, 0x1a,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x4a, 0x6f, 0x69,
	0x6e, 0x4c, 0x65, 0x61, 0x76, 0x65, 0x47, 0x61, 0x6d, 0x65, 0x1a, 0x14, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x12, 0x41, 0x0a, 0x0d, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x12, 0x1a, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e,
	0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x1a, 0x14, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x12, 0x3c, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x12, 0x17, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e,
	0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x47, 0x65, 0x74, 0x1a, 0x15, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x73, 0x12, 0x41, 0x0a, 0x0d, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x53, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x12, 0x1a, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65,
	0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x1a, 0x14,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x12, 0x45, 0x0a, 0x0d, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67,
	0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x1a, 0x18, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x74, 0x64, 0x2e, 0x53, 0x74, 0x61, 0x6e, 0x64,
	0x61, 0x72, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x53, 0x0a, 0x0c, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x20, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x4a, 0x0a, 0x09, 0x47, 0x65, 0x74, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x1d, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x47, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x53, 0x0a, 0x0c,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x20, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x53, 0x0a, 0x0c, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x45, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x12, 0x20, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e,
	0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d,
	0x65, 0x2e, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x40, 0x0a, 0x0c, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x16, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x1a, 0x16,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x47, 0x61, 0x6d,
	0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x28, 0x01, 0x12, 0x3a, 0x0a, 0x0a, 0x57, 0x61, 0x74, 0x63,
	0x68, 0x51, 0x75, 0x65, 0x75, 0x65, 0x12, 0x14, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x1a, 0x14, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x30, 0x01, 0x42, 0x3a, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65,
	0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x61, 0x6d, 0x65,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_v1_api_game_game_service_proto_goTypes = []any{
	(*JoinLeaveGame)(nil),        // 0: v1.api.game.JoinLeaveGame
	(*SessionCreate)(nil),        // 1: v1.api.game.SessionCreate
	(*SessionGet)(nil),           // 2: v1.api.game.SessionGet
	(*SessionUpdate)(nil),        // 3: v1.api.game.SessionUpdate
	(*SessionDelete)(nil),        // 4: v1.api.game.SessionDelete
	(*EntityCreateRequest)(nil),  // 5: v1.api.game.EntityCreateRequest
	(*EntityGetRequest)(nil),     // 6: v1.api.game.EntityGetRequest
	(*EntityUpdateRequest)(nil),  // 7: v1.api.game.EntityUpdateRequest
	(*EntityDeleteRequest)(nil),  // 8: v1.api.game.EntityDeleteRequest
	(*GameEvent)(nil),            // 9: v1.api.game.GameEvent
	(*Session)(nil),              // 10: v1.api.game.Session
	(*Sessions)(nil),             // 11: v1.api.game.Sessions
	(*std.StandardResponse)(nil), // 12: v1.std.StandardResponse
	(*EntityCreateResponse)(nil), // 13: v1.api.game.EntityCreateResponse
	(*EntityGetResponse)(nil),    // 14: v1.api.game.EntityGetResponse
	(*EntityUpdateResponse)(nil), // 15: v1.api.game.EntityUpdateResponse
	(*EntityDeleteResponse)(nil), // 16: v1.api.game.EntityDeleteResponse
}
var file_v1_api_game_game_service_proto_depIdxs = []int32{
	0,  // 0: v1.api.game.GameService.JoinLeave:input_type -> v1.api.game.JoinLeaveGame
	1,  // 1: v1.api.game.GameService.CreateSession:input_type -> v1.api.game.SessionCreate
	2,  // 2: v1.api.game.GameService.GetSession:input_type -> v1.api.game.SessionGet
	3,  // 3: v1.api.game.GameService.UpdateSession:input_type -> v1.api.game.SessionUpdate
	4,  // 4: v1.api.game.GameService.DeleteSession:input_type -> v1.api.game.SessionDelete
	5,  // 5: v1.api.game.GameService.CreateEntity:input_type -> v1.api.game.EntityCreateRequest
	6,  // 6: v1.api.game.GameService.GetEntity:input_type -> v1.api.game.EntityGetRequest
	7,  // 7: v1.api.game.GameService.UpdateEntity:input_type -> v1.api.game.EntityUpdateRequest
	8,  // 8: v1.api.game.GameService.DeleteEntity:input_type -> v1.api.game.EntityDeleteRequest
	9,  // 9: v1.api.game.GameService.StreamEvents:input_type -> v1.api.game.GameEvent
	10, // 10: v1.api.game.GameService.WatchQueue:input_type -> v1.api.game.Session
	10, // 11: v1.api.game.GameService.JoinLeave:output_type -> v1.api.game.Session
	10, // 12: v1.api.game.GameService.CreateSession:output_type -> v1.api.game.Session
	11, // 13: v1.api.game.GameService.GetSession:output_type -> v1.api.game.Sessions
	10, // 14: v1.api.game.GameService.UpdateSession:output_type -> v1.api.game.Session
	12, // 15: v1.api.game.GameService.DeleteSession:output_type -> v1.std.StandardResponse
	13, // 16: v1.api.game.GameService.CreateEntity:output_type -> v1.api.game.EntityCreateResponse
	14, // 17: v1.api.game.GameService.GetEntity:output_type -> v1.api.game.EntityGetResponse
	15, // 18: v1.api.game.GameService.UpdateEntity:output_type -> v1.api.game.EntityUpdateResponse
	16, // 19: v1.api.game.GameService.DeleteEntity:output_type -> v1.api.game.EntityDeleteResponse
	9,  // 20: v1.api.game.GameService.StreamEvents:output_type -> v1.api.game.GameEvent
	10, // 21: v1.api.game.GameService.WatchQueue:output_type -> v1.api.game.Session
	11, // [11:22] is the sub-list for method output_type
	0,  // [0:11] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_v1_api_game_game_service_proto_init() }
func file_v1_api_game_game_service_proto_init() {
	if File_v1_api_game_game_service_proto != nil {
		return
	}
	file_v1_api_game_session_proto_init()
	file_v1_api_game_entity_proto_init()
	file_v1_api_game_event_proto_init()
	file_v1_api_game_join_leave_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_game_game_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_v1_api_game_game_service_proto_goTypes,
		DependencyIndexes: file_v1_api_game_game_service_proto_depIdxs,
	}.Build()
	File_v1_api_game_game_service_proto = out.File
	file_v1_api_game_game_service_proto_rawDesc = nil
	file_v1_api_game_game_service_proto_goTypes = nil
	file_v1_api_game_game_service_proto_depIdxs = nil
}
