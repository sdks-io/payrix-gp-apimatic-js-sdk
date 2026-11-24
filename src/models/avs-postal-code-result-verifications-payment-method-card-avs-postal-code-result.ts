import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the AVS postal code check. */
export const AvsPostalCodeResultVerificationsPaymentMethodCardAvsPostalCodeResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type AvsPostalCodeResultVerificationsPaymentMethodCardAvsPostalCodeResult =
  | (typeof AvsPostalCodeResultVerificationsPaymentMethodCardAvsPostalCodeResult)[keyof typeof AvsPostalCodeResultVerificationsPaymentMethodCardAvsPostalCodeResult]
  | (string & {});

export const avsPostalCodeResultVerificationsPaymentMethodCardAvsPostalCodeResultSchema: EnumSchema<AvsPostalCodeResultVerificationsPaymentMethodCardAvsPostalCodeResult> =
  s.enumOf<AvsPostalCodeResultVerificationsPaymentMethodCardAvsPostalCodeResult>(
    AvsPostalCodeResultVerificationsPaymentMethodCardAvsPostalCodeResult,
  );
