import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartitionNoEmailConfirmation = {
  _0: 0,
  _1: 1,
} as const;
export type PartitionNoEmailConfirmation =
  | (typeof PartitionNoEmailConfirmation)[keyof typeof PartitionNoEmailConfirmation]
  | (number & {});

export const partitionNoEmailConfirmationSchema: EnumSchema<PartitionNoEmailConfirmation> =
  s.enumOf<PartitionNoEmailConfirmation>(PartitionNoEmailConfirmation);
