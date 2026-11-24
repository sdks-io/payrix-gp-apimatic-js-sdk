import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the CVV check. */
export const CvvResultAuthenticationsPaymentMethodCardCvvResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type CvvResultAuthenticationsPaymentMethodCardCvvResult =
  | (typeof CvvResultAuthenticationsPaymentMethodCardCvvResult)[keyof typeof CvvResultAuthenticationsPaymentMethodCardCvvResult]
  | (string & {});

export const cvvResultAuthenticationsPaymentMethodCardCvvResultSchema: EnumSchema<CvvResultAuthenticationsPaymentMethodCardCvvResult> =
  s.enumOf<CvvResultAuthenticationsPaymentMethodCardCvvResult>(
    CvvResultAuthenticationsPaymentMethodCardCvvResult,
  );
