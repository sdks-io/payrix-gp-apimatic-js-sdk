import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fundingTransactionsPaymentMethodCardFundingSchema,
  type FundingTransactionsPaymentMethodCardFunding,
} from "./funding-transactions-payment-method-card-funding.js";

export type Card47 = {
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
   * * `ELECTRONIC_VOUCHER` - Indicates that card is an electronic voucher which requires a voucher
   *   code and number to fulfil the transaction
   */
  funding?: FundingTransactionsPaymentMethodCardFunding;
  /** Data from magnetic stripe of a card. */
  track?: string;
  /** The card providers description of their card product. */
  accountType?: string;
  /** The full card tag data for an EMV/chip card transaction. */
  tag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card47Properties: s.Shape<Card47> = {
  funding: s.optional(s.lazy(() => fundingTransactionsPaymentMethodCardFundingSchema)),
  track: s.optional(s.string()),
  accountType: s.optional(s.string()),
  tag: s.optional(s.string()),
  _keysMap: {
    accountType: "account_type",
  },
};

export const card47InternalSchema: Schema<Card47> = s.object<Card47>(card47Properties, {
  additionalProperties: s.json(),
});

export const card47Schema: Schema<Card47> = s.lazySchema(() =>
  s.object<Card47>(
    {
      ...card47Properties,
      track: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      accountType: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      tag: s.optional(s.string().check(s.minLength(1), s.maxLength(500))),
    },
    { additionalProperties: s.json() },
  ),
);
