import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";
import {
  brandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatusSchema,
  type BrandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatus,
} from "./brand-payer-status-transactions-payment-method-digital-wallet-brand-payer-status.js";
import {
  cvvIndicatorAuthenticationsPaymentMethodCardCvvIndicatorSchema,
  type CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator,
} from "./cvv-indicator-authentications-payment-method-card-cvv-indicator.js";
import { decryptInternalSchema, decryptSchema, type Decrypt } from "./decrypt.js";
import {
  paymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceModeSchema,
  type PaymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceMode,
} from "./payment-account-reference-mode-transactions-payment-method-card-payment-account-reference-mode.js";
import {
  paymentMethodDigitalWalletPaymentTokenReq5InternalSchema,
  paymentMethodDigitalWalletPaymentTokenReq5Schema,
  type PaymentMethodDigitalWalletPaymentTokenReq5,
} from "./payment-method-digital-wallet-payment-token-req5.js";
import {
  providerTransactionsPaymentMethodDigitalWalletProviderSchema,
  type ProviderTransactionsPaymentMethodDigitalWalletProvider,
} from "./provider-transactions-payment-method-digital-wallet-provider.js";
import {
  tokenFormatTransactionsPaymentMethodDigitalWalletTokenFormatSchema,
  type TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat,
} from "./token-format-transactions-payment-method-digital-wallet-token-format.js";

export type DigitalWalletRequest = {
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
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** An indication of the degree of the authentication process when using digital wallets. */
  eci?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
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
  paymentToken?: PaymentMethodDigitalWalletPaymentTokenReq5;
  /**
   * Indicates whether Payment Account Reference (PAR) should be returned with the authorization,
   * when available
   */
  paymentAccountReferenceMode?: PaymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceMode;
  decrypt?: Decrypt;
  /** The unique reference created by the brands/schemes to uniquely identify the transaction. */
  brandReference?: string;
  /**
   * Indicates if the user is registered. For use with Discover, CUP, JCB and Diners only. Mandatory
   * to be sent if the user is registered with the merchant
   */
  brandPayerStatus?: BrandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const digitalWalletRequestProperties: s.Shape<DigitalWalletRequest> = {
  token: s.optional(s.string()),
  tokenFormat: s.optional(s.lazy(() => tokenFormatTransactionsPaymentMethodDigitalWalletTokenFormatSchema)),
  cryptogram: s.optional(s.string()),
  provider: s.optional(s.lazy(() => providerTransactionsPaymentMethodDigitalWalletProviderSchema)),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  eci: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  cvv: s.optional(s.string()),
  cvvIndicator: s.optional(s.lazy(() => cvvIndicatorAuthenticationsPaymentMethodCardCvvIndicatorSchema)),
  avsAddress: s.optional(s.string()),
  avsPostalCode: s.optional(s.string()),
  paymentToken: s.optional(s.lazy(() => paymentMethodDigitalWalletPaymentTokenReq5InternalSchema)),
  paymentAccountReferenceMode: s.optional(
    s.lazy(() => paymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceModeSchema),
  ),
  decrypt: s.optional(s.lazy(() => decryptInternalSchema)),
  brandReference: s.optional(s.string()),
  brandPayerStatus: s.optional(
    s.lazy(() => brandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatusSchema),
  ),
  _keysMap: {
    tokenFormat: "token_format",
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    cvvIndicator: "cvv_indicator",
    avsAddress: "avs_address",
    avsPostalCode: "avs_postal_code",
    paymentToken: "payment_token",
    paymentAccountReferenceMode: "payment_account_reference_mode",
    brandReference: "brand_reference",
    brandPayerStatus: "brand_payer_status",
  },
};

export const digitalWalletRequestInternalSchema: Schema<DigitalWalletRequest> =
  s.object<DigitalWalletRequest>(digitalWalletRequestProperties, { additionalProperties: s.json() });

export const digitalWalletRequestSchema: Schema<DigitalWalletRequest> = s.lazySchema(() =>
  s.object<DigitalWalletRequest>(
    {
      ...digitalWalletRequestProperties,
      token: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      cryptogram: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryYear: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      eci: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      cvv: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      avsAddress: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      avsPostalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentToken: s.optional(s.lazy(() => paymentMethodDigitalWalletPaymentTokenReq5Schema)),
      decrypt: s.optional(s.lazy(() => decryptSchema)),
      brandReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
