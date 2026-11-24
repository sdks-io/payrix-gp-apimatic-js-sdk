import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fundingTransactionsOrderAlternateChargeFundingSchema,
  type FundingTransactionsOrderAlternateChargeFunding,
} from "./funding-transactions-order-alternate-charge-funding.js";
import {
  typeTransactionsOrderAlternateChargeTypeSchema,
  type TypeTransactionsOrderAlternateChargeType,
} from "./type-transactions-order-alternate-charge-type.js";

export type AlternateCharge = {
  /** The breakdown of charges specific to a particular market, region, or transaction type. */
  type?: TypeTransactionsOrderAlternateChargeType;
  /**
   * The value of any additional amount applied for a specific amount type. Applied for AMEX only.
   */
  amount?: string;
  /**
   * "> Indicates how the card is funded:
   * * `DEBIT` - indicates the card is a debit card where the funds may be present in an account to
   *   fulfill the transaction amount.
   * * `CREDIT` - indicates the card is a credit card where the funds may be available on credit to
   *   the payer to fulfill the transaction amount.
   */
  funding?: FundingTransactionsOrderAlternateChargeFunding;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const alternateChargeProperties: s.Shape<AlternateCharge> = {
  type: s.optional(s.lazy(() => typeTransactionsOrderAlternateChargeTypeSchema)),
  amount: s.optional(s.string()),
  funding: s.optional(s.lazy(() => fundingTransactionsOrderAlternateChargeFundingSchema)),
};

export const alternateChargeInternalSchema: Schema<AlternateCharge> = s.object<AlternateCharge>(
  alternateChargeProperties,
  { additionalProperties: s.json() },
);

export const alternateChargeSchema: Schema<AlternateCharge> = s.lazySchema(() =>
  s.object<AlternateCharge>(
    {
      ...alternateChargeProperties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
