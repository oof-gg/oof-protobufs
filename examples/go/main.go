package main

import (
	"fmt"

	"github.com/oof-gg/oof-protobufs/generated/go/v1/api/auth"
	"github.com/oof-gg/oof-protobufs/generated/go/v1/api/common" // Import the regions protobuf package
)

func main() {
	fmt.Println("Hello, World!")
	var _ = auth.AuthRequest{}

	// Initialize and use the RegionEnum
	region := common.RegionEnum_NA_EAST
	fmt.Println("Selected region:", region.String())
}
