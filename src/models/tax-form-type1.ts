import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The tax document type. Valid Value - `1099k` - **1099k Tax Document.**
 */
export const TaxFormType1 = {
  _1099K: "1099k",
} as const;
export type TaxFormType1 = (typeof TaxFormType1)[keyof typeof TaxFormType1] | (string & {});

export const taxFormType1Schema: EnumSchema<TaxFormType1> = s.enumOf<TaxFormType1>(TaxFormType1);
