// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: v1/std/regions.proto

/* eslint-disable */

export const protobufPackage = "v1.std";

/** / Enum for regions */
export enum RegionEnum {
  /** REGION_UNSPECIFIED - Default unspecified region */
  REGION_UNSPECIFIED = 0,
  /** NA_EAST - / Americas */
  NA_EAST = 1,
  /** NA_WEST - North America West */
  NA_WEST = 2,
  /** SA - South America (all countries) */
  SA = 3,
  /** EU_WEST - / Europe */
  EU_WEST = 4,
  /** EU_CENTRAL - Central Europe */
  EU_CENTRAL = 5,
  /** EU_NORTH - Northern Europe */
  EU_NORTH = 6,
  /** AS_EAST - / Asia */
  AS_EAST = 7,
  /** AS_SE - Southeast Asia */
  AS_SE = 8,
  /** AS_SOUTH - South Asia */
  AS_SOUTH = 9,
  /** OC - / Oceania */
  OC = 10,
  /** MENA - / MENA (Middle East & North Africa) */
  MENA = 11,
  /** AFRICA - Sub-Saharan Africa */
  AFRICA = 12,
  /** GLOBAL - Global */
  GLOBAL = 13,
  UNRECOGNIZED = -1,
}

export function regionEnumFromJSON(object: any): RegionEnum {
  switch (object) {
    case 0:
    case "REGION_UNSPECIFIED":
      return RegionEnum.REGION_UNSPECIFIED;
    case 1:
    case "NA_EAST":
      return RegionEnum.NA_EAST;
    case 2:
    case "NA_WEST":
      return RegionEnum.NA_WEST;
    case 3:
    case "SA":
      return RegionEnum.SA;
    case 4:
    case "EU_WEST":
      return RegionEnum.EU_WEST;
    case 5:
    case "EU_CENTRAL":
      return RegionEnum.EU_CENTRAL;
    case 6:
    case "EU_NORTH":
      return RegionEnum.EU_NORTH;
    case 7:
    case "AS_EAST":
      return RegionEnum.AS_EAST;
    case 8:
    case "AS_SE":
      return RegionEnum.AS_SE;
    case 9:
    case "AS_SOUTH":
      return RegionEnum.AS_SOUTH;
    case 10:
    case "OC":
      return RegionEnum.OC;
    case 11:
    case "MENA":
      return RegionEnum.MENA;
    case 12:
    case "AFRICA":
      return RegionEnum.AFRICA;
    case 13:
    case "GLOBAL":
      return RegionEnum.GLOBAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RegionEnum.UNRECOGNIZED;
  }
}

export function regionEnumToJSON(object: RegionEnum): string {
  switch (object) {
    case RegionEnum.REGION_UNSPECIFIED:
      return "REGION_UNSPECIFIED";
    case RegionEnum.NA_EAST:
      return "NA_EAST";
    case RegionEnum.NA_WEST:
      return "NA_WEST";
    case RegionEnum.SA:
      return "SA";
    case RegionEnum.EU_WEST:
      return "EU_WEST";
    case RegionEnum.EU_CENTRAL:
      return "EU_CENTRAL";
    case RegionEnum.EU_NORTH:
      return "EU_NORTH";
    case RegionEnum.AS_EAST:
      return "AS_EAST";
    case RegionEnum.AS_SE:
      return "AS_SE";
    case RegionEnum.AS_SOUTH:
      return "AS_SOUTH";
    case RegionEnum.OC:
      return "OC";
    case RegionEnum.MENA:
      return "MENA";
    case RegionEnum.AFRICA:
      return "AFRICA";
    case RegionEnum.GLOBAL:
      return "GLOBAL";
    case RegionEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
