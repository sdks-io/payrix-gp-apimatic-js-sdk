import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethod46InternalSchema,
  paymentMethod46Schema,
  type PaymentMethod46,
} from "./payment-method46.js";

export type AdjustAmtTagRequest = {
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount?: string;
  /** The amount of the gratuity for a transaction. */
  gratuityAmount?: string;
  paymentMethod?: PaymentMethod46;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adjustAmtTagRequestProperties: s.Shape<AdjustAmtTagRequest> = {
  amount: s.optional(s.string()),
  gratuityAmount: s.optional(s.string()),
  paymentMethod: s.optional(s.lazy(() => paymentMethod46InternalSchema)),
  _keysMap: {
    gratuityAmount: "gratuity_amount",
    paymentMethod: "payment_method",
  },
};

export const adjustAmtTagRequestInternalSchema: Schema<AdjustAmtTagRequest> = s.object<AdjustAmtTagRequest>(
  adjustAmtTagRequestProperties,
  { additionalProperties: s.json() },
);

export const adjustAmtTagRequestSchema: Schema<AdjustAmtTagRequest> = s.lazySchema(() =>
  s.object<AdjustAmtTagRequest>(
    {
      ...adjustAmtTagRequestProperties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      gratuityAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethod: s.optional(s.lazy(() => paymentMethod46Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
