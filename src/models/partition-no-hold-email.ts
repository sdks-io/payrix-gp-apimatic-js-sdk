import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartitionNoHoldEmail = {
  _0: 0,
  _1: 1,
} as const;
export type PartitionNoHoldEmail =
  | (typeof PartitionNoHoldEmail)[keyof typeof PartitionNoHoldEmail]
  | (number & {});

export const partitionNoHoldEmailSchema: EnumSchema<PartitionNoHoldEmail> =
  s.enumOf<PartitionNoHoldEmail>(PartitionNoHoldEmail);
