import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** a breakdown of the interchange fees associated with the transaction. */
export type TransactionFeesDiscount = {
  /** The discount percentage charged based on the rate number. */
  rate1Percentage?: string;
  /** The discount percentage charged based on the rate number. */
  rate2Percentage?: string;
  /**
   * The total interchange amount represented as a decimal of the lowest denomination of the
   * currency.e.g. 1050.4 is $10.50 plus 0.4 of a cent.
   */
  totalAmountDecimal?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionFeesDiscountProperties: s.Shape<TransactionFeesDiscount> = {
  rate1Percentage: s.optional(s.string()),
  rate2Percentage: s.optional(s.string()),
  totalAmountDecimal: s.optional(s.string()),
  _keysMap: {
    rate1Percentage: "rate_1_percentage",
    rate2Percentage: "rate_2_percentage",
    totalAmountDecimal: "total_amount_decimal",
  },
};

export const transactionFeesDiscountInternalSchema: Schema<TransactionFeesDiscount> =
  s.object<TransactionFeesDiscount>(transactionFeesDiscountProperties, { additionalProperties: s.json() });

export const transactionFeesDiscountSchema: Schema<TransactionFeesDiscount> = s.lazySchema(() =>
  s.object<TransactionFeesDiscount>(
    {
      ...transactionFeesDiscountProperties,
      rate1Percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      rate2Percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      totalAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
