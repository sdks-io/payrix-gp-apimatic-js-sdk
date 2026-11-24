import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";
import {
  countryInstallmentsPaymentMethodCardCountrySchema,
  type CountryInstallmentsPaymentMethodCardCountry,
} from "./country-installments-payment-method-card-country.js";
import {
  fundingInstallmentsPaymentMethodCardFundingSchema,
  type FundingInstallmentsPaymentMethodCardFunding,
} from "./funding-installments-payment-method-card-funding.js";

export type Card14 = {
  /** Masked card number with last 4 digits visible. */
  maskedNumberLast4?: string;
  /**
   * Indicates how the card is funded:
   *   * `DEBIT` - indicates the card is a debit card where the funds may be present in an account
   *     to fulfill the transaction amount.
   *   * `CREDIT` - indicates the card is a credit card where the funds may be available on credit
   *     to the payer to fulfill the transaction amount.
   *   * `FOOD_STAMP` - indicates the card is an, Electronic Benefits Transfer, for food stamps.
   *   * `CASH_BENEFITS` - indicates the card is an, Electronic Benefits Transfer, for cash
   *     benefits.
   *   * `PREPAID` - indicates the card is a prepaid card where the funds are loaded to the card
   *     account to fulfill the transaction amount. Unlike a debit card, a prepaid is not linked to
   *     a bank account.
   */
  funding?: FundingInstallmentsPaymentMethodCardFunding;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
  /** The name of the issuing bank that issued the card. */
  issuer?: string;
  /**
   * This is the country the card is issued in. It represents the country the card's bank is
   * based.The country in ISO-3166-1(alpha-2 code) format.
   */
  country?: CountryInstallmentsPaymentMethodCardCountry;
  /** Masked network token but last 4 digits of the network token are visible. */
  maskedNetworkTokenLast4?: string;
  /** The 2 digit expiry date month of the network token. */
  networkTokenExpiryMonth?: string;
  /** The 2 digit expiry date year of the network token. */
  networkTokenExpiryYear?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card14Properties: s.Shape<Card14> = {
  maskedNumberLast4: s.optional(s.string()),
  funding: s.optional(s.lazy(() => fundingInstallmentsPaymentMethodCardFundingSchema)),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  issuer: s.optional(s.string()),
  country: s.optional(s.lazy(() => countryInstallmentsPaymentMethodCardCountrySchema)),
  maskedNetworkTokenLast4: s.optional(s.string()),
  networkTokenExpiryMonth: s.optional(s.string()),
  networkTokenExpiryYear: s.optional(s.string()),
  _keysMap: {
    maskedNumberLast4: "masked_number_last4",
    maskedNetworkTokenLast4: "masked_network_token_last4",
    networkTokenExpiryMonth: "network_token_expiry_month",
    networkTokenExpiryYear: "network_token_expiry_year",
  },
};

export const card14InternalSchema: Schema<Card14> = s.object<Card14>(card14Properties, {
  additionalProperties: s.json(),
});

export const card14Schema: Schema<Card14> = s.lazySchema(() =>
  s.object<Card14>(
    {
      ...card14Properties,
      maskedNumberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      issuer: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      maskedNetworkTokenLast4: s.optional(s.string().check(s.minLength(4), s.maxLength(4))),
    },
    { additionalProperties: s.json() },
  ),
);
