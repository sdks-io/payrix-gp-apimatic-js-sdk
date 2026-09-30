import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaxFormType = {
  _1099K: "1099k",
} as const;
export type TaxFormType = (typeof TaxFormType)[keyof typeof TaxFormType] | (string & {});

export const taxFormTypeSchema: EnumSchema<TaxFormType> = s.enumOf<TaxFormType>(TaxFormType);
