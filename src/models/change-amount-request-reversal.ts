import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  currencyConversionInternalSchema,
  currencyConversionSchema,
  type CurrencyConversion,
} from "./currency-conversion.js";
import { device5InternalSchema, device5Schema, type Device5 } from "./device5.js";
import {
  paymentMethod44InternalSchema,
  paymentMethod44Schema,
  type PaymentMethod44,
} from "./payment-method44.js";
import {
  reversalReasonTransactionsReversalReasonSchema,
  type ReversalReasonTransactionsReversalReason,
} from "./reversal-reason-transactions-reversal-reason.js";

export type ChangeAmountRequestReversal = {
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  /**
   * An optional field that can be sent to indicate the amount to be reversed if you are setup for
   * partial reversals. If no amount is provided, the entire transaction will be reversed.
   */
  amount?: string;
  /** Used to record the reason for a reversal. */
  reversalReason?: ReversalReasonTransactionsReversalReason;
  currencyConversion?: CurrencyConversion;
  paymentMethod?: PaymentMethod44;
  device?: Device5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const changeAmountRequestReversalProperties: s.Shape<ChangeAmountRequestReversal> = {
  accountName: s.optional(s.string()),
  amount: s.optional(s.string()),
  reversalReason: s.optional(s.lazy(() => reversalReasonTransactionsReversalReasonSchema)),
  currencyConversion: s.optional(s.lazy(() => currencyConversionInternalSchema)),
  paymentMethod: s.optional(s.lazy(() => paymentMethod44InternalSchema)),
  device: s.optional(s.lazy(() => device5InternalSchema)),
  _keysMap: {
    accountName: "account_name",
    reversalReason: "reversal_reason",
    currencyConversion: "currency_conversion",
    paymentMethod: "payment_method",
  },
};

export const changeAmountRequestReversalInternalSchema: Schema<ChangeAmountRequestReversal> =
  s.object<ChangeAmountRequestReversal>(changeAmountRequestReversalProperties, {
    additionalProperties: s.json(),
  });

export const changeAmountRequestReversalSchema: Schema<ChangeAmountRequestReversal> = s.lazySchema(() =>
  s.object<ChangeAmountRequestReversal>(
    {
      ...changeAmountRequestReversalProperties,
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      currencyConversion: s.optional(s.lazy(() => currencyConversionSchema)),
      paymentMethod: s.optional(s.lazy(() => paymentMethod44Schema)),
      device: s.optional(s.lazy(() => device5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
