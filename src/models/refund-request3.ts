import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  currencyConversionInternalSchema,
  currencyConversionSchema,
  type CurrencyConversion,
} from "./currency-conversion.js";
import { order46InternalSchema, order46Schema, type Order46 } from "./order46.js";

export type RefundRequest3 = {
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount?: string;
  /** The amount of the gratuity for a transaction. */
  gratuityAmount?: string;
  /** The total amount of tax charges associated with this transaction. */
  taxAmount?: string;
  /** Merchant defined field to reference the transaction. */
  reference?: string;
  /**
   * The amount that reflects the additional charge the merchant applied to the transaction for
   * using a specific payment method.
   */
  surchargeAmount?: string;
  order?: Order46;
  currencyConversion?: CurrencyConversion;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const refundRequest3Properties: s.Shape<RefundRequest3> = {
  amount: s.optional(s.string()),
  gratuityAmount: s.optional(s.string()),
  taxAmount: s.optional(s.string()),
  reference: s.optional(s.string()),
  surchargeAmount: s.optional(s.string()),
  order: s.optional(s.lazy(() => order46InternalSchema)),
  currencyConversion: s.optional(s.lazy(() => currencyConversionInternalSchema)),
  _keysMap: {
    gratuityAmount: "gratuity_amount",
    taxAmount: "tax_amount",
    surchargeAmount: "surcharge_amount",
    currencyConversion: "currency_conversion",
  },
};

export const refundRequest3InternalSchema: Schema<RefundRequest3> = s.object<RefundRequest3>(
  refundRequest3Properties,
  { additionalProperties: s.json() },
);

export const refundRequest3Schema: Schema<RefundRequest3> = s.lazySchema(() =>
  s.object<RefundRequest3>(
    {
      ...refundRequest3Properties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      gratuityAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      surchargeAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      order: s.optional(s.lazy(() => order46Schema)),
      currencyConversion: s.optional(s.lazy(() => currencyConversionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
