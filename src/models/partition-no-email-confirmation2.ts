import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to disable the email address confirmation process for this Partition.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const PartitionNoEmailConfirmation2 = {
  _0: 0,
  _1: 1,
} as const;
export type PartitionNoEmailConfirmation2 =
  | (typeof PartitionNoEmailConfirmation2)[keyof typeof PartitionNoEmailConfirmation2]
  | (number & {});

export const partitionNoEmailConfirmation2Schema: EnumSchema<PartitionNoEmailConfirmation2> =
  s.enumOf<PartitionNoEmailConfirmation2>(PartitionNoEmailConfirmation2);
