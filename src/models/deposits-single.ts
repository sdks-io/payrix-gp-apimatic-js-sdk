import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action60InternalSchema, action60Schema, type Action60 } from "./action60.js";
import { bankTransfer3InternalSchema, bankTransfer3Schema, type BankTransfer3 } from "./bank-transfer3.js";
import { discountsSchema, type Discounts } from "./discounts.js";
import { disputes1Schema, type Disputes1 } from "./disputes1.js";
import { fees4Schema, type Fees4 } from "./fees4.js";
import { refunds9Schema, type Refunds9 } from "./refunds9.js";
import { sales13Schema, type Sales13 } from "./sales13.js";
import { system11InternalSchema, system11Schema, type System11 } from "./system11.js";

export type DepositsSingle = {
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to.
   */
  id?: string;
  /** The settlement system date that the deposit was initiated in ISO-8601 format */
  timeCreated?: string;
  /**
   * Indicates where a resource object is in its life-cycle. *`FUNDED` - Deposit Funded to bank
   * account *`IRREG` - Deposit not funded by Global Payments *`RESERVED `- Deposit on reserve.
   *
   * *`DELAYED` - Deposit delayed for funding.
   *
   * *`RELEASED` - Deposit released by Global Payments from a status of DELAYED
   */
  status?: string;
  /** Indicates if the amount relates to a Debit or Credit to the merchant's bank account. */
  fundingType?: string;
  /**
   * The amount that should be credited or debited to a bank account, for a deposit. It is always
   * represented in the lowest denomination of the related currency.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  /**
   * Indicates how a merchant's payment processing activity across Sales, Refunds, Disputes and Fees
   * is structured for a Deposit. Activity can be aggregated into one daily amount or all activity
   * separately funded via different deposits.
   */
  aggregationModel?: string;
  bankTransfer?: BankTransfer3;
  system?: System11;
  sales?: Sales13;
  refunds?: Refunds9;
  /** Data relating to the dispute totals across chargebacks and chargeback reversals. */
  disputes?: Disputes1;
  discounts?: Discounts;
  /** The total fees amount in the currency of the Deposit. */
  fees?: Fees4;
  action?: Action60;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const depositsSingleProperties: s.Shape<DepositsSingle> = {
  id: s.optional(s.string()),
  timeCreated: s.optional(s.string()),
  status: s.optional(s.string()),
  fundingType: s.optional(s.string()),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  aggregationModel: s.optional(s.string()),
  bankTransfer: s.optional(s.lazy(() => bankTransfer3InternalSchema)),
  system: s.optional(s.lazy(() => system11InternalSchema)),
  sales: s.optional(s.lazy(() => sales13Schema)),
  refunds: s.optional(s.lazy(() => refunds9Schema)),
  disputes: s.optional(s.lazy(() => disputes1Schema)),
  discounts: s.optional(s.lazy(() => discountsSchema)),
  fees: s.optional(s.lazy(() => fees4Schema)),
  action: s.optional(s.lazy(() => action60InternalSchema)),
  _keysMap: {
    timeCreated: "time_created",
    fundingType: "funding_type",
    aggregationModel: "aggregation_model",
    bankTransfer: "bank_transfer",
  },
};

export const depositsSingleInternalSchema: Schema<DepositsSingle> = s.object<DepositsSingle>(
  depositsSingleProperties,
  { additionalProperties: s.json() },
);

export const depositsSingleSchema: Schema<DepositsSingle> = s.lazySchema(() =>
  s.object<DepositsSingle>(
    {
      ...depositsSingleProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      bankTransfer: s.optional(s.lazy(() => bankTransfer3Schema)),
      system: s.optional(s.lazy(() => system11Schema)),
      action: s.optional(s.lazy(() => action60Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
