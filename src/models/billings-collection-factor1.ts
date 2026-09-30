import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A multiplier that you can use to adjust the set of data to be used in the collection calculation.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `days` - **Days.** Multiplier based on days.
 * - `weeks` - **Weeks.** Multiplier based on weeks.
 * - `months` - **Months.** Multiplier based on months.
 * - `years` - **Years.** Multiplier based on years.
 *
 * </details>
 */
export const BillingsCollectionFactor1 = {
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
} as const;
export type BillingsCollectionFactor1 =
  | (typeof BillingsCollectionFactor1)[keyof typeof BillingsCollectionFactor1]
  | (string & {});

export const billingsCollectionFactor1Schema: EnumSchema<BillingsCollectionFactor1> =
  s.enumOf<BillingsCollectionFactor1>(BillingsCollectionFactor1);
