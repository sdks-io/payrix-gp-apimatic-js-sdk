import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the AVS address check. */
export const AvsAddressResultAuthenticationsPaymentMethodCardAvsAddressResult = {
  Matched: "MATCHED",
  NotMatched: "NOT_MATCHED",
  NotChecked: "NOT_CHECKED",
} as const;
export type AvsAddressResultAuthenticationsPaymentMethodCardAvsAddressResult =
  | (typeof AvsAddressResultAuthenticationsPaymentMethodCardAvsAddressResult)[keyof typeof AvsAddressResultAuthenticationsPaymentMethodCardAvsAddressResult]
  | (string & {});

export const avsAddressResultAuthenticationsPaymentMethodCardAvsAddressResultSchema: EnumSchema<AvsAddressResultAuthenticationsPaymentMethodCardAvsAddressResult> =
  s.enumOf<AvsAddressResultAuthenticationsPaymentMethodCardAvsAddressResult>(
    AvsAddressResultAuthenticationsPaymentMethodCardAvsAddressResult,
  );
