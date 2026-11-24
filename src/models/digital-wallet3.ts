import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeConsentsPaymentMethodDigitalWalletAccountTypeSchema,
  type AccountTypeConsentsPaymentMethodDigitalWalletAccountType,
} from "./account-type-consents-payment-method-digital-wallet-account-type.js";
import {
  brandConsentsPaymentMethodDigitalWalletBrandSchema,
  type BrandConsentsPaymentMethodDigitalWalletBrand,
} from "./brand-consents-payment-method-digital-wallet-brand.js";
import {
  fundingConsentsPaymentMethodDigitalWalletFundingSchema,
  type FundingConsentsPaymentMethodDigitalWalletFunding,
} from "./funding-consents-payment-method-digital-wallet-funding.js";
import {
  tokenFormatConsentsPaymentMethodDigitalWalletTokenFormatSchema,
  type TokenFormatConsentsPaymentMethodDigitalWalletTokenFormat,
} from "./token-format-consents-payment-method-digital-wallet-token-format.js";

export type DigitalWallet3 = {
  /** Identifies the digital wallet provider to the payer. */
  provider?: string;
  /**
   * Indicates if the actual card number or a token is being used to process the transaction. *
   * `CARD_NUMBER` - The value in the digital wallet token field is a real card number (PAN) *
   * `CARD_TOKEN` - The value in the digital wallet token field is a temporary token in the format
   * of a card number (PAN) but is not a real card number. * `BANK_TRANSFER_TOKEN ` - The value in
   * the digital wallet token field is a temporary token in the format of a card number (PAN) but is
   * not a real card number.
   */
  tokenFormat?: TokenFormatConsentsPaymentMethodDigitalWalletTokenFormat;
  /** Masked token number with the last 4 digits visible. */
  maskedTokenLast4?: string;
  /** Masked card number with the last 4 digits visible. */
  maskedNumberLast4?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandConsentsPaymentMethodDigitalWalletBrand;
  /**
   * Indicates how the card is funded * `DEBIT' - indicates the card is a debit card where the funds
   * may be present in an account to fulfill the transaction amount. * `CREDIT' - indicates the card
   * is a credit card where the funds may be available on credit to the payer to fulfill the
   * transaction amount.
   */
  funding?: FundingConsentsPaymentMethodDigitalWalletFunding;
  /** The type of bank account associated with the payer's bank account. */
  accountType?: AccountTypeConsentsPaymentMethodDigitalWalletAccountType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const digitalWallet3Properties: s.Shape<DigitalWallet3> = {
  provider: s.optional(s.string()),
  tokenFormat: s.optional(s.lazy(() => tokenFormatConsentsPaymentMethodDigitalWalletTokenFormatSchema)),
  maskedTokenLast4: s.optional(s.string()),
  maskedNumberLast4: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandConsentsPaymentMethodDigitalWalletBrandSchema)),
  funding: s.optional(s.lazy(() => fundingConsentsPaymentMethodDigitalWalletFundingSchema)),
  accountType: s.optional(s.lazy(() => accountTypeConsentsPaymentMethodDigitalWalletAccountTypeSchema)),
  _keysMap: {
    tokenFormat: "token_format",
    maskedTokenLast4: "masked_token_last4",
    maskedNumberLast4: "masked_number_last4",
    accountType: "account_type",
  },
};

export const digitalWallet3InternalSchema: Schema<DigitalWallet3> = s.object<DigitalWallet3>(
  digitalWallet3Properties,
  { additionalProperties: s.json() },
);

export const digitalWallet3Schema: Schema<DigitalWallet3> = s.lazySchema(() =>
  s.object<DigitalWallet3>(
    {
      ...digitalWallet3Properties,
      provider: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      maskedTokenLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      maskedNumberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
