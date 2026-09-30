import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The level of user that this aggregation will run for.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `admin` - **Admin User.**
 * - `division` - **Division-level User.**
 * - `merchant` - **Merchant-level User.**
 * - `partition` - **Partition-level User.**
 *
 * </details>
 */
export const AggregationsLevel1 = {
  Admin: "admin",
  Division: "division",
  Merchant: "merchant",
  Partition: "partition",
} as const;
export type AggregationsLevel1 = (typeof AggregationsLevel1)[keyof typeof AggregationsLevel1] | (string & {});

export const aggregationsLevel1Schema: EnumSchema<AggregationsLevel1> =
  s.enumOf<AggregationsLevel1>(AggregationsLevel1);
