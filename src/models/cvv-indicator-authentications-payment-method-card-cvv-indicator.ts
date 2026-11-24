import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Card Verification Value Indicator sent by the Merchant indicating the CVV availability.
 * * `ILLEGIBLE` - indicates the cvv is present but cannot be read.
 * * `NOT_PRESENT` - indicates the cvv is not present on the card.
 * * `PRESENT` - indicates the cvv is present.
 */
export const CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator = {
  Illegible: "ILLEGIBLE",
  NotPresent: "NOT_PRESENT",
  Present: "PRESENT",
} as const;
export type CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator =
  | (typeof CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator)[keyof typeof CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator]
  | (string & {});

export const cvvIndicatorAuthenticationsPaymentMethodCardCvvIndicatorSchema: EnumSchema<CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator> =
  s.enumOf<CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator>(
    CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator,
  );
