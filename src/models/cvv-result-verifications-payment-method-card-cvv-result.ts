import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the CVV check. */
export const CvvResultVerificationsPaymentMethodCardCvvResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type CvvResultVerificationsPaymentMethodCardCvvResult =
  | (typeof CvvResultVerificationsPaymentMethodCardCvvResult)[keyof typeof CvvResultVerificationsPaymentMethodCardCvvResult]
  | (string & {});

export const cvvResultVerificationsPaymentMethodCardCvvResultSchema: EnumSchema<CvvResultVerificationsPaymentMethodCardCvvResult> =
  s.enumOf<CvvResultVerificationsPaymentMethodCardCvvResult>(
    CvvResultVerificationsPaymentMethodCardCvvResult,
  );
