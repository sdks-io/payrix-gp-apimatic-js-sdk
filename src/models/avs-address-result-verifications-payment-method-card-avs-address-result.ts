import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the AVS address check. */
export const AvsAddressResultVerificationsPaymentMethodCardAvsAddressResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type AvsAddressResultVerificationsPaymentMethodCardAvsAddressResult =
  | (typeof AvsAddressResultVerificationsPaymentMethodCardAvsAddressResult)[keyof typeof AvsAddressResultVerificationsPaymentMethodCardAvsAddressResult]
  | (string & {});

export const avsAddressResultVerificationsPaymentMethodCardAvsAddressResultSchema: EnumSchema<AvsAddressResultVerificationsPaymentMethodCardAvsAddressResult> =
  s.enumOf<AvsAddressResultVerificationsPaymentMethodCardAvsAddressResult>(
    AvsAddressResultVerificationsPaymentMethodCardAvsAddressResult,
  );
