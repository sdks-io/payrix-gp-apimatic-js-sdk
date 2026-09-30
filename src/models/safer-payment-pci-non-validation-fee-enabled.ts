import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SaferPaymentPciNonValidationFeeEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type SaferPaymentPciNonValidationFeeEnabled =
  | (typeof SaferPaymentPciNonValidationFeeEnabled)[keyof typeof SaferPaymentPciNonValidationFeeEnabled]
  | (number & {});

export const saferPaymentPciNonValidationFeeEnabledSchema: EnumSchema<SaferPaymentPciNonValidationFeeEnabled> =
  s.enumOf<SaferPaymentPciNonValidationFeeEnabled>(SaferPaymentPciNonValidationFeeEnabled);
