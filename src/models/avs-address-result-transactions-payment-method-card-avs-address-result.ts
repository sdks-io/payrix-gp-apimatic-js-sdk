import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the AVS address check. */
export const AvsAddressResultTransactionsPaymentMethodCardAvsAddressResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type AvsAddressResultTransactionsPaymentMethodCardAvsAddressResult =
  | (typeof AvsAddressResultTransactionsPaymentMethodCardAvsAddressResult)[keyof typeof AvsAddressResultTransactionsPaymentMethodCardAvsAddressResult]
  | (string & {});

export const avsAddressResultTransactionsPaymentMethodCardAvsAddressResultSchema: EnumSchema<AvsAddressResultTransactionsPaymentMethodCardAvsAddressResult> =
  s.enumOf<AvsAddressResultTransactionsPaymentMethodCardAvsAddressResult>(
    AvsAddressResultTransactionsPaymentMethodCardAvsAddressResult,
  );
