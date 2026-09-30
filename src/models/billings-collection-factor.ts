import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingsCollectionFactor = {
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
} as const;
export type BillingsCollectionFactor =
  | (typeof BillingsCollectionFactor)[keyof typeof BillingsCollectionFactor]
  | (string & {});

export const billingsCollectionFactorSchema: EnumSchema<BillingsCollectionFactor> =
  s.enumOf<BillingsCollectionFactor>(BillingsCollectionFactor);
