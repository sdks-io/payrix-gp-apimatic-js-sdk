import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to disable email notification for automated hold messages.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const PartitionNoHoldEmail2 = {
  _0: 0,
  _1: 1,
} as const;
export type PartitionNoHoldEmail2 =
  | (typeof PartitionNoHoldEmail2)[keyof typeof PartitionNoHoldEmail2]
  | (number & {});

export const partitionNoHoldEmail2Schema: EnumSchema<PartitionNoHoldEmail2> =
  s.enumOf<PartitionNoHoldEmail2>(PartitionNoHoldEmail2);
