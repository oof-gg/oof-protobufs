// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v5.28.2
// source: v1/api/global/global_service.proto

package global

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

var File_v1_api_global_global_service_proto protoreflect.FileDescriptor

var file_v1_api_global_global_service_proto_rawDesc = []byte{
	0x0a, 0x22, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2f,
	0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x6c, 0x6f,
	0x62, 0x61, 0x6c, 0x1a, 0x1e, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6c, 0x6f, 0x62,
	0x61, 0x6c, 0x2f, 0x6a, 0x6f, 0x69, 0x6e, 0x5f, 0x6c, 0x65, 0x61, 0x76, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x16, 0x76, 0x31, 0x2f, 0x73, 0x74, 0x64, 0x2f, 0x72, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19, 0x76, 0x31, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xa0, 0x01, 0x0a, 0x0d, 0x47, 0x6c, 0x6f, 0x62, 0x61,
	0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x43, 0x0a, 0x09, 0x4a, 0x6f, 0x69, 0x6e,
	0x4c, 0x65, 0x61, 0x76, 0x65, 0x12, 0x1c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67,
	0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2e, 0x4a, 0x6f, 0x69, 0x6e, 0x4c, 0x65, 0x61, 0x76, 0x65, 0x47,
	0x61, 0x6d, 0x65, 0x1a, 0x18, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x74, 0x64, 0x2e, 0x53, 0x74, 0x61,
	0x6e, 0x64, 0x61, 0x72, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4a, 0x0a,
	0x0c, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x1a, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2e, 0x47, 0x6c,
	0x6f, 0x62, 0x61, 0x6c, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x1a, 0x1a, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2e, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x28, 0x01, 0x30, 0x01, 0x42, 0x3c, 0x5a, 0x3a, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x6f, 0x66, 0x2d, 0x67, 0x67, 0x2f, 0x6f,
	0x6f, 0x66, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x73, 0x2f, 0x67, 0x65, 0x6e,
	0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_v1_api_global_global_service_proto_goTypes = []any{
	(*JoinLeaveGame)(nil),        // 0: v1.api.global.JoinLeaveGame
	(*GlobalEvent)(nil),          // 1: v1.api.global.GlobalEvent
	(*std.StandardResponse)(nil), // 2: v1.std.StandardResponse
}
var file_v1_api_global_global_service_proto_depIdxs = []int32{
	0, // 0: v1.api.global.GlobalService.JoinLeave:input_type -> v1.api.global.JoinLeaveGame
	1, // 1: v1.api.global.GlobalService.StreamEvents:input_type -> v1.api.global.GlobalEvent
	2, // 2: v1.api.global.GlobalService.JoinLeave:output_type -> v1.std.StandardResponse
	1, // 3: v1.api.global.GlobalService.StreamEvents:output_type -> v1.api.global.GlobalEvent
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_v1_api_global_global_service_proto_init() }
func file_v1_api_global_global_service_proto_init() {
	if File_v1_api_global_global_service_proto != nil {
		return
	}
	file_v1_api_global_join_leave_proto_init()
	file_v1_api_global_event_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_api_global_global_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_v1_api_global_global_service_proto_goTypes,
		DependencyIndexes: file_v1_api_global_global_service_proto_depIdxs,
	}.Build()
	File_v1_api_global_global_service_proto = out.File
	file_v1_api_global_global_service_proto_rawDesc = nil
	file_v1_api_global_global_service_proto_goTypes = nil
	file_v1_api_global_global_service_proto_depIdxs = nil
}
