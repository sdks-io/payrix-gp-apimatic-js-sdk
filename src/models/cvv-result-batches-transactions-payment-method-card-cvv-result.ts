import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the CVV check. */
export const CvvResultBatchesTransactionsPaymentMethodCardCvvResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type CvvResultBatchesTransactionsPaymentMethodCardCvvResult =
  | (typeof CvvResultBatchesTransactionsPaymentMethodCardCvvResult)[keyof typeof CvvResultBatchesTransactionsPaymentMethodCardCvvResult]
  | (string & {});

export const cvvResultBatchesTransactionsPaymentMethodCardCvvResultSchema: EnumSchema<CvvResultBatchesTransactionsPaymentMethodCardCvvResult> =
  s.enumOf<CvvResultBatchesTransactionsPaymentMethodCardCvvResult>(
    CvvResultBatchesTransactionsPaymentMethodCardCvvResult,
  );
