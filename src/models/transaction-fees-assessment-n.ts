import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * a breakdown of a specific type of assessment charge for the transaction. There can be more than
 * one assessment charge associated with a transaction.
 */
export type TransactionFeesAssessmentN = {
  /** The description for this assessment charge. */
  description?: string;
  /** The percentage of the transaction amount used to calculate this assessment charge. */
  percentage?: string;
  /**
   * The amount for this assessment charge represented as a decimal of the lowest denomination of
   * the currency.e.g. 1050.4 is $10.50 plus 0.4 of a cent.
   */
  amountDecimal?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionFeesAssessmentNProperties: s.Shape<TransactionFeesAssessmentN> = {
  description: s.optional(s.string()),
  percentage: s.optional(s.string()),
  amountDecimal: s.optional(s.string()),
  _keysMap: {
    amountDecimal: "amount_decimal",
  },
};

export const transactionFeesAssessmentNInternalSchema: Schema<TransactionFeesAssessmentN> =
  s.object<TransactionFeesAssessmentN>(transactionFeesAssessmentNProperties, {
    additionalProperties: s.json(),
  });

export const transactionFeesAssessmentNSchema: Schema<TransactionFeesAssessmentN> = s.lazySchema(() =>
  s.object<TransactionFeesAssessmentN>(
    {
      ...transactionFeesAssessmentNProperties,
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
