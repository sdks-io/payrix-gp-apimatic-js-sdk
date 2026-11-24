import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the AVS address check. */
export const AvsAddressResultBatchesTransactionsPaymentMethodCardAvsAddressResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type AvsAddressResultBatchesTransactionsPaymentMethodCardAvsAddressResult =
  | (typeof AvsAddressResultBatchesTransactionsPaymentMethodCardAvsAddressResult)[keyof typeof AvsAddressResultBatchesTransactionsPaymentMethodCardAvsAddressResult]
  | (string & {});

export const avsAddressResultBatchesTransactionsPaymentMethodCardAvsAddressResultSchema: EnumSchema<AvsAddressResultBatchesTransactionsPaymentMethodCardAvsAddressResult> =
  s.enumOf<AvsAddressResultBatchesTransactionsPaymentMethodCardAvsAddressResult>(
    AvsAddressResultBatchesTransactionsPaymentMethodCardAvsAddressResult,
  );
