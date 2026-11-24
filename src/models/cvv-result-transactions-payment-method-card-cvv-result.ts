import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the CVV check. */
export const CvvResultTransactionsPaymentMethodCardCvvResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type CvvResultTransactionsPaymentMethodCardCvvResult =
  | (typeof CvvResultTransactionsPaymentMethodCardCvvResult)[keyof typeof CvvResultTransactionsPaymentMethodCardCvvResult]
  | (string & {});

export const cvvResultTransactionsPaymentMethodCardCvvResultSchema: EnumSchema<CvvResultTransactionsPaymentMethodCardCvvResult> =
  s.enumOf<CvvResultTransactionsPaymentMethodCardCvvResult>(CvvResultTransactionsPaymentMethodCardCvvResult);
