import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action34InternalSchema, action34Schema, type Action34 } from "./action34.js";
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
  paymentMethod26InternalSchema,
  paymentMethod26Schema,
  type PaymentMethod26,
} from "./payment-method26.js";
import {
  programInstallmentsProgramSchema,
  type ProgramInstallmentsProgram,
} from "./program-installments-program.js";
import {
  statusInstallmentsStatusSchema,
  type StatusInstallmentsStatus,
} from "./status-installments-status.js";
import { terms1Schema, type Terms1 } from "./terms1.js";
import { typeInstallmentsTypeSchema, type TypeInstallmentsType } from "./type-installments-type.js";

export type PostInstallmentsResponse2 = {
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific installment request. Begins with the three
   * letters, INS.
   */
  id?: string;
  /** Time indicating when the object was created in ISO-8601 format. */
  timeCreated?: Date;
  /** The type of installment request. */
  type?: TypeInstallmentsType;
  /** Indicates the status of the installment. */
  status?: StatusInstallmentsStatus;
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
  /** A unique identifier for the merchant account set by Global Payments. */
  merchantId?: string;
  /** A meaningful label that better identifies the merchant. */
  merchantName?: string;
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific account. Begins with the three letters,
   * TRA.
   */
  accountId?: string;
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  /**
   * This field indicates the installment program the merchant is participating in.
   *    * `VIS` - Visa Installments
   */
  program?: ProgramInstallmentsProgram;
  terms?: Terms1[];
  paymentMethod?: PaymentMethod26;
  action?: Action34;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const postInstallmentsResponse2Properties: s.Shape<PostInstallmentsResponse2> = {
  id: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  type: s.optional(s.lazy(() => typeInstallmentsTypeSchema)),
  status: s.optional(s.lazy(() => statusInstallmentsStatusSchema)),
  channel: s.optional(s.lazy(() => channelInstallmentsChannelSchema)),
  amount: s.optional(s.string()),
  currency: s.optional(s.lazy(() => currencyInstallmentsCurrencySchema)),
  country: s.optional(s.lazy(() => countryInstallmentsCountrySchema)),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  program: s.optional(s.lazy(() => programInstallmentsProgramSchema)),
  terms: s.optional(s.array(s.lazy(() => terms1Schema))),
  paymentMethod: s.optional(s.lazy(() => paymentMethod26InternalSchema)),
  action: s.optional(s.lazy(() => action34InternalSchema)),
  _keysMap: {
    timeCreated: "time_created",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    paymentMethod: "payment_method",
  },
};

export const postInstallmentsResponse2InternalSchema: Schema<PostInstallmentsResponse2> =
  s.object<PostInstallmentsResponse2>(postInstallmentsResponse2Properties, {
    additionalProperties: s.json(),
  });

export const postInstallmentsResponse2Schema: Schema<PostInstallmentsResponse2> = s.lazySchema(() =>
  s.object<PostInstallmentsResponse2>(
    {
      ...postInstallmentsResponse2Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethod: s.optional(s.lazy(() => paymentMethod26Schema)),
      action: s.optional(s.lazy(() => action34Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
