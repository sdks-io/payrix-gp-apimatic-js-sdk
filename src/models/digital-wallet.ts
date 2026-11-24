import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cvvIndicatorAuthenticationsPaymentMethodCardCvvIndicatorSchema,
  type CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator,
} from "./cvv-indicator-authentications-payment-method-card-cvv-indicator.js";
import {
  providerTransactionsPaymentMethodDigitalWalletProviderSchema,
  type ProviderTransactionsPaymentMethodDigitalWalletProvider,
} from "./provider-transactions-payment-method-digital-wallet-provider.js";
import {
  tokenFormatTransactionsPaymentMethodDigitalWalletTokenFormatSchema,
  type TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat,
} from "./token-format-transactions-payment-method-digital-wallet-token-format.js";

export type DigitalWallet = {
  /** This value represents, or is the payment method account, stored with the digital wallet. */
  token?: string;
  /**
   * Indicates if the actual card number or a token is being used to process the transaction.
   * * `CARD_NUMBER` - The value in the digital wallet token field is a real card number (PAN)
   * * `CARD_TOKEN` - The value in the digital wallet token field is a temporary token in the format
   *   of a card number (PAN) but is not a real card number.
   */
  tokenFormat?: TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat;
  /** The authentication value use to verify the validity of the digit wallet transaction. */
  cryptogram?: string;
  /** Identifies the digital wallet provider to the payer. */
  provider?: ProviderTransactionsPaymentMethodDigitalWalletProvider;
  /** Masked card number with last 4 digits visible. */
  maskedNumberLast4?: string;
  /** Masked card number with the front 6 and last 4 digits visible. */
  maskedNumberFirst6Last4?: string;
  /** Masked card number with the front 6 and last 4 digits visible. */
  maskedTokenFirst6Last4?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** An indication of the degree of the authentication process when using digital wallets. */
  eci?: string;
  /** The numeric value printed on the physical card. */
  cvv?: string;
  /**
   * Card Verification Value Indicator sent by the Merchant indicating the CVV availability.
   * * `ILLEGIBLE` - indicates the cvv is present but cannot be read.
   * * `NOT_PRESENT` - indicates the cvv is not present on the card.
   * * `PRESENT` - indicates the cvv is present.
   */
  cvvIndicator?: CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator;
  /** First line of the address associated with the card. */
  avsAddress?: string;
  /** Postal code of the address associated with the card. */
  avsPostalCode?: string;
  /**
   * This is the Payment Account Reference (PAR) that is returned by the Issuer when requested and
   * available.
   */
  paymentAccountReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const digitalWalletProperties: s.Shape<DigitalWallet> = {
  token: s.optional(s.string()),
  tokenFormat: s.optional(s.lazy(() => tokenFormatTransactionsPaymentMethodDigitalWalletTokenFormatSchema)),
  cryptogram: s.optional(s.string()),
  provider: s.optional(s.lazy(() => providerTransactionsPaymentMethodDigitalWalletProviderSchema)),
  maskedNumberLast4: s.optional(s.string()),
  maskedNumberFirst6Last4: s.optional(s.string()),
  maskedTokenFirst6Last4: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  eci: s.optional(s.string()),
  cvv: s.optional(s.string()),
  cvvIndicator: s.optional(s.lazy(() => cvvIndicatorAuthenticationsPaymentMethodCardCvvIndicatorSchema)),
  avsAddress: s.optional(s.string()),
  avsPostalCode: s.optional(s.string()),
  paymentAccountReference: s.optional(s.string()),
  _keysMap: {
    tokenFormat: "token_format",
    maskedNumberLast4: "masked_number_last4",
    maskedNumberFirst6Last4: "masked_number_first6last4",
    maskedTokenFirst6Last4: "masked_token_first6last4",
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    cvvIndicator: "cvv_indicator",
    avsAddress: "avs_address",
    avsPostalCode: "avs_postal_code",
    paymentAccountReference: "payment_account_reference",
  },
};

export const digitalWalletInternalSchema: Schema<DigitalWallet> = s.object<DigitalWallet>(
  digitalWalletProperties,
  { additionalProperties: s.json() },
);

export const digitalWalletSchema: Schema<DigitalWallet> = s.lazySchema(() =>
  s.object<DigitalWallet>(
    {
      ...digitalWalletProperties,
      token: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      cryptogram: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      maskedNumberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      maskedNumberFirst6Last4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      maskedTokenFirst6Last4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryYear: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      eci: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      cvv: s.optional(s.string().check(s.minLength(3), s.maxLength(4))),
      avsAddress: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      avsPostalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentAccountReference: s.optional(s.string().check(s.minLength(1), s.maxLength(35))),
    },
    { additionalProperties: s.json() },
  ),
);
