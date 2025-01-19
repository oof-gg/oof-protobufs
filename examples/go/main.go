package main

import (
	"fmt"

	"github.com/oof-gg/oof-protobufs/generated/go/v1/api/auth"
	"github.com/oof-gg/oof-protobufs/generated/go/v1/std"
	// Import the regions protobuf package
)

func main() {
	fmt.Println("Hello, World!")
	var _ = auth.LoginRequest{}
	// Initialize and use the RegionEnum
	region := std.RegionEnum_NA_EAST
	fmt.Println("Selected region:", region.String())
}
