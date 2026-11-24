import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the AVS postal code check. */
export const AvsPostalCodeResultBatchesTransactionsPaymentMethodCardAvsPostalCodeResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type AvsPostalCodeResultBatchesTransactionsPaymentMethodCardAvsPostalCodeResult =
  | (typeof AvsPostalCodeResultBatchesTransactionsPaymentMethodCardAvsPostalCodeResult)[keyof typeof AvsPostalCodeResultBatchesTransactionsPaymentMethodCardAvsPostalCodeResult]
  | (string & {});

export const avsPostalCodeResultBatchesTransactionsPaymentMethodCardAvsPostalCodeResultSchema: EnumSchema<AvsPostalCodeResultBatchesTransactionsPaymentMethodCardAvsPostalCodeResult> =
  s.enumOf<AvsPostalCodeResultBatchesTransactionsPaymentMethodCardAvsPostalCodeResult>(
    AvsPostalCodeResultBatchesTransactionsPaymentMethodCardAvsPostalCodeResult,
  );
