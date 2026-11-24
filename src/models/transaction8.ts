import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { order14Schema, type Order14 } from "./order14.js";
import {
  paymentMethod34InternalSchema,
  paymentMethod34Schema,
  type PaymentMethod34,
} from "./payment-method34.js";
import {
  typeSettlementDisputesTransactionTypeSchema,
  type TypeSettlementDisputesTransactionType,
} from "./type-settlement-disputes-transaction-type.js";

/** Information about the original Sale Transaction the Dispute relates to. */
export type Transaction8 = {
  /** The time that the transaction related to the dispute was created in ISO-8601 format. */
  timeCreated?: Date;
  /**
   * Merchant's time indicating when the transaction was first created. Value is in ISO-8601 format.
   */
  merchantTimeCreated?: Date;
  /**
   * Describes whether the transaction is a SALE, that moves funds from Payer to Merchant, or a
   * REFUND where funds move from Merchant to Payer
   *  * `SALE` - indicates the movement, or the attempt to move, funds from payer to a merchant.
   *
   *  * `REFUND` - indicates the movement, or the attempt to move, funds from merchant to the payer.
   */
  type?: TypeSettlementDisputesTransactionType;
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  /** Merchant defined field to reference the transaction. */
  reference?: string;
  paymentMethod?: PaymentMethod34;
  order?: Order14;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transaction8Properties: s.Shape<Transaction8> = {
  timeCreated: s.optional(s.dateTime()),
  merchantTimeCreated: s.optional(s.dateTime()),
  type: s.optional(s.lazy(() => typeSettlementDisputesTransactionTypeSchema)),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  reference: s.optional(s.string()),
  paymentMethod: s.optional(s.lazy(() => paymentMethod34InternalSchema)),
  order: s.optional(s.lazy(() => order14Schema)),
  _keysMap: {
    timeCreated: "time_created",
    merchantTimeCreated: "merchant_time_created",
    paymentMethod: "payment_method",
  },
};

export const transaction8InternalSchema: Schema<Transaction8> = s.object<Transaction8>(
  transaction8Properties,
  { additionalProperties: s.json() },
);

export const transaction8Schema: Schema<Transaction8> = s.lazySchema(() =>
  s.object<Transaction8>(
    {
      ...transaction8Properties,
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethod: s.optional(s.lazy(() => paymentMethod34Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
