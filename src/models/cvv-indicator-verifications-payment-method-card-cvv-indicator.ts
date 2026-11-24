import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Card Verification Value Indicator sent by the Merchant indicating the CVV availability.
 * *`ILLEGIBLE` - indicates the cvv is present but cannot be read. *`NOT_PRESENT` - indicates the
 * cvv is not present on the card. *`PRESENT` - indicates the cvv is present.
 */
export const CvvIndicatorVerificationsPaymentMethodCardCvvIndicator = {
  Illegible: "ILLEGIBLE",
  NotPresent: "NOT_PRESENT",
  Present: "PRESENT",
} as const;
export type CvvIndicatorVerificationsPaymentMethodCardCvvIndicator =
  | (typeof CvvIndicatorVerificationsPaymentMethodCardCvvIndicator)[keyof typeof CvvIndicatorVerificationsPaymentMethodCardCvvIndicator]
  | (string & {});

export const cvvIndicatorVerificationsPaymentMethodCardCvvIndicatorSchema: EnumSchema<CvvIndicatorVerificationsPaymentMethodCardCvvIndicator> =
  s.enumOf<CvvIndicatorVerificationsPaymentMethodCardCvvIndicator>(
    CvvIndicatorVerificationsPaymentMethodCardCvvIndicator,
  );
