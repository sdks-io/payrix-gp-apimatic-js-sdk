import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** a breakdown of the interchange fees associated with the transaction. */
export type TransactionFeesInterchange = {
  /**
   * The total interchange amount represented as a decimal of the lowest denomination of the
   * currency.e.g. 1050.4 is $10.50 plus 0.4 of a cent.
   */
  totalAmountDecimal?: string;
  /**
   * The total interchange amount represented as a decimal of the lowest denomination of the
   * currency.e.g. 1050.4 is $10.50 plus 0.4 of a cent.
   */
  totalRate?: string;
  /** The name of the interchange program applied to the transaction. */
  program?: string;
  /** The percentage of the transaction amount charged as interchange for this transaction. */
  percentage?: string;
  /**
   * The interchange amount derived from a percentage of the transaction amount. It is represented
   * as a decimal of the lowest denomination of the currency.e.g. 1050.4 is $10.50 plus 0.4 of a
   * cent.
   */
  percentageAmountDecimal?: string;
  /** The amount charged based on the number of items bought. */
  perItemFlatAmountDecimal?: string;
  /**
   * The amount that is charged based on one or many aspects of the transactions. These aspects can
   * be the type of card used (debit, credit), the brand (Visa, Mastercard, etc,), how the card
   * details were obtained,the channel (CP vs.CNP).
   */
  perItemCalculatedAmountDecimal?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionFeesInterchangeProperties: s.Shape<TransactionFeesInterchange> = {
  totalAmountDecimal: s.optional(s.string()),
  totalRate: s.optional(s.string()),
  program: s.optional(s.string()),
  percentage: s.optional(s.string()),
  percentageAmountDecimal: s.optional(s.string()),
  perItemFlatAmountDecimal: s.optional(s.string()),
  perItemCalculatedAmountDecimal: s.optional(s.string()),
  _keysMap: {
    totalAmountDecimal: "total_amount_decimal",
    totalRate: "total_rate",
    percentageAmountDecimal: "percentage_amount_decimal",
    perItemFlatAmountDecimal: "per_item_flat_amount_decimal",
    perItemCalculatedAmountDecimal: "per_item_calculated_amount_decimal",
  },
};

export const transactionFeesInterchangeInternalSchema: Schema<TransactionFeesInterchange> =
  s.object<TransactionFeesInterchange>(transactionFeesInterchangeProperties, {
    additionalProperties: s.json(),
  });

export const transactionFeesInterchangeSchema: Schema<TransactionFeesInterchange> = s.lazySchema(() =>
  s.object<TransactionFeesInterchange>(
    {
      ...transactionFeesInterchangeProperties,
      totalAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      totalRate: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      program: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      percentageAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      perItemFlatAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      perItemCalculatedAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
