import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethodFundsPaymentMethodSchema,
  type PaymentMethodFundsPaymentMethod,
} from "./payment-method-funds-payment-method.js";
import { typeFundsTypeSchema, type TypeFundsType } from "./type-funds-type.js";

export type FundsCreate2 = {
  /** The account name for the account that sent a transfer. */
  accountName?: string;
  /** The account identifier for the account that sent a transfer. */
  accountId?: string;
  /**
   * Indicates whether to debit the amount to a bank account/payout card, or credit the amount to
   * the Global Funds Management account.
   */
  type?: TypeFundsType;
  /**
   * The amount that should be credited or debited. It is always represented in the lowest
   * denomiation of the related currency.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  /**
   * The payment method available to create transactions with.
   * * `BANK_TRANSFER` - Indicates to transfer funds to or from the connected payout bank account.
   *
   *  * `CARD` - Indicates to transfer funds to the "Funds Payout Card."
   */
  paymentMethod?: PaymentMethodFundsPaymentMethod;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fundsCreate2Properties: s.Shape<FundsCreate2> = {
  accountName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeFundsTypeSchema)),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  paymentMethod: s.optional(s.lazy(() => paymentMethodFundsPaymentMethodSchema)),
  _keysMap: {
    accountName: "account_name",
    accountId: "account_id",
    paymentMethod: "payment_method",
  },
};

export const fundsCreate2InternalSchema: Schema<FundsCreate2> = s.object<FundsCreate2>(
  fundsCreate2Properties,
  { additionalProperties: s.json() },
);

export const fundsCreate2Schema: Schema<FundsCreate2> = s.lazySchema(() =>
  s.object<FundsCreate2>(
    {
      ...fundsCreate2Properties,
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
    },
    { additionalProperties: s.json() },
  ),
);
