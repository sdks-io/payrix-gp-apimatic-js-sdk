import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  channelInstallmentsChannelSchema,
  type ChannelInstallmentsChannel,
} from "./channel-installments-channel.js";
import {
  countryInstallmentsCountrySchema,
  type CountryInstallmentsCountry,
} from "./country-installments-country.js";
import {
  currencyInstallmentsCurrencySchema,
  type CurrencyInstallmentsCurrency,
} from "./currency-installments-currency.js";
import {
  eligiblePlansInstallmentsEligiblePlansSchema,
  type EligiblePlansInstallmentsEligiblePlans,
} from "./eligible-plans-installments-eligible-plans.js";
import {
  fundingModeInstallmentsFundingModeSchema,
  type FundingModeInstallmentsFundingMode,
} from "./funding-mode-installments-funding-mode.js";
import {
  paymentMethod25InternalSchema,
  paymentMethod25Schema,
  type PaymentMethod25,
} from "./payment-method25.js";
import {
  programInstallmentsProgramSchema,
  type ProgramInstallmentsProgram,
} from "./program-installments-program.js";
import { termsSchema, type Terms } from "./terms.js";

export type PostInstallmentsRequest2 = {
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  /**
   * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer
   * Not Present (CNP) scenario.
   *                 * `CP` - A Customer Present transaction is when the payer and the merchant are
   *                   in direct face to face contact when exchanging payment method information to
   *                   fulfill a transaction. e.g. in a store and paying at the counter that is
   *                   attended by a clerk.
   *                 * `CNP` - A Customer NOT Present transaction is when the payer and the merchant
   *                   are not together when exchanging payment method information to fulfill a
   *                   transaction. e.g. a transaction executed from a merchant's website or over
   *                   the phone
   */
  channel?: ChannelInstallmentsChannel;
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency?: CurrencyInstallmentsCurrency;
  /**
   * This is the country the merchant is domiciled in. For example, If if the merchant is based in
   * Canada it must be set to CA.If if the merchant is based in England it must be set to GB.If if
   * the merchant is based in USA it must be set to US.The country in ISO-3166-1(alpha-2 code)
   * format.
   */
  country?: CountryInstallmentsCountry;
  /** Merchant defined field to reference the transaction. */
  reference?: string;
  /**
   * This field indicates the installment program the merchant is participating in.
   *    * `VIS` - Visa Installments
   */
  program?: ProgramInstallmentsProgram;
  paymentMethod?: PaymentMethod25;
  /**
   * Indicated the funding mode of the Installment plan. Availablity of each funding mode is based
   * on your live configuration
   *   * MERCHANT_FUNDED - This will return merchant funded plans only
   *   * CONSUMER_FUNDED - This will return consumer funded plans only
   *   * HYBRID_FUNDED - This will return both merchant and consumer funded plans
   *   * BILATERAL - This will return BILATERAL plans only
   *   * ANY - This will return all available plans
   */
  fundingMode?: FundingModeInstallmentsFundingMode;
  /**
   * This is used to specify the number of plans returned.
   *   * `LIMITED`- Returns two plans.
   *   * `FULL` - Returns all available plans
   */
  eligiblePlans?: EligiblePlansInstallmentsEligiblePlans;
  terms?: Terms;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const postInstallmentsRequest2Properties: s.Shape<PostInstallmentsRequest2> = {
  accountName: s.optional(s.string()),
  channel: s.optional(s.lazy(() => channelInstallmentsChannelSchema)),
  amount: s.optional(s.string()),
  currency: s.optional(s.lazy(() => currencyInstallmentsCurrencySchema)),
  country: s.optional(s.lazy(() => countryInstallmentsCountrySchema)),
  reference: s.optional(s.string()),
  program: s.optional(s.lazy(() => programInstallmentsProgramSchema)),
  paymentMethod: s.optional(s.lazy(() => paymentMethod25InternalSchema)),
  fundingMode: s.optional(s.lazy(() => fundingModeInstallmentsFundingModeSchema)),
  eligiblePlans: s.optional(s.lazy(() => eligiblePlansInstallmentsEligiblePlansSchema)),
  terms: s.optional(s.lazy(() => termsSchema)),
  _keysMap: {
    accountName: "account_name",
    paymentMethod: "payment_method",
    fundingMode: "funding_mode",
    eligiblePlans: "eligible_plans",
  },
};

export const postInstallmentsRequest2InternalSchema: Schema<PostInstallmentsRequest2> =
  s.object<PostInstallmentsRequest2>(postInstallmentsRequest2Properties, { additionalProperties: s.json() });

export const postInstallmentsRequest2Schema: Schema<PostInstallmentsRequest2> = s.lazySchema(() =>
  s.object<PostInstallmentsRequest2>(
    {
      ...postInstallmentsRequest2Properties,
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethod: s.optional(s.lazy(() => paymentMethod25Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
