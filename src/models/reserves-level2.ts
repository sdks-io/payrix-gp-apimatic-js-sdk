import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The hierarchical level for this reserve setting.
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
export const ReservesLevel2 = {
  Admin: "admin",
  Division: "division",
  Merchant: "merchant",
  Partition: "partition",
} as const;
export type ReservesLevel2 = (typeof ReservesLevel2)[keyof typeof ReservesLevel2] | (string & {});

export const reservesLevel2Schema: EnumSchema<ReservesLevel2> = s.enumOf<ReservesLevel2>(ReservesLevel2);
