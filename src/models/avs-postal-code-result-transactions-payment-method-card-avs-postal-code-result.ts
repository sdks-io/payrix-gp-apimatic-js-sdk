import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the AVS postal code check. */
export const AvsPostalCodeResultTransactionsPaymentMethodCardAvsPostalCodeResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type AvsPostalCodeResultTransactionsPaymentMethodCardAvsPostalCodeResult =
  | (typeof AvsPostalCodeResultTransactionsPaymentMethodCardAvsPostalCodeResult)[keyof typeof AvsPostalCodeResultTransactionsPaymentMethodCardAvsPostalCodeResult]
  | (string & {});

export const avsPostalCodeResultTransactionsPaymentMethodCardAvsPostalCodeResultSchema: EnumSchema<AvsPostalCodeResultTransactionsPaymentMethodCardAvsPostalCodeResult> =
  s.enumOf<AvsPostalCodeResultTransactionsPaymentMethodCardAvsPostalCodeResult>(
    AvsPostalCodeResultTransactionsPaymentMethodCardAvsPostalCodeResult,
  );
