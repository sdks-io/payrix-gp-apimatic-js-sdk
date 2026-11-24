import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cvvIndicatorVerificationsPaymentMethodCardCvvIndicatorSchema,
  type CvvIndicatorVerificationsPaymentMethodCardCvvIndicator,
} from "./cvv-indicator-verifications-payment-method-card-cvv-indicator.js";
import {
  decryptionRequiredTransactionsPaymentMethodCardDecryptionRequiredSchema,
  type DecryptionRequiredTransactionsPaymentMethodCardDecryptionRequired,
} from "./decryption-required-transactions-payment-method-card-decryption-required.js";
import {
  fundingAuthenticationsPaymentMethodCardFundingSchema,
  type FundingAuthenticationsPaymentMethodCardFunding,
} from "./funding-authentications-payment-method-card-funding.js";

export type Card51 = {
  /**
   * Indicates how the card is funded:
   * * `DEBIT` - indicates the card is a debit card where the funds may be present in an account to
   *   fulfill the transaction amount.
   * * `CREDIT` - indicates the card is a credit card where the funds may be available on credit to
   *   the payer to fulfill the transaction amount.
   * * `FOOD_STAMP` - indicates the card is an, Electronic Benefits Transfer, for food stamps.
   * * `CASH_BENEFITS` - indicates the card is an, Electronic Benefits Transfer, for cash benefits.
   * * `PREPAID` - indicates the card is a prepaid card where the funds are loaded to the card
   *   account to fulfill the transaction amount. Unlike a debit card, a prepaid is not linked to a
   *   bank account.
   */
  funding?: FundingAuthenticationsPaymentMethodCardFunding;
  /** The card account number used to authorize the transaction. Also known as PAN. */
  number?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Data from magnetic stripe of a card */
  track?: string;
  /** Contains the pin block info, relating to the pin code the Payer entered. */
  pinBlock?: string;
  /** The numeric value printed on the physical card. */
  cvv?: string;
  /**
   * Card Verification Value Indicator sent by the Merchant indicating the CVV availability.
   * *`ILLEGIBLE` - indicates the cvv is present but cannot be read. *`NOT_PRESENT` - indicates the
   * cvv is not present on the card. *`PRESENT` - indicates the cvv is present.
   */
  cvvIndicator?: CvvIndicatorVerificationsPaymentMethodCardCvvIndicator;
  /** First line of the address associated with the card. */
  avsAddress?: string;
  /** Postal code of the address associated with the card. */
  avsPostalCode?: string;
  /**
   * Indicates whether Global Payments must decrypt the merchant’s encrypted data to process the
   * transaction.
   */
  decryptionRequired?: DecryptionRequiredTransactionsPaymentMethodCardDecryptionRequired;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card51Properties: s.Shape<Card51> = {
  funding: s.optional(s.lazy(() => fundingAuthenticationsPaymentMethodCardFundingSchema)),
  number: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  track: s.optional(s.string()),
  pinBlock: s.optional(s.string()),
  cvv: s.optional(s.string()),
  cvvIndicator: s.optional(s.lazy(() => cvvIndicatorVerificationsPaymentMethodCardCvvIndicatorSchema)),
  avsAddress: s.optional(s.string()),
  avsPostalCode: s.optional(s.string()),
  decryptionRequired: s.optional(
    s.lazy(() => decryptionRequiredTransactionsPaymentMethodCardDecryptionRequiredSchema),
  ),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    pinBlock: "pin_block",
    cvvIndicator: "cvv_indicator",
    avsAddress: "avs_address",
    avsPostalCode: "avs_postal_code",
    decryptionRequired: "decryption_required",
  },
};

export const card51InternalSchema: Schema<Card51> = s.object<Card51>(card51Properties, {
  additionalProperties: s.json(),
});

export const card51Schema: Schema<Card51> = s.lazySchema(() =>
  s.object<Card51>(
    {
      ...card51Properties,
      number: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      track: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
      pinBlock: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      cvv: s.optional(s.string().check(s.minLength(3), s.maxLength(4))),
      avsAddress: s.optional(s.string().check(s.maxLength(50))),
      avsPostalCode: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
